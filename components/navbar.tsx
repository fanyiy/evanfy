"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/blog",
    name: "Blog",
  },
];

export default function NavBar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="w-[130px] flex-shrink-0 rounded-lg bg-gray-200 dark:bg-neutral-800 mb-16">
      <nav className="flex gap-0 relative justify-around z-[100] rounded-lg py-1.5">
        {navItems.map((item) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={`px-2.5 py-1.5 rounded-md text-sm lg:text-md font-medium relative no-underline duration-300 ease-in ${
                isActive
                  ? "text-gray-800 dark:text-neutral-100"
                  : "text-gray-500 dark:text-neutral-300"
              }`}
              data-active={isActive}
              href={item.path}
              onClick={() => setHoveredPath(item.path)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-white dark:bg-neutral-700 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
