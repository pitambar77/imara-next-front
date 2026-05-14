// "use client";

// import React, { useMemo, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import CustomRichEditor from "../../components/CustomRichEditor";

// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// const SECTION_TYPES = [
//   { type: "heading", label: "Heading" },
//   { type: "paragraph", label: "Paragraph" },
//   { type: "image", label: "Single Image" },
//   { type: "imageGrid", label: "Image Grid" },
//   { type: "imageContent", label: "Image + Content" },
//   { type: "highlight", label: "Highlight Cards" },
//   { type: "faq", label: "FAQ" },
//   { type: "list", label: "List" },
//   { type: "cta", label: "CTA" },
//   { type: "review", label: "Review" },
//   { type: "package", label: "Package Section" },
// ];

// function slugify(str = "") {
//   return str
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// }

// function newSection(type) {
//   const base = { id: uuidv4(), type };

//   switch (type) {
//     case "heading":
//       return {
//         ...base,
//         text: "",
//         level: 2, // 👈 IMPORTANT
//       };

//     case "paragraph":
//       return {
//         ...base,
//         content: "",
//       };

//     case "image":
//       return {
//         ...base,
//         image: { url: "", alt: "" },
//       };

//     case "imageGrid":
//       return {
//         ...base,
//         images: [],
//         columns: 2,
//       };

//     case "imageContent":
//       return {
//         ...base,
//         title: "",
//         sections: [
//           {
//             image: { url: "", preview: "" },
//             heading: "",
//             subheading: "",
//             description: "",
//             layout: "left",
//           },
//         ],
//       };

//     case "highlight":
//       return {
//         ...base,
//         highlights: [
//           {
//             image: { url: "", preview: "" },
//             title: "",
//             description: "",
//           },
//         ],
//       };

//     case "faq":
//       return {
//         ...base,
//         faqs: [
//           {
//             question: "",
//             answer: "",
//           },
//         ],
//       };

//     case "list":
//       return {
//         ...base,
//         items: [{ id: uuidv4(), text: "", children: [] }],
//       };

//     case "cta":
//       return {
//         ...base,
//         cta: {
//           title: "",
//           description: "",
//           buttonText: "",
//           buttonLink: "",
//         },
//       };
//     case "review":
//       return {
//         ...base,
//         reviews: [
//           {
//             rating: 5,
//             text: "",
//             name: "",
//             country: "",
//           },
//         ],
//       };

//     case "package":
//       return {
//         ...base,
//         destination: "",
//         layout: "slider",
//         btnname: "See All Trips",
//         btnlink: "",
//         showArrows: true,
//       };

//     default:
//       return base;
//   }
// }

// function SectionEditor({
//   s,
//   updateSection,
//   handleUpload,
//   handleGridUpload,
//   handleImageContentUpload,
//   handleHighlightUpload,
// }) {
//   switch (s.type) {
//     case "heading":
//       return (
//         <div className="space-y-3">
//           {/* Label */}
//           <label className="text-sm font-medium text-gray-600">
//             Heading Level
//           </label>

//           {/* Level Selector */}
//           <select
//             value={s.level || 2}
//             onChange={(e) =>
//               updateSection(s.id, { level: Number(e.target.value) })
//             }
//             className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {[1, 2, 3, 4, 5, 6].map((l) => (
//               <option key={l} value={l}>
//                 H{l} {l === 1 ? "(Main Title)" : ""}
//               </option>
//             ))}
//           </select>

//           {/* Heading Text */}
//           <input
//             type="text"
//             value={s.text || ""}
//             onChange={(e) => updateSection(s.id, { text: e.target.value })}
//             placeholder="Enter heading text..."
//             className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Preview */}
//           <div className="mt-2 p-3 bg-gray-50 rounded-lg">
//             <span className="text-xs text-gray-500">Preview:</span>

//             {s.level === 1 && <h1 className="text-3xl font-bold">{s.text}</h1>}
//             {s.level === 2 && (
//               <h2 className="text-2xl font-semibold">{s.text}</h2>
//             )}
//             {s.level === 3 && (
//               <h3 className="text-xl font-semibold">{s.text}</h3>
//             )}
//             {s.level === 4 && <h4 className="text-lg font-medium">{s.text}</h4>}
//             {s.level === 5 && (
//               <h5 className="text-base font-medium">{s.text}</h5>
//             )}
//             {s.level === 6 && <h6 className="text-sm font-medium">{s.text}</h6>}
//           </div>
//         </div>
//       );
//     case "paragraph":
//       return (
//         <div>
//           <CustomRichEditor
//             value={s.content || ""}
//             onChange={(value) => updateSection(s.id, { content: value })}
//           />
//         </div>
//       );
//     case "image":
//       return (
//         <div className="space-y-3">
//           {/* FILE INPUT */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (!file) return;

//               // 🔥 instant preview
//               const previewUrl = URL.createObjectURL(file);

//               updateSection(s.id, {
//                 image: {
//                   ...s.image,
//                   preview: previewUrl,
//                 },
//               });

//               // 🔥 upload in background
//               handleUpload(file, s.id);
//             }}
//             className="block w-full text-sm"
//           />

//           {/* PREVIEW (LOCAL OR SERVER) */}
//           {(s.image?.preview || s.image?.url) && (
//             <img
//               src={
//                 s.image.preview ? s.image.preview : `${API_BASE}${s.image.url}`
//               }
//               alt="preview"
//               className="w-full max-w-xs rounded-lg border"
//             />
//           )}

//           {/* ALT TEXT */}
//           <input
//             placeholder="Alt text"
//             value={s.image?.alt || ""}
//             onChange={(e) =>
//               updateSection(s.id, {
//                 image: { ...s.image, alt: e.target.value },
//               })
//             }
//             className="w-full border p-2 rounded"
//           />
//         </div>
//       );

//     case "imageContent":
//       return (
//         <>
//           {s.sections.map((item, i) => (
//             <div key={i} className="border p-4 mt-3 rounded space-y-3">
//               {/* Layout */}
//               <select
//                 value={item.layout}
//                 onChange={(e) => {
//                   const updated = [...s.sections];
//                   updated[i].layout = e.target.value;
//                   updateSection(s.id, { sections: updated });
//                 }}
//                 className="border p-2"
//               >
//                 <option value="left">Image Left</option>
//                 <option value="right">Image Right</option>
//               </select>

//               {/* ✅ IMAGE UPLOAD */}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => {
//                   const file = e.target.files?.[0];
//                   if (!file) return;

//                   // 🔥 instant preview
//                   const preview = URL.createObjectURL(file);

//                   const updated = [...s.sections];
//                   updated[i].image = {
//                     ...updated[i].image,
//                     preview,
//                   };
//                   updateSection(s.id, { sections: updated });

//                   // 🔥 upload
//                   handleImageContentUpload(file, s.id, i);
//                 }}
//               />

//               {/* ✅ PREVIEW */}
//               {(item.image?.preview || item.image?.url) && (
//                 <img
//                   src={
//                     item.image.preview
//                       ? item.image.preview
//                       : `${API_BASE}${item.image.url}`
//                   }
//                   className="w-40 rounded border"
//                 />
//               )}

//               {/* HEADING */}
//               <input
//                 placeholder="Heading"
//                 value={item.heading}
//                 onChange={(e) => {
//                   const updated = [...s.sections];
//                   updated[i].heading = e.target.value;
//                   updateSection(s.id, { sections: updated });
//                 }}
//                 className="w-full border p-2"
//               />

