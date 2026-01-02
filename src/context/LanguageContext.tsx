"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface LanguageContextType {
    isTurkish: boolean;
    setIsTurkish: (val: boolean) => void;
    t: (tr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [isTurkish, setIsTurkish] = useState(true);

    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            setIsTurkish(savedLang === 'tr');
        }
    }, []);

    const handleSetIsTurkish = (val: boolean) => {
        setIsTurkish(val);
        localStorage.setItem('language', val ? 'tr' : 'en');
    };

    const t = (tr: string, en: string) => isTurkish ? tr : en;

    return (
        <LanguageContext.Provider value={{ isTurkish, setIsTurkish: handleSetIsTurkish, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
