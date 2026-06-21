import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { LoginType } from '@/types';
import { cn } from '@/lib/utils';

interface LoginTypeToggleProps {
  activeType: LoginType;
  onTypeChange: (type: LoginType) => void;
}

const LoginTypeToggle: React.FC<LoginTypeToggleProps> = ({ activeType, onTypeChange }) => {
  return (
    <div className="inline-flex p-1 rounded-xl bg-light-border/30 dark:bg-dark-border/30 mb-6 animate-fade-in">
      <button
        onClick={() => onTypeChange('phone')}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
          activeType === 'phone'
            ? 'bg-light-card dark:bg-dark-card text-primary-500 dark:text-primary-400 shadow-md'
            : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
        )}
      >
        <Phone className="w-4 h-4" />
        手机号登录
      </button>
      <button
        onClick={() => onTypeChange('email')}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
          activeType === 'email'
            ? 'bg-light-card dark:bg-dark-card text-primary-500 dark:text-primary-400 shadow-md'
            : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
        )}
      >
        <Mail className="w-4 h-4" />
        邮箱登录
      </button>
    </div>
  );
};

export default LoginTypeToggle;
