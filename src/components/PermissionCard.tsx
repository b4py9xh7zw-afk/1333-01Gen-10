import React from 'react';
import { Users, WifiOff, Shield, LucideIcon } from 'lucide-react';
import { PermissionTip } from '@/types';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Users,
  WifiOff,
  Shield,
};

interface PermissionCardProps {
  tip: PermissionTip;
  index: number;
}

const PermissionCard: React.FC<PermissionCardProps> = ({ tip, index }) => {
  const Icon = iconMap[tip.icon] || Shield;

  return (
    <div
      className={cn(
        'card-hover p-4 flex items-start gap-3',
        'animate-slide-up'
      )}
      style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-500 dark:text-primary-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-light-text dark:text-dark-text mb-1">
          {tip.title}
        </h4>
        <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
          {tip.description}
        </p>
      </div>
    </div>
  );
};

export default PermissionCard;
