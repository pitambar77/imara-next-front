const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3c2313] text-white py-5 shadow-sm">
      <div className="text-center px-4">
        <p className="text-xs sm:text-sm text-white font-medium">
          {/* JERRY TANZANIA TOURS {currentYear}. All rights reserved. */}
          Copyright 2026 Imara Kileleni Safaris. All rights reserved. SAFARI
          MARKETING PRO®
        </p>
      </div>
    </footer>
  );
};

export default Footer;
