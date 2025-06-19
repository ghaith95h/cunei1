'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface UpdateSection {
  title: string;
  items: string[];
}

interface ReleaseNotesProps {
  version: string;
  releaseDate: string;
  description: string;
  updateSections: UpdateSection[];
}

const ReleaseNotes: React.FC<ReleaseNotesProps> = ({
  version,
  releaseDate,
  description,
  updateSections
}) => {
  return (
    <div className="max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/updates">
          <div className="flex items-center cursor-pointer">
            <Image 
              src="/images/img_leftarrow_1.svg" 
              alt="Back" 
              width={24} 
              height={24} 
              
            />
          </div>
        </Link>
      </div>

      {/* Page Header */}
      <h1 className="w-[250px] h-[32px] mt-[18px] text-3xl font-bold text-[#2b1e48]">
        Customer Name
      </h1>
      <h2 className="w-[128px] h-[32] mt-[20px] font-bold text-[#6f6590] mb-6">CRVS system</h2>

      {/* Version Info and Notes */}
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <Image 
            src="/images/img_group.svg" 
            alt="Release" 
            width={20} 
            height={22} 
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-black mb-2">
            [{releaseDate}] Version {version} Released
          </h3>
          <p className="text-lg text-[#4e4860] leading-8 mb-6">
            {description}
          </p>

          <h4 className="text-lg font-semibold text-[#2b2834] mb-4">
            Updates in v{version}:
          </h4>

          <div className="space-y-6">
            {updateSections.map((section, index) => (
              <div key={index}>
                <h5 className="text-lg font-medium text-[#2b2834] mb-1">
                  {index + 1}. {section.title}:
                </h5>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-lg text-[#4e4860] leading-8">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseNotes;
