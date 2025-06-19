'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Sidebar from '@/components/common/Sidebar';
import ReleaseNotes from './ReleaseNotes';
import VersionHistory from './VersionHistory';

const versions = [
  { number: 'V 2.0.33.1', isActive: true },
  { number: 'V 2.0.33' },
  { number: 'V 2.0.32' },
  { number: 'V 2.0.31.1' },
  { number: 'V 2.0.31' },
  { number: 'V 2.0.32.0' },
  { number: 'V 2.0.31.1' },
  { number: 'V 2.0.31.0' },
  { number: 'V 2.0.32' },
  { number: 'V 2.0.31.1' },
  { number: 'V 2.0.31' },
  { number: 'V 2.0.32.0' },
  { number: 'V 2.0.31.1' },
  { number: 'V 2.0.31.0' },
  { number: 'V 2.0.32' },
  { number: 'V 2.0.31.1' },
  { number: 'V 2.0.31' },
  { number: 'V 2.0.32.0' },
];

const updateSections = [
  {
    title: 'QR Code Integration',
    items: [
      'Added QR codes to the Birth Certificate PDFs to enhance verification and accessibility.',
    ],
  },
  {
    title: 'Language and Style Updates',
    items: [
      'Updated the PDF templates to include the Kurdish language.',
      'Improved the overall style and layout of the PDFs for better readability and presentation.',
    ],
  },
  {
    title: 'Security Enhancements',
    items: [
      'Implemented a new JWT Authentication system to secure the application and facilitate seamless integration with NDC Systems.',
    ],
  },
  {
    title: 'URL Routing',
    items: [
      'Updated the URL routing to support both QR endpoints, ensuring efficient navigation and access.',
    ],
  },
];

export default function UpdateDetailsPage() {
  return (
    <div className="w-[1440px] h-[1156px] bg-[#fcfcfc] font-[Manrope] mx-auto overflow-hidden relative">
      {/* Header */}
      <Header username="Zahraa Alaa" userInitials="ZA" />

      <div className="flex pt-[80px]">
        {/* Left Sidebar */}
        <Sidebar activeItem="updates" />

        {/* Main content */}
        <main className="flex-1 p-8 pr-[320px] overflow-y-auto h-[936px]">
          <ReleaseNotes
            version="2.0.33.1"
            releaseDate="25-04-2025"
            description="Last week, we successfully deployed version v2.0.33.1 of the CRVS system on Thursday at 05:00 AM. The update included several significant enhancements and new features aimed at improving the system's functionality and security. Additionally, a hotfix v2.0.33.3 was released to address some critical issues identified post-deployment."
            updateSections={updateSections}
          />
        </main>

        {/* Right version sidebar with light scroll */}
        <div className="absolute top-[80px] left-[1144px] w-[296px] h-[936px] bg-[#fcfcfc] border-l border-[#f5f5f9] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4d4d4] scrollbar-track-transparent">
          <VersionHistory versions={versions} />
        </div>
      </div>
    </div>
  );
}
