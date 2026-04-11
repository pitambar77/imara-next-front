import bannerImage from '../../assets/images/kili-banner.webp'
import logo from '../../assets/images/imaralogo.png'

const HeroSection = ({ scrollToForm }) => {
  return (
    <section className="relative h-screen max-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={bannerImage}
        alt="Kilimanjaro"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Logo */}
      <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-20">
        <img
          src={logo}
          alt="Logo-img"
          className="w-28 sm:w-32 md:w-36 lg:w-40 mx-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
        <div className="max-w-3xl">
          {/* Heading */}
          <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg">
            Climbing Kilimanjaro
          </h2>

          {/* Subheading */}
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg">
            JUST GOT SIMPLER
          </h3>

          {/* <button className="inline-flex items-center justify-center rounded-xl bg-[#d87028] px-8 py-3 hover:bg-[#ef6d0f] transition cursor-pointer lg:text-xl"> */}
          <button onClick={scrollToForm} className="inline-flex items-center justify-center bg-[#d87028] px-6 py-3 rounded hover:bg-[#ef6d0f] transition cursor-pointer lg:text-xl">
            ▼
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

