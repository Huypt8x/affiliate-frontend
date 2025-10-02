import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/blogData';

export default function BlogPage() {
  useEffect(() => {
    // Cập nhật title + meta description cho SEO
    document.title = 'Blog - Super Affiliate';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content =
      'Blog chia sẻ về affiliate, SEO và marketing. Các bài viết hướng dẫn, case study và mẹo tối ưu web.';
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-40 object-cover rounded mb-3"
            />

            <h2 className="text-xl font-semibold">
              <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {post.title}
              </Link>
            </h2
