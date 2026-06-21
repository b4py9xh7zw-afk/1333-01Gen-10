import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Plus, Home, ArrowRight } from 'lucide-react';
import { useLoginStore } from '@/store/useLoginStore';
import { validateLoginForm, hasErrors, getFirstErrorField } from '@/utils/validation';
import { permissionTips, thirdPartyProviders } from '@/data/permissionTips';
import Input from '@/components/Input';
import Button from '@/components/Button';
import PermissionCard from '@/components/PermissionCard';
import ThemeToggle from '@/components/ThemeToggle';
import LoginTypeToggle from '@/components/LoginTypeToggle';
import ThirdPartyLogin from '@/components/ThirdPartyLogin';
import BrandSection from '@/components/BrandSection';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    formData,
    errors,
    isLoading,
    shakeField,
    setLoginType,
    setFieldValue,
    setError,
    setLoading,
    setShakeField,
    clearErrors,
  } = useLoginStore();

  useEffect(() => {
    if (shakeField) {
      const timer = setTimeout(() => setShakeField(null), 500);
      return () => clearTimeout(timer);
    }
  }, [shakeField, setShakeField]);

  const handleLoginTypeChange = useCallback(
    (type: 'phone' | 'email') => {
      clearErrors();
      setLoginType(type);
    },
    [clearErrors, setLoginType]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      clearErrors();

      const validationErrors = validateLoginForm(formData);
      const firstError = getFirstErrorField(validationErrors, formData.loginType);

      if (hasErrors(validationErrors)) {
        Object.entries(validationErrors).forEach(([key, value]) => {
          setError(key as keyof typeof errors, value);
        });
        if (firstError) {
          setShakeField(firstError);
        }
        return;
      }

      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Login successful:', formData);
        navigate('/home');
      } catch (error) {
        setError('general', '登录失败，请检查账号密码后重试');
        setShakeField('general');
      } finally {
        setLoading(false);
      }
    },
    [formData, clearErrors, setError, setLoading, setShakeField, navigate]
  );

  const handleThirdPartyLogin = useCallback(
    async (providerId: string) => {
      console.log('Third party login:', providerId);
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate('/home');
      } finally {
        setLoading(false);
      }
    },
    [setLoading, navigate]
  );

  const handleBindDevice = useCallback(() => {
    navigate('/bind-device');
  }, [navigate]);

  return (
    <div className="min-h-screen flex">
      <BrandSection />

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="absolute top-6 right-6 z-20 animate-fade-in">
          <ThemeToggle />
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-md w-full mx-auto">
            <div className="lg:hidden text-center mb-8 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-xl shadow-primary-500/30 mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-display text-3xl font-extrabold text-light-text dark:text-dark-text mb-2">
                智能家居
              </h1>
              <p className="text-light-muted dark:text-dark-muted">
                智能生活，一键掌控
              </p>
            </div>

            <div className="text-center mb-8 animate-slide-up" style={{ animationFillMode: 'both' }}>
              <h2 className="font-display text-2xl font-bold text-light-text dark:text-dark-text mb-2">
                欢迎回来
              </h2>
              <p className="text-light-muted dark:text-dark-muted">
                登录您的账号，继续智能生活
              </p>
            </div>

            <div className="text-center mb-6 animate-fade-in">
              <LoginTypeToggle
                activeType={formData.loginType}
                onTypeChange={handleLoginTypeChange}
              />
            </div>

            <form onSubmit={handleSubmit} className="mb-6">
              {formData.loginType === 'phone' ? (
                <div className="animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  <Input
                    label="手机号"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFieldValue('phone', e.target.value)}
                    error={errors.phone}
                    shake={shakeField === 'phone'}
                    maxLength={11}
                    autoComplete="tel"
                  />
                </div>
              ) : (
                <div className="animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  <Input
                    label="邮箱"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFieldValue('email', e.target.value)}
                    error={errors.email}
                    shake={shakeField === 'email'}
                    autoComplete="email"
                  />
                </div>
              )}

              <div className="animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <Input
                  label="密码"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFieldValue('password', e.target.value)}
                  error={errors.password}
                  shake={shakeField === 'password'}
                  autoComplete="current-password"
                />
              </div>

              {errors.general && (
                <div
                  className={`mb-5 p-4 rounded-xl bg-error-50 dark:bg-error-500/10 border border-error-200 dark:border-error-500/20 ${
                    shakeField === 'general' ? 'animate-shake' : ''
                  }`}
                >
                  <p className="text-sm text-error-600 dark:text-error-400 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-error-500 dark:bg-error-400" />
                    {errors.general}
                  </p>
                </div>
              )}

              <div className="flex justify-end mb-6 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <button
                  type="button"
                  className="text-sm font-medium text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                >
                  忘记密码？
                </button>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.35s', animationFillMode: 'both' }}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isLoading}
                  leftIcon={!isLoading && <LogIn className="w-5 h-5" />}
                  className="w-full"
                >
                  {isLoading ? '登录中...' : '登录'}
                </Button>
              </div>
            </form>

            <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.45s', animationFillMode: 'both' }}>
              <p className="text-center text-sm text-light-muted dark:text-dark-muted mb-3">
                还没有账号？
                <button
                  type="button"
                  className="ml-1 font-semibold text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                >
                  立即注册
                </button>
              </p>
            </div>

            <ThirdPartyLogin
              providers={thirdPartyProviders}
              onLogin={handleThirdPartyLogin}
            />

            <div className="mt-10 mb-8 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              <h3 className="text-sm font-semibold text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-primary-500" />
                功能特性
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {permissionTips.map((tip, index) => (
                  <PermissionCard key={tip.id} tip={tip} index={index} />
                ))}
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
              <div className="p-5 rounded-2xl border-2 border-dashed border-light-border dark:border-dark-border bg-light-card/50 dark:bg-dark-card/50 hover:border-primary-500/50 dark:hover:border-primary-400/50 hover:bg-primary-50 dark:hover:bg-primary-500/5 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-500 to-primary-500 flex items-center justify-center shadow-lg shadow-secondary-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-light-text dark:text-dark-text mb-0.5">
                        绑定新设备
                      </h4>
                      <p className="text-sm text-light-muted dark:text-dark-muted">
                        添加您的智能设备，开始智能生活
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleBindDevice}
                    className="p-2 rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-500 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-500/20 transition-all duration-200 group-hover:translate-x-1"
                    aria-label="绑定新设备"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
              <p className="text-xs text-light-muted/70 dark:text-dark-muted/70">
                登录即表示您同意我们的
                <button type="button" className="text-primary-500 dark:text-primary-400 hover:underline mx-1">
                  用户协议
                </button>
                和
                <button type="button" className="text-primary-500 dark:text-primary-400 hover:underline ml-1">
                  隐私政策
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
