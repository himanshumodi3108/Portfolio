import React from 'react';
import './LoadingSkeleton.css';

export const ProjectSkeleton = () => (
  <div className="skeleton-card">
    <div className="skeleton-line skeleton-title"></div>
    <div className="skeleton-line skeleton-text"></div>
    <div className="skeleton-line skeleton-text"></div>
    <div className="skeleton-line skeleton-tech"></div>
    <div className="skeleton-buttons">
      <div className="skeleton-button"></div>
      <div className="skeleton-button"></div>
    </div>
  </div>
);

export const CertificateSkeleton = () => (
  <div className="skeleton-card">
    <div className="skeleton-line skeleton-title"></div>
    <div className="skeleton-line skeleton-text"></div>
    <div className="skeleton-button"></div>
  </div>
);

export const BlogSkeleton = () => (
  <div className="skeleton-blog-card">
    <div className="skeleton-blog-header">
      <div className="skeleton-line skeleton-category"></div>
      <div className="skeleton-line skeleton-read-time"></div>
    </div>
    <div className="skeleton-line skeleton-blog-title"></div>
    <div className="skeleton-line skeleton-text"></div>
    <div className="skeleton-line skeleton-text"></div>
    <div className="skeleton-blog-footer">
      <div className="skeleton-line skeleton-date"></div>
      <div className="skeleton-line skeleton-link"></div>
    </div>
  </div>
);

export const ContactSkeleton = () => (
  <div className="skeleton-contact">
    <div className="skeleton-line skeleton-title"></div>
    <div className="skeleton-form">
      <div className="skeleton-input"></div>
      <div className="skeleton-input"></div>
      <div className="skeleton-textarea"></div>
      <div className="skeleton-button"></div>
    </div>
  </div>
);

export const StatsSkeleton = () => (
  <div className="skeleton-stats">
    {[1, 2, 3, 4].map((item) => (
      <div key={item} className="skeleton-stat-card">
        <div className="skeleton-stat-number"></div>
        <div className="skeleton-stat-label"></div>
      </div>
    ))}
  </div>
);

