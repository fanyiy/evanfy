import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';

const DarkModeToggle = () => {
  const [isOn, setIsOn] = useState(false);

  // Get the initial theme value from localStorage, if set
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsOn(true);
        setTheme("dark");
    } else {
        setIsOn(false);
        setTheme("light");
    }
  }, []);

  // Update the theme in localStorage and apply it to the document
  const setTheme = (theme: string) => {
    localStorage.theme = theme;
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  };

  // Toggle the theme on/off
  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (isOn) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };


  return (
    <div
      id="mode"
      className="w-40 h-24 mx-auto bg-gray-300 flex justify-start p-2 rounded-full cursor-pointer"
      data-ison={isOn}
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-20 h-20 bg-white rounded-full flex justify-center items-center"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        <Icon icon="ph:sun" className={`w-8 h-8 text-yellow-400 transition duration-300 ${isOn ? 'opacity-0' : 'opacity-100'}`} />
        <Icon icon="ph:moon" className={`w-8 h-8 text-gray-800 transition duration-300 ${isOn ? 'opacity-100' : 'opacity-0'}`} />
      </motion.div>
    </div>
  );
};

export default DarkModeToggle;