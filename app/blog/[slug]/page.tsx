import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPostsData } from '@/constants/blog.data';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from 'lucide-react';

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-white text-navy-900 min-h-screen">
      <div className="container max-w-3xl space-y-10">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="font-bold text-xs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Journal
          </Button>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <Badge variant="gold">{post.category}</Badge>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-navy-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 pt-2 text-xs text-slate-500 border-b border-slate-100 pb-6">
            <div className="flex items-center space-x-3">
              <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full object-cover border border-slate-200" />
              <div>
                <span className="font-bold text-navy-900 block">{post.author.name}</span>
                <span className="text-[10px] text-slate-400">{post.author.role}</span>
              </div>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-3.5 w-3.5 text-medical-600" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Content */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-normal space-y-4">
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-base text-slate-700 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Author Bio Footer Card */}
        <GlassCard variant="standard" className="p-6 bg-slate-50 border border-slate-200 flex items-center space-x-4">
          <img src={post.author.avatar} alt={post.author.name} className="h-14 w-14 rounded-full object-cover border-2 border-medical-500/30 shrink-0" />
          <div>
            <h4 className="font-sans text-base font-bold text-navy-900">{post.author.name}</h4>
            <p className="text-xs text-medical-600 font-bold">{post.author.role}</p>
            <p className="text-xs text-slate-500 mt-1">Specializes in minimally invasive cosmetic ceramics and 3D digital diagnosis at ÉLITE Dental Clinic.</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
