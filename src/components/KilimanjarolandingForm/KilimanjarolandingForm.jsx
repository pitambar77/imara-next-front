// import React, { useState, useEffect } from "react";
// import API from "../../api/axios.js";

// const KilimanjarolandingForm = ({ editData, onSuccess }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//   });

//   const [mainImage, setMainImage] = useState(null);
//   const [mainImagePreview, setMainImagePreview] = useState(null);

//   // ================= Dynamic Sections ==================
//   const [overviewinfo, setOverviewinfo] = useState([
//     { title: "", description: [], image: null, imagePreview: null },
//   ]);

//   // ================= ROUTE SECTION ==================
//   const [route, setRoute] = useState([
//     { title: "", description: "", image: null, imagePreview: null },
//   ]);

//   const [adventure, setAdventure] = useState([
//     {
//       heading: "",
//       section: [
//         {
//           title: "",
//           subtitle: "",
//           description: "",
//           image: null,
//           imagePreview: null,
//         },
//       ],
//     },
//   ]);

//   const [faq, setFaq] = useState([{ question: "", answer: [] }]);

//   // const [whenvisit, setWhenvisit] = useState([
//   //   { heading: "", months: [{ monthname: "", title: "", description: [] }] },
//   // ]);

//   const [whenvisit, setWhenvisit] = useState([
//     {
//       heading: "",
//       months: [
//         {
//           monthname: "",
//           title: "",
//           description: [],
//           image: null,
//           imagePreview: null,
//         },
//       ],
//     },
//   ]);

//   // ======================================================
//   // Prefill on Edit
//   // ======================================================
//   useEffect(() => {
//     if (editData) {
//       setFormData(editData);
//       setOverviewinfo(editData.overviewinfo ?? []);
//       setAdventure(editData.adventure ?? []);
//       setWhenvisit(editData.whenvisit ?? []);
//       setFaq(editData.faq ?? []);
//       setMainImagePreview(editData.image);
//       setRoute(editData.route ?? []);
//     }
//   }, [editData]);

//   // Basic handlers
//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleMainImage = (e) => {
//     const file = e.target.files[0];
//     setMainImage(file);
//     setMainImagePreview(URL.createObjectURL(file));
//   };

//   // *------------------------------------------------------*
//   // OVERVIEW INFO
//   // *------------------------------------------------------*
//   const addOverview = () =>
//     setOverviewinfo([
//       ...overviewinfo,
//       { title: "", description: [], image: null },
//     ]);

//   const removeOverview = (i) => {
//     const updated = [...overviewinfo];
//     updated.splice(i, 1);
//     setOverviewinfo(updated);
//   };

//   const handleOverviewBase = (i, e) => {
//     const updated = [...overviewinfo];
//     updated[i][e.target.name] = e.target.value;
//     setOverviewinfo(updated);
//   };

//   const handleOverviewImage = (i, e) => {
//     const file = e.target.files[0];
//     const updated = [...overviewinfo];
//     updated[i].image = file;
//     updated[i].imagePreview = URL.createObjectURL(file);
//     setOverviewinfo(updated);
//   };

//   const addOverviewBlock = (i) => {
//     const updated = [...overviewinfo];
//     updated[i].description.push({ type: "paragraph", content: "" });
//     setOverviewinfo(updated);
//   };

//   const handleOverviewDescription = (i, j, e) => {
//     const updated = [...overviewinfo];
//     updated[i].description[j][e.target.name] = e.target.value;
//     setOverviewinfo(updated);
//   };

//   const removeOverviewBlock = (i, j) => {
//     const updated = [...overviewinfo];
//     updated[i].description.splice(j, 1);
//     setOverviewinfo(updated);
//   };

//   // ================= ROUTE SECTION ==================
//   // ================= ROUTE SECTION ==================
//   const addRoute = () =>
//     setRoute([...route, { title: "", description: "", image: null }]);

//   const removeRoute = (i) => {
//     const updated = [...route];
//     updated.splice(i, 1);
//     setRoute(updated);
//   };

//   const handleRouteChange = (i, e) => {
//     const updated = [...route];
//     updated[i][e.target.name] = e.target.value;
//     setRoute(updated);
//   };

//   const handleRouteImage = (i, e) => {
//     const file = e.target.files[0];
//     const updated = [...route];
//     updated[i].image = file;
//     updated[i].imagePreview = URL.createObjectURL(file);
//     setRoute(updated);
//   };

//   // *------------------------------------------------------*
//   // ADVENTURE SECTION
//   // *------------------------------------------------------*
//   const addAdventure = () =>
//     setAdventure([...adventure, { heading: "", section: [] }]);

//   const removeAdventure = (i) => {
//     const updated = [...adventure];
//     updated.splice(i, 1);
//     setAdventure(updated);
//   };

//   const handleAdventure = (i, e) => {
//     const updated = [...adventure];
//     updated[i][e.target.name] = e.target.value;
//     setAdventure(updated);
//   };

//   const addAdventureSection = (i) => {
//     const updated = [...adventure];
//     updated[i].section.push({
//       title: "",
//       subtitle: "",
//       description: "",
//       image: null,
//     });
//     setAdventure(updated);
//   };

//   const handleAdventureSection = (i, j, e) => {
//     const updated = [...adventure];
//     updated[i].section[j][e.target.name] = e.target.value;
//     setAdventure(updated);
//   };

//   const handleAdventureImage = (i, j, e) => {
//     const file = e.target.files[0];
//     const updated = [...adventure];
//     updated[i].section[j].image = file;
//     updated[i].section[j].imagePreview = URL.createObjectURL(file);
//     setAdventure(updated);
//   };

//   const removeAdventureSection = (i, j) => {
//     const updated = [...adventure];
//     updated[i].section.splice(j, 1);
//     setAdventure(updated);
//   };