//               {/* SUBHEADING */}
//               <input
//                 placeholder="Subheading"
//                 value={item.subheading}
//                 onChange={(e) => {
//                   const updated = [...s.sections];
//                   updated[i].subheading = e.target.value;
//                   updateSection(s.id, { sections: updated });
//                 }}
//                 className="w-full border p-2"
//               />

//               {/* DESCRIPTION */}
//               <textarea
//                 placeholder="Description"
//                 value={item.description}
//                 onChange={(e) => {
//                   const updated = [...s.sections];
//                   updated[i].description = e.target.value;
//                   updateSection(s.id, { sections: updated });
//                 }}
//                 className="w-full border p-2"
//               />

//               {/* DELETE */}
//               <button
//                 onClick={() => {
//                   const updated = s.sections.filter((_, idx) => idx !== i);
//                   updateSection(s.id, { sections: updated });
//                 }}
//                 className="text-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}

//           {/* ADD BLOCK */}
//           <button
//             onClick={() =>
//               updateSection(s.id, {
//                 sections: [
//                   ...s.sections,
//                   {
//                     image: { url: "", preview: "" },
//                     heading: "",
//                     subheading: "",
//                     description: "",
//                     layout: "left",
//                   },
//                 ],
//               })
//             }
//             className="mt-3 text-blue-600"
//           >
//             + Add Block
//           </button>
//         </>
//       );

//     case "imageGrid":
//       return (
//         <div className="space-y-4">
//           {/* Columns */}
//           <div>
//             <label className="text-sm font-medium">Columns</label>
//             <select
//               value={s.columns}
//               onChange={(e) =>
//                 updateSection(s.id, {
//                   columns: Number(e.target.value),
//                   images: s.images.slice(0, Number(e.target.value)), // 🔥 trim extra images
//                 })
//               }
//               className="border p-2 w-full mt-1"
//             >
//               <option value={2}>2 Images</option>
//               <option value={3}>3 Images</option>
//               <option value={4}>4 Images</option>
//             </select>
//           </div>

//           {/* Images */}
//           {s.images.map((img, i) => (
//             <div key={i} className="border p-3 rounded space-y-2">
//               {/* Upload */}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => {
//                   const file = e.target.files?.[0];
//                   if (!file) return;

//                   const preview = URL.createObjectURL(file);

//                   const updated = [...s.images];
//                   updated[i] = {
//                     ...updated[i],
//                     preview,
//                   };

//                   updateSection(s.id, { images: updated });

//                   handleGridUpload(file, s.id, i);
//                 }}
//               />

//               {/* Preview */}
//               {(img.preview || img.url) && (
//                 <img
//                   src={img.preview ? img.preview : `${API_BASE}${img.url}`}
//                   className="w-32 h-32 object-cover rounded border"
//                 />
//               )}

//               {/* ALT */}
//               <input
//                 placeholder="Alt text"
//                 value={img.alt || ""}
//                 onChange={(e) => {
//                   const updated = [...s.images];
//                   updated[i].alt = e.target.value;
//                   updateSection(s.id, { images: updated });
//                 }}
//                 className="border p-2 w-full"
//               />

//               {/* REMOVE */}
//               <button
//                 onClick={() => {
//                   const updated = s.images.filter((_, idx) => idx !== i);
//                   updateSection(s.id, { images: updated });
//                 }}
//                 className="text-red-600 text-sm"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Add Image */}
//           <button
//             disabled={s.images.length >= s.columns}
//             onClick={() =>
//               updateSection(s.id, {
//                 images: [...s.images, { url: "", alt: "", preview: "" }],
//               })
//             }
//             className={`px-4 py-2 rounded ${
//               s.images.length >= s.columns
//                 ? "bg-gray-300 cursor-not-allowed"
//                 : "bg-blue-600 text-white"
//             }`}
//           >
//             + Add Image ({s.images.length}/{s.columns})
//           </button>
//         </div>
//       );

//     case "highlight":
//       return (
//         <div className="space-y-4">
//           {s.highlights.map((item, i) => (
//             <div key={i} className="border p-4 rounded space-y-3">
//               {/* ✅ IMAGE UPLOAD */}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => {
//                   const file = e.target.files?.[0];
//                   if (!file) return;

//                   const preview = URL.createObjectURL(file);

//                   const updated = [...s.highlights];
//                   updated[i].image = {
//                     ...updated[i].image,
//                     preview,
//                   };

//                   updateSection(s.id, { highlights: updated });

//                   handleHighlightUpload(file, s.id, i);
//                 }}
//               />

//               {/* ✅ PREVIEW */}
//               {(item.image?.preview || item.image?.url) && (
//                 <img
//                   src={
//                     item.image.preview
//                       ? item.image.preview
//                       : `${API_BASE}${item.image.url}`
//                   }
//                   className="w-32 h-32 object-cover rounded border"
//                 />
//               )}

//               {/* TITLE */}
//               <input
//                 placeholder="Title"
//                 value={item.title}
//                 onChange={(e) => {
//                   const updated = [...s.highlights];
//                   updated[i].title = e.target.value;
//                   updateSection(s.id, { highlights: updated });
//                 }}
//                 className="w-full border p-2"
//               />

//               {/* DESCRIPTION */}
//               <textarea
//                 placeholder="Description"
//                 value={item.description}
//                 onChange={(e) => {
//                   const updated = [...s.highlights];
//                   updated[i].description = e.target.value;
//                   updateSection(s.id, { highlights: updated });
//                 }}
//                 className="w-full border p-2"
//               />

//               {/* DELETE */}
//               <button
//                 onClick={() => {
//                   const updated = s.highlights.filter((_, idx) => idx !== i);
//                   updateSection(s.id, { highlights: updated });
//                 }}
//                 className="text-red-600 text-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}

//           {/* ADD CARD */}
//           <button
//             onClick={() =>
//               updateSection(s.id, {
//                 highlights: [
//                   ...s.highlights,
//                   {
//                     image: { url: "", preview: "" },
//                     title: "",
//                     description: "",
//                   },
//                 ],
//               })
//             }
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             + Add Card
//           </button>
//         </div>
//       );

//     case "review":
//       return (
//         <>
//           {s.reviews.map((r, i) => (
//             <div key={i} className="border p-4 mb-3 rounded">
//               {/* RATING */}
//               <label>Rating</label>
//               <select
//                 value={r.rating}
//                 onChange={(e) => {
//                   const updated = [...s.reviews];
//                   updated[i].rating = Number(e.target.value);
//                   updateSection(s.id, { reviews: updated });
//                 }}
//                 className="block border p-2 mb-2"
//               >
//                 {[1, 2, 3, 4, 5].map((n) => (
//                   <option key={n} value={n}>
//                     {n} Star
//                   </option>
//                 ))}
//               </select>

//               {/* TEXT */}
//               <textarea
//                 placeholder="Review text"
//                 value={r.text}
//                 onChange={(e) => {
//                   const updated = [...s.reviews];
//                   updated[i].text = e.target.value;
//                   updateSection(s.id, { reviews: updated });
//                 }}
//                 className="block w-full border p-2 mb-2"
//               />

