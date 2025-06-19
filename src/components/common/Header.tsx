'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  username?: string;
  userInitials?: string;
}

const Header: React.FC<HeaderProps> = ({
  username = 'Zahraa Alaa',
  userInitials = 'ZA',
}) => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-[1440px] h-[80px] bg-white flex items-center justify-between px-[80px] z-50 shadow-sm font-[Manrope]">
      {/* Logo Section */}
      <div className="flex items-center w-[167.33px] h-[40px]">
        <Image
          src="/images/img_1_1_1.png"
          alt="CRVS Logo"
          width={167}
          height={40}
        />
      </div>

      {/* Right Section: Language and Profile */}
      <div className="flex items-center space-x-6">
        {/* Language Button */}
        <div className="relative w-[68px] h-[24px]">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center justify-center w-full h-full text-sm font-bold text-[#8883ae] hover:text-[#4e338e] transition"
          >
            <Image
              src="/images/img_vector.svg"
              alt="Language Icon"
              width={16}
              height={16}
            />
            <span className="ml-2">EN</span>
          </button>

          {showLangMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {['English', 'العربية', 'Français', 'Español', 'Deutsch'].map((lang) => (
                <button
                  key={lang}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-[#4e338e]"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Profile Button */}
        <div className="relative w-[136px] h-[40px]">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center justify-start w-full h-full gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-[#4e338e] shadow flex items-center justify-center">
              <span className="text-xs text-[#eff0fe]">{userInitials}</span>
            </div>
            <span className="text-base font-medium text-[#4e338e]">{username}</span>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-[#4e338e]">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-[#4e338e]">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
