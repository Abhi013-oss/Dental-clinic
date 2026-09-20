'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPostsData } from '@/constants/blog.data';
import { Search, Clock, ArrowRight, Mail } from 'lucide-react';

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
    <div className="pt-28 pb-20 bg-[#FAFCFB] text-navy-900 min-h-screen">
      <div className="container max-w-5xl space-y-12">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Journal"
            title="Dental Health Insights & Research"
            highlightTitle="By Master Clinicians."
            description="Explore evidence-based insights on 3D implantology, ceramic restorations, clear aligners, and pain-free dental care."
          />
        </ScrollReveal>

        {/* Featured Article Hero Card */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-xs group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100">
                <img
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold" className="bg-white/95 text-medical-700 shadow-xs backdrop-blur-xs">
                    FEATURED ARTICLE
                  </Badge>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#159A9C] uppercase tracking-wider">{featuredPost.category}</span>
                  <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#0E3340] group-hover:text-[#159A9C] transition-colors leading-snug">
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
                    <Button size="sm" className="bg-[#159A9C] hover:bg-[#117A7C] text-white font-bold text-xs h-9 px-3">
                      <span>Read Article</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-[#FAFCFB] pl-9 pr-3 py-1.5 text-xs text-navy-900 focus:outline-none focus:ring-2 focus:ring-[#159A9C]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#159A9C] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <ScrollReveal key={post.id} direction="up" delay={0.08 * (idx % 3) + 0.1}>
              <div className="rounded-xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 flex flex-col justify-between group p-5 h-full">
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-100 bg-slate-100">
                    <img
                      src={post.heroImage}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 text-[#159A9C] px-2 py-0.5 rounded text-[10px] font-bold shadow-xs">
                      {post.category}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 text-[11px] text-slate-400 mb-1 font-medium">
                      <Clock className="h-3 w-3 text-[#159A9C]" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.publishedAt}</span>
                    </div>
                    <h3 className="font-sans text-base font-bold text-[#0E3340] group-hover:text-[#159A9C] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">{post.author.name}</span>
                  <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-[#159A9C] inline-flex items-center hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Newsletter Subscription Banner */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="p-8 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-[#159A9C]/40 transition-all text-center space-y-4 max-w-2xl mx-auto">
          <div className="h-10 w-10 rounded-lg bg-[#E8F6F5] text-[#159A9C] flex items-center justify-center mx-auto">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-sans text-xl font-bold text-[#0E3340]">Subscribe To Clinical Updates</h3>
            <p className="text-xs text-slate-500 mt-1">Receive monthly evidence-based insights on oral health and implant care.</p>
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const input = form.elements.namedItem('email') as HTMLInputElement;
              if (input && input.value) {
                try {
                  const res = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: input.value }),
                  });
                  if (res.ok) {
                    alert('Thank you for subscribing to Jawahar Dental Hospital clinical updates.');
                    form.reset();
                  }
                } catch {
                  // silent fallback
                }
              }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-2"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-slate-200 bg-[#FAFCFB] px-3.5 py-2 text-xs text-navy-900 focus:outline-none focus:ring-2 focus:ring-[#159A9C]"
            />
            <Button type="submit" className="w-full sm:w-auto bg-[#159A9C] hover:bg-[#117A7C] text-white font-bold text-xs h-9 px-4 shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
