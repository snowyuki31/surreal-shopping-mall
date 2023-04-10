import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageType } from "@/models/LanguageType";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <ButtonGroup variant="contained" aria-label="language switcher">
      <Button
        onClick={() => setLanguage("en" as LanguageType)}
        color={language === "en" ? "primary" : "secondary"}
      >
        English
      </Button>
      <Button
        onClick={() => setLanguage("ja" as LanguageType)}
        color={language === "ja" ? "primary" : "secondary"}
      >
        日本語
      </Button>
      <Button
        onClick={() => setLanguage("galaxy" as LanguageType)}
        color={language === "galaxy" ? "primary" : "secondary"}
      >
        Galaxy
      </Button>
    </ButtonGroup>
  );
};
