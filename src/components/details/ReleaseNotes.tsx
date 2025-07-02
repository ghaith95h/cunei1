"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function useReleaseNotes() {
  const version = "222";
  const releaseDate = "2023-10-01";
  const description =
    "This release includes significant updates to the CRVS system, enhancing functionality and user experience.";

  const updateSections = [
    {
      title: "QR Code Integration",
      items: [
        "Added QR codes to the Birth Certificate PDFs to enhance verification and accessibility.",
      ],
    },
    {
      title: "Language and Style Updates",
      items: [
        "Updated the PDF templates to include the Kurdish language.",
        "Improved the overall style and layout of the PDFs for better readability and presentation.",
      ],
    },
    {
      title: "Security Enhancements",
      items: [
        "Implemented a new JWT Authentication system to secure the application and facilitate seamless integration with NDC Systems.",
      ],
    },
    {
      title: "URL Routing",
      items: [
        "Updated the URL routing to support both QR endpoints, ensuring efficient navigation and access.",
      ],
    },
  ];

  return {
    version,
    releaseDate,
    description,
    updateSections,
  };
}

const ReleaseNotes = () => {
  const { version, releaseDate, description, updateSections } =
    useReleaseNotes();

  return (
    <div className="max-w-4xl">
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

      <h1 className="w-[250px] h-[32px] mt-[18px] text-3xl font-bold text-[#2b1e48]">
        Customer Name
      </h1>
      <h2 className="w-[128px] h-[32] mt-[20px] font-bold text-[#6f6590] mb-6">
        CRVS system
      </h2>

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
          <p className="text-lg text-[#4e4860] leading-8 mb-6">{description}</p>

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
                    <li
                      key={itemIndex}
                      className="text-lg text-[#4e4860] leading-8"
                    >
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
