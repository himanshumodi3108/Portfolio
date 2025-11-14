import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <div className="language-dropdown">
        <button className="language-btn" aria-label="Change language">
          <i className="fas fa-globe"></i>
          <span className="current-lang">{languages.find(l => l.code === i18n.language)?.flag || "🌐"}</span>
        </button>
        <div className="language-menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${i18n.language === lang.code ? "active" : ""}`}
              onClick={() => changeLanguage(lang.code)}
              aria-label={`Switch to ${lang.name}`}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

