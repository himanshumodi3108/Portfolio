import React from "react";
import { useTranslation } from "react-i18next";
import { PORTFOLIO_URL, PORTFOLIO_TITLE, PORTFOLIO_DESCRIPTION } from "../config/portfolio";
import "./SocialShare.css";

export default function SocialShare() {
  const { t } = useTranslation();
  const portfolioUrl = PORTFOLIO_URL;
  const portfolioTitle = PORTFOLIO_TITLE;
  const portfolioDescription = PORTFOLIO_DESCRIPTION;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(portfolioUrl)}&text=${encodeURIComponent(portfolioTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(portfolioUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(portfolioTitle + " " + portfolioUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(portfolioTitle)}&body=${encodeURIComponent(portfolioDescription + "\n\n" + portfolioUrl)}`
  };

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="social-share-container">
      <span className="share-label">{t('social.shareLabel')}</span>
      <div className="share-buttons">
        <button
          className="share-btn twitter"
          onClick={() => handleShare('twitter')}
          aria-label="Share on Twitter"
          title="Share on Twitter"
        >
          <i className="fab fa-twitter"></i>
        </button>
        <button
          className="share-btn linkedin"
          onClick={() => handleShare('linkedin')}
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </button>
        <button
          className="share-btn facebook"
          onClick={() => handleShare('facebook')}
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          <i className="fab fa-facebook"></i>
        </button>
        <button
          className="share-btn whatsapp"
          onClick={() => handleShare('whatsapp')}
          aria-label="Share on WhatsApp"
          title="Share on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </button>
        <button
          className="share-btn email"
          onClick={() => handleShare('email')}
          aria-label="Share via Email"
          title="Share via Email"
        >
          <i className="fas fa-envelope"></i>
        </button>
      </div>
    </div>
  );
}

