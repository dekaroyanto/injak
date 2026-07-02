import React, { useState } from "react";
import {
  Menu,
  X,
  Landmark,
  FileText,
  Gift,
  Users,
  CreditCard,
  Award,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ActiveTab } from "../types";

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  isDarkMode,
  toggleDarkMode,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "beranda" as ActiveTab, label: "Beranda", icon: Landmark },
    { id: "definisi" as ActiveTab, label: "Apa itu Pajak", icon: FileText },
    { id: "manfaat" as ActiveTab, label: "Manfaat", icon: Gift },
    { id: "subjek" as ActiveTab, label: "Siapa Kena Pajak", icon: Users },
    { id: "cara-bayar" as ActiveTab, label: "Cara Bayar", icon: CreditCard },
    { id: "kuis" as ActiveTab, label: "Kuis Edukasi", icon: Award },
  ];

  const handleTabClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsOpen(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav
      id="injak-navbar"
      className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => handleTabClick("beranda")}
          >
            {/* <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-2 rounded-xl text-slate-950 font-black shadow-lg shadow-yellow-500/20">
              <span className="text-sm tracking-wider font-mono">INJAK</span>
            </div> */}
            <div>
              <span className="font-sans font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                INJAK
              </span>
              <span className="text-xs block text-slate-400 font-medium leading-none">
                Informasi Pajak
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-yellow-400 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}

            {/* Dark mode toggle desktop */}
            <button
              id="theme-toggle-desktop"
              onClick={toggleDarkMode}
              className="p-2 ml-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none"
              title={
                isDarkMode ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"
              }
            >
              {isDarkMode ? (
                <Sun size={18} className="text-yellow-400 animate-spin-slow" />
              ) : (
                <Moon size={18} />
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Dark mode toggle mobile */}
            <button
              id="theme-toggle-mobile"
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              title={
                isDarkMode ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"
              }
            >
              {isDarkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    id={`mobile-nav-${item.id}`}
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? "bg-yellow-500/10 text-yellow-400 border-l-4 border-yellow-500"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
