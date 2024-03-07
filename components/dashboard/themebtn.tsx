'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwap = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <select
        className="select select-ghost select-sm w-full max-w-xs"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </>
  );
};

export default ThemeSwap;
