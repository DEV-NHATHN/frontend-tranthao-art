import { useEffect, useState } from 'react';

const initialTheme = () => {
  if (typeof window !== `undefined`) {
    if (localStorage.getItem(`theme`))
      return localStorage.getItem(`theme`) === `dark`;

    localStorage.setItem(`theme`, `light`);
  }
};

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => initialTheme());

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const html = window.document.documentElement;
    const prevClass = isDarkMode ? `light` : `dark`;
    html.classList.remove(prevClass);
    const newClass = isDarkMode ? `dark` : `light`;
    html.classList.add(newClass);
    localStorage.setItem(`theme`, newClass);
  }, [isDarkMode]);

  useEffect(() => {
    if (
      localStorage.theme === `dark` ||
      (!(`theme` in localStorage) &&
        window.matchMedia(`(prefers-color-scheme: dark)`).matches)
    ) {
      document.documentElement.classList.add(`dark`);
    } else {
      document.documentElement.classList.remove(`dark`);
    }
  }, []);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
