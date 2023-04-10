import { LanguageType } from "@/models/LanguageType";
import { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "galaxy",
  setLanguage: () => {},
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageType>("galaxy");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
