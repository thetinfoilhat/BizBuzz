'use client';

import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import type { YearData } from '@/types/years';

type YearContextValue = {
  year: 2024 | 2025;
  setYear: (y: 2024 | 2025) => void;
  data: YearData | null;
  compare?: { other: YearData | null };
};

const YearContext = createContext<YearContextValue | null>(null);

export function YearProvider({ 
  children, 
  initialYear = 2024, 
  datasets 
}: {
  children: ReactNode;
  initialYear?: 2024 | 2025;
  datasets: Record<'2024' | '2025', YearData>;
}) {
  const [year, setYear] = useState<2024 | 2025>(initialYear);
  
  const value = useMemo(() => ({
    year,
    setYear,
    data: datasets[String(year) as '2024' | '2025'],
    compare: { 
      other: datasets[year === 2024 ? '2025' : '2024'] 
    }
  }), [year, datasets]);

  return <YearContext.Provider value={value}>{children}</YearContext.Provider>;
}

export const useYear = () => {
  const ctx = useContext(YearContext);
  if (!ctx) throw new Error('useYear must be used within YearProvider');
  return ctx;
};

