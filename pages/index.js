import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href='/blog' legacyBehavior>
        <a>Blog</a>
      </Link>
    </div>
  );
}
