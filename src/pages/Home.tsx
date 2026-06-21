import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home as HomeIcon, LogOut, Lightbulb, Lock, Thermometer, Camera, Settings, User } from 'lucide-react';
import Button from '@/components/Button';
import ThemeToggle from '@/components/ThemeToggle';
import { useThemeStore } from '@/store/useThemeStore';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { mode } = useThemeStore();

  const devices = [
    { icon: Lightbulb, name: '客厅灯', status: '开启', color: 'from-yellow-400 to-orange-500' },
    { icon: Lock, name: '智能门锁', status: '已锁', color: 'from-green-400 to-emerald-500' },
    { icon: Thermometer, name: '空调', status: '24°C', color: 'from-blue-400 to-cyan-500' },
    { icon: Camera, name: '摄像头', status: '运行中', color: 'from-red-400 to-pink-500' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
              <HomeIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-light-text dark:text-dark-text">
                我的家
              </h1>
              <p className="text-sm text-light-muted dark:text-dark-muted">
                欢迎回来，一切尽在掌控
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="p-2.5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border/50 dark:border-dark-border/50 text-light-text dark:text-dark-text hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2.5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border/50 dark:border-dark-border/50 text-light-text dark:text-dark-text hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="card p-6 mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold mb-2">当前模式：回家</h2>
              <p className="text-white/80 text-sm">所有设备已按预设配置就绪</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">24°</div>
              <div className="text-white/80 text-sm">室内温度</div>
            </div>
          </div>
        </div>

        <h2 className="font-display text-lg font-bold text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
          <span className="w-1 h-5 rounded-full bg-primary-500" />
          我的设备
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {devices.map((device, index) => (
            <div
              key={index}
              className="card-hover p-4 text-center"
            >
              <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${device.color} flex items-center justify-center shadow-lg`}>
                <device.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-sm text-light-text dark:text-dark-text mb-1">
                {device.name}
              </h3>
              <p className="text-xs text-light-muted dark:text-dark-muted">
                {device.status}
              </p>
            </div>
          ))}
        </div>

        <div className="card p-6">
          <h3 className="font-display text-lg font-bold text-light-text dark:text-dark-text mb-4">
            快捷场景
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['回家', '离家', '睡眠', '观影'].map((scene, index) => (
              <button
                key={index}
                className="p-4 rounded-xl bg-light-border/30 dark:bg-dark-border/30 hover:bg-primary-50 dark:hover:bg-primary-500/10 text-light-text dark:text-dark-text font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                {scene}模式
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Button
            variant="secondary"
            onClick={handleLogout}
            leftIcon={<LogOut className="w-5 h-5" />}
            className="w-full"
          >
            退出登录
          </Button>
        </div>

        <div className="mt-4 text-center text-sm text-light-muted dark:text-dark-muted">
          当前主题：{mode === 'dark' ? '深色模式' : '浅色模式'}
        </div>
      </div>
    </div>
  );
};

export default Home;
