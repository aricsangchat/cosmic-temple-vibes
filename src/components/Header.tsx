"use client";

import { useState } from "react";
import { navItems, siteConfig } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0c0b]/70 px-6 py-4 backdrop-blur-xl sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <a href="/" className="leading-tight" aria-label="Cosmic Temple homepage">
          <div className="text-base font-semibold tracking-tight text-white">
            {siteConfig.name}
          </div>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Rawai · Phuket
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={siteConfig.primaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Maps
          </a>

          <a
            href={siteConfig.secondaryAction.href}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Message
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-white sm:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-4 max-w-6xl rounded-3xl border border-white/10 bg-zinc-950 p-5 shadow-2xl sm:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-base text-zinc-200 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={siteConfig.primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Maps
            </a>

            <a
              href={siteConfig.secondaryAction.href}
              className="rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-black"
            >
              Message
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
