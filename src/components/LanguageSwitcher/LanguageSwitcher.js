import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className="language-switcher">
            <select onChange={changeLanguage} defaultValue={i18n.language}>
                <option value="en">🇬🇧 EN</option>
                <option value="ru">🇷🇺 РУС</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
