// app/login/page.tsx
'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { submitLogin } from '@/api/login/ClientAPI';
import { Metadata } from 'next';
import {
  Main,
  Container,
  Section,
  Area,
  Box,
  Item,
  Content,
} from '@/styles/layouts';

// export const metadata: Metadata = {
//   title: "Login",
// };

const LoginPage = () => {
  const empIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const empId = empIdRef.current?.value;
    const password = passwordRef.current?.value;

    if (!empId || !password) {
      alert('Username and password are required');
      return;
    }
    const res = await submitLogin(empId, password);
    if (res.ok) {
      router.push('/');
    } else {
      alert('Login failed');
    }
  };

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={empIdRef} placeholder="아이디를 입력해주세요" />
        <input
          type="password"
          ref={passwordRef}
          placeholder="비밀번호를 입력해주세요"
        />
        <button type="submit">Login</button>
      </form>
    </Main>
  );
};

export default LoginPage;
