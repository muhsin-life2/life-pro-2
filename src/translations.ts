// translations.js
import en from '../translations/en.json';
import ar from '../translations/ar.json';

export default function translate(locale:any) {
  const translations = {
    en,
    ar,
  };
  
 function get(key) {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      value = value[k];
    }
    
    return value;
  }
  
  return {
    get,
  };
}






