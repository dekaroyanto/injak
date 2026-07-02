import React from "react";
import {
  Landmark,
  ArrowRight,
  Github,
  Heart,
  MessageSquare,
} from "lucide-react";
import { ActiveTab } from "../types";

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: "beranda" as ActiveTab, label: "Beranda" },
    { id: "definisi" as ActiveTab, label: "Apa itu Pajak" },
    { id: "manfaat" as ActiveTab, label: "Manfaat Pajak" },
    { id: "subjek" as ActiveTab, label: "Wajib Pajak" },
    { id: "cara-bayar" as ActiveTab, label: "Cara Bayar" },
    { id: "kuis" as ActiveTab, label: "Kuis Edukasi" },
  ];

  const handleLinkClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="injak-footer"
      className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleLinkClick("beranda")}
            >
              <div>
                <span className="font-sans font-bold text-base tracking-tight text-white leading-none block">
                  INJAK
                </span>
                <span className="text-[10px] block text-slate-500 font-medium">
                  Informasi Pajak
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              INJAK adalah media edukasi perpajakan independen untuk mempermudah
              masyarakat luas mengenali dasar-dasar pajak, kontribusi APBN, dan
              proses pelaporan administrasi secara teratur.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-300">
              Akses Cepat Edukasi
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <button
                  id={`footer-link-${link.id}`}
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Useful Official Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-300">
              Kanal Resmi CORETAX
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://coretaxdjp.pajak.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <span>Portal Resmi CORETAX</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