//   // *------------------------------------------------------*
//   // WHEN VISIT SECTION
//   // *------------------------------------------------------*
//   const addWhenvisit = () =>
//     setWhenvisit([...whenvisit, { heading: "", months: [] }]);

//   const removeWhenvisit = (i) => {
//     const updated = [...whenvisit];
//     updated.splice(i, 1);
//     setWhenvisit(updated);
//   };

//   const handleWhenvisit = (i, e) => {
//     const updated = [...whenvisit];
//     updated[i][e.target.name] = e.target.value;
//     setWhenvisit(updated);
//   };

//   const addMonth = (i) => {
//     const updated = [...whenvisit];
//     updated[i].months.push({ monthname: "", title: "", description: [] });
//     setWhenvisit(updated);
//   };

//   const handleMonth = (i, j, e) => {
//     const updated = [...whenvisit];
//     updated[i].months[j][e.target.name] = e.target.value;
//     setWhenvisit(updated);
//   };

//   const addMonthDescription = (i, j) => {
//     const updated = [...whenvisit];
//     updated[i].months[j].description.push({ type: "paragraph", content: "" });
//     setWhenvisit(updated);
//   };

//   const handleMonthDescChange = (i, j, k, e) => {
//     const updated = [...whenvisit];
//     updated[i].months[j].description[k][e.target.name] = e.target.value;
//     setWhenvisit(updated);
//   };

//   const removeMonthDesc = (i, j, k) => {
//     const updated = [...whenvisit];
//     updated[i].months[j].description.splice(k, 1);
//     setWhenvisit(updated);
//   };

//   const removeMonth = (i, j) => {
//     const updated = [...whenvisit];
//     updated[i].months.splice(j, 1);
//     setWhenvisit(updated);
//   };

//   const handleMonthImage = (i, j, e) => {
//     const file = e.target.files[0];
//     const updated = [...whenvisit];
//     updated[i].months[j].image = file;
//     updated[i].months[j].imagePreview = URL.createObjectURL(file);
//     setWhenvisit(updated);
//   };

//   // *------------------------------------------------------*
//   // FAQ SECTION
//   // *------------------------------------------------------*
//   const addFaq = () => setFaq([...faq, { question: "", answer: [] }]);

//   const removeFaq = (i) => {
//     const updated = [...faq];
//     updated.splice(i, 1);
//     setFaq(updated);
//   };

//   const handleFaq = (i, e) => {
//     const updated = [...faq];
//     updated[i].question = e.target.value;
//     setFaq(updated);
//   };

//   const addFaqAnswer = (i) => {
//     const updated = [...faq];
//     updated[i].answer.push({ type: "paragraph", content: "" });
//     setFaq(updated);
//   };

//   const handleFaqAnswer = (i, j, e) => {
//     const updated = [...faq];
//     updated[i].answer[j][e.target.name] = e.target.value;
//     setFaq(updated);
//   };

//   const removeFaqAnswer = (i, j) => {
//     const updated = [...faq];
//     updated[i].answer.splice(j, 1);
//     setFaq(updated);
//   };

//   // -------------------------------------------------------
//   // SUBMIT
//   // -------------------------------------------------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("formData", JSON.stringify(formData));

//     if (mainImage) data.append("mainImage", mainImage);

//     data.append("overviewinfo", JSON.stringify(overviewinfo));
//     data.append("adventure", JSON.stringify(adventure));
//     data.append("faq", JSON.stringify(faq));
//     data.append("whenvisit", JSON.stringify(whenvisit));
//     data.append("route", JSON.stringify(route));

//     route.forEach((r) => r.image && data.append("routeImages", r.image));

//     whenvisit.forEach((w) =>
//       w.months.forEach(
//         (m) => m.image && data.append("whenvisitImages", m.image)
//       )
//     );

//     overviewinfo.forEach(
//       (x) => x.image && data.append("overviewImages", x.image)
//     );
//     adventure.forEach((x) =>
//       x.section.forEach(
//         (y) => y.image && data.append("adventureImages", y.image)
//       )
//     );

//     try {
//       let res;
//       if (editData) {
//         res = await API.put(`/kilimanjarolanding/${editData._id}`, data);
//       } else {
//         res = await API.post("/kilimanjarolanding", data);
//       }

//       alert("Saved Successfully!");
//       onSuccess && onSuccess(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Error saving data");
//     }
//   };

//   return (
//     <form className="grid grid-cols-2 gap-4 pb-20" onSubmit={handleSubmit}>
//       <h2 className="text-2xl font-bold col-span-2">
//         {editData ? "Edit Kilimanjaro Landing" : "Create Kilimanjaro Landing"}
//       </h2>

//       <input
//         className="border p-2"
//         name="title"
//         placeholder="Title"
//         value={formData.title}
//         onChange={handleChange}
//       />

//       <input
//         className="border p-2"
//         name="subtitle"
//         placeholder="Subtitle"
//         value={formData.subtitle}
//         onChange={handleChange}
//       />

//       <div className="col-span-2">
//         <label>Main Image</label>
//         <input
//           type="file"
//           className="border p-2 w-full"
//           onChange={handleMainImage}
//         />
//         {mainImagePreview && (
//           <img src={mainImagePreview} className="w-48 rounded mt-2" />
//         )}
//       </div>

//       {/* =============== Overview Info Section =============== */}
//       <section className="col-span-2 mt-5">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-bold">Overview Info</h3>
//           <button
//             type="button"
//             className="bg-green-600 text-white px-3 py-1 rounded"
//             onClick={addOverview}
//           >
//             + Add
//           </button>
//         </div>

//         {overviewinfo.map((item, i) => (
//           <div key={i} className="border bg-gray-50 p-4 rounded mt-3">
//             <input
//               className="border p-2 w-full mb-2"
//               name="title"
//               placeholder="Title"
//               value={item.title}
//               onChange={(e) => handleOverviewBase(i, e)}
//             />

