/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { LanguageContext } from "./languageContext";
import { LocalStorageUtils } from "../utils/localStorageUtils";
import { TRANSLATIONS } from "../constants/languageConstants";
import { LANGUAGES } from "../constants/constants";

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState(LocalStorageUtils.getLanguage());

  useEffect(() => {
    LocalStorageUtils.setLanguage(language);
  }, [language]);

  const strings =
    TRANSLATIONS[language] && Object.keys(TRANSLATIONS[language]).length
      ? TRANSLATIONS[language]
      : TRANSLATIONS[LANGUAGES.RO];

  return <LanguageContext.Provider value={{ language, setLanguage, strings }}>{children}</LanguageContext.Provider>;
}
