import React from 'react';
import { Home } from 'lucide-react';

const BrandSection: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 text-center max-w-md animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-2xl shadow-primary-500/30 mb-8 animate-float">
          <Home className="w-10 h-10 text-white" />
        </div>
        <h1 className="font-display text-4xl font-extrabold text-light-text dark:text-dark-text mb-4 text-balance">
          智能家居
        </h1>
        <p className="font-body text-lg text-light-muted dark:text-dark-muted leading-relaxed mb-8">
          智能生活，一键掌控。让您的家更聪明、更安全、更便捷。
        </p>

        <div className="relative h-64 w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-primary-500/10 animate-pulse-glow" />
          </div>
          <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-light-card dark:bg-dark-card shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
            <span className="text-2xl">💡</span>
          </div>
          <div className="absolute top-12 right-8 w-16 h-16 rounded-2xl bg-light-card dark:bg-dark-card shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
            <span className="text-2xl">🔒</span>
          </div>
          <div className="absolute bottom-8 left-16 w-16 h-16 rounded-2xl bg-light-card dark:bg-dark-card shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
            <span className="text-2xl">🌡️</span>
          </div>
          <div className="absolute bottom-12 right-16 w-16 h-16 rounded-2xl bg-light-card dark:bg-dark-card shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
            <span className="text-2xl">📹</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-primary-500 dark:text-primary-400">100K+</div>
            <div className="text-xs text-light-muted dark:text-dark-muted mt-1">活跃用户</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-secondary-500 dark:text-secondary-400">50+</div>
            <div className="text-xs text-light-muted dark:text-dark-muted mt-1">设备支持</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-primary-500 dark:text-primary-400">99.9%</div>
            <div className="text-xs text-light-muted dark:text-dark-muted mt-1">系统稳定</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