//               {/* NAME */}
//               <input
//                 placeholder="Name"
//                 value={r.name}
//                 onChange={(e) => {
//                   const updated = [...s.reviews];
//                   updated[i].name = e.target.value;
//                   updateSection(s.id, { reviews: updated });
//                 }}
//                 className="block w-full border p-2 mb-2"
//               />

//               {/* COUNTRY */}
//               <input
//                 placeholder="Country"
//                 value={r.country}
//                 onChange={(e) => {
//                   const updated = [...s.reviews];
//                   updated[i].country = e.target.value;
//                   updateSection(s.id, { reviews: updated });
//                 }}
//                 className="block w-full border p-2 mb-2"
//               />

//               {/* DELETE */}
//               <button
//                 onClick={() => {
//                   const updated = s.reviews.filter((_, idx) => idx !== i);
//                   updateSection(s.id, { reviews: updated });
//                 }}
//                 className="text-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}

//           {/* ADD REVIEW */}
//           <button
//             onClick={() =>
//               updateSection(s.id, {
//                 reviews: [
//                   ...s.reviews,
//                   { rating: 5, text: "", name: "", country: "" },
//                 ],
//               })
//             }
//             className="text-blue-600"
//           >
//             + Add Review
//           </button>
//         </>
//       );

//     case "faq":
//       return (
//         <>
//           {s.faqs.map((faq, i) => (
//             <div key={i} className="border p-4 mb-4 rounded-xl">
//               {/* QUESTION */}
//               <input
//                 placeholder="Question"
//                 value={faq.question}
//                 onChange={(e) => {
//                   const updated = [...s.faqs];
//                   updated[i].question = e.target.value;
//                   updateSection(s.id, { faqs: updated });
//                 }}
//                 className="w-full border p-2 mb-3 font-semibold"
//               />

//               {/* ANSWER */}
//               <CustomRichEditor
//                 value={faq.answer || ""}
//                 onChange={(value) => {
//                   const updated = [...s.faqs];
//                   updated[i].answer = value;
//                   updateSection(s.id, { faqs: updated });
//                 }}
//               />

//               {/* DELETE FAQ */}
//               <button
//                 onClick={() => {
//                   const updated = s.faqs.filter((_, idx) => idx !== i);
//                   updateSection(s.id, { faqs: updated });
//                 }}
//                 className="text-red-600 mt-4"
//               >
//                 Delete FAQ
//               </button>
//             </div>
//           ))}

//           {/* ADD FAQ */}
//           <button
//             onClick={() =>
//               updateSection(s.id, {
//                 faqs: [
//                   ...s.faqs,
//                   {
//                     question: "",
//                     answer: "",
//                   },
//                 ],
//               })
//             }
//             className="text-blue-600"
//           >
//             + Add FAQ
//           </button>
//         </>
//       );
//     case "cta":
//       return (
//         <div className="border p-4 rounded-xl space-y-3">
//           {/* TITLE */}
//           <input
//             placeholder="Title (Tailor Crafted)"
//             value={s.cta?.title || ""}
//             onChange={(e) =>
//               updateSection(s.id, {
//                 cta: { ...s.cta, title: e.target.value },
//               })
//             }
//             className="w-full border p-2 font-bold"
//           />

//           {/* DESCRIPTION */}
//           <textarea
//             placeholder="Description"
//             value={s.cta?.description || ""}
//             onChange={(e) =>
//               updateSection(s.id, {
//                 cta: { ...s.cta, description: e.target.value },
//               })
//             }
//             className="w-full border p-2"
//           />

//           {/* BUTTON TEXT */}
//           <input
//             placeholder="Button Text (BEGIN YOUR TRIP)"
//             value={s.cta?.buttonText || ""}
//             onChange={(e) =>
//               updateSection(s.id, {
//                 cta: { ...s.cta, buttonText: e.target.value },
//               })
//             }
//             className="w-full border p-2"
//           />

//           {/* BUTTON LINK */}
//           <input
//             placeholder="Button Link (/contact)"
//             value={s.cta?.buttonLink || ""}
//             onChange={(e) =>
//               updateSection(s.id, {
//                 cta: { ...s.cta, buttonLink: e.target.value },
//               })
//             }
//             className="w-full border p-2"
//           />
//         </div>
//       );

//     case "list":
//       return (
//         <ListEditor
//           items={s.items}
//           onChange={(items) => updateSection(s.id, { items })}
//         />
//       );

//     case "package":
//       return (
//         <div className="space-y-3">
//           <label className="text-sm">Destination</label>
//           <select
//             value={s.destination}
//             onChange={(e) =>
//               updateSection(s.id, { destination: e.target.value })
//             }
//             className="w-full border p-2"
//           >
//             <option value="">Select Destination</option>
//             <option value="tanzania">Tanzania</option>
//             <option value="kili">Kilimanjaro</option>
//           </select>

//           <input
//             placeholder="Button Name"
//             value={s.btnname}
//             onChange={(e) => updateSection(s.id, { btnname: e.target.value })}
//             className="w-full border p-2"
//           />

//           <input
//             placeholder="Button Link"
//             value={s.btnlink}
//             onChange={(e) => updateSection(s.id, { btnlink: e.target.value })}
//             className="w-full border p-2"
//           />

//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={s.showArrows}
//               onChange={(e) =>
//                 updateSection(s.id, { showArrows: e.target.checked })
//               }
//             />
//             Show Arrows
//           </label>
//         </div>
//       );

//     default:
//       return <p>Coming soon...</p>;
//   }
// }

// function ListEditor({ items, onChange }) {
//   const updateTree = (list, id, patch) =>
//     list.map((item) =>
//       item.id === id
//         ? { ...item, ...patch }
//         : { ...item, children: updateTree(item.children, id, patch) },
//     );

//   const removeFromTree = (list, id) =>
//     list
//       .filter((item) => item.id !== id)
//       .map((item) => ({
//         ...item,
//         children: removeFromTree(item.children, id),
//       }));

//   const updateItem = (id, patch) => {
//     onChange(updateTree(items, id, patch));
//   };

//   const addChild = (id) => {
//     onChange(
//       updateTree(items, id, {
//         children: [
//           ...findItem(items, id).children,
//           { id: uuidv4(), text: "", children: [] },
//         ],
//       }),
//     );
//   };

//   const addSibling = () => {
//     onChange([...items, { id: uuidv4(), text: "", children: [] }]);
//   };

//   const removeItem = (id) => {
//     onChange(removeFromTree(items, id));
//   };

//   return (
//     <ul className="ml-4 space-y-3">
//       {items.map((item) => (
//         <li key={item.id}>
//           <div className="flex gap-2 items-center">
//             <input
//               value={item.text}
//               onChange={(e) => updateItem(item.id, { text: e.target.value })}
//               placeholder="List item"
//               className="flex-1 rounded-xl border px-3 py-2"
//             />

//             <button
//               type="button"
//               onClick={() => addChild(item.id)}
//               className="px-3 py-2 rounded-xl border text-sm"
//             >
//               + Sub
//             </button>

//             <button
//               type="button"
//               onClick={() => removeItem(item.id)}
//               className="px-3 py-2 rounded-xl border text-red-600"
//             >
//               ✕
//             </button>
//           </div>

//           {item.children.length > 0 && (
//             <ListEditor
//               items={item.children}
//               onChange={(children) => updateItem(item.id, { children })}
//             />
//           )}
//         </li>
//       ))}

