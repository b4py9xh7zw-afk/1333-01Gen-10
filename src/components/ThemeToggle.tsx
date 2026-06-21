import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '@/store/useThemeStore';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { mode, toggle } = useThemeStore();
  const isDark = mode === 'dark';

  return (
    <button
      onClick={toggle}
      className={cn(
        'p-2.5 rounded-xl transition-all duration-300',
        'bg-light-card dark:bg-dark-card',
        'border border-light-border/50 dark:border-dark-border/50',
        'hover:border-primary-500/50 dark:hover:border-primary-400/50',
        'hover:shadow-lg hover:shadow-primary-500/10',
        'text-light-text dark:text-dark-text',
        className
      )}
      aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={cn(
            'absolute inset-0 w-5 h-5 transition-all duration-300',
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          )}
        />
        <Moon
          className={cn(
            'absolute inset-0 w-5 h-5 transition-all duration-300',
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          )}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
