import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            zodiac: {
                aries: "Aries",
                taurus: "Taurus",
                gemini: "Gemini",
                cancer: "Cancer",
                leo: "Leo",
                virgo: "Virgo",
                libra: "Libra",
                scorpio: "Scorpio",
                sagittarius: "Sagittarius",
                capricorn: "Capricorn",
                aquarius: "Aquarius",
                pisces: "Pisces",
            },
            dates: {
                aries: "March 21 - April 19",
                taurus: "April 20 - May 20",
                gemini: "May 21 - June 20",
                cancer: "June 21 - July 22",
                leo: "July 23 - August 22",
                virgo: "August 23 - September 22",
                libra: "September 23 - October 22",
                scorpio: "October 23 - November 21",
                sagittarius: "November 22 - December 21",
                capricorn: "December 22 - January 19",
                aquarius: "January 20 - February 18",
                pisces: "February 19 - March 20",
            },
            back: "Back",
            language: "Language",
            loading: "Loading...",
            today: "Today",
            title: "Zodiac Signs",
        },
    },
    ru: {
        translation: {
            zodiac: {
                aries: "Овен",
                taurus: "Телец",
                gemini: "Близнецы",
                cancer: "Рак",
                leo: "Лев",
                virgo: "Дева",
                libra: "Весы",
                scorpio: "Скорпион",
                sagittarius: "Стрелец",
                capricorn: "Козерог",
                aquarius: "Водолей",
                pisces: "Рыбы",
            },
            dates: {
                aries: "21 марта - 19 апреля",
                taurus: "20 апреля - 20 мая",
                gemini: "21 мая - 20 июня",
                cancer: "21 июня - 22 июля",
                leo: "23 июля - 22 августа",
                virgo: "23 августа - 22 сентября",
                libra: "23 сентября - 22 октября",
                scorpio: "23 октября - 21 ноября",
                sagittarius: "22 ноября - 21 декабря",
                capricorn: "22 декабря - 19 января",
                aquarius: "20 января - 18 февраля",
                pisces: "19 февраля - 20 марта",
            },
            back: "Назад",
            language: "Язык",
            loading: "Загрузка...",
            today: "Сегодня",
            title: "Знаки Зодиака",
        },
    },
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language.startsWith('ru') ? 'ru' : 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
