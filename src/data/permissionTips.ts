import { PermissionTip, ThirdPartyProvider } from '@/types';

export const permissionTips: PermissionTip[] = [
  {
    id: 'family-share',
    icon: 'Users',
    title: '家庭共享',
    description: '支持最多6位家庭成员共享设备控制权',
  },
  {
    id: 'offline',
    icon: 'WifiOff',
    title: '设备离线提醒',
    description: '设备离线时即时推送通知，确保安全',
  },
  {
    id: 'privacy',
    icon: 'Shield',
    title: '隐私权限',
    description: '所有数据加密存储，您的隐私由您掌控',
  },
];

export const thirdPartyProviders: ThirdPartyProvider[] = [
  {
    id: 'wechat',
    name: '微信',
    icon: 'MessageCircle',
    color: '#07C160',
  },
  {
    id: 'apple',
    name: 'Apple',
    icon: 'Apple',
    color: '#000000',
  },
  {
    id: 'google',
    name: 'Google',
    icon: 'Chrome',
    color: '#4285F4',
  },
];