//             <button
//               type="button"
//               className="bg-blue-600 text-white px-3 py-1 rounded"
//               onClick={() => addOverviewBlock(i)}
//             >
//               + Add Description Block
//             </button>

//             {item.description.map((block, j) => (
//               <div key={j} className="border bg-white p-2 rounded mt-2">
//                 <select
//                   className="border p-2 w-full mb-2"
//                   name="type"
//                   value={block.type}
//                   onChange={(e) => handleOverviewDescription(i, j, e)}
//                 >
//                   <option value="header">Header</option>
//                   <option value="paragraph">Paragraph</option>
//                   <option value="list">List</option>
//                 </select>
//                 <textarea
//                   className="border p-2 w-full"
//                   name="content"
//                   placeholder="Content"
//                   value={block.content}
//                   onChange={(e) => handleOverviewDescription(i, j, e)}
//                 />
//                 <button
//                   type="button"
//                   className="bg-red-600 text-white px-3 py-1 rounded mt-2"
//                   onClick={() => removeOverviewBlock(i, j)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             <input
//               type="file"
//               className="border p-2 mt-2"
//               onChange={(e) => handleOverviewImage(i, e)}
//             />
//             {item.imagePreview && (
//               <img src={item.imagePreview} className="w-32 rounded mt-2" />
//             )}

//             <button
//               type="button"
//               className="bg-red-600 text-white px-3 py-1 rounded mt-3"
//               onClick={() => removeOverview(i)}
//             >
//               Remove Section
//             </button>
//           </div>
//         ))}
//       </section>

//       {/* =============== Adventure Section =============== */}
//       <section className="col-span-2 mt-6">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-semibold">Adventure</h3>
//           <button
//             type="button"
//             className="bg-green-600 text-white px-3 py-1 rounded"
//             onClick={addAdventure}
//           >
//             + Add
//           </button>
//         </div>

//         {adventure.map((item, i) => (
//           <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
//             <input
//               className="border p-2 w-full mb-3"
//               placeholder="Heading"
//               name="heading"
//               value={item.heading}
//               onChange={(e) => handleAdventure(i, e)}
//             />

//             <button
//               type="button"
//               className="bg-blue-600 text-white px-3 py-1 rounded"
//               onClick={() => addAdventureSection(i)}
//             >
//               + Add Section
//             </button>

//             {item.section.map((sec, j) => (
//               <div key={j} className="border p-3 bg-white rounded mt-2">
//                 <input
//                   className="border p-2 w-full mb-2"
//                   name="title"
//                   placeholder="Title"
//                   value={sec.title}
//                   onChange={(e) => handleAdventureSection(i, j, e)}
//                 />

//                 <input
//                   className="border p-2 w-full mb-2"
//                   name="subtitle"
//                   placeholder="Subtitle"
//                   value={sec.subtitle}
//                   onChange={(e) => handleAdventureSection(i, j, e)}
//                 />

//                 <textarea
//                   className="border p-2 w-full mb-2"
//                   name="description"
//                   placeholder="Description"
//                   value={sec.description}
//                   onChange={(e) => handleAdventureSection(i, j, e)}
//                 />

//                 <input
//                   type="file"
//                   className="border p-2"
//                   onChange={(e) => handleAdventureImage(i, j, e)}
//                 />

//                 {sec.imagePreview && (
//                   <img src={sec.imagePreview} className="w-32 mt-2" />
//                 )}

//                 <button
//                   type="button"
//                   className="bg-red-600 text-white px-3 py-1 rounded mt-2"
//                   onClick={() => removeAdventureSection(i, j)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             <button
//               type="button"
//               className="bg-red-600 text-white px-3 py-1 rounded mt-3"
//               onClick={() => removeAdventure(i)}
//             >
//               Remove Section
//             </button>
//           </div>
//         ))}
//       </section>

//       {/* =============== Route Section =============== */}
//       <section className="col-span-2 mt-6">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-semibold">Route</h3>
//           <button
//             type="button"
//             onClick={addRoute}
//             className="bg-green-600 text-white px-3 py-1 rounded"
//           >
//             + Add Route
//           </button>
//         </div>

//         {route.map((r, i) => (
//           <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
//             <input
//               className="border p-2 w-full mb-2"
//               name="title"
//               placeholder="Route Title"
//               value={r.title}
//               onChange={(e) => handleRouteChange(i, e)}
//             />

//             <textarea
//               className="border p-2 w-full mb-2"
//               name="description"
//               placeholder="Route Description"
//               value={r.description}
//               onChange={(e) => handleRouteChange(i, e)}
//             />

//             <input
//               type="file"
//               className="border p-2"
//               onChange={(e) => handleRouteImage(i, e)}
//             />

//             {r.imagePreview && (
//               <img src={r.imagePreview} className="w-32 mt-2 rounded" />
//             )}

//             <button
//               type="button"
//               onClick={() => removeRoute(i)}
//               className="bg-red-600 text-white px-3 py-1 rounded mt-2"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </section>

//       {/* =============== When to Visit Section =============== */}
//       <section className="col-span-2 mt-6">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-semibold">When To Visit</h3>
//           <button
//             type="button"
//             className="bg-green-600 px-3 py-1 text-white rounded"
//             onClick={addWhenvisit}
//           >
//             + Add
//           </button>
//         </div>

//         {whenvisit.map((item, i) => (
//           <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
//             <input
//               className="border p-2 w-full mb-2"
//               placeholder="Heading"
//               name="heading"
//               value={item.heading}
//               onChange={(e) => handleWhenvisit(i, e)}
//             />

//             <button
//               type="button"
//               className="bg-blue-600 text-white px-3 py-1 rounded"
//               onClick={() => addMonth(i)}
//             >
//               + Add Month
//             </button>

