import { create } from 'zustand';
import { LoginInfo } from '@/types/Package';

// LoginInfoState 인터페이스 정의
interface LoginInfoState extends LoginInfo {
  setLoginState: (loginState: Partial<LoginInfo['loginState']>) => void;
}

// Zustand 스토어 생성
export const useEmployeeStore = create<LoginInfoState>((set) => ({
  loginState: {
    empId: '20240002',
    empName: '',
    deptCode: '',
    posCode: '',
  },
  setLoginState: (loginState: Partial<LoginInfo['loginState']>) => set((state) => ({
    loginState: { ...state.loginState, ...loginState },
  })),
}));
