import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { translations, TranslationDictionary, Language } from './translations';

export function useT(): TranslationDictionary {
  const { language } = useContext(AppContext);
  return translations[language] || translations.EN;
}

export function useCurrentLanguage(): Language {
  const { language } = useContext(AppContext);
  return language;
}
