import React from 'react';
import { useTranslation } from 'react-i18next';
import './ZodiacList.scss';

const zodiacs = [
    { sign: 'aries', icon: '♈' },
    { sign: 'taurus', icon: '♉' },
    { sign: 'gemini', icon: '♊' },
    { sign: 'cancer', icon: '♋' },
    { sign: 'leo', icon: '♌' },
    { sign: 'virgo', icon: '♍' },
    { sign: 'libra', icon: '♎' },
    { sign: 'scorpio', icon: '♏' },
    { sign: 'sagittarius', icon: '♐' },
    { sign: 'capricorn', icon: '♑' },
    { sign: 'aquarius', icon: '♒' },
    { sign: 'pisces', icon: '♓' },
];

const ZodiacList = React.memo(({ onSelect }) => {
    const { t } = useTranslation();


    return (
        <div className="zodiac-list">
            <h1 className="title">{t('title')}</h1>
            <div className='zodiac-list__wrapper'>
                {zodiacs.map((zodiac) => (
                    <div
                        key={zodiac.sign}
                        className="zodiac-item"
                        onClick={() => onSelect(zodiac.sign, zodiac.icon)}
                    >

                        <div className="zodiac-item__icon">{zodiac.icon}</div>
                        <div className='zodiac-item__descr'>
                            <div className="zodiac-item__period">{t(`dates.${zodiac.sign}`)}</div>
                            <div className="zodiac-item__name">{t(`zodiac.${zodiac.sign}`)}</div>

                        </div>
                        <button className='go'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2322 12L8.11612 5.88388C7.62796 5.39573 7.62796 4.60427 8.11612 4.11612C8.60427 3.62796 9.39573 3.62796 9.88388 4.11612L16.8839 11.1161C17.372 11.6043 17.372 12.3957 16.8839 12.8839L9.88388 19.8839C9.39573 20.372 8.60427 20.372 8.11612 19.8839C7.62796 19.3957 7.62796 18.6043 8.11612 18.1161L14.2322 12Z" fill="#B8C1CC" />
                            </svg>
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
});

export default ZodiacList;
