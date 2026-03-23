import React, { useEffect, useRef, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "./Blog.css";

export const blogPostsData = [
    {
      id: 10,
      title: "Catching Trickbot in the Act — Live Credential Theft via HTTP POST",
      excerpt: "How I analyzed a Trickbot infostealer PCAP and found 5 compromised accounts in plaintext — Google, Facebook, and Yahoo credentials exfiltrated in 96 seconds. Includes Splunk detection rules.",
      date: "March 22, 2026",
      dateSort: new Date("2026-03-22"),
      category: "DFIR / SOC",
      readTime: "8 min read",
      link: "https://github.com/himanshumodi3108/cybersec-portfolio/tree/main/02-network-forensics-trickbot",       // update after publishing
      mediumLink: "https://medium.com/@himanshukumar.modi2021/catching-trickbot-in-the-act-live-credential-theft-via-http-post-d4f4aacd6133", // update after publishing
      devtoLink: "https://dev.to/himanshu_kumarmodi_8646f/catching-trickbot-in-the-act-live-credential-theft-via-http-post-dje",       // update after publishing
    },
    {
      id: 9,
      title: "Ursnif Malware — Reconstructing a 6-Stage Infection Chain from a PCAP",
      excerpt: "A walkthrough of my first real malware PCAP investigation — how Ursnif used .avi file extensions to disguise DLL payloads, TLS C2 beaconing, and how I mapped the full attack to MITRE ATT&CK.",
      date: "March 21, 2026",
      dateSort: new Date("2026-03-21"),
      category: "Network Forensics",
      readTime: "10 min read",
      link: "https://github.com/himanshumodi3108/cybersec-portfolio/tree/main/01-network-forensics",       // update after publishing
      mediumLink: "https://medium.com/@himanshukumar.modi2021/ursnif-malware-reconstructing-a-6-stage-infection-chain-from-a-pcap-46b6486c9622", // update after publishing
      devtoLink: "https://dev.to/himanshu_kumarmodi_8646f/ursnif-malware-reconstructing-a-6-stage-infection-chain-from-a-pcap-1n8d",       // update after publishing
    },
    {
      id: 6,
      title: "IntelliShieldX: Redefining Application Security with AI-Powered Intelligence",
      excerpt: "An in-depth look at how IntelliShieldX leverages AI, threat intelligence, and static analysis to detect vulnerabilities, auto-remediate risks, and generate verifiable security reports.",
      date: "December 14, 2025",
      dateSort: new Date("2025-12-14"),
      category: "AI & Cybersecurity",
      readTime: "8 min read",
      link: "https://dev.to/himanshu_kumarmodi_8646f/intellishieldx-redefining-application-security-with-ai-powered-intelligence-1l34",
      devtoLink: "https://dev.to/himanshu_kumarmodi_8646f/intellishieldx-redefining-application-security-with-ai-powered-intelligence-1l34",
    },
    {
      id: 1,
      title: "Getting Started with MERN Stack Development",
      excerpt: "A comprehensive guide to building full-stack applications using MongoDB, Express, React, and Node.js.",
      date: "January 15, 2025",
      dateSort: new Date("2025-01-15"),
      category: "Web Development",
      readTime: "5 min read",
      link: "#",
    },
    {
      id: 2,
      title: "Best Practices for React Performance Optimization",
      excerpt: "Learn how to optimize your React applications for better performance and user experience.",
      date: "January 10, 2025",
      dateSort: new Date("2025-01-10"),
      category: "React",
      readTime: "7 min read",
      link: "#",
    },
    {
      id: 3,
      title: "Understanding AWS Cloud Services",
      excerpt: "An overview of essential AWS services for cloud practitioners and developers.",
      date: "January 5, 2025",
      dateSort: new Date("2025-01-05"),
      category: "Cloud Computing",
      readTime: "6 min read",
      link: "#",
    },
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

  const isSecurityPost = (post) =>
    ["DFIR / SOC", "Network Forensics", "AI & Cybersecurity"].includes(post.category);

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
            style={isSecurityPost(post) ? { borderTop: "3px solid #02203c" } : {}}
          >
            <div className="blog-card-header">
              <span className="blog-category">{post.category}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
            <h3 className="blog-post-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-card-footer">
              <span className="blog-date">{post.date}</span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                {post.mediumLink && (
                  <a
                    href={post.mediumLink}
                    className="blog-read-more"
                    aria-label={`Read on Medium: ${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Read on Medium"
                  >
                    Medium <i className="fas fa-arrow-right"></i>
                  </a>
                )}
                {post.devtoLink && (
                  <a
                    href={post.devtoLink}
                    className="blog-read-more"
                    aria-label={`Read on dev.to: ${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Read on dev.to"
                    style={{ opacity: 0.75 }}
                  >
                    dev.to <i className="fas fa-arrow-right"></i>
                  </a>
                )}
                {!post.mediumLink && !post.devtoLink && post.link && post.link !== "#" && (
                  <a
                    href={post.link}
                    className="blog-read-more"
                    aria-label={`Read more about ${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("blog.readMore")}{" "}
                    <i className="fas fa-arrow-right"></i>
                  </a>
                )}
              </div>
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