'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPostsData } from '@/constants/blog.data';
import { Search, Clock, ArrowRight, BookOpen, Mail } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Cosmetic Dentistry', 'Implantology', 'Orthodontics'];

  const featuredPost = blogPostsData.find((p) => p.featured) || blogPostsData[0];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-white text-navy-900 min-h-screen">
      <div className="container max-w-5xl space-y-16">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Journal"
            title="Dental Health Insights & Research"
            highlightTitle="By Master Clinicians."
            description="Explore evidence-based insights on 3D implantology, ceramic veneers, clear aligners, and pain-free dental care."
          />
        </ScrollReveal>

        {/* Featured Article Hero Card */}
        <ScrollReveal direction="up" delay={0.2}>
          <GlassCard variant="standard" className="p-0 overflow-hidden bg-white border border-slate-200 shadow-xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold" className="bg-white/95 text-medical-700 shadow-sm backdrop-blur-sm">
                    FEATURED ARTICLE
                  </Badge>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-medical-600 uppercase tracking-widest">{featuredPost.category}</span>
                  <h2 className="font-sans text-2xl font-bold text-navy-900 group-hover:text-medical-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="h-9 w-9 rounded-full object-cover border border-slate-200" />
                    <div>
                      <span className="text-xs font-bold text-navy-900 block">{featuredPost.author.name}</span>
                      <span className="text-[10px] text-slate-400">{featuredPost.publishedAt}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button variant="gold" size="sm" className="font-bold text-xs">
                      <span>Read Article</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2 text-xs text-navy-900 focus:outline-none focus:ring-2 focus:ring-medical-600"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-medical-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <GlassCard key={post.id} variant="standard" className="h-full flex flex-col justify-between group p-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-medical-500/40 transition-all duration-400">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-100">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-medical-600 px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400 mb-1 font-medium">
                    <Clock className="h-3 w-3 text-medical-600" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>
                  <h3 className="font-sans text-lg font-bold text-navy-900 group-hover:text-medical-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">{post.author.name}</span>
                <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-medical-600 inline-flex items-center hover:underline">
                  <span>Read Article</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Newsletter Subscription Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4 max-w-2xl mx-auto">
          <div className="h-12 w-12 rounded-full bg-medical-50 text-medical-600 flex items-center justify-center mx-auto">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="font-sans text-2xl font-bold text-navy-900">Subscribe To Clinical Updates</h3>
          <p className="text-xs text-slate-600">Receive monthly insights on dental longevity and modern oral health care.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-navy-900 focus:outline-none focus:ring-2 focus:ring-medical-600"
            />
            <Button variant="gold" size="sm" className="w-full sm:w-auto font-bold text-xs">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
