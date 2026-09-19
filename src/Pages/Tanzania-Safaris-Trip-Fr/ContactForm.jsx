"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useState, useRef, useEffect } from "react";

export default function ContactForm({ safariData }) {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [open, setOpen] = useState(false);
  const [stepError, setStepError] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    countryCode: "",
    country: "",
    email: "",
    adults: 1,
    children: 0,
    destination: [],
    countryOfResidence: "",
    travelDate: "",
    days: "",
    message: "",
    language: "fr",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const scrollToSection = (id, message) => {
    setStepError(message);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // remove error after scroll
      setTimeout(() => {
        setStepError("");
      }, 3000);
    }, 1000); // wait 5 seconds before scrolling

    return false;
  };

  const validateSafariSelections = () => {
    if (!safariData?.destinations?.length) {
      return scrollToSection(
        "destinations",
        "Veuillez sélectionner au moins une destination",
      );
    }

    if (!safariData?.days) {
      return scrollToSection(
        "days",
        "Veuillez sélectionner le nombre de jours",
      );
    }

    if (!safariData?.travelStyle) {
      return scrollToSection(
        "travel-style",
        "Veuillez sélectionner un style de voyage",
      );
    }

    if (!safariData?.travelDate) {
      return scrollToSection(
        "travel-date",
        "Veuillez sélectionner votre date de voyage",
      );
    }

    setStepError("");
    return true;
  };

  const dropdownRef = useRef(null);

  const router = useRouter();

  const fieldRefs = {
    firstname: useRef(null),
    lastname: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    countryOfResidence: useRef(null),
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstname.trim())
      newErrors.firstname = "Le prénom est requis";
    if (!formData.lastname.trim()) newErrors.lastname = " Le nom est requis";

    if (!formData.phone) {
      newErrors.phone = "Le numéro de téléphone est requis";
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Numéro de téléphone invalide";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'adresse e-mail est requise";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Adresse e-mail invalide";
    }

    if (!formData.countryOfResidence.trim()) {
      newErrors.countryOfResidence = "Le pays de résidence est requis";
    }

    setErrors(newErrors);

    // scroll to first error
    const firstError = Object.keys(newErrors)[0];
    if (firstError && fieldRefs[firstError]?.current) {
      fieldRefs[firstError].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      fieldRefs[firstError].current.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handlePhoneChange = (value, data) => {
    const formattedPhone = "+" + value;

    setPhone(value);

    setFormData((prev) => ({
      ...prev,
      phone: formattedPhone,
      countryCode: "+" + data.dialCode,
      country: data.countryCode.toUpperCase(),
    }));

    if (!value) {
      setPhoneError("Le numéro de téléphone est requis");

      setErrors((prev) => ({
        ...prev,
        phone: "Le numéro de téléphone est requis",
      }));
      return;
    }

    if (!isValidPhoneNumber(formattedPhone)) {
      setPhoneError("Numéro de téléphone invalide");

      setErrors((prev) => ({
        ...prev,
        phone: "Numéro de téléphone invalide",
      }));
    } else {
      setPhoneError("");

      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1-4 validation
    if (!validateSafariSelections()) return;

    // Contact form validation
    if (!validateForm()) return;

    const payload = {
      ...formData,
      destinations: safariData.destinations,
      days: safariData.days,
      travelStyle: safariData.travelStyle,
      travelDate: safariData.travelDate,
    };

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/safariform`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17893363008/sdljCIGrxvQbEMCanNRC",
          value: 1.0,
          currency: "USD",
        });
      }

      router.push("/thank-you");

      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        countryCode: "",
        country: "",
        email: "",
        adults: 1,
        children: 0,
        countryOfResidence: "",
        destination: [],
        travelDate: "",
        days: "",
        message: "",
      });

      setPhone("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="bg-[#fbf5ef91] py-12 md:py-20 px-4 md:px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="!font-cormorant text-3xl md:text-4xl lg:text-5xl mb-4 text-[#2c2c2c] capitalize">
          5. Informations de contact
        </h2>

        <p className="!font-avenir text-[#444] text-lg mb-10">
          Partagez vos coordonnées et notre expert safari créera votre
          itinéraire personnalisé ainsi que votre devis.
        </p>

        {/* RIGHT SIDE FORM */}
        <div className=" text-black rounded-md max-w-xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">Prénom *</label>
                <input
                  name="firstname"
                  ref={fieldRefs.firstname}
                  value={formData.firstname}
                  onChange={handleChange}
                  className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                  placeholder="Prénom"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">{errors.firstname}</p>
                )}
              </div>

              <div>
                <label className="label">Nom *</label>
                <input
                  name="lastname"
                  ref={fieldRefs.lastname}
                  value={formData.lastname}
                  onChange={handleChange}
                  className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                  placeholder="Nom"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">{errors.lastname}</p>
                )}
              </div>
            </div>
            <div>
              <label className="label">E-mail *</label>
              <input
                name="email"
                ref={fieldRefs.email}
                value={formData.email}
                onChange={handleChange}
                className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Adults + Children */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Adultes *</label>
                <input
                  type="number"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (["e", "E", "+", "-"].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  className="input text-[#444] !bg-[#fff] text-sm !font-avenir"
                  placeholder="e.g. 2"
                />
              </div>

              <div>
                <label className="label">Enfants</label>
                <input
                  type="number"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (["e", "E", "+", "-"].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                  placeholder="e.g. 0"
                />
              </div>
            </div>

            {/* Name + Email */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">Pays de résidence *</label>
                <select
                  name="countryOfResidence"
                  ref={fieldRefs.countryOfResidence}
                  value={formData.countryOfResidence}
                  onChange={handleChange}
                  className="input !h-12 text-[#444] !bg-[#fff] text-sm !font-avenir"
                >
                  <option value="">Sélectionner un pays</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albanie</option>
                  <option value="Algeria">Algérie</option>
                  <option value="Andorra">Andorre</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">
                    Antigua-et-Barbuda
                  </option>
                  <option value="Argentina">Argentine</option>
                  <option value="Armenia">Arménie</option>
                  <option value="Australia">Australie</option>
                  <option value="Austria">Autriche</option>
                  <option value="Azerbaijan">Azerbaïdjan</option>

                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahreïn</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbade</option>
                  <option value="Belarus">Biélorussie</option>
                  <option value="Belgium">Belgique</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Bénin</option>
                  <option value="Bhutan">Bhoutan</option>
                  <option value="Bolivia">Bolivie</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnie-Herzégovine
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brésil</option>
                  <option value="Brunei">Brunéi</option>
                  <option value="Bulgaria">Bulgarie</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>

                  <option value="Cambodia">Cambodge</option>
                  <option value="Cameroon">Cameroun</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cap-Vert</option>
                  <option value="Central African Republic">
                    République centrafricaine
                  </option>
                  <option value="Chad">Tchad</option>
                  <option value="Chile">Chili</option>
                  <option value="China">Chine</option>
                  <option value="Colombia">Colombie</option>
                  <option value="Comoros">Comores</option>
                  <option value="Congo">Congo</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatie</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Chypre</option>
                  <option value="Czech Republic">République tchèque</option>

                  <option value="Denmark">Danemark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominique</option>
                  <option value="Dominican Republic">
                    République dominicaine
                  </option>

                  <option value="Ecuador">Équateur</option>
                  <option value="Egypt">Égypte</option>
                  <option value="El Salvador">Salvador</option>
                  <option value="Equatorial Guinea">Guinée équatoriale</option>
                  <option value="Eritrea">Érythrée</option>
                  <option value="Estonia">Estonie</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Éthiopie</option>

                  <option value="Fiji">Fidji</option>
                  <option value="Finland">Finlande</option>
                  <option value="France">France</option>

                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambie</option>
                  <option value="Georgia">Géorgie</option>
                  <option value="Germany">Allemagne</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Grèce</option>
                  <option value="Grenada">Grenade</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinée</option>
                  <option value="Guyana">Guyana</option>

                  <option value="Haiti">Haïti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hongrie</option>

                  <option value="Iceland">Islande</option>
                  <option value="India">Inde</option>
                  <option value="Indonesia">Indonésie</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Irak</option>
                  <option value="Ireland">Irlande</option>
                  <option value="Israel">Israël</option>
                  <option value="Italy">Italie</option>

                  <option value="Jamaica">Jamaïque</option>
                  <option value="Japan">Japon</option>
                  <option value="Jordan">Jordanie</option>

                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kuwait">Koweït</option>
                  <option value="Kyrgyzstan">Kirghizistan</option>

                  <option value="Laos">Laos</option>
                  <option value="Latvia">Lettonie</option>
                  <option value="Lebanon">Liban</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Libéria</option>
                  <option value="Libya">Libye</option>
                  <option value="Lithuania">Lituanie</option>
                  <option value="Luxembourg">Luxembourg</option>

                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaisie</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malte</option>
                  <option value="Mauritania">Mauritanie</option>
                  <option value="Mauritius">Maurice</option>
                  <option value="Mexico">Mexique</option>
                  <option value="Moldova">Moldavie</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolie</option>
                  <option value="Montenegro">Monténégro</option>
                  <option value="Morocco">Maroc</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>

                  <option value="Namibia">Namibie</option>
                  <option value="Nepal">Népal</option>
                  <option value="Netherlands">Pays-Bas</option>
                  <option value="New Zealand">Nouvelle-Zélande</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigéria</option>
                  <option value="North Korea">Corée du Nord</option>
                  <option value="Norway">Norvège</option>

                  <option value="Oman">Oman</option>

                  <option value="Pakistan">Pakistan</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">
                    Papouasie–Nouvelle-Guinée
                  </option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Pérou</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Pologne</option>
                  <option value="Portugal">Portugal</option>

                  <option value="Qatar">Qatar</option>

                  <option value="Romania">Roumanie</option>
                  <option value="Russia">Russie</option>
                  <option value="Rwanda">Rwanda</option>

                  <option value="Saudi Arabia">Arabie saoudite</option>
                  <option value="Senegal">Sénégal</option>
                  <option value="Serbia">Serbie</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapour</option>
                  <option value="Slovakia">Slovaquie</option>
                  <option value="Slovenia">Slovénie</option>
                  <option value="Somalia">Somalie</option>
                  <option value="South Africa">Afrique du Sud</option>
                  <option value="South Korea">Corée du Sud</option>
                  <option value="Spain">Espagne</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Soudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Sweden">Suède</option>
                  <option value="Switzerland">Suisse</option>
                  <option value="Syria">Syrie</option>

                  <option value="Taiwan">Taïwan</option>
                  <option value="Tajikistan">Tadjikistan</option>
                  <option value="Tanzania">Tanzanie</option>
                  <option value="Thailand">Thaïlande</option>
                  <option value="Togo">Togo</option>
                  <option value="Trinidad and Tobago">Trinité-et-Tobago</option>
                  <option value="Tunisia">Tunisie</option>
                  <option value="Turkey">Turquie</option>
                  <option value="Turkmenistan">Turkménistan</option>

                  <option value="Uganda">Ouganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    Émirats arabes unis
                  </option>
                  <option value="United Kingdom">Royaume-Uni</option>
                  <option value="United States">États-Unis</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Ouzbékistan</option>

                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Viêt Nam</option>

                  <option value="Yemen">Yémen</option>

                  <option value="Zambia">Zambie</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                {errors.countryOfResidence && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.countryOfResidence}
                  </p>
                )}
              </div>

              {/* Phone */}

              <div>
                <label className="label">Téléphone</label>
                <PhoneInput
                  country={"tz"}
                  ref={fieldRefs.phone}
                  value={phone}
                  // onChange={(phone) => setPhone(phone)}
                  onChange={handlePhoneChange}
                  enableSearch={true}
                  inputClass="!w-full !h-12 !rounded-md !bg-[#f3eee7] !border !border-[#e5ded6] focus:outline-none focus:ring-1 focus:ring-[#d87029] text-[#444] text-sm !font-avenir !bg-[#fff]"
                  containerStyle={{
                    width: "100%",
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
                {/* <input className="input" placeholder="+1 (000) 000-0000" /> */}
              </div>
            </div>
            {/* Textarea */}
            <div>
              <label className="label">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                placeholder="Parlez-nous davantage de votre projet de voyage..."
              ></textarea>
            </div>

            {stepError && (
              <p className="text-red-500 text-sm text-center">{stepError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              aria-label="Envoyez-moi mon plan de safari"
              className="!font-avenir text-xs tracking-[0.72px] md:tracking-[2.4px] uppercase bg-[#d87028] border border-[#e78e4b] text-white  px-6 md:py-2.5 py-3 rounded-xs hover:bg-[#eb8034de] transition cursor-pointer whitespace-nowrap w-full"
            >
              {loading ? "Envoi en cours..." : "Envoyez-moi mon plan de safari"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}