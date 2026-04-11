"use client";

import React from "react";
import Link from "next/link";

const CardButton = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`bg-[#d87028] text-white text-sm px-5 py-2 rounded-full font-semibold hover:bg-[#eb8034de] transition cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};

export default CardButton