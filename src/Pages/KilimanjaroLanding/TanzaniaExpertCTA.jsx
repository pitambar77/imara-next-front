import React from "react";
import Link from "next/link";

const TanzaniaExpertCTA = () => {

  return (
    <section className=" max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      <div className=" bg-[#f6d8c2] py-10 rounded-md ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          {/* LEFT TEXT AREA */}
          <div className="text-center px-4">
            <h3 className="text-3xl font-bold text-[#1a1a1a]">
              Reach out now and let us craft
            </h3>
            <p className="text-[18px] text-[#444] mt-2">
              your perfect Kilimanjaro climbing experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5 text-center sm:text-left">
              <p className="text-[18px] sm:text-[22px] font-semibold text-[#444]">
                Call{" "}
                <span className="text-[#0b4fff] hover:underline cursor-pointer block sm:inline">
                  +255 748 002 696
                </span>
              </p>

              <span className="hidden sm:block text-[#444] font-medium">
                OR
              </span>

              <Link href={'/contact-us'}
                // onClick={() => navigate("/contact-us")}
                className="bg-[#d87028] hover:bg-[#ef8f0a] transition-colors cursor-pointer text-white font-semibold px-6 py-2 rounded-full shadow"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          {/* EXPERTS SECTION */}
          <div className="text-center">
            <p className="font-semibold text-[#444] mb-3">
              Our Tanzania Experts
            </p>

            <div className="flex items-center justify-center gap-4">
              {/* Expert 1 */}
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/027/815/166/small/woman-african-safari-generate-ai-photo.jpg"
                  alt="Alistair"
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
                <p className="mt-2 font-semibold text-[#444]">Alistair</p>
              </div>

              {/* Expert 2 */}
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/027/815/166/small/woman-african-safari-generate-ai-photo.jpg"
                  alt="Ottilie"
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
                <p className="mt-2 font-semibold text-[#444]">Ottilie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TanzaniaExpertCTA;
