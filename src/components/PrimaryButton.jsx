"use client";

import Link from "next/link";

const PrimaryButton = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`bg-[#d87028] text-white px-[21px] py-2.5 rounded-full font-semibold hover:bg-[#eb8034de] transition cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
