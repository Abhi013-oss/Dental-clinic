'use client';

import * as React from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity, ArrowRight, CheckCircle2, RotateCcw, Calendar, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    recommendedServiceSlug: string;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is your primary dental health or aesthetic goal?',
    subtitle: 'Select the statement that best describes your needs.',
    options: [
      {
        label: 'Aesthetic Smile Redesign',
        description: 'Desire natural ceramic teeth matching ideal facial symmetry.',
        recommendedServiceSlug: 'porcelain-veneers',
      },
      {
        label: 'Replace Lost or Damaged Teeth',
        description: 'Need permanent structural replacement for missing teeth.',
        recommendedServiceSlug: 'dental-implants',
      },
      {
        label: 'Align Teeth Without Brackets',
        description: 'Want clear aligner therapy without metal wires.',
        recommendedServiceSlug: 'invisalign',
      },
      {
        label: 'Complete Mouth & Jaw Rehabilitation',
        description: 'Address severe tooth wear, bite misalignment, or TMJ pain.',
        recommendedServiceSlug: 'full-mouth-rehab',
      },
    ],
  },
  {
    id: 2,
    question: 'What is your desired treatment timeline?',
    subtitle: 'Choose a timeframe that fits your lifestyle.',
    options: [
      {
        label: 'Express Protocol (2-3 Weeks)',
        description: 'Ideal for upcoming events or rapid smile enhancement.',
        recommendedServiceSlug: 'porcelain-veneers',
      },
      {
        label: 'Guided Clinical Quality (3-6 Months)',
        description: 'Allow optimal osseointegration and bone stability.',
        recommendedServiceSlug: 'dental-implants',
      },
      {
        label: 'Gradual Aligner Therapy (6-12 Months)',
        description: 'Prefer progressive clear aligner movement.',
        recommendedServiceSlug: 'invisalign',
      },
      {
        label: 'Custom Multidisciplinary Schedule',
        description: 'Tailored phase-by-phase clinical plan.',
        recommendedServiceSlug: 'full-mouth-rehab',
      },
    ],
  },
];

export function SmileQuiz() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState<string[]>([]);
  const [isCompleted, setIsCompleted] = React.useState(false);

  const handleSelectOption = (recommendedSlug: string) => {
    const newAnswers = [...selectedAnswers, recommendedSlug];
    setSelectedAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  const getFinalRecommendation = () => {
    const lastAnswer = selectedAnswers[selectedAnswers.length - 1] || 'porcelain-veneers';
    if (lastAnswer === 'dental-implants') {
      return {
        title: 'Precision Guided Dental Implants',
        slug: 'dental-implants',
        description: 'Computer-guided 3D implant placement providing lifelong structural restoration and natural tooth reproduction.',
      };
    }
    if (lastAnswer === 'invisalign') {
      return {
        title: 'Invisalign & Clear Orthodontics',
        slug: 'invisalign',
        description: 'Discreet, virtually invisible aligner therapy customized with 3D digital iTero scanning.',
      };
    }
    if (lastAnswer === 'full-mouth-rehab') {
      return {
        title: 'Full Mouth Rehabilitation',
        slug: 'full-mouth-rehab',
        description: 'Multidisciplinary restoration harmonizing jaw joint comfort, TMJ relief, and full porcelain crowns.',
      };
    }
    return {
      title: 'Master Porcelain Veneers',
      slug: 'porcelain-veneers',
      description: 'Hand-sculpted ultra-thin ceramic veneers engineered to match natural enamel translucency and facial symmetry.',
    };
  };

  const question = quizQuestions[currentStep];

  return (
    <section className="py-20 bg-white text-navy-900 relative overflow-hidden border-y border-slate-200">
      <div className="container max-w-4xl relative z-10">
        <div className="text-center space-y-3 mb-10">
          <Badge variant="gold">Interactive Assessment</Badge>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-navy-900">
            Find Your Ideal Clinical Treatment
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal">
            Answer 2 quick questions to receive a personalized clinical recommendation from our doctors.
          </p>
        </div>

        {!isCompleted ? (
          <GlassCard variant="standard" className="p-8 sm:p-12 relative bg-white border border-slate-200 shadow-md">
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between text-xs text-medical-600 font-bold mb-4">
              <span>QUESTION {currentStep + 1} OF {quizQuestions.length}</span>
              <span>{Math.round(((currentStep + 1) / quizQuestions.length) * 100)}% COMPLETED</span>
            </div>

            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-8">
              <div
                className="bg-medical-600 h-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-2xl font-bold text-navy-900">{question.question}</h3>
                <p className="text-xs text-slate-500 mt-1">{question.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {question.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.recommendedServiceSlug)}
                    className="text-left p-5 rounded-xl border border-slate-200 hover:border-medical-600 bg-slate-50/50 hover:bg-medical-50 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans text-base font-bold text-navy-900 group-hover:text-medical-600 transition-colors">
                        {opt.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-medical-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </div>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">{opt.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </GlassCard>
        ) : (
          <GlassCard variant="standard" className="p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-300 bg-white border border-slate-200 shadow-xl">
            <div className="h-16 w-16 rounded-full bg-medical-50 border border-medical-200 text-medical-600 flex items-center justify-center mx-auto">
              <Activity className="h-8 w-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-medical-600">Your Recommended Care Plan</span>

            <h3 className="font-sans text-3xl font-bold text-navy-900">{getFinalRecommendation().title}</h3>

            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-normal">
              {getFinalRecommendation().description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/book?service=${getFinalRecommendation().slug}`}>
                <Button variant="gold" size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Book Consultation for {getFinalRecommendation().title}</span>
                </Button>
              </Link>

              <button
                onClick={resetQuiz}
                className="inline-flex items-center text-xs text-slate-500 hover:text-medical-600 transition-colors py-2 font-bold"
              >
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Retake Assessment
              </button>
            </div>
          </GlassCard>
        )}
      </div>
    </section>
  );
}
