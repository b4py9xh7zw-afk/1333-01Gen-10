import { LoginFormData, FormErrors, LoginType } from '@/types';

export const validatePhone = (phone: string): string | undefined => {
  if (!phone.trim()) {
    return '请输入手机号';
  }
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    return '请输入正确的手机号格式';
  }
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) {
    return '请输入邮箱';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return '请输入正确的邮箱格式';
  }
  return undefined;
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return '请输入密码';
  }
  if (password.length < 6) {
    return '密码长度不能少于6位';
  }
  return undefined;
};

export const validateLoginForm = (
  formData: LoginFormData
): FormErrors => {
  const errors: FormErrors = {};

  if (formData.loginType === 'phone') {
    const phoneError = validatePhone(formData.phone);
    if (phoneError) errors.phone = phoneError;
  } else {
    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;
  }

  const passwordError = validatePassword(formData.password);
  if (passwordError) errors.password = passwordError;

  return errors;
};

export const hasErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).some((key) => errors[key as keyof FormErrors]);
};

export const getFirstErrorField = (
  errors: FormErrors,
  loginType: LoginType
): string | null => {
  if (loginType === 'phone' && errors.phone) return 'phone';
  if (loginType === 'email' && errors.email) return 'email';
  if (errors.password) return 'password';
  if (errors.general) return 'general';
  return null;
};
