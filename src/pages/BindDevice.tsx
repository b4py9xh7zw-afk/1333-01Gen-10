import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bluetooth, QrCode, Wifi, Smartphone } from 'lucide-react';
import Button from '@/components/Button';
import ThemeToggle from '@/components/ThemeToggle';

const BindDevice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-light-card dark:bg-dark-card border border-light-border/50 dark:border-dark-border/50 text-light-text dark:text-dark-text hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">返回登录</span>
        </button>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-md w-full mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-secondary-500 to-primary-500 shadow-2xl shadow-secondary-500/30 mb-8 animate-float">
            <Bluetooth className="w-10 h-10 text-white" />
          </div>

          <h1 className="font-display text-3xl font-extrabold text-light-text dark:text-dark-text mb-4">
            绑定新设备
          </h1>
          <p className="text-light-muted dark:text-dark-muted mb-10 leading-relaxed">
            选择以下方式添加您的智能设备，开始体验智能生活
          </p>

          <div className="space-y-4 mb-10">
            {[
              { icon: QrCode, title: '扫码绑定', desc: '扫描设备上的二维码快速绑定', delay: '0.1s' },
              { icon: Bluetooth, title: '蓝牙搜索', desc: '通过蓝牙搜索附近的智能设备', delay: '0.2s' },
              { icon: Wifi, title: 'WiFi 配对', desc: '连接同一WiFi网络自动发现', delay: '0.3s' },
              { icon: Smartphone, title: '手动添加', desc: '手动输入设备编号进行绑定', delay: '0.4s' },
            ].map((item, index) => (
              <button
                key={index}
                className="w-full card-hover p-5 flex items-center gap-4 text-left animate-slide-up"
                style={{ animationDelay: item.delay, animationFillMode: 'both' }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-light-text dark:text-dark-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-light-muted dark:text-dark-muted">
                    {item.desc}
                  </p>
                </div>
                <ArrowLeft className="w-5 h-5 text-light-muted dark:text-dark-muted rotate-180" />
              </button>
            ))}
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => navigate('/login')}
            >
              已有账号？去登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BindDevice;
