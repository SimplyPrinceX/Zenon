"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const sourcesList = [
  { id: 'multiembed', name: 'MultiEmbed' },
  { id: 'embedsu', name: 'EmbedSU' },
  { id: 'vidsrcsu', name: 'VidSrcSU' },
  { id: 'vidsrcvip', name: 'VidSrcVIP' },
  { id: 'vidsrcxyz', name: 'VidSrcXYZ' },
  { id: 'vidsrcvip', name: 'VidSrcVIP' },
  { id: '2embed', name: '2Embed' },
  { id: 'primewire', name: 'PrimeWire' },
  { id: 'autoembed', name: 'AutoEmbed' },
  { id: 'vidora', name: 'Vidora' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
];

export default function SettingsPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<'default-source' | 'appearance'>('default-source');
  const [defaultSource, setDefaultSource] = useState<string>('multiembed');
  const [theme, setTheme] = useState<'dark' | 'light'>(typeof window !== 'undefined' ? (localStorage.getItem('theme') as 'dark' | 'light') || 'dark' : 'dark');
  const [language, setLanguage] = useState<string>(typeof window !== 'undefined' ? localStorage.getItem('selectedLanguage') || 'en' : 'en');

  // Load settings from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    setDefaultSource(localStorage.getItem('defaultSource') || 'multiembed');
    setTheme((localStorage.getItem('theme') as 'dark' | 'light') || 'dark');
    setLanguage(localStorage.getItem('selectedLanguage') || 'en');
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('defaultSource', defaultSource);
  }, [defaultSource]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0">
          <div className="glass-card p-6 flex flex-col gap-2 sticky top-24">
            <LiquidButton onClick={() => router.back()} className="text-left px-4 py-2 rounded-lg glass-toggle hover:bg-purple-600/50 transition-colors mb-2">Back</LiquidButton>
            <hr className="border-gray-600 mb-2" />
            <LiquidButton
              onClick={() => setActiveSection('default-source')}
              className={`text-left px-4 py-2 rounded-lg glass-toggle transition-colors ${activeSection === 'default-source' ? 'bg-purple-600 text-white' : ''}`}
            >
              Default Source
            </LiquidButton>
            <LiquidButton
              onClick={() => setActiveSection('appearance')}
              className={`text-left px-4 py-2 rounded-lg glass-toggle transition-colors ${activeSection === 'appearance' ? 'bg-purple-600 text-white' : ''}`}
            >
              Appearance
            </LiquidButton>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Settings</h1>
            <p className="text-slate-400 text-lg mb-8">Customize your experience</p>
            {/* Default Source Section */}
            {activeSection === 'default-source' && (
              <section className="glass-card p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-2">Default Source</h2>
                <p className="text-slate-400 mb-4">Choose your preferred default source for streaming content. This setting will be remembered across sessions.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {sourcesList.map((src) => (
                    <LiquidButton
                      key={src.id}
                      className={`glass-toggle flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left font-medium transition-all ${defaultSource === src.id ? 'bg-purple-600 text-white border-purple-500' : ''}`}
                      onClick={() => setDefaultSource(src.id)}
                      aria-pressed={defaultSource === src.id}
                    >
                      <span>{src.name}</span>
                      {defaultSource === src.id && <span className="ml-auto text-purple-300">(Selected)</span>}
                    </LiquidButton>
                  ))}
                </div>
              </section>
            )}
            {/* Appearance Section */}
            {activeSection === 'appearance' && (
              <section className="glass-card p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-2">Appearance</h2>
                <p className="text-slate-400 mb-4">Switch between light and dark mode, and set your preferred language.</p>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Theme</h3>
                    <div className="flex gap-4">
                      <LiquidButton
                        className={`glass-toggle px-4 py-2 rounded-lg font-medium ${theme === 'dark' ? 'bg-purple-600 text-white border-purple-500' : ''}`}
                        onClick={() => setTheme('dark')}
                        aria-pressed={theme === 'dark'}
                      >
                        Dark
                      </LiquidButton>
                      <LiquidButton
                        className={`glass-toggle px-4 py-2 rounded-lg font-medium ${theme === 'light' ? 'bg-purple-600 text-white border-purple-500' : ''}`}
                        onClick={() => setTheme('light')}
                        aria-pressed={theme === 'light'}
                      >
                        Light
                      </LiquidButton>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Language</h3>
                    <select
                      className="glass-toggle px-4 py-2 rounded-lg w-full font-medium"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      aria-label="Select language"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
} 