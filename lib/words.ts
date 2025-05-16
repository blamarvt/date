import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

type Words = {
  [key: string]: {
    welcome: string;
    ctnWithApple: string;
    ctnWithGoogle: string;
  };
};

const i18n = new I18n({
  en: {
    welcome: "Hello",
    ctnWithApple: "Continue with Apple",
    ctnWithGoogle: "Continue with Google",
  },
  ja: {
    welcome: "こんにちは",
    ctnWithApple: "Appleで続行",
    ctnWithGoogle: "Googleで続行",
  },
} as Words);

i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;

export default i18n;
