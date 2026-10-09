'use client';
import { createContext, useContext, useEffect, useState, type HTMLAttributes, type SVGProps } from 'react';

type ColorMode = 'light' | 'dark';
const ColorContext = createContext({ colorMode: 'light' as ColorMode, toggleColorMode: () => {}, setColorMode: (_mode: ColorMode) => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [colorMode, setMode] = useState<ColorMode>('light');
    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const update = () => {
            let saved: string | null = null;
            try { saved = localStorage.getItem('cointrade-color-mode'); } catch {}
            setMode(saved === 'dark' || saved === 'light' ? saved : media.matches ? 'dark' : 'light');
        };
        update(); media.addEventListener('change', update); window.addEventListener('storage', update);
        return () => { media.removeEventListener('change', update); window.removeEventListener('storage', update); };
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle('dark', colorMode === 'dark');
        document.documentElement.dataset.theme = colorMode;
        document.documentElement.style.colorScheme = colorMode;
    }, [colorMode]);
    const setColorMode = (mode: ColorMode) => {
        setMode(mode);
        try { localStorage.setItem('cointrade-color-mode', mode); } catch {}
    };
    return <ColorContext.Provider value={{ colorMode, setColorMode, toggleColorMode: () => setColorMode(colorMode === 'light' ? 'dark' : 'light') }}>{children}</ColorContext.Provider>;
}
export const useColorMode = () => useContext(ColorContext);

export function useMediaQuery({ query }: { query: string }) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        const update = () => setMatches(media.matches);
        update(); media.addEventListener('change', update);
        return () => media.removeEventListener('change', update);
    }, [query]);
    return matches;
}

export function Divider(props: HTMLAttributes<HTMLHRElement>) { return <hr {...props} />; }
export function Icon(props: SVGProps<SVGSVGElement>) {
    return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
        <circle cx="12" cy="12" r="9" /><path d="M9.5 8.5a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 16v1" />
    </svg>;
}
