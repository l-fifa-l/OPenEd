// React imports
import { useEffect, useState } from 'react';
// next-themes for dark mode
import { useTheme } from 'next-themes';

// Navbar function
export default function Navbar() {
  // state defination for dark mode
  const { theme, setTheme } = useTheme();
  // state defination for is the components are mounted to enable dark mode
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // if the componets is not mounted it will return null
  if (!mounted) return null;

  // JSX for Navbar
  return (
    <div className="flex space-x-4">
      <div>The current theme is: {theme}</div>

      <div>
        <button onClick={() => setTheme('light')}>Light Mode</button>
      </div>

      <div>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </div>
  );
}