//             {item.months.map((m, j) => (
//               <div key={j} className="border mt-3 bg-white p-3 rounded">
//                 <input
//                   className="border p-2 w-full mb-2"
//                   name="monthname"
//                   placeholder="Month"
//                   value={m.monthname}
//                   onChange={(e) => handleMonth(i, j, e)}
//                 />

//                 <input
//                   className="border p-2 w-full mb-2"
//                   name="title"
//                   placeholder="Title"
//                   value={m.title}
//                   onChange={(e) => handleMonth(i, j, e)}
//                 />
//                 <input
//                   type="file"
//                   className="border p-2 mt-2"
//                   onChange={(e) => handleMonthImage(i, j, e)}
//                 />

//                 {m.imagePreview && (
//                   <img src={m.imagePreview} className="w-32 mt-2 rounded" />
//                 )}

//                 <button
//                   type="button"
//                   className="bg-blue-600 text-white px-3 py-1 rounded"
//                   onClick={() => addMonthDescription(i, j)}
//                 >
//                   + Add Description
//                 </button>

//                 {m.description.map((d, k) => (
//                   <div key={k} className="border p-2 rounded mt-2">
//                     <select
//                       name="type"
//                       className="border p-2 w-full mb-2"
//                       value={d.type}
//                       onChange={(e) => handleMonthDescChange(i, j, k, e)}
//                     >
//                       <option value="header">Header</option>
//                       <option value="paragraph">Paragraph</option>
//                       <option value="list">List</option>
//                     </select>

//                     <textarea
//                       className="border p-2 w-full"
//                       name="content"
//                       value={d.content}
//                       onChange={(e) => handleMonthDescChange(i, j, k, e)}
//                     />

//                     <button
//                       type="button"
//                       className="bg-red-600 text-white px-3 py-1 rounded mt-2"
//                       onClick={() => removeMonthDesc(i, j, k)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}

//                 <button
//                   type="button"
//                   className="bg-red-600 text-white px-3 py-1 rounded mt-2"
//                   onClick={() => removeMonth(i, j)}
//                 >
//                   Remove Month
//                 </button>
//               </div>
//             ))}

//             <button
//               type="button"
//               className="bg-red-600 px-3 py-1 rounded mt-3 text-white"
//               onClick={() => removeWhenvisit(i)}
//             >
//               Remove Section
//             </button>
//           </div>
//         ))}
//       </section>

//       {/* =============== FAQ Section =============== */}
//       <section className="col-span-2 mt-6">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-semibold">FAQ / About Booking</h3>
//           <button
//             type="button"
//             onClick={addFaq}
//             className="bg-green-600 px-3 py-1 rounded text-white"
//           >
//             + Add
//           </button>
//         </div>

//         {faq.map((item, i) => (
//           <div key={i} className="border p-4 rounded bg-gray-50 mt-4">
//             <input
//               className="border p-2 w-full mb-2"
//               placeholder="Question"
//               value={item.question}
//               onChange={(e) => handleFaq(i, e)}
//             />

//             <button
//               type="button"
//               className="bg-blue-600 text-white px-3 py-1 rounded"
//               onClick={() => addFaqAnswer(i)}
//             >
//               + Add Answer
//             </button>

//             {item.answer.map((ans, j) => (
//               <div key={j} className="border bg-white p-2 rounded mt-2">
//                 <select
//                   className="border p-2 w-full mb-2"
//                   name="type"
//                   value={ans.type}
//                   onChange={(e) => handleFaqAnswer(i, j, e)}
//                 >
//                   <option value="header">Header</option>
//                   <option value="paragraph">Paragraph</option>
//                   <option value="list">List</option>
//                 </select>

//                 <textarea
//                   className="border p-2 w-full"
//                   name="content"
//                   placeholder="Content"
//                   value={ans.content}
//                   onChange={(e) => handleFaqAnswer(i, j, e)}
//                 />

//                 <button
//                   type="button"
//                   className="bg-red-600 text-white px-3 py-1 rounded mt-2"
//                   onClick={() => removeFaqAnswer(i, j)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             <button
//               type="button"
//               className="bg-red-600 text-white px-3 py-1 rounded mt-4"
//               onClick={() => removeFaq(i)}
//             >
//               Remove Question
//             </button>
//           </div>
//         ))}
//       </section>

//       <button
//         type="submit"
//         className="bg-blue-600 col-span-2 text-white py-2 rounded mt-5"
//       >
//         {editData ? "Update Kilimanjaro Landing" : "Save Kilimanjaro Landing"}
//       </button>
//     </form>
//   );
// };

// export default KilimanjarolandingForm;

// above is the currect

import React, { useState, useEffect } from "react";
import API from "../../api/axios.js";
import CustomRichEditor from "../../components/CustomRichEditor";

