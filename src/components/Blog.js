import React, { useEffect, useRef, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "./Blog.css";

export const blogPostsData = [
    {
      id: 1,
      title: "Getting Started with MERN Stack Development",
      excerpt: "A comprehensive guide to building full-stack applications using MongoDB, Express, React, and Node.js.",
      date: "January 15, 2025",
      dateSort: new Date("2025-01-15"),
      category: "Web Development",
      readTime: "5 min read",
      link: "#"
    },
    {
      id: 2,
      title: "Best Practices for React Performance Optimization",
      excerpt: "Learn how to optimize your React applications for better performance and user experience.",
      date: "January 10, 2025",
      dateSort: new Date("2025-01-10"),
      category: "React",
      readTime: "7 min read",
      link: "#"
    },
    {
      id: 3,
      title: "Understanding AWS Cloud Services",
      excerpt: "An overview of essential AWS services for cloud practitioners and developers.",
      date: "January 15, 2025",
      dateSort: new Date("2025-01-15"),
      category: "Cloud Computing",
      readTime: "6 min read",
      link: "#"
    },
    {
        id: 4,
        title: "Understanding AWS Cloud Services",
        excerpt: "An overview of essential AWS services for cloud practitioners and developers.",
        date: "January 5, 2025",
        dateSort: new Date("2025-01-05"),
        category: "Cloud Computing",
        readTime: "6 min read",
        link: "#"
      },
      {
        id: 5,
        title: "Understanding AWS Cloud Services",
        excerpt: "An overview of essential AWS services for cloud practitioners and developers.",
        date: "January 5, 2025",
        dateSort: new Date("2025-01-05"),
        category: "Cloud Computing",
        readTime: "6 min read",
        link: "#"
      }
];

export default function Blog() {
  const { t } = useTranslation();
  const blogRefs = useRef([]);
  const [displayCount, setDisplayCount] = useState(3);
  const incrementCount = 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRefs = blogRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [displayCount]);

  // Sort blogs by date (newest first)
  const blogPosts = useMemo(() => {
    return [...blogPostsData].sort((a, b) => b.dateSort - a.dateSort);
  }, []);

  const displayedPosts = blogPosts.slice(0, displayCount);
  const hasMorePosts = displayCount < blogPosts.length;
  const hasLessPosts = displayCount > 3;

  const handleSeeMore = () => {
    setDisplayCount(prev => Math.min(prev + incrementCount, blogPosts.length));
  };

  const handleSeeLess = () => {
    setDisplayCount(3);
  };

  return (
    <div className="blog-section" id="blog">
      <h2 className="blog-title">{t('blog.title')}</h2>
      <p className="blog-subtitle">{t('blog.subtitle')}</p>
      
      <div className="blog-posts-container">
        {displayedPosts.map((post, index) => (
          <article
            key={post.id}
            ref={(el) => (blogRefs.current[index] = el)}
            className="blog-card fade-in"
          >
            <div className="blog-card-header">
              <span className="blog-category">{post.category}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
            <h3 className="blog-post-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-card-footer">
              <span className="blog-date">{post.date}</span>
              <a href={post.link} className="blog-read-more" aria-label={`Read more about ${post.title}`}>
                {t('blog.readMore')} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
      
      <div className="blog-see-all-container">
        {hasMorePosts && (
          <button 
            className="blog-see-all-btn"
            onClick={handleSeeMore}
            aria-label="Show more blog posts"
          >
            {t('blog.seeMore')}
          </button>
        )}
        {hasLessPosts && (
          <button 
            className="blog-see-less-btn"
            onClick={handleSeeLess}
            aria-label="Show fewer blog posts"
          >
            {t('blog.seeLess')}
          </button>
        )}
      </div>
    </div>
  );
}