//       <button
//         type="button"
//         onClick={addSibling}
//         className="px-3 py-2 rounded-xl border text-sm"
//       >
//         + Add item
//       </button>
//     </ul>
//   );
// }

// /* helper */
// function findItem(items, id) {
//   for (const item of items) {
//     if (item.id === id) return item;
//     const found = findItem(item.children, id);
//     if (found) return found;
//   }
// }

// export default function TravelguideForm({ id }) {
//   // const { id } = useParams(); // check if editing

//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [subtitle, setSubTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [slug, setSlug] = useState("");
//   const [sections, setSections] = useState([]);
//   const [saving, setSaving] = useState(false);
//   const [preview, setPreview] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [thumbnail, setThumbnail] = useState(null);
//   // const [thumbnailPreview, setThumbnailPreview] = useState("");

//   // Auto-generate slug from title if slug is empty or matches previous pattern
//   const autoSlug = useMemo(() => slugify(title), [title]);

//   let uploadQueue = Promise.resolve();

//   function enqueueUpload(task) {
//     uploadQueue = uploadQueue.then(task).catch(console.error);
//     return uploadQueue;
//   }

//   // 🔹 load blog when editing
//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`${API_BASE}/travelguide/${id}`)
//       .then((res) => {
//         const b = res.data;
//         if (!b) return;
//         setTitle(b.title);
//         setSubTitle(b.subtitle);
//         setSlug(b.slug);
//         setCategory(b.category);
//         // setSections(b.sections || []);

//         setSections(
//           (b.sections || []).map((section) => {
//             const base = {
//               id: uuidv4(),
//               ...section,
//             };

//             switch (section.type) {
//               case "imageGrid":
//                 return {
//                   ...base,
//                   images: section.images || [],
//                   columns: section.columns || 2,
//                 };

//               case "imageContent":
//                 return {
//                   ...base,
//                   sections: section.sections || [],
//                 };

//               case "highlight":
//                 return {
//                   ...base,
//                   highlights: section.highlights || [],
//                 };

//               case "faq":
//                 return {
//                   ...base,
//                   faqs: section.faqs || [],
//                 };

//               case "list":
//                 return {
//                   ...base,
//                   items: section.items || [],
//                 };

//               case "review":
//                 return {
//                   ...base,
//                   reviews: section.reviews || [],
//                 };

//               case "paragraph":
//                 return {
//                   ...base,
//                   content: section.content || "",
//                 };

//               default:
//                 return base;
//             }
//           }),
//         );
//       })
//       .catch((err) => console.error("Failed to load blog:", err));
//   }, [id]);

//   function addSection(type) {
//     setSections((prev) => [...prev, newSection(type)]);
//   }

//   function updateSection(id, patch) {
//     setSections((prev) =>
//       prev.map((s) => (s.id === id ? { ...s, ...patch } : s)),
//     );
//   }

//   function removeSection(id) {
//     if (!confirm("Delete this section?")) return;
//     setSections((prev) => prev.filter((s) => s.id !== id));
//   }

//   function moveSection(id, dir) {
//     setSections((prev) => {
//       const idx = prev.findIndex((s) => s.id === id);
//       if (idx === -1) return prev;
//       const next = [...prev];
//       const swapIdx = dir === "up" ? idx - 1 : idx + 1;
//       if (swapIdx < 0 || swapIdx >= next.length) return prev;
//       [next[idx], next[swapIdx]] = [next[swapIdx], next[idx]];
//       return next;
//     });
//   }

//   //images

//   async function handleUpload(file, id) {
//     return enqueueUpload(async () => {
//       const form = new FormData();
//       form.append("file", file);

//       try {
//         const { data } = await axios.post(`${API_BASE}/uploads`, form, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         if (data?.url) {
//           updateSection(id, {
//             image: {
//               url: data.url,
//               preview: "",
//             },
//           });
//         }
//       } catch (e) {
//         console.error(e);
//         setError("Image upload failed");
//       }
//     });
//   }

//   async function handleImageContentUpload(file, sectionId, index) {
//     return enqueueUpload(async () => {
//       const form = new FormData();
//       form.append("file", file);

//       try {
//         const { data } = await axios.post(`${API_BASE}/uploads`, form, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         if (data?.url) {
//           const section = sections.find((s) => s.id === sectionId);
//           const updatedSections = [...section.sections];

//           updatedSections[index].image = {
//             url: data.url,
//             preview: "",
//           };

//           updateSection(sectionId, {
//             sections: updatedSections,
//           });
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     });
//   }

//   async function handleGridUpload(file, sectionId, index) {
//     return enqueueUpload(async () => {
//       const form = new FormData();
//       form.append("file", file);

//       try {
//         const { data } = await axios.post(`${API_BASE}/uploads`, form, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         if (data?.url) {
//           const section = sections.find((s) => s.id === sectionId);
//           const updatedImages = [...section.images];

//           updatedImages[index] = {
//             ...updatedImages[index],
//             url: data.url,
//             preview: "",
//           };

//           updateSection(sectionId, {
//             images: updatedImages,
//           });
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     });
//   }

//   async function handleHighlightUpload(file, sectionId, index) {
//     return enqueueUpload(async () => {
//       const form = new FormData();
//       form.append("file", file);

//       try {
//         const { data } = await axios.post(`${API_BASE}/uploads`, form, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         if (data?.url) {
//           const section = sections.find((s) => s.id === sectionId);
//           const updated = [...section.highlights];

//           updated[index].image = {
//             url: data.url,
//             preview: "",
//           };

//           updateSection(sectionId, {
//             highlights: updated,
//           });
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     });
//   }

//   function cleanSections(sections) {
//     return sections.map((s) => {
//       switch (s.type) {
//         case "heading":
//           return {
//             type: "heading",
//             text: s.text,
//             level: s.level,
//           };

//         case "paragraph":
//           return {
//             type: "paragraph",
//             content: s.content,
//           };

//         case "image":
//           return {
//             type: "image",
//             image: s.image,
//           };

//         case "imageGrid":
//           return {
//             type: "imageGrid",
//             images: s.images,
//             columns: s.columns,
//           };

//         case "imageContent":
//           return {
//             type: "imageContent",
//             title: s.title,
//             sections: s.sections,
//           };

//         case "highlight":
//           return {
//             type: "highlight",
//             highlights: s.highlights,
//           };

//         case "faq":
//           return {
//             type: "faq",
//             faqs: s.faqs,
//           };

//         case "list":
//           return {
//             type: "list",
//             items: s.items,
//           };

//         case "cta":
//           return {
//             type: "cta",
//             cta: s.cta,
//           };

//         case "review":
//           return {
//             type: "review",
//             reviews: s.reviews,
//           };

//         case "package":
//           return {
//             type: "package",
//             destination: s.destination,
//             layout: s.layout,
//             btnname: s.btnname,
//             btnlink: s.btnlink,
//             showArrows: s.showArrows,
//           };

//         default:
//           return s;
//       }
//     });
//   }

//   async function handleSave(e) {
//     e.preventDefault();

//     if (!title.trim()) {
//       setError("Title is required");
//       return;
//     }

//     setSaving(true);
//     setError("");
//     setSuccess("");

//     try {
//       const form = new FormData();
//       form.append("title", title.trim());
//       form.append("subtitle", subtitle);

//       form.append("slug", (slug || autoSlug).trim());
//       form.append("category", category);

