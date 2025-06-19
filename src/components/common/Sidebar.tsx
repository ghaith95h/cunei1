'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MenuItem {
  id: string;
  name: string;
  icon: string;
  link: string;
}

interface SidebarProps {
  activeItem?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'updates' }) => {
  const [active, setActive] = useState(activeItem);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      name: 'Home',
      icon: '/images/img_presentationscreen_1.svg',
      link: '/'
    },
    {
      id: 'updates',
      name: 'Updates',
      icon: '/images/img_reload_1.svg',
      link: '/updates/details'
    },
    {
      id: 'bug-report',
      name: 'Bug Report',
      icon: '/images/img_filetext_1.svg',
      link: '/bug-report'
    },
    {
      id: 'change-request',
      name: 'Change Request',
      icon: '/images/img_arrowsboldoppositedirection_1.svg',
      link: '/change-request'
    },
    {
      id: 'customers',
      name: 'Customers',
      icon: '/images/img_user_1.svg',
      link: '/customers'
    }
  ];

  return (
    <aside className="w-[296px] h-[1156px] bg-white shadow-sm overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4d4d4] scrollbar-track-transparent pt-6">
      {/* Menu Items Only - No Logo */}
      <nav className="flex flex-col space-y-2 px-2">
        {menuItems.map((item) => {
          const isActive = active === item.id;
          return (
            <div
              key={item.id}
              onClick={() => {
                setActive(item.id);
                router.push(item.link);
              }}
              className={
                `flex items-center px-4 py-3 cursor-pointer rounded-xl transition-all ` +
                (isActive
                  ? 'bg-[#4e338e] text-white'
                  : 'text-[#8883ae] hover:text-[#4e338e] hover:bg-[#f5f5f9]')
              }
            >
              <img
                src={item.icon}
                alt={item.name}
                width={27}
                height={27}
                className={isActive ? 'filter brightness-0 invert' : ''}
              />
              <span className="ml-4 text-base font-medium">{item.name}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
