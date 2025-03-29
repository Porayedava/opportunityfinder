'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <span className="text-yellow-400">☀️</span>
      ) : (
        <span className="text-gray-600">🌙</span>
      )}
    </button>
  );
}