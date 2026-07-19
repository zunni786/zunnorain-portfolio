'use client';

import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [isDark, setIsDark] = useState<boolean>(true);
  
  const pillRef = useRef<HTMLDivElement | null>(null);
  const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const tabs = ['Home', 'Call', 'List'];

  // Pill animation ko handle karne ke liye
  useEffect(() => {
    const activeBtn = navRefs.current[activeTab];
    if (activeBtn && pillRef.current) {
      pillRef.current.style.left = `${activeBtn.offsetLeft}px`;
      pillRef.current.style.width = `${activeBtn.offsetWidth}px`;
    }
  }, [activeTab]);

  // Dark/Light theme toggle karne ke liye
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          ref={(el) => { navRefs.current[tab] = el; }}
          className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
      
      <button id="themeBtn" onClick={toggleTheme} className="theme-btn">
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Yeh background pill hai jo tabs ke peeche move karega */}
      <div className="pill" ref={pillRef}></div>
    </nav>
  );
};

export default Navbar;
