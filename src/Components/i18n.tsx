import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
//Import all translation files
import translationEnglish from "../Translation/en-US.json";
import tranaslationSerbian from "../Translation/sr-Latn.json";
/* import { store } from "../store/store"; */

//---Using translation
// const resources = {
//     en: {
//         translation: translationEnglish,
//     },
//     es: {
//         translation: translationSpanish,
//     },
//     fr: {
//         translation: translationFrench,
//     },
// }

//---Using different namespaces
/* console.log(
	store,
	"lrs",
	
); */

const defaultLanguage = JSON.parse(
	JSON.parse(localStorage?.getItem("persist:root") ?? "").reducer
).defaultLanguage;


const resources = {
	"en-US": {
		translation: translationEnglish,
	},
	"sr-RS": {
		translation: tranaslationSerbian,
	},
};

i18next
	.use(Backend)
	.use(initReactI18next)
	.init({
		resources,
		lng: defaultLanguage, //default language
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export default i18next;
