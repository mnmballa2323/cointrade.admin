'use client';
import { ThemeProvider } from '@/components/NativeUI';
export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
