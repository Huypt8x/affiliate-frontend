import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/blogData";
import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post?.content) setContent(post.content);
  }, [post]);

  if (!post) return <div className="p-6">❌ Post not found.</div>;

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      {/* Tiêu đề & ngày */}
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>

      {/* Nếu có nhiều ảnh, hiển thị dạng gallery */}
      {post.images?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {post.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${post.title} - ${idx + 1}`}
              className="w-full h-64 object-cover rounded shadow"
            />
          ))}
        </div>
      ) : (
        post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded my-6"
          />
        )
      )}

      {/* Nội dung bài viết */}
      <ReactMarkdown>{content}</ReactMarkdown>

      {/* CTA Button */}
      {post.ctaLink && (
        <p className="mt-6">
          <a
            href={post.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🚀 Try / Buy Now
          </a>
        </p>
      )}

      {/* Quay về trang Affiliate */}
      <p className="mt-4">
        <Link to="/affiliate" className="text-blue-500 hover:underline">
          ← Back to Affiliate
        </Link>
      </p>
    </article>
  );
}
