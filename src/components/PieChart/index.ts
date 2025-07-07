'use client';
import dynamic from 'next/dynamic';

export const PieChart = dynamic(() => import('./PieChart'), {
  ssr: false,
});
