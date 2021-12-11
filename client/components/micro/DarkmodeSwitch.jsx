import { useEffect, useState } from 'react';
// next-themes for dark mode
import { useTheme } from 'next-themes';
//Switch for darkmode
import { Switch } from '@headlessui/react';

export default function DarkmodeSwitch() {
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
  return (
    <Switch
      checked={theme === 'light'}
      onChange={
        theme === 'light' ? () => setTheme('dark') : () => setTheme('light')
      }
      className={`${
        theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span
        className={`${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
}
