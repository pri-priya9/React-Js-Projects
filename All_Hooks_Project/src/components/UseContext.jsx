import React, { createContext, useState, useContext } from "react";
import "./UseContext.css";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const translations = {
    en: { greeting: "Hello,what can I do to help you!", instruction: "Select your language:" },
    hi: { greeting: "नमस्ते,मैं आपकी क्या मदद कर सकता हूँ!", instruction: "अपनी भाषा चुनें:" },
    ur: { greeting: "نمستے، میں تمہاری کیا مدد کر سکتا ہوں۔!", instruction: "اپنی بھاشا چون:" },
  };

  return (
    <div className={`app-container ${language}`}>
      <h1>{translations[language].greeting}</h1>
      <p>{translations[language].instruction}</p>
      <select
        onChange={(e) => setLanguage(e.target.value)}
        value={language}
        className="usecontext-language-selector"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="ur">اردو</option>
      </select>
    </div>
  );
};

// All Component
const allComponent = () => (
  <LanguageProvider>
    <LanguageSwitcher />
  </LanguageProvider>
);

export default allComponent;
