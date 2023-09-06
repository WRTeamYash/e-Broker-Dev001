
import { store } from '@/store/store';
import localeTranslations from './locale/en.json';
import { useSelector } from 'react-redux';

// export const translate = (label) => {
//   const state = store.getState();
//   const langLabel = state.Language.languages.file_name[label];

//   const enTranslation = localeTranslations;
//   if (langLabel) {
//     console.log("server side", langLabel)
//     return langLabel;
//   } else {
//     console.log("locel side", enTranslation)
//     return enTranslation[label];

//   }
// };

export const translate = (label) => {
    const state = store.getState();
  const langLabel = state.Language.languages.file_name[label];

  // const langLabel = useSelector((state) => state.Language.languages.file_name[label]);
  const enTranslation = localeTranslations;

  if (langLabel) {
    console.log("server side", langLabel);
    return langLabel;
  } else {
    console.log("local side", enTranslation);
    return enTranslation[label];
  }
};
