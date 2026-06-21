import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  shake?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = 'text', error, shake, className, onFocus, onBlur, value, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const hasValue = value !== undefined && value !== null && value !== '';
    const isFloating = isFocused || hasValue;

    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(inputRef.current);
        } else {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current = inputRef.current;
        }
      }
    }, [ref]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    return (
      <div className="relative mb-5">
        <div
          className={cn(
            'relative transition-all duration-200',
            shake && 'animate-shake'
          )}
        >
          <input
            ref={inputRef}
            type={inputType}
            className={cn(
              error ? 'input-error' : 'input-default',
              'pt-5 pb-2 font-body text-base',
              type === 'password' && 'pr-12',
              className
            )}
            placeholder=""
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          <label
            className={cn(
              'absolute left-4 transition-all duration-200 pointer-events-none font-body',
              isFloating
                ? 'top-2 text-xs text-primary-500 dark:text-primary-400'
                : 'top-1/2 -translate-y-1/2 text-base text-light-muted dark:text-dark-muted',
              error && isFloating && 'text-error-500 dark:text-error-400'
            )}
          >
            {label}
          </label>
          {type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors"
              tabIndex={-1}
              aria-label={showPassword ? '隐藏密码' : '显示密码'}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-error-500 dark:text-error-400 font-medium animate-fade-in flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-error-500 dark:bg-error-400 inline-block" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
