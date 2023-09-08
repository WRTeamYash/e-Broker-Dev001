
"use client"
import { store } from '@/store/store';
import localeTranslations from './locale/en.json';

export const translate = (label) => {
  const langLabel = store.getState().Language.languages.file_name &&
    store.getState().Language.languages.file_name[label];

  // const langLabel = useSelector((state) => state.Language.languages.file_name[label]);
  const enTranslation = localeTranslations;

  if (langLabel) {
    // console.log("server side", langLabel);
    return langLabel;
  } else {
    // console.log("local side", enTranslation);
    return enTranslation[label];
  }
};
