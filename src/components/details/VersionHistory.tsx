'use client';

import React from 'react';

interface Version {
  number: string;
  isActive?: boolean;
}

interface VersionHistoryProps {
  versions: Version[];
}

const VersionHistory: React.FC<VersionHistoryProps> = ({ versions }) => {
  return (
    <div className="bg-[#fcfcfc] h-full p-6">
      <h2 className="text-xl font-semibold text-black mb-4">Updates</h2>
      <div className="space-y-2">
        {versions.map((version, index) => (
          <div key={index} className="py-1">
            <p className={`text-lg ${version.isActive ? 'font-semibold text-[#4e4860]' : 'font-medium text-[#8883ae]'}`}>
              {version.number}
            </p>
            {index === 1 && (
              <div className="w-4 h-1 bg-[#d7d7e6] mt-1"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersionHistory;