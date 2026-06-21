import React from 'react';
import { MessageCircle, Apple, Chrome, LucideIcon } from 'lucide-react';
import { ThirdPartyProvider } from '@/types';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Apple,
  Chrome,
};

interface ThirdPartyLoginProps {
  providers: ThirdPartyProvider[];
  onLogin: (providerId: string) => void;
}

const ThirdPartyLogin: React.FC<ThirdPartyLoginProps> = ({ providers, onLogin }) => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-light-border dark:bg-dark-border" />
        <span className="text-sm text-light-muted dark:text-dark-muted font-medium">
          其他登录方式
        </span>
        <div className="flex-1 h-px bg-light-border dark:bg-dark-border" />
      </div>
      <div className="flex justify-center gap-4">
        {providers.map((provider, index) => {
          const Icon = iconMap[provider.icon] || MessageCircle;
          return (
            <button
              key={provider.id}
              onClick={() => onLogin(provider.id)}
              className={cn(
                'group relative w-14 h-14 rounded-2xl flex items-center justify-center',
                'bg-light-card dark:bg-dark-card',
                'border border-light-border/50 dark:border-dark-border/50',
                'hover:border-primary-500/50 dark:hover:border-primary-400/50',
                'hover:shadow-xl hover:shadow-primary-500/10',
                'hover:-translate-y-1 hover:scale-110',
                'transition-all duration-300',
                'focus:outline-none focus:ring-2 focus:ring-primary-500/50'
              )}
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              aria-label={`使用 ${provider.name} 登录`}
            >
              <Icon
                className={cn(
                  'w-6 h-6 transition-colors duration-200',
                  'text-light-muted dark:text-dark-muted',
                  'group-hover:text-primary-500 dark:group-hover:text-primary-400'
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdPartyLogin;
