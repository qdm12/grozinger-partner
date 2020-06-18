export function detectBrowserLanguage(): string {
  const defaultLanguage = "en";
  const availableLanguages = ["en", "de", "fr"];
  const language = navigator.language.split(/[-_]/)[0];
  if (availableLanguages.indexOf(language) === -1) {
    return defaultLanguage;
  }
  return language;
}
