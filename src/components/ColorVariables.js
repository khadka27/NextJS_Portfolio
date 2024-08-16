
"use client";
// ColorVariables.js
import React from 'react';
import { flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';
import { useTheme } from 'next-themes'; // Use appropriate theme hook based on your setup

const ColorVariables = () => {
    const { theme } = useTheme(); // Adjust to your theme management library or context

    const addVariablesForColors = (theme) => {
        let allColors = flattenColorPalette(theme.colors);
        let newVars = Object.fromEntries(
            Object.entries(allColors).map(([key, val]) => [`--${key}`, val.DEFAULT])
        );

        const root = document.documentElement;
        for (const [name, value] of Object.entries(newVars)) {
            root.style.setProperty(name, value);
        }
    };

    React.useEffect(() => {
        addVariablesForColors(theme);
    }, [theme]);

    return null;
};

export default ColorVariables;