//       form.append("sections", JSON.stringify(cleanSections(sections)));
//       if (thumbnail) form.append("thumbnail", thumbnail);

//       if (id) {
//         await axios.put(`${API_BASE}/travelguide/${id}`, form, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         setSuccess("Travelguide updated ✓");
//       } else {
//         await axios.post(`${API_BASE}/travelguide`, form, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         setSuccess("Travelguide created ✓");
//       }

//       // setSuccess(`Saved ✓ Post ID: ${data._id}`);
//       setSections([]);
//       setTitle("");
//       setSubTitle("");
//       setSlug("");
//       router.push("/dashboard/travelguidenew");
//     } catch (e) {
//       console.error(e);
//       setError(e?.response?.data?.error || "Save failed");
//     } finally {
//       setSaving(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="flex items-center justify-between">
//           <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
//             {id ? "Edit Travelguide" : "Create New Travelguide"}
//           </h1>
//           <div className="flex gap-2">
//             <button
//               type="button"
//               onClick={() => setPreview((p) => !p)}
//               className="px-4 py-2 rounded-xl border shadow-sm hover:shadow transition"
//             >
//               {preview ? "Edit" : "Preview"}
//             </button>
//             <button
//               type="button"
//               onClick={handleSave}
//               disabled={saving}
//               className="px-5 py-2 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 disabled:opacity-60"
//             >
//               {saving ? "Saving..." : "Save Post"}
//             </button>
//           </div>
//         </div>

//         {/* Meta */}
//         <div className="mt-6 grid md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Title
//             </label>
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter post title"
//               className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Sub Title
//             </label>
//             <input
//               value={subtitle}
//               onChange={(e) => setSubTitle(e.target.value)}
//               placeholder="Enter post sub title"
//               className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>
//         <div className=" grid grid-cols-2 mt-8 items-center gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Category
//             </label>

//             <select
//               name="category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//             >
//               <option value="">Select Category</option>

//               <option value="Kilimanjaro Travel Guide">
//                 Kilimanjaro Travel Guide
//               </option>

//               <option value="Tanzania Travel Guide">
//                 Tanzania Travel Guide
//               </option>
//             </select>
//           </div>
//         </div>

//         {error && (
//           <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">
//             {error}
//           </div>
//         )}
//         {success && (
//           <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-700 border border-green-200">
//             {success}
//           </div>
//         )}

//         {/* Thumbnail Upload */}
//         <div className="md:col-span-2 mt-8">
//           <label className="block text-sm font-medium text-gray-700">
//             Thumbnail
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
//             className="mt-1 block w-full text-sm"
//           />
//           {thumbnail && (
//             <img
//               src={URL.createObjectURL(thumbnail)}
//               alt="thumbnail"
//               className="w-40 mt-3 rounded-xl border"
//             />
//           )}
//         </div>

//         {/* Add section toolbar */}
//         <div className="sticky top-0 z-50 bg-gray-50 py-4 border-b border-gray-200 ">
//           <div className=" flex justify-between py-4">
//             <h2 className="text-lg font-semibold text-gray-800 mb-3">
//               Add Section
//             </h2>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {SECTION_TYPES.map((s) => (
//               <button
//                 key={s.type}
//                 type="button"
//                 onClick={() => addSection(s.type)}
//                 className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-50 shadow-sm"
//               >
//                 + {s.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Editor or Preview */}
//         {!preview ? (
//           <div className="mt-6 ">
//             {sections.length === 0 && (
//               <div className="text-gray-500 italic">
//                 No sections yet. Use the buttons above to add content blocks.
//               </div>
//             )}

//             {sections.map((s, idx) => (
//               <div
//                 key={s.id}
//                 className="  bg-white rounded-2xl border shadow-sm p-4 mb-4"
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-gray-700">
//                     {idx + 1}. {s.type.toUpperCase()}
//                   </span>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => moveSection(s.id, "up")}
//                       className="px-2 py-1 rounded-lg border"
//                     >
//                       ↑
//                     </button>
//                     <button
//                       onClick={() => moveSection(s.id, "down")}
//                       className="px-2 py-1 rounded-lg border"
//                     >
//                       ↓
//                     </button>
//                     <button
//                       onClick={() => removeSection(s.id)}
//                       className="px-2 py-1 rounded-lg border text-red-600"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-3">
//                   <SectionEditor
//                     s={s}
//                     updateSection={updateSection}
//                     handleUpload={handleUpload}
//                     handleGridUpload={handleGridUpload}
//                     handleImageContentUpload={handleImageContentUpload}
//                     handleHighlightUpload={handleHighlightUpload}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <Preview title={title} slug={slug || autoSlug} sections={sections} />
//         )}
//       </div>
//     </div>
//   );
// }

// function RenderList({ items }) {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//           {item.text}
//           {item.children?.length > 0 && <RenderList items={item.children} />}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export function Preview({ title, slug, sections }) {
//   return (
//     <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
//       <div className="flex items-baseline justify-between">
//         <h2 className="text-2xl font-bold text-blue-700">Preview</h2>
//         <span className="text-xs text-gray-500">slug: /blog/{slug}</span>
//       </div>
//       <article className="prose max-w-none mt-4">
//         <h1>{title || "(Untitled Post)"}</h1>
//         {sections.map((s) => {
//           if (s.type === "heading") {
//             const Tag = `h${s.level}`;
//             return <Tag key={s.id}>{s.text}</Tag>;
//           }
//           if (s.type === "paragraph") {
//             return (
//               <div
//                 key={s.id}
//                 dangerouslySetInnerHTML={{
//                   __html: s.content || "",
//                 }}
//               />
//             );
//           }
//           if (s.type === "quote")
//             return (
//               <blockquote key={s.id}>
//                 <p>{s.text}</p>
//               </blockquote>
//             );

//           if (s.type === "list") {
//             return <RenderList key={s.id} items={s.items} />;
//           }

//           if (s.type === "image")
//             return (
//               <figure key={s.id}>
//                 {s.image?.url && (
//                   <img
//                     src={`${API_BASE}${s.image.url}`}
//                     alt={s.image.alt || "image"}
//                     className="rounded-xl"
//                   />
//                 )}
//                 {s.image?.alt && (
//                   <figcaption className="text-sm text-gray-500">
//                     {s.image.alt}
//                   </figcaption>
//                 )}
//               </figure>
//             );
//           if (s.type === "cta")
//             return (
//               <div
//                 key={s.id}
//                 className="bg-teal-400 text-center rounded-lg py-10 px-6 my-6"
//               >
//                 <h3 className="text-xl font-bold">{s.cta?.title}</h3>
//                 <p className="mb-4">{s.cta?.description}</p>

//                 <a
//                   href={s.cta?.buttonLink || "#"}
//                   className="bg-purple-600 text-white px-6 py-2 rounded"
//                 >
//                   {s.cta?.buttonText}
//                 </a>
//               </div>
//             );
//           if (s.type === "imageGrid") {
//             return (
//               <div
//                 key={s.id}
//                 className={`grid gap-4 ${
//                   s.columns === 2
//                     ? "grid-cols-2"
//                     : s.columns === 3
//                       ? "grid-cols-3"
//                       : "grid-cols-4"
//                 }`}
//               >
//                 {s.images.map((img, i) => (
//                   <img
//                     key={i}
//                     src={img.url ? `${API_BASE}${img.url}` : ""}
//                     alt={img.alt || "image"}
//                     className="rounded-lg"
//                   />
//                 ))}
//               </div>
//             );
//           }
//           if (s.type === "imageContent") {
//             return (
//               <div key={s.id}>
//                 <h2>{s.title}</h2>

