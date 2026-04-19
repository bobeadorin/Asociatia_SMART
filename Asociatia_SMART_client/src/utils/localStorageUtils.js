import { LANGUAGES } from "../constants/constants";

const LANGUAGE = "LANGUAGE";

export class LocalStorageUtils {
  static setLanguage(lang) {
    if (lang !== LANGUAGES.EN && lang !== LANGUAGES.RO) {
      localStorage.setItem(LANGUAGE, LANGUAGES.RO);
      return;
    }

    localStorage.setItem(LANGUAGE, lang);
  }

  static getLanguage() {
    return localStorage.getItem(LANGUAGE) ?? LANGUAGES.RO;
  }
}
