'use client'

import { createContext, useContext, useState } from 'react';

export const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState("");
    const value = {activeSection, setActiveSection}


    return (
        <ActiveSectionContext.Provider value={value}>
            {children}
        </ActiveSectionContext.Provider>
    );
};

export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext);
    if (context === undefined) {
        throw new Error('useActiveSection must be used within a ActiveSectionProviderO');
    }
    return context;
};
