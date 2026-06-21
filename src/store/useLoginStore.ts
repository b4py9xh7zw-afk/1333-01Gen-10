import { create } from 'zustand';
import { LoginFormData, FormErrors, LoginType } from '@/types';

interface LoginState {
  formData: LoginFormData;
  errors: FormErrors;
  isLoading: boolean;
  shakeField: string | null;
  setLoginType: (type: LoginType) => void;
  setFieldValue: (field: keyof LoginFormData, value: string) => void;
  setError: (field: keyof FormErrors, message: string | undefined) => void;
  clearErrors: () => void;
  setLoading: (loading: boolean) => void;
  setShakeField: (field: string | null) => void;
  resetForm: () => void;
}

const initialFormData: LoginFormData = {
  loginType: 'phone',
  phone: '',
  email: '',
  password: '',
};

export const useLoginStore = create<LoginState>((set) => ({
  formData: initialFormData,
  errors: {},
  isLoading: false,
  shakeField: null,

  setLoginType: (type) =>
    set((state) => ({
      formData: { ...state.formData, loginType: type },
      errors: {},
    })),

  setFieldValue: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
      errors: { ...state.errors, [field]: undefined },
    })),

  setError: (field, message) =>
    set((state) => ({
      errors: { ...state.errors, [field]: message },
    })),

  clearErrors: () => set({ errors: {} }),

  setLoading: (loading) => set({ isLoading: loading }),

  setShakeField: (field) => set({ shakeField: field }),

  resetForm: () =>
    set({
      formData: initialFormData,
      errors: {},
      isLoading: false,
      shakeField: null,
    }),
}));
