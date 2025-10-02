import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/blogData';

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Blog - Super Affiliate';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Blog chia sẻ về affiliate, SEO và marketing. Các bài viết hướng dẫn, case study và mẹo tối ưu web.';
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <article key={post.slug} className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded mb-3" />
            <h2 className="text-xl font-semibold">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 my-2">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-200">{post.summary}</p>
            <div className="mt-3">
              <Link to={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 underline">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
