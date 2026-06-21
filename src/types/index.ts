export type LoginType = 'phone' | 'email';

export type ThemeMode = 'light' | 'dark';

export interface LoginFormData {
  loginType: LoginType;
  phone: string;
  email: string;
  password: string;
}

export interface FormErrors {
  phone?: string;
  email?: string;
  password?: string;
  general?: string;
}

export interface PermissionTip {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ThemeState {
  mode: ThemeMode;
  toggle: () => void;
  setMode: (mode: ThemeMode) => void;
}

export interface ThirdPartyProvider {
  id: string;
  name: string;
  icon: string;
  color: string;
}
