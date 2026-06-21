import { create } from 'zustand';
import { ThemeState, ThemeMode } from '@/types';

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme') as ThemeMode | null;
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (mode: ThemeMode) => {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', mode);
};

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

export const useThemeStore = create<ThemeState>((set) => ({
  mode: initialTheme,
  toggle: () =>
    set((state) => {
      const newMode = state.mode === 'dark' ? 'light' : 'dark';
      applyTheme(newMode);
      return { mode: newMode };
    }),
  setMode: (mode) => {
    applyTheme(mode);
    set({ mode });
  },
}));
