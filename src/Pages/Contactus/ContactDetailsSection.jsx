import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactDetailsSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-4xl mb-4 md:mb- px-4 ">
        Don't Hesitate to Contact Us
      </h2>

      {/* Card */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 ">
        <div className="bg-gradient-to-r from-[#d87028] to-[#d87028] rounded-md py-12 px-6 md:px-12">
          <h3 className="text-center text-2xl text-white mb-8 md:mb-12">
            Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 text-white">
            {/* Office Location */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3c2313] flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                  Office Location
                </h4>
                <p className="text-sm opacity-90">
                  KIUSA LINE STREET,MOSHI,KILIMANJARO <br/>P.O. BOX 623
                </p>
              </div>
            </div>

            {/* Call / WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3c2313] flex items-center justify-center shrink-0">
                <FaPhoneAlt className="text-white text-lg sm:text-xl" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                  Call / WhatsApp
                </h4>
                <p className="text-sm opacity-90">
                  <a href="tel:+255748002696" className="hover:underline">
                    +255 748 002 696
                  </a>
                </p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3c2313] flex items-center justify-center shrink-0">
                <FaEnvelope className="text-white text-lg sm:text-xl" />
              </div>
              <div className="break-all sm:break-normal">
                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                  Email Address
                </h4>
                <p className="text-sm opacity-90">
                  <a
                    href="mailto:info@imarakilelenisafaris.com"
                    className="hover:underline"
                  >
                    info@imarakilelenisafaris.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
