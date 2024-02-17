import { Header } from '@/components/header';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 desktop:w-1/3 laptop:w-1/2 laptop:justify-center">
      <Header />
    </div>
  );
}
