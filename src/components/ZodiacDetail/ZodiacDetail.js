import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSwipeable } from 'react-swipeable';
import './ZodiacDetail.scss';

const ZodiacDetail = ({ sign, onBack }) => {
    const { t, i18n } = useTranslation();
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handlers = useSwipeable({
        onSwipedRight: () => onBack(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            const requestData = {
                sign: sign,
                language: i18n.language === 'ru' ? 'original' : 'translated',
                period: 'today',
            };

            try {
                const response = await fetch('https://poker247tech.ru/get_horoscope/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });

                if (!response.ok) {
                    const errorMessage = `Error: ${response.status} - ${response.statusText}`;
                    console.error('Response status:', response.status);
                    console.error('Response text:', response.statusText);
                    console.error('Response body:', await response.text());
                    throw new Error(errorMessage);
                }

                const data = await response.json();
                setDescription(data.horoscope);
            } catch (error) {
                console.error('Fetch error:', error);
                setError('Failed to load horoscope. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [sign, i18n.language]);

    return (
        <div {...handlers} className="zodiac-detail-container">
            <div className="zodiac-detail">
                <div className="head">
                    <button className="back-button" onClick={onBack}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.45776 12.4918L4.00728 8.03337H13.8667V5.9667H4.00789L8.46672 1.50787L6.99955 0.0510254L0.0505371 7.00004L7.00005 13.9495L8.45776 12.4918Z" fill="#94A2AC"></path>
                        </svg>
                    </button>
                    <h2 className="today">{t('today')}</h2>
                </div>

                {loading ? (
                    <p className="loading">{t('loading')}</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <>
                        <div className="zodiac-header">
                            <h2 className="zodiac-title">{t(`zodiac.${sign}`)}</h2>
                        </div>
                        <p className="zodiac-description">{description}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ZodiacDetail;
