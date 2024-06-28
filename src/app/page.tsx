import {
  Main,
  Container,
  Section,
  Area,
  Box,
  Item,
  Content,
} from '@/styles/layouts';
import Image from 'next/image';
import styles from './page.module.css';
import { Suspense } from 'react';

export const metadata = {
  title: 'My SSR Page',
  description: 'This is a server-side rendered page with Next.js',
};

export default function Home() {
  return <></>;
}