//                 {s.sections.map((item, i) => (
//                   <div
//                     key={i}
//                     className={`flex gap-6 ${
//                       item.layout === "right" ? "flex-row-reverse" : ""
//                     }`}
//                   >
//                     <img
//                       src={
//                         item.image?.url
//                           ? `${API_BASE}${item.image.url}`
//                           : "image s hshs"
//                       }
//                       alt="image"
//                       className="w-1/2 rounded"
//                     />

//                     <div>
//                       <h3>{item.heading}</h3>
//                       <h4>{item.subheading}</h4>
//                       <p>{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             );
//           }

//           if (s.type === "highlight") {
//             return (
//               <div key={s.id} className="grid grid-cols-3 gap-4">
//                 {s.highlights.map((item, i) => (
//                   <div key={i} className="border p-4 rounded">
//                     <img
//                       src={
//                         item.image?.url ? `${API_BASE}${item.image.url}` : ""
//                       }
//                       alt={item.title || "highlight"}
//                       className="w-full h-40 object-cover rounded"
//                     />
//                     <h3>{item.title}</h3>
//                     <p>{item.description}</p>
//                   </div>
//                 ))}
//               </div>
//             );
//           }

//           if (s.type === "faq") {
//             return (
//               <div key={s.id}>
//                 {s.faqs.map((faq, i) => (
//                   <div key={i} className="mb-6">
//                     <h3 className="font-bold mb-2">{faq.question}</h3>

//                     <div
//                       className="rich-text"
//                       dangerouslySetInnerHTML={{
//                         __html: faq.answer || "",
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             );
//           }

//           if (s.type === "review") {
//             return (
//               <div key={s.id} className="grid grid-cols-2 gap-4">
//                 {s.reviews.map((r, i) => (
//                   <div key={i} className="border p-4 rounded">
//                     <p>{"⭐".repeat(r.rating)}</p>
//                     <p>{r.text}</p>
//                     <p className="font-bold">{r.name}</p>
//                     <p className="text-sm text-gray-500">{r.country}</p>
//                   </div>
//                 ))}
//               </div>
//             );
//           }
//           if (s.type === "divider") return <hr key={s.id} />;
//           return null;
//         })}
//       </article>
//     </div>
//   );
// }

