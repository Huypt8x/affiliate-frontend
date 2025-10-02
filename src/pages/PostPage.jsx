import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/blogData";
import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  if (!post) {
    return <div className="p-6 text-red-600">❌ Post not found.</div>;
  }

  // ✅ Cuộn lên đầu trang khi đổi bài viết
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // ✅ SEO: cập nhật title + meta description
  useEffect(() => {
    document.title = `${post.title} - Super Affiliate`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = post.summary || post.title;
  }, [post]);

  // ✅ Load nội dung markdown từ public/blog-posts
  useEffect(() => {
    fetch(`/blog-posts/${post.slug}.md`)
      .then((res) => res.text())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [post.slug]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* ✅ Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">
          🏠 Home
        </Link>{" "}
        /{" "}
        <Link to="/affiliate" className="hover:underline">
          💼 Affiliate
        </Link>{" "}
        / <span className="text-gray-700">{post.title}</span>
      </nav>

      {/* Tiêu đề & ngày */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>

      {/* Ảnh cover chính */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-2xl shadow mb-6"
        />
      )}

      {/* Nếu có nhiều ảnh, hiển thị thêm gallery */}
      {post.images?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {post.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${post.title} - ${i + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow"
            />
          ))}
        </div>
      )}

      {/* Nội dung bài viết */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      )}

      {/* CTA Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap">
        {post.ctaLink && (
          <a
            href={post.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow"
          >
            🚀 Try Now
          </a>
        )}
        <Link
          to="/affiliate"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-2xl shadow"
        >
          💰 Make Money Now
        </Link>
      </div>
    </div>
  );
}
