/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token !== "loggedin") {
      router.replace("/login");
    }
  }, []);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(token === "loggedin");
  }, [pathname]);

  //  dark/light

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const centerLinks = [
    { href: "/", label: "Home" },
    { href: "/items", label: "Items" },
    { href: "/add-item", label: "Add Item", protected: true },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-lg px-4 md:px-8">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/">
          <Image
            src="/assets/ItemBox logo.png"
            alt="ItemBox Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Center links */}
      <div className="flex justify-center md:gap-2">
        {centerLinks.map((link) => {
          const isActive = pathname === link.href;

          if (link.protected && !isLoggedIn) {
            return (
              <button
                key={link.href}
                onClick={() => router.push("/login")}
                className="btn btn-ghost rounded-lg font-medium transition hover:bg-gray-200"
              >
                {link.label}
              </button>
            );
          }

          // Normal link
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`btn btn-ghost rounded-lg font-medium transition ${
                isActive ? " text-green-600" : "hover:bg-gray-200"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      {/* Login */}
      <div className="flex-1 flex justify-end items-center gap-3">
        {/* Theme Toggle */}

        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle text-xl"
          title="Toggle theme"
        >
          {theme === "light" ? "🌙" : "🌞"}
        </button>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="btn btn-error rounded-lg font-medium transition hover:bg-red-600"
          >
            Log Out
          </button>
        ) : (
          <Link
            href="/login"
            className={`btn btn-primary rounded-lg font-medium transition ${
              pathname === "/login" ? "bg-green-500 text-white" : ""
            }`}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