"use client";
import React, { useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomRichEditor from "../../components/CustomRichEditor";

const API_BASE = "http://localhost:8000";

const SECTION_TYPES = [
  { type: "h1", label: "Heading (H1)" },
  { type: "h2", label: "Subheading (H2)" },
  { type: "h3", label: "Minor Heading (H3)" },
  { type: "paragraph", label: "Paragraph" },
  { type: "image", label: "Image" },
  { type: "list", label: "List" },
  { type: "quote", label: "Quote" },
  { type: "cta", label: "Call to Action" },
  { type: "divider", label: "Divider" },
];

function slugify(str = "") {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function newSection(type) {
  // const base = { id: crypto.randomUUID(), type };
  const base = { id: uuidv4(), type };
  switch (type) {
    case "h1":
    case "h2":
    case "h3":
    case "paragraph":
    case "quote":
      return { ...base, text: "" };
    case "image":
      return { ...base, imageUrl: "", imageAlt: "" };
    case "list":
      return {
        ...base,
        items: [
          {
            id: uuidv4(),
            text: "",
            children: [],
          },
        ],
      };
    case "cta":
      return {
        ...base,
        text: "",
        ctaTitle: "",
        ctaText: "Contact Us Today!",
        ctaHref: "/contact",
      };
    case "divider":
      return base;
    default:
      return base;
  }
}

function ListEditor({ items, onChange }) {
  const updateTree = (list, id, patch) =>
    list.map((item) =>
      item.id === id
        ? { ...item, ...patch }
        : { ...item, children: updateTree(item.children, id, patch) },
    );

  const removeFromTree = (list, id) =>
    list
      .filter((item) => item.id !== id)
      .map((item) => ({
        ...item,
        children: removeFromTree(item.children, id),
      }));

  const updateItem = (id, patch) => {
    onChange(updateTree(items, id, patch));
  };

  const addChild = (id) => {
    onChange(
      updateTree(items, id, {
        children: [
          ...findItem(items, id).children,
          { id: uuidv4(), text: "", children: [] },
        ],
      }),
    );
  };

  const addSibling = () => {
    onChange([...items, { id: uuidv4(), text: "", children: [] }]);
  };

  const removeItem = (id) => {
    onChange(removeFromTree(items, id));
  };

  return (
    <ul className="ml-4 space-y-3">
      {items.map((item) => (
        <li key={item.id}>
          <div className="flex gap-2 items-center">
            <input
              value={item.text}
              onChange={(e) => updateItem(item.id, { text: e.target.value })}
              placeholder="List item"
              className="flex-1 rounded-xl border px-3 py-2"
            />

            <button
              type="button"
              onClick={() => addChild(item.id)}
              className="px-3 py-2 rounded-xl border text-sm"
            >
              + Sub
            </button>

            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="px-3 py-2 rounded-xl border text-red-600"
            >
              ✕
            </button>
          </div>

          {item.children.length > 0 && (
            <ListEditor
              items={item.children}
              onChange={(children) => updateItem(item.id, { children })}
            />
          )}
        </li>
      ))}

      <button
        type="button"
        onClick={addSibling}
        className="px-3 py-2 rounded-xl border text-sm"
      >
        + Add item
      </button>
    </ul>
  );
}

/* helper */
function findItem(items, id) {
  for (const item of items) {
    if (item.id === id) return item;
    const found = findItem(item.children, id);
    if (found) return found;
  }
}

export default function TravelguideForm({ id }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");

  const [slug, setSlug] = useState("");
  const [sections, setSections] = useState([]);
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState(""); // comma separated
  const [thumbnail, setThumbnail] = useState(null);
  // const [thumbnailPreview, setThumbnailPreview] = useState("");

  const [faq, setFaq] = useState([
    {
      title: "",
      subtitle: "",
      faqs: [
        {
          question: "",
          answer: [{ type: "paragraph", content: "" }],
        },
      ],
    },
  ]);

  // Auto-generate slug from title if slug is empty or matches previous pattern
  const autoSlug = useMemo(() => slugify(title), [title]);

  // 🔹 load blog when editing
  useEffect(() => {
    if (!id) {
      console.log("❌ No ID");
      return;
    }

    console.log("✅ Fetching ID:", id);
    axios
      .get(`${API_BASE}/api/travelguide/${id}`)
      .then((res) => {
        const b = res.data;
        setTitle(b.title);
        setSubTitle(b.subtitle);
        setSlug(b.slug);
        setCategory(b.category);
        setKeywords(b.keywords.join(", "));
        // setSections(b.sections || []);
        setSections(
          (b.sections || []).map((section) => ({
            id: uuidv4(), // 🔥 critical fix
            ...section,
            items: section.items || [],
          })),
        );
        setFaq(
          b.faq?.length
            ? b.faq.map((section) => ({
                title: section.title || "",
                subtitle: section.subtitle || "",
                faqs: (section.faqs || []).map((faq) => ({
                  question: faq.question || "",

                  // 🔥 FIX HERE
                  answer: (faq.answer || faq.answerBlocks || []).map(
                    (block) => {
                      if (block.type === "list") {
                        return {
                          type: "list",
                          content: block.items || [],
                        };
                      }

                      return {
                        type: block.type === "heading" ? "header" : block.type,
                        content: block.content || block.text || "",
                      };
                    },
                  ),
                })),
              }))
            : [
                {
                  title: "",
                  subtitle: "",
                  faqs: [
                    {
                      question: "",
                      answer: [{ type: "paragraph", content: "" }],
                    },
                  ],
                },
              ],
        );

        // if (b.thumbnail) setThumbnailPreview(`${API_BASE}${b.thumbnail}`);
      })
      .catch((err) => console.error("Failed to load blog:", err));
  }, [id]);

  function addSection(type) {
    setSections((prev) => [...prev, newSection(type)]);
  }

  function updateSection(id, patch) {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    );
  }

  function removeSection(id) {
    setSections((prev) => prev.filter((s) => s.id !== id));
  }

  function moveSection(id, dir) {
    setSections((prev) => {
      const idx = prev.findIndex((s) => s.id === id);
      if (idx === -1) return prev;
      const next = [...prev];
      const swapIdx = dir === "up" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= next.length) return prev;
      [next[idx], next[swapIdx]] = [next[swapIdx], next[idx]];
      return next;
    });
  }

  async function handleUpload(file, id) {
    const form = new FormData();
    form.append("file", file);
    try {
      const { data } = await axios.post(`${API_BASE}/api/uploads`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (data?.url) updateSection(id, { imageUrl: data.url });
    } catch (e) {
      console.error(e);
      setError("Image upload failed");
    }
  }

  // SECTION
  const addFaqSection = () => {
    setFaq([...faq, { title: "", subtitle: "", faqs: [] }]);
  };

  const removeFaqSection = (i) => {
    const updated = [...faq];
    updated.splice(i, 1);
    setFaq(updated);
  };

  const handleFaqSection = (i, e) => {
    const updated = [...faq];
    updated[i][e.target.name] = e.target.value;
    setFaq(updated);
  };

  // QUESTION
  const addFaq = (sectionIndex) => {
    const updated = [...faq];
    updated[sectionIndex].faqs.push({
      question: "",
      answer: [{ type: "paragraph", content: "" }],
    });
    setFaq(updated);
  };

  const handleFaq = (sectionIndex, faqIndex, e) => {
    const updated = [...faq];
    updated[sectionIndex].faqs[faqIndex].question = e.target.value;
    setFaq(updated);
  };

  const removeFaq = (sectionIndex, faqIndex) => {
    const updated = [...faq];
    updated[sectionIndex].faqs.splice(faqIndex, 1);
    setFaq(updated);
  };

  // ANSWER
  const addAnswer = (sectionIndex, faqIndex) => {
    const updated = [...faq];
    updated[sectionIndex].faqs[faqIndex].answer.push({
      type: "paragraph",
      content: "",
    });
    setFaq(updated);
  };

  const handleAnswer = (sectionIndex, faqIndex, ansIndex, e) => {
    const updated = [...faq];
    updated[sectionIndex].faqs[faqIndex].answer[ansIndex][e.target.name] =
      e.target.value;
    setFaq(updated);
  };

  const removeAnswer = (sectionIndex, faqIndex, ansIndex) => {
    const updated = [...faq];
    updated[sectionIndex].faqs[faqIndex].answer.splice(ansIndex, 1);
    setFaq(updated);
  };

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const form = new FormData();
      form.append("title", title.trim());
      form.append("subtitle", subtitle);

      // form.append("slug", (slug || autoSlug).trim());
      form.append("category", category);
      form.append("keywords", keywords);
      form.append(
        "sections",
        JSON.stringify(sections.map(({ id, ...rest }) => rest)),
      );
      form.append("faq", JSON.stringify(faq));
      if (thumbnail) form.append("thumbnail", thumbnail);

      if (id) {
        await axios.put(`${API_BASE}/api/travelguide/${id}`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSuccess("Blog updated ✓");
      } else {
        await axios.post(`${API_BASE}/api/travelguide`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSuccess("Blog created ✓");
      }

      // setSuccess(`Saved ✓ Post ID: ${data._id}`);
      setSections([]);
      setTitle("");
      setSubTitle("");
      setSlug("");
      router.push("/dashboard/travelguidenew");
    } catch (e) {
      console.error(e);
      setError(e?.response?.data?.error || "Save failed");
    } finally {
      setSaving(false);
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
            Create Travel guide
          </h1>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPreview((p) => !p)}
              className="px-4 py-2 rounded-xl border shadow-sm hover:shadow transition"
            >
              {preview ? "Edit" : "Preview"}
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Post"}
            </button>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              sub Title
            </label>
            <input
              value={subtitle}
              onChange={(e) => setSubTitle(e.target.value)}
              placeholder="Enter post title"
              className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-700 border border-green-200">
            {success}
          </div>
        )}

        {/* Add section toolbar */}
        <div className="mt-8 sticky top-0 z-30 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Add Section
          </h2>
          <div className="flex flex-wrap gap-2">
            {SECTION_TYPES.map((s) => (
              <button
                key={s.type}
                type="button"
                onClick={() => addSection(s.type)}
                className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-50 shadow-sm"
              >
                + {s.label}
              </button>
            ))}
          </div>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full rounded-xl border px-3 py-2"
        >
          <option value="">-- Select Category --</option>
          <option value="Kilimanjaro Travel Guide">
            Kilimanjaro Travel Guide
          </option>
          <option value="Tanzania Travel Guide">Tanzania Travel Guide</option>
        </select>

        {/* Keywords */}
        <div className=" mt-8">
          <label className="block text-sm font-medium text-gray-700">
            Keywords
          </label>
          <input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="comma, separated, keywords"
            className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Enter keywords separated by commas
          </p>
        </div>

        {/* Thumbnail Upload */}
        <div className="md:col-span-2 mt-8">
          <label className="block text-sm font-medium text-gray-700">
            Thumbnail
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
            className="mt-1 block w-full text-sm"
          />
          {thumbnail && (
            <p className="text-xs text-gray-500 mt-2">{thumbnail.name}</p>
          )}
        </div>

        {/* Editor or Preview */}
        {!preview ? (
          <div className="mt-6 space-y-4">
            {sections.length === 0 && (
              <div className="text-gray-500 italic">
                No sections yet. Use the buttons above to add content blocks.
              </div>
            )}

            {sections.map((s, idx) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl border shadow-sm p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {idx + 1}. {s.type.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => moveSection(s.id, "up")}
                      className="px-2 py-1 rounded-lg border"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveSection(s.id, "down")}
                      className="px-2 py-1 rounded-lg border"
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => removeSection(s.id)}
                      className="px-2 py-1 rounded-lg border text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  {s.type === "h1" ||
                  s.type === "h2" ||
                  s.type === "h3" ||
                  s.type === "paragraph" ||
                  s.type === "quote" ? (
                    s.type === "paragraph" || s.type === "quote" ? (
                      <CustomRichEditor
                        value={s.text || ""}
                        onChange={(value) =>
                          updateSection(s.id, { text: value })
                        }
                      />
                    ) : (
                      <input
                        type="text"
                        value={s.text || ""}
                        onChange={(e) =>
                          updateSection(s.id, { text: e.target.value })
                        }
                        placeholder={`Write ${s.type.toUpperCase()} text...`}
                        className="w-full rounded-xl border px-3 py-2"
                      />
                    )
                  ) : null}

                  {s.type === "image" && (
                    <div className="grid md:grid-cols-3 gap-3 items-center">
                      <div className="md:col-span-2">
                        <label className="block text-sm text-gray-700">
                          Image URL
                        </label>
                        <input
                          value={s.imageUrl}
                          onChange={(e) =>
                            updateSection(s.id, { imageUrl: e.target.value })
                          }
                          placeholder="https://..."
                          className="mt-1 w-full rounded-xl border px-3 py-2"
                        />
                        <label className="block text-sm text-gray-700 mt-3">
                          Alt text
                        </label>
                        <input
                          value={s.imageAlt || ""}
                          onChange={(e) =>
                            updateSection(s.id, { imageAlt: e.target.value })
                          }
                          placeholder="Describe the image"
                          className="mt-1 w-full rounded-xl border px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700">
                          Upload
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            e.target.files?.[0] &&
                            handleUpload(e.target.files[0], s.id)
                          }
                          className="mt-1 block w-full text-sm"
                        />
                        {s.imageUrl && (
                          <img
                            src={s.imageUrl}
                            alt="preview"
                            className="mt-2 rounded-xl border"
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {s.type === "list" && (
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        List Items (supports nested lists)
                      </label>

                      <ListEditor
                        items={s.items}
                        onChange={(items) => updateSection(s.id, { items })}
                      />
                    </div>
                  )}

                  {s.type === "cta" && (
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="md:col-span-3">
                        <label className="block text-sm text-gray-700">
                          CTA Banner Text
                        </label>
                        <input
                          value={s.text || ""}
                          onChange={(e) =>
                            updateSection(s.id, { text: e.target.value })
                          }
                          placeholder="Wondering if your ccTLD setup is optimized?"
                          className="mt-1 w-full rounded-xl border px-3 py-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-700">
                          CTA Content
                        </label>
                        <input
                          value={s.ctaTitle || ""}
                          onChange={(e) =>
                            updateSection(s.id, { ctaTitle: e.target.value })
                          }
                          placeholder="Contact Us Today!"
                          className="mt-1 w-full rounded-xl border px-3 py-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-700">
                          Button Text
                        </label>
                        <input
                          value={s.ctaText || ""}
                          onChange={(e) =>
                            updateSection(s.id, { ctaText: e.target.value })
                          }
                          placeholder="Contact Us Today!"
                          className="mt-1 w-full rounded-xl border px-3 py-2"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm text-gray-700">
                          Button Link
                        </label>
                        <input
                          value={s.ctaHref || ""}
                          onChange={(e) =>
                            updateSection(s.id, { ctaHref: e.target.value })
                          }
                          placeholder="/contact or https://..."
                          className="mt-1 w-full rounded-xl border px-3 py-2"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Preview title={title} slug={slug || autoSlug} sections={sections} />
        )}

        {/* ================= FAQ SECTION ================= */}
        <div className="mt-10">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">FAQ</h3>
            <button
              type="button"
              onClick={addFaqSection}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              + Add Section
            </button>
          </div>

          {faq.map((section, i) => (
            <div key={i} className="border p-4 mt-4 bg-gray-50 rounded">
              <input
                name="title"
                placeholder="Section Title"
                className="border p-2 w-full mb-2"
                value={section.title}
                onChange={(e) => handleFaqSection(i, e)}
              />

              <input
                name="subtitle"
                placeholder="Section Subtitle"
                className="border p-2 w-full mb-2"
                value={section.subtitle}
                onChange={(e) => handleFaqSection(i, e)}
              />

              <button
                type="button"
                onClick={() => addFaq(i)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                + Add Question
              </button>

              {section.faqs.map((item, j) => (
                <div key={j} className="border p-3 bg-white mt-3 rounded">
                  <input
                    className="border p-2 w-full mb-2"
                    placeholder="Question"
                    value={item.question}
                    onChange={(e) => handleFaq(i, j, e)}
                  />

                  <button
                    type="button"
                    onClick={() => addAnswer(i, j)}
                    className="bg-purple-600 text-white px-3 py-1 rounded"
                  >
                    + Add Answer
                  </button>

                  {item.answer.map((ans, k) => (
                    <div key={k} className="border p-2 mt-2 rounded">
                      <CustomRichEditor
                        value={ans.content || ""}
                        onChange={(value) => {
                          const updated = [...faq];
                          updated[i].faqs[j].answer[k].content = value;
                          setFaq(updated);
                        }}
                      />

                      <button
                        type="button"
                        onClick={() => removeAnswer(i, j, k)}
                        className="bg-red-600 text-white px-2 py-1 mt-2 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => removeFaq(i, j)}
                    className="bg-red-600 text-white px-3 py-1 mt-3 rounded"
                  >
                    Remove Question
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => removeFaqSection(i)}
                className="bg-red-700 text-white px-3 py-1 mt-4 rounded"
              >
                Remove Section
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RenderList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}
          {item.children?.length > 0 && <RenderList items={item.children} />}
        </li>
      ))}
    </ul>
  );
}

export function Preview({ title, slug, sections }) {
  return (
    <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-blue-700">Preview</h2>
        <span className="text-xs text-gray-500">slug: /blog/{slug}</span>
      </div>
      <article className="prose max-w-none mt-4">
        <h1>{title || "(Untitled Post)"}</h1>
        {sections.map((s) => {
          if (s.type === "h1") return <h1 key={s.id}>{s.text}</h1>;
          if (s.type === "h2") return <h2 key={s.id}>{s.text}</h2>;
          if (s.type === "h3") return <h3 key={s.id}>{s.text}</h3>;
          if (s.type === "paragraph") {
            return (
              <div
                key={s.id}
                dangerouslySetInnerHTML={{
                  __html: s.text || "",
                }}
              />
            );
          }
          if (s.type === "quote")
            return (
              <blockquote key={s.id}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: s.text || "",
                  }}
                />
              </blockquote>
            );
          if (s.type === "list") {
            return <RenderList key={s.id} items={s.items} />;
          }

          if (s.type === "image")
            return (
              <figure key={s.id}>
                {s.imageUrl && (
                  <img
                    src={s.imageUrl}
                    alt={s.imageAlt || "image"}
                    className="rounded-xl"
                  />
                )}
                {s.imageAlt && (
                  <figcaption className="text-sm text-gray-500">
                    {s.imageAlt}
                  </figcaption>
                )}
              </figure>
            );
          if (s.type === "cta")
            return (
              <div
                key={s.id}
                className="bg-teal-400 text-center rounded-lg py-10 px-6 my-6"
              >
                <p className="text-gray-800 text-lg md:text-xl mb-6">
                  {s.text}
                </p>
                <p className="text-gray-800 text-lg  mb-6">{s.ctaTitle}</p>
                <a
                  href={s.ctaHref || "#"}
                  className="bg-purple-600 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition"
                >
                  {s.ctaText || "Learn more"}
                </a>
              </div>
            );
          if (s.type === "divider") return <hr key={s.id} />;
          return null;
        })}
      </article>
    </div>
  );
}