const KilimanjarolandingForm = ({ editData, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // ================= Dynamic Sections ==================
  const [overviewinfo, setOverviewinfo] = useState([
    { title: "", description: "", image: null, imagePreview: null },
  ]);

  // ================= ROUTE SECTION ==================
  const [route, setRoute] = useState([
    { title: "", description: "", image: null, imagePreview: null },
  ]);

  const [adventure, setAdventure] = useState([
    {
      heading: "",
      section: [
        {
          title: "",
          subtitle: "",
          description: "",
          image: null,
          imagePreview: null,
        },
      ],
    },
  ]);

  const [faq, setFaq] = useState([{ question: "", answer: "" }]);

  const [whenvisit, setWhenvisit] = useState([
    {
      heading: "",
      months: [
        {
          monthname: "",
          title: "",
          description: "",
          image: null,
          imagePreview: null,
        },
      ],
    },
  ]);

  const [travelguide, setTravelguide] = useState([
    {
      heading: "",
      subtitle: "",
      description: "",

      section: [
        {
          title: "",
          description: "",
          url: "",
          image: null,
          imagePreview: null,
        },
      ],
    },
  ]);

  const [relatedsection, setRelatedsection] = useState([
    {
      heading: "",
      subtitle: "",

      section: [
        {
          title: "",
          subtitle: "",
          description: "",
          image: null,
          imagePreview: null,
        },
      ],
    },
  ]);

  // ======================================================
  // Prefill on Edit
  // ======================================================
  useEffect(() => {
    if (editData) {
      setFormData(editData);
      // setOverviewinfo(editData.overviewinfo ?? []);
      setOverviewinfo(
        (editData.overviewinfo || []).map((item) => ({
          ...item,
          imagePreview: item.image || null,
        })),
      );
      setAdventure(
        (editData.adventure || []).map((item) => ({
          ...item,
          section: (item.section || []).map((sec) => ({
            ...sec,
            imagePreview: sec.image || null,
          })),
        })),
      );
      setWhenvisit(
        (editData.whenvisit || []).map((item) => ({
          ...item,
          months: (item.months || []).map((m) => ({
            ...m,
            imagePreview: m.image || null,
          })),
        })),
      );
      setFaq(editData.faq ?? []);
      setMainImagePreview(editData.image);
      setRoute(
        (editData.route || []).map((item) => ({
          ...item,
          imagePreview: item.image || null,
        })),
      );
      setTravelguide(
        (editData.travelguide || []).map((item) => ({
          ...item,

          section: (item.section || []).map((sec) => ({
            ...sec,
            imagePreview: sec.image || null,
          })),
        })),
      );
      setRelatedsection(
        (editData.relatedsection || []).map((item) => ({
          ...item,

          section: (item.section || []).map((sec) => ({
            ...sec,
            imagePreview: sec.image || null,
          })),
        })),
      );
    }
  }, [editData]);

  // Basic handlers
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImage = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  // *------------------------------------------------------*
  // OVERVIEW INFO
  // *------------------------------------------------------*
  const addOverview = () =>
    setOverviewinfo([
      ...overviewinfo,
      { title: "", description: "", image: null },
    ]);

  const removeOverview = (i) => {
    const updated = [...overviewinfo];
    updated.splice(i, 1);
    setOverviewinfo(updated);
  };

  const handleOverviewBase = (i, e) => {
    const updated = [...overviewinfo];
    updated[i][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  const handleOverviewImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...overviewinfo];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setOverviewinfo(updated);
  };

  // ================= ROUTE SECTION ==================
  const addRoute = () =>
    setRoute([
      ...route,
      {
        title: "",
        description: "",
        image: null,
        imagePreview: null,
      },
    ]);

  const removeRoute = (i) => {
    const updated = [...route];
    updated.splice(i, 1);
    setRoute(updated);
  };

  const handleRouteChange = (i, e) => {
    const updated = [...route];
    updated[i][e.target.name] = e.target.value;
    setRoute(updated);
  };

  const handleRouteImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...route];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setRoute(updated);
  };

  // *------------------------------------------------------*
  // ADVENTURE SECTION
  // *------------------------------------------------------*
  const addAdventure = () =>
    setAdventure([...adventure, { heading: "", section: [] }]);

  const removeAdventure = (i) => {
    const updated = [...adventure];
    updated.splice(i, 1);
    setAdventure(updated);
  };

  const handleAdventure = (i, e) => {
    const updated = [...adventure];
    updated[i][e.target.name] = e.target.value;
    setAdventure(updated);
  };

  const addAdventureSection = (i) => {
    const updated = [...adventure];
    updated[i].section.push({
      title: "",
      subtitle: "",
      description: "",
      imagePreview: null,
    });
    setAdventure(updated);
  };

  const handleAdventureSection = (i, j, e) => {
    const updated = [...adventure];
    updated[i].section[j][e.target.name] = e.target.value;
    setAdventure(updated);
  };

  const handleAdventureImage = (i, j, e) => {
    const file = e.target.files[0];
    const updated = [...adventure];
    updated[i].section[j].image = file;
    updated[i].section[j].imagePreview = URL.createObjectURL(file);
    setAdventure(updated);
  };

  const removeAdventureSection = (i, j) => {
    const updated = [...adventure];
    updated[i].section.splice(j, 1);
    setAdventure(updated);
  };

  // *------------------------------------------------------*
  // WHEN VISIT SECTION
  // *------------------------------------------------------*
  const addWhenvisit = () =>
    setWhenvisit([...whenvisit, { heading: "", months: [] }]);

  const removeWhenvisit = (i) => {
    const updated = [...whenvisit];
    updated.splice(i, 1);
    setWhenvisit(updated);
  };

  const handleWhenvisit = (i, e) => {
    const updated = [...whenvisit];
    updated[i][e.target.name] = e.target.value;
    setWhenvisit(updated);
  };

  const addMonth = (i) => {
    const updated = [...whenvisit];
    updated[i].months.push({
      monthname: "",
      title: "",
      description: "",
      image: null,
      imagePreview: null,
    });
    setWhenvisit(updated);
  };

  const handleMonth = (i, j, e) => {
    const updated = [...whenvisit];
    updated[i].months[j][e.target.name] = e.target.value;
    setWhenvisit(updated);
  };

  const removeMonth = (i, j) => {
    const updated = [...whenvisit];
    updated[i].months.splice(j, 1);
    setWhenvisit(updated);
  };

  const handleMonthImage = (i, j, e) => {
    const file = e.target.files[0];
    const updated = [...whenvisit];
    updated[i].months[j].image = file;
    updated[i].months[j].imagePreview = URL.createObjectURL(file);
    setWhenvisit(updated);
  };

  // *------------------------------------------------------*
  // FAQ SECTION
  // *------------------------------------------------------*
  const addFaq = () => setFaq([...faq, { question: "", answer: "" }]);

  const removeFaq = (i) => {
    const updated = [...faq];
    updated.splice(i, 1);
    setFaq(updated);
  };

  const handleFaq = (i, e) => {
    const updated = [...faq];
    updated[i].question = e.target.value;
    setFaq(updated);
  };

  // *------------------------------------------------------*
  // Travelguide SECTION
  // *------------------------------------------------------*

  const addTravelguide = () =>
    setTravelguide([
      ...travelguide,
      {
        heading: "",
        subtitle: "",
        description: "",
        section: [],
      },
    ]);

  const removeTravelguide = (i) => {
    const updated = [...travelguide];
    updated.splice(i, 1);
    setTravelguide(updated);
  };

  const handleTravelguide = (i, e) => {
    const updated = [...travelguide];
    updated[i][e.target.name] = e.target.value;
    setTravelguide(updated);
  };

  const addTravelguideSection = (i) => {
    const updated = [...travelguide];

    updated[i].section.push({
      title: "",
      description: "",
      url: "",
      image: null,
      imagePreview: null,
    });

    setTravelguide(updated);
  };

  const removeTravelguideSection = (i, j) => {
    const updated = [...travelguide];
    updated[i].section.splice(j, 1);
    setTravelguide(updated);
  };

  const handleTravelguideSection = (i, j, e) => {
    const updated = [...travelguide];

    updated[i].section[j][e.target.name] = e.target.value;

    setTravelguide(updated);
  };

  const handleTravelguideImage = (i, j, e) => {
    const file = e.target.files[0];

    const updated = [...travelguide];

    updated[i].section[j].newImage = file;
    updated[i].section[j].hasNewImage = true;

    updated[i].section[j].imagePreview = URL.createObjectURL(file);

    setTravelguide(updated);
  };

  /* ------------------------------------------------ */
  /* RELATED SECTION */
  /* ------------------------------------------------ */

  const addRelatedsection = () =>
    setRelatedsection([
      ...relatedsection,
      {
        heading: "",
        subtitle: "",
        section: [],
      },
    ]);

  const removeRelatedsection = (i) => {
    const updated = [...relatedsection];

    updated.splice(i, 1);

    setRelatedsection(updated);
  };

  const handleRelatedsection = (i, e) => {
    const updated = [...relatedsection];

    updated[i][e.target.name] = e.target.value;

    setRelatedsection(updated);
  };

  const addRelatedCard = (i) => {
    const updated = [...relatedsection];

    updated[i].section.push({
      title: "",
      subtitle: "",
      description: "",
      image: null,
      imagePreview: null,
    });

    setRelatedsection(updated);
  };

  const removeRelatedCard = (i, j) => {
    const updated = [...relatedsection];

    updated[i].section.splice(j, 1);

    setRelatedsection(updated);
  };

  const handleRelatedCard = (i, j, e) => {
    const updated = [...relatedsection];

    updated[i].section[j][e.target.name] = e.target.value;

    setRelatedsection(updated);
  };

  const handleRelatedImage = (i, j, e) => {
    const file = e.target.files[0];

    const updated = [...relatedsection];

    updated[i].section[j].newImage = file;
    updated[i].section[j].hasNewImage = true;

    updated[i].section[j].imagePreview = URL.createObjectURL(file);

    setRelatedsection(updated);
  };

  // -------------------------------------------------------
  // SUBMIT
  // -------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("formData", JSON.stringify(formData));

    if (mainImage) data.append("mainImage", mainImage);

    data.append("overviewinfo", JSON.stringify(overviewinfo));
    data.append("adventure", JSON.stringify(adventure));
    data.append("faq", JSON.stringify(faq));
    data.append("whenvisit", JSON.stringify(whenvisit));
    data.append("route", JSON.stringify(route));
    data.append("travelguide", JSON.stringify(travelguide));
    data.append("relatedsection", JSON.stringify(relatedsection));

    route.forEach((r) => r.image && data.append("routeImages", r.image));

    whenvisit.forEach((w) =>
      w.months.forEach(
        (m) => m.image && data.append("whenvisitImages", m.image),
      ),
    );

    overviewinfo.forEach(
      (x) => x.image && data.append("overviewImages", x.image),
    );
    adventure.forEach((x) =>
      x.section.forEach(
        (y) => y.image && data.append("adventureImages", y.image),
      ),
    );

    // travelguide.forEach((x) =>
    //   x.section.forEach(
    //     (y) => y.image && data.append("travelguideImages", y.image),
    //   ),
    // );
    travelguide.forEach((x) =>
      x.section.forEach((y) => {
        if (y.hasNewImage && y.newImage instanceof File) {
          data.append("travelguideImages", y.newImage);
        }
      }),
    );
    // relatedsection.forEach((x) =>
    //   x.section.forEach(
    //     (y) => y.image && data.append("relatedsectionImages", y.image),
    //   ),
    // );
    relatedsection.forEach((x) =>
      x.section.forEach((y) => {
        if (y.hasNewImage && y.newImage instanceof File) {
          data.append("relatedsectionImages", y.newImage);
        }
      }),
    );

    try {
      let res;
      if (editData) {
        res = await API.put(`/mountkilimanjaro/${editData._id}`, data);
      } else {
        res = await API.post("/mountkilimanjaro", data);
      }

      alert("Saved Successfully!");
      onSuccess && onSuccess(res.data);
    } catch (err) {
      console.error(err);
      alert("Error saving data");
    }
  };

  return (
    <form className="grid grid-cols-2 gap-4 pb-20" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold col-span-2">
        {editData ? "Edit Kilimanjaro Landing" : "Create Kilimanjaro Landing"}
      </h2>

      <input
        className="border p-2"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        className="border p-2"
        name="subtitle"
        placeholder="Subtitle"
        value={formData.subtitle}
        onChange={handleChange}
      />

      <div className="col-span-2">
        <label>Main Image</label>
        <input
          type="file"
          className="border p-2 w-full"
          onChange={handleMainImage}
        />
        {mainImagePreview && (
          <img src={mainImagePreview} className="w-48 rounded mt-2" />
        )}
      </div>

      {/* =============== Overview Info Section =============== */}
      <section className="col-span-2 mt-5">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">Overview Info</h3>
          <button
            type="button"
            className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={addOverview}
          >
            + Add
          </button>
        </div>

        {overviewinfo.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 rounded mt-3">
            <input
              className="border p-2 w-full mb-2"
              name="title"
              placeholder="Title"
              value={item.title}
              onChange={(e) => handleOverviewBase(i, e)}
            />

            <CustomRichEditor
              value={item.description || ""}
              onChange={(html) => {
                const updated = [...overviewinfo];

                updated[i].description = html;

                setOverviewinfo(updated);
              }}
            />

            <input
              type="file"
              className="border p-2 mt-2"
              onChange={(e) => handleOverviewImage(i, e)}
            />
            {item.imagePreview && (
              <img src={item.imagePreview} className="w-32 rounded mt-2" />
            )}

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={() => removeOverview(i)}
            >
              Remove Section
            </button>
          </div>
        ))}
      </section>

      {/* =============== Adventure Section =============== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Adventure</h3>
          <button
            type="button"
            className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={addAdventure}
          >
            + Add
          </button>
        </div>

        {adventure.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input
              className="border p-2 w-full mb-3"
              placeholder="Heading"
              name="heading"
              value={item.heading}
              onChange={(e) => handleAdventure(i, e)}
            />

            <button
              type="button"
              className="bg-blue-600 text-white px-3 py-1 rounded"
              onClick={() => addAdventureSection(i)}
            >
              + Add Section
            </button>

            {item.section.map((sec, j) => (
              <div key={j} className="border p-3 bg-white rounded mt-2">
                <input
                  className="border p-2 w-full mb-2"
                  name="title"
                  placeholder="Title"
                  value={sec.title}
                  onChange={(e) => handleAdventureSection(i, j, e)}
                />

                <input
                  className="border p-2 w-full mb-2"
                  name="subtitle"
                  placeholder="Subtitle"
                  value={sec.subtitle}
                  onChange={(e) => handleAdventureSection(i, j, e)}
                />

                <CustomRichEditor
                  value={sec.description || ""}
                  onChange={(html) => {
                    const updated = [...adventure];

                    updated[i].section[j].description = html;

                    setAdventure(updated);
                  }}
                />

                <input
                  type="file"
                  className="border p-2"
                  onChange={(e) => handleAdventureImage(i, j, e)}
                />

                {sec.imagePreview && (
                  <img src={sec.imagePreview} className="w-32 mt-2" />
                )}

                <button
                  type="button"
                  className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                  onClick={() => removeAdventureSection(i, j)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={() => removeAdventure(i)}
            >
              Remove Section
            </button>
          </div>
        ))}
      </section>

      {/* =============== Route Section =============== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Route</h3>
          <button
            type="button"
            onClick={addRoute}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Route
          </button>
        </div>

        {route.map((r, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input
              className="border p-2 w-full mb-2"
              name="title"
              placeholder="Route Title"
              value={r.title}
              onChange={(e) => handleRouteChange(i, e)}
            />

            <CustomRichEditor
              value={r.description || ""}
              onChange={(html) => {
                const updated = [...route];

                updated[i].description = html;

                setRoute(updated);
              }}
            />
            <input
              type="file"
              className="border p-2"
              onChange={(e) => handleRouteImage(i, e)}
            />

            {r.imagePreview && (
              <img src={r.imagePreview} className="w-32 mt-2 rounded" />
            )}

            <button
              type="button"
              onClick={() => removeRoute(i)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-2"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* =============== When to Visit Section =============== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">When To Visit</h3>
          <button
            type="button"
            className="bg-green-600 px-3 py-1 text-white rounded"
            onClick={addWhenvisit}
          >
            + Add
          </button>
        </div>

        {whenvisit.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input
              className="border p-2 w-full mb-2"
              placeholder="Heading"
              name="heading"
              value={item.heading}
              onChange={(e) => handleWhenvisit(i, e)}
            />

            <button
              type="button"
              className="bg-blue-600 text-white px-3 py-1 rounded"
              onClick={() => addMonth(i)}
            >
              + Add Month
            </button>

            {item.months.map((m, j) => (
              <div key={j} className="border mt-3 bg-white p-3 rounded">
                <input
                  className="border p-2 w-full mb-2"
                  name="monthname"
                  placeholder="Month"
                  value={m.monthname}
                  onChange={(e) => handleMonth(i, j, e)}
                />

                <input
                  className="border p-2 w-full mb-2"
                  name="title"
                  placeholder="Title"
                  value={m.title}
                  onChange={(e) => handleMonth(i, j, e)}
                />
                <input
                  type="file"
                  className="border p-2 mt-2"
                  onChange={(e) => handleMonthImage(i, j, e)}
                />

                {m.imagePreview && (
                  <img src={m.imagePreview} className="w-32 mt-2 rounded" />
                )}

                <CustomRichEditor
                  value={m.description || ""}
                  onChange={(html) => {
                    const updated = [...whenvisit];

                    updated[i].months[j].description = html;

                    setWhenvisit(updated);
                  }}
                />

                <button
                  type="button"
                  className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                  onClick={() => removeMonth(i, j)}
                >
                  Remove Month
                </button>
              </div>
            ))}

            <button
              type="button"
              className="bg-red-600 px-3 py-1 rounded mt-3 text-white"
              onClick={() => removeWhenvisit(i)}
            >
              Remove Section
            </button>
          </div>
        ))}
      </section>

      {/* =============== Travel Guide Section =============== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Travel Guide</h3>

          <button
            type="button"
            onClick={addTravelguide}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Travel Guide
          </button>
        </div>

        {travelguide.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-4">
            {/* MAIN SECTION FIELDS */}

            <input
              className="border p-2 w-full mb-3"
              placeholder="Heading"
              name="heading"
              value={item.heading}
              onChange={(e) => handleTravelguide(i, e)}
            />

            <input
              className="border p-2 w-full mb-3"
              placeholder="Subtitle"
              name="subtitle"
              value={item.subtitle}
              onChange={(e) => handleTravelguide(i, e)}
            />

            <CustomRichEditor
              value={item.description || ""}
              onChange={(html) => {
                const updated = [...travelguide];

                updated[i].description = html;

                setTravelguide(updated);
              }}
            />

            {/* ADD INNER SECTION BUTTON */}

            <div className="mt-4">
              <button
                type="button"
                onClick={() => addTravelguideSection(i)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                + Add Guide Card
              </button>
            </div>

            {/* INNER CARD SECTION */}

            {item.section.map((sec, j) => (
              <div key={j} className="border p-4 bg-white rounded mt-4">
                <input
                  className="border p-2 w-full mb-3"
                  placeholder="Card Title"
                  name="title"
                  value={sec.title}
                  onChange={(e) => handleTravelguideSection(i, j, e)}
                />

                <input
                  className="border p-2 w-full mb-3"
                  placeholder="URL"
                  name="url"
                  value={sec.url}
                  onChange={(e) => handleTravelguideSection(i, j, e)}
                />

                <CustomRichEditor
                  value={sec.description || ""}
                  onChange={(html) => {
                    const updated = [...travelguide];

                    updated[i].section[j].description = html;

                    setTravelguide(updated);
                  }}
                />

                <input
                  type="file"
                  className="border p-2 w-full mt-3"
                  onChange={(e) => handleTravelguideImage(i, j, e)}
                />

                {sec.imagePreview && (
                  <img
                    src={sec.imagePreview}
                    alt=""
                    className="w-40 rounded mt-3"
                  />
                )}

                <button
                  type="button"
                  onClick={() => removeTravelguideSection(i, j)}
                  className="bg-red-600 text-white px-3 py-1 rounded mt-4"
                >
                  Remove Card
                </button>
              </div>
            ))}

            {/* REMOVE MAIN SECTION */}

            <button
              type="button"
              onClick={() => removeTravelguide(i)}
              className="bg-red-700 text-white px-3 py-1 rounded mt-5"
            >
              Remove Travel Guide Section
            </button>
          </div>
        ))}
      </section>

      {/* =============== Related Section =============== */}

      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Related Section</h3>

          <button
            type="button"
            onClick={addRelatedsection}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Related Section
          </button>
        </div>

        {relatedsection.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-4">
            <input
              className="border p-2 w-full mb-3"
              placeholder="Heading"
              name="heading"
              value={item.heading}
              onChange={(e) => handleRelatedsection(i, e)}
            />

            <input
              className="border p-2 w-full mb-3"
              placeholder="Subtitle"
              name="subtitle"
              value={item.subtitle}
              onChange={(e) => handleRelatedsection(i, e)}
            />

            <button
              type="button"
              onClick={() => addRelatedCard(i)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              + Add Card
            </button>

            {item.section.map((sec, j) => (
              <div key={j} className="border p-4 bg-white rounded mt-4">
                <input
                  className="border p-2 w-full mb-3"
                  placeholder="Title"
                  name="title"
                  value={sec.title}
                  onChange={(e) => handleRelatedCard(i, j, e)}
                />

                <input
                  className="border p-2 w-full mb-3"
                  placeholder="Subtitle"
                  name="subtitle"
                  value={sec.subtitle}
                  onChange={(e) => handleRelatedCard(i, j, e)}
                />

                <CustomRichEditor
                  value={sec.description || ""}
                  onChange={(html) => {
                    const updated = [...relatedsection];

                    updated[i].section[j].description = html;

                    setRelatedsection(updated);
                  }}
                />

                <input
                  type="file"
                  className="border p-2 w-full mt-3"
                  onChange={(e) => handleRelatedImage(i, j, e)}
                />

                {sec.imagePreview && (
                  <img src={sec.imagePreview} className="w-40 rounded mt-3" />
                )}

                <button
                  type="button"
                  onClick={() => removeRelatedCard(i, j)}
                  className="bg-red-600 text-white px-3 py-1 rounded mt-4"
                >
                  Remove Card
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => removeRelatedsection(i)}
              className="bg-red-700 text-white px-3 py-1 rounded mt-5"
            >
              Remove Related Section
            </button>
          </div>
        ))}
      </section>

      {/* =============== FAQ Section =============== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">FAQ / About Booking</h3>
          <button
            type="button"
            onClick={addFaq}
            className="bg-green-600 px-3 py-1 rounded text-white"
          >
            + Add
          </button>
        </div>

        {faq.map((item, i) => (
          <div key={i} className="border p-4 rounded bg-gray-50 mt-4">
            <input
              className="border p-2 w-full mb-2"
              placeholder="Question"
              value={item.question}
              onChange={(e) => handleFaq(i, e)}
            />

            <CustomRichEditor
              value={item.answer || ""}
              onChange={(html) => {
                const updated = [...faq];

                updated[i].answer = html;

                setFaq(updated);
              }}
            />

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-4"
              onClick={() => removeFaq(i)}
            >
              Remove Question
            </button>
          </div>
        ))}
      </section>

      <button
        type="submit"
        className="bg-blue-600 col-span-2 text-white py-2 rounded mt-5"
      >
        {editData ? "Update Kilimanjaro Landing" : "Save Kilimanjaro Landing"}
      </button>
    </form>
  );
};

export default KilimanjarolandingForm;
