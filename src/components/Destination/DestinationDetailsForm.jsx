"use client";

import React, { useState, useEffect } from "react";
import API from "../../api/axios.js";


const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ||
  "https://imarabackend.imarakilelenisafaris.com";

const getImageUrl = (url) => {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${API_BASE}/${url.replace(/^\/+/, "")}`;
};



const DestinationDetailsForm = ({ editData, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    destination: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  const [landingImage, setLandingImage] = useState(null);
const [landingImagePreview, setLandingImagePreview] = useState(null);


  // =============== Dynamic sections ===================
  // // const [overviewinfo, setOverviewinfo] = useState([{ title: "", subtitle: "", description:[], image: null, imagePreview: null }]);
  const [overviewinfo, setOverviewinfo] = useState([
    {
      title: "",
      subtitle: "",
      description: [{ type: "paragraph", content: "" }],
      image: null,
      imagePreview: null,
    },
  ]);

  // const [highlight, setHighlight] = useState([{ heading:"", title:"", description:"", image:null, imagePreview:null }]);
  const [highlight, setHighlight] = useState([
    {
      heading: "",
      section: [
        { title: "", description: "", image: null, imagePreview: null },
      ],
    },
  ]);

  // const [migration, setMigration] = useState([{ title:"", subtitle:"", description:"", nationalpark:"", details:[], image:null, imagePreview:null }]);

  const [migration, setMigration] = useState([
    {
      title: "",
      subtitle: "",
      description: [{ type: "paragraph", content: "" }],
      section: [
        {
          nationalpark: "",
          details: [{ type: "paragraph", content: "" }],
          image: null,
          imagePreview: null,
        },
      ],
    },
  ]);

  const [adventure, setAdventure] = useState([
    {
      title: "",
      subtitle: "",
      description: "",
      image: null,
      imagePreview: null,
    },
  ]);
  // const [besttime, setBesttime] = useState([{ title:"", month:"", content:"" }]);
  const [besttime, setBesttime] = useState([
    {
      title: "",
      section: [{ month: "", content: "" }],
    },
  ]);

  const [qa, setQa] = useState([{ question: "", answer: [] }]);

  // ============= Prefill for edit =====================
  // useEffect(() => {
  //   if (editData) {
  //     setFormData(editData);
  //     setOverviewinfo(editData.overviewinfo ?? []);
  //     setHighlight(editData.highlight ?? []);
  //     setMigration(editData.migration ?? []);
  //     setAdventure(editData.adventure ?? []);
  //     setBesttime(editData.besttime ?? []);
  //     setQa(editData.aboutBooking ?? []);
  //     setMainImagePreview(editData.image);
  //   }
  // }, [editData]);

  useEffect(() => {
  if (!editData) return;

  setFormData(editData);
  

  setHighlight(
    (editData.highlight || []).map(h => ({
      ...h,
      section: h.section.map(s => ({
        ...s,
        imagePreview: s.image || null
      }))
    }))
  );

  setMigration(
    (editData.migration || []).map(m => ({
      ...m,
      section: m.section.map(s => ({
        ...s,
        imagePreview: s.image || null
      }))
    }))
  );

// setOverviewinfo(
//   (editData.overviewinfo || []).map(o => ({
//     ...o,
//     description:
//       o.description && o.description.length
//         ? o.description
//         : [{ type: "paragraph", content: "" }],
//     imagePreview: o.image || null,
//   }))
// );
setOverviewinfo(
  (editData.overviewinfo || []).map((item) => ({
    ...item,
    description:
      item.description && item.description.length
        ? item.description
        : [{ type: "paragraph", content: "" }],
    imagePreview: getImageUrl(item.image),
    existingImage: item.image,
    image: null,
  }))
);


   setAdventure(editData.adventure ?? []);
      setBesttime(editData.besttime ?? []);
      setQa(editData.aboutBooking ?? []);
      setMainImagePreview(editData.image);
      setLandingImagePreview(
  editData.landingImage ? getImageUrl(editData.landingImage) : null
);

}, [editData]);


  // ============ Basic Change Handlers ================
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  const handleLandingImageChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setLandingImage(file);
  setLandingImagePreview(URL.createObjectURL(file));
};


  // =================================================================
  // ------------------ OVERVIEW INFO SECTION ------------------------
  // =================================================================
 
const addOverview = () => {
  setOverviewinfo([
    ...overviewinfo,
    {
      title: "",
      subtitle: "",
      description: [{ type: "paragraph", content: "" }],
      image: null,
      imagePreview: null,
    },
  ]);
};

const removeOverview = (i) => {
  const updated = [...overviewinfo];
  updated.splice(i, 1);
  setOverviewinfo(updated);
};

const handleOverviewChange = (i, e) => {
  const updated = [...overviewinfo];
  updated[i] = { ...updated[i], [e.target.name]: e.target.value };
  setOverviewinfo(updated);
};
const handleOverviewImage = (i, e) => {
  const file = e.target.files[0];
  if (!file) return;

  const updated = [...overviewinfo];
  updated[i] = {
    ...updated[i],
    image: file,
    imagePreview: URL.createObjectURL(file),
  };
  setOverviewinfo(updated);
};

// const addOverviewDescription = (i) => {
//   const updated = [...overviewinfo];
//   updated[i].description.push({ type: "paragraph", content: "" });
//   setOverviewinfo(updated);
// };

const addOverviewDescription = (i) => {
  const updated = [...overviewinfo];
  updated[i] = {
    ...updated[i],
    description: [
      ...updated[i].description,
      { type: "paragraph", content: "" },
    ],
  };
  setOverviewinfo(updated);
};


const removeOverviewDescription = (i, j) => {
  const updated = [...overviewinfo];
  updated[i] = {
    ...updated[i],
    description: updated[i].description.filter((_, idx) => idx !== j),
  };
  setOverviewinfo(updated);
};


const handleOverviewDescriptionChange = (i, j, e) => {
  const updated = [...overviewinfo];
  updated[i].description[j] = {
    ...updated[i].description[j],
    [e.target.name]: e.target.value,
  };
  setOverviewinfo(updated);
};



  // =================================================================
  // ------------------ HIGHLIGHT SECTION ----------------------------
  // =================================================================
const addHighlight = () => {
  setHighlight([
    ...highlight,
    {
      heading: "",
      section: [
        { title: "", description: "", image: null, imagePreview: null },
      ],
    },
  ]);
};

const removeHighlight = (i) => {
  const updated = [...highlight];
  updated.splice(i, 1);
  setHighlight(updated);
};

const handleHighlightHeading = (i, e) => {
  const updated = [...highlight];
  updated[i].heading = e.target.value;
  setHighlight(updated);
};

const addHighlightSection = (i) => {
  const updated = [...highlight];
  updated[i].section.push({
    title: "",
    description: "",
    image: null,
    imagePreview: null,
  });
  setHighlight(updated);
};

const removeHighlightSection = (i, j) => {
  const updated = [...highlight];
  updated[i].section.splice(j, 1);
  setHighlight(updated);
};

const handleHighlightSectionChange = (i, j, e) => {
  const updated = [...highlight];
  updated[i].section[j][e.target.name] = e.target.value;
  setHighlight(updated);
};

const handleHighlightImage = (i, j, e) => {
  const file = e.target.files[0];
  const updated = [...highlight];
  updated[i].section[j].image = file;
  updated[i].section[j].imagePreview = URL.createObjectURL(file);
  setHighlight(updated);
};


  // =================================================================
  // ------------------ MIGRATION SECTION ----------------------------
  // =================================================================


  const addMigration = () => {
  setMigration([
    ...migration,
    {
      title: "",
      subtitle: "",
      description: [{ type: "paragraph", content: "" }],
      section: [
        {
          nationalpark: "",
          details: [{ type: "paragraph", content: "" }],
          image: null,
          imagePreview: null,
        },
      ],
    },
  ]);
};

const removeMigration = (i) => {
  const updated = [...migration];
  updated.splice(i, 1);
  setMigration(updated);
};

const handleMigrationChange = (i, e) => {
  const updated = [...migration];
  updated[i][e.target.name] = e.target.value;
  setMigration(updated);
};

const addMigrationDescription = (i) => {
  const updated = [...migration];
  updated[i].description.push({ type: "paragraph", content: "" });
  setMigration(updated);
};

const handleMigrationDescriptionChange = (i, j, e) => {
  const updated = [...migration];
  updated[i].description[j][e.target.name] = e.target.value;
  setMigration(updated);
};

const removeMigrationDescription = (i, j) => {
  const updated = [...migration];
  updated[i].description.splice(j, 1);
  setMigration(updated);
};

const addMigrationSection = (i) => {
  const updated = [...migration];
  updated[i].section.push({
    nationalpark: "",
    details: [{ type: "paragraph", content: "" }],
    image: null,
    imagePreview: null,
  });
  setMigration(updated);
};

const removeMigrationSection = (i, j) => {
  const updated = [...migration];
  updated[i].section.splice(j, 1);
  setMigration(updated);
};

const handleMigrationSectionChange = (i, j, e) => {
  const updated = [...migration];
  updated[i].section[j][e.target.name] = e.target.value;
  setMigration(updated);
};
const handleMigrationSectionImage = (i, j, e) => {
  const file = e.target.files[0];
  const updated = [...migration];
  updated[i].section[j].image = file;
  updated[i].section[j].imagePreview = URL.createObjectURL(file);
  setMigration(updated);
};

const addMigrationDetail = (i, j) => {
  const updated = [...migration];
  updated[i].section[j].details.push({ type: "paragraph", content: "" });
  setMigration(updated);
};

const handleMigrationDetailChange = (i, j, k, e) => {
  const updated = [...migration];
  updated[i].section[j].details[k][e.target.name] = e.target.value;
  setMigration(updated);
};

const removeMigrationDetail = (i, j, k) => {
  const updated = [...migration];
  updated[i].section[j].details.splice(k, 1);
  setMigration(updated);
};


  // =================================================================
  // ------------------ ADVENTURE SECTION ----------------------------
  // =================================================================
  const addAdventure = () =>
    setAdventure([
      ...adventure,
      { title: "", subtitle: "", description: "", image: null },
    ]);
  const removeAdventure = (i) => {
    const list = [...adventure];
    list.splice(i, 1);
    setAdventure(list);
  };
  const handleAdventureChange = (i, e) => {
    const list = [...adventure];
    list[i][e.target.name] = e.target.value;
    setAdventure(list);
  };
  const handleAdventureImage = (i, e) => {
    const updated = [...adventure];
    updated[i].image = e.target.files[0];
    updated[i].imagePreview = URL.createObjectURL(e.target.files[0]);
    setAdventure(updated);
  };

  // =================================================================
  // ------------------ BESTTIME SECTION -----------------------------
  // =================================================================
const addBesttime = () => {
  setBesttime([
    ...besttime,
    {
      title: "",
      section: [{ month: "", content: "" }],
    },
  ]);
};

const removeBesttime = (i) => {
  const updated = [...besttime];
  updated.splice(i, 1);
  setBesttime(updated);
};

const handleBesttimeTitleChange = (i, e) => {
  const updated = [...besttime];
  updated[i].title = e.target.value;
  setBesttime(updated);
};


const addBesttimeSection = (i) => {
  const updated = [...besttime];
  updated[i].section.push({ month: "", content: "" });
  setBesttime(updated);
};

const removeBesttimeSection = (i, j) => {
  const updated = [...besttime];
  updated[i].section.splice(j, 1);
  setBesttime(updated);
};

const handleBesttimeSectionChange = (i, j, e) => {
  const updated = [...besttime];
  updated[i].section[j][e.target.name] = e.target.value;
  setBesttime(updated);
};


  // =================================================================
  // ------------------ Q&A SECTION ----------------------------------
  // =================================================================
  const addQa = () => setQa([...qa, { question: "", answer: [] }]);
  const removeQa = (i) => {
    const list = [...qa];
    list.splice(i, 1);
    setQa(list);
  };
  const handleQaChange = (i, e) => {
    const list = [...qa];
    list[i].question = e.target.value;
    setQa(list);
  };

  const addQaAnswer = (i) => {
    const list = [...qa];
    list[i].answer.push({ type: "paragraph", content: "" });
    setQa(list);
  };
  const removeQaAnswer = (i, j) => {
    const list = [...qa];
    list[i].answer.splice(j, 1);
    setQa(list);
  };
  const handleQaAnswerChange = (i, j, e) => {
    const list = [...qa];
    list[i].answer[j][e.target.name] = e.target.value;
    setQa(list);
  };

  // =================================================================
  // ------------------ SUBMIT FORM ----------------------------------
  // =================================================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("formData", JSON.stringify(formData));
    if (mainImage) data.append("mainImage", mainImage);
    if (landingImage) data.append("landingImage", landingImage);


//   const cleanOverview = overviewinfo.map((o) => ({
//   title: o.title,
//   subtitle: o.subtitle,
//   description: o.description,
//   image: o.existingImage || null,
// }));

// data.append("overviewinfo", JSON.stringify(cleanOverview));

// overviewinfo.forEach((o) => {
//   if (o.image) data.append("overviewImages", o.image);
// });

  /* ---------- OVERVIEW ---------- */
  const cleanOverview = overviewinfo.map((o) => ({
    title: o.title,
    subtitle: o.subtitle,
    description: o.description,
    image: o.existingImage || null,
  }));

  data.append("overviewinfo", JSON.stringify(cleanOverview));

  overviewinfo.forEach((o) => {
    if (o.image) data.append("overviewImages", o.image);
  });

/* ---------- OTHERS ---------- */
  data.append("highlight", JSON.stringify(highlight));
  data.append("migration", JSON.stringify(migration));
  data.append("adventure", JSON.stringify(adventure));
  data.append("besttime", JSON.stringify(besttime));
  data.append("qa", JSON.stringify(qa));

  highlight.forEach((h) =>
    h.section.forEach(
      (s) => s.image && data.append("highlightImages", s.image)
    )
  );

  migration.forEach((m) =>
    m.section.forEach(
      (s) => s.image && data.append("migrationImages", s.image)
    )
  );

  adventure.forEach(
    (a) => a.image && data.append("adventureImages", a.image)
  );


    
//     data.append("highlight", JSON.stringify(highlight));
//     data.append("migration", JSON.stringify(migration));
//     data.append("adventure", JSON.stringify(adventure));
//     data.append("besttime", JSON.stringify(besttime));
//     data.append("qa", JSON.stringify(qa));


//     overviewinfo.forEach(
//   (x) => x.image && data.append("overviewImages", x.image)
// );

// highlight.forEach((h) =>
//   h.section.forEach(
//     (s) => s.image && data.append("highlightImages", s.image)
//   )
// );

// migration.forEach((m) =>
//   m.section.forEach(
//     (s) => s.image && data.append("migrationImages", s.image)
//   )
// );

// adventure.forEach(
//   (a) => a.image && data.append("adventureImages", a.image)
// );


    try {
      let res;
      if (editData) {
        res = await API.put(`/destinationdetails/${editData._id}`, data);
      } else {
        res = await API.post("/destinationdetails", data);
      }
      alert("Saved Successfully!");
      onSuccess && onSuccess(res.data);
    } catch (err) {
      console.error(err);
      alert("Error saving destination details");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20 p-8">
      <h2 className="col-span-2 text-xl font-bold">
        {editData ? "Edit Destination" : "Create Destination"}
      </h2>

      {/* MAIN BASIC INPUTS */}
      <input
        className="border p-2"
        name="title"
        placeholder="Main title"
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

      <input
        className="border p-2"
        name="destination"
        placeholder="Destination"
        value={formData.destination}
        onChange={handleChange}
      />
      {/* <input className="border p-2" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} />

      <textarea className="border p-2 col-span-2" placeholder="Description" name="description" value={formData.description} onChange={handleChange}></textarea> */}

      {/* Main Image */}
      <div className="col-span-2">
        <label>Main Image</label>
        <input
          type="file"
          className="border p-2 w-full"
          onChange={handleMainImageChange}
        />
        {mainImagePreview && (
          <img src={mainImagePreview} className="w-40 rounded mt-2" />
        )}
      </div>

      {/* Landing Image */}
<div className="col-span-2">
  <label>Landing Image</label>
  <input
    type="file"
    className="border p-2 w-full"
    onChange={handleLandingImageChange}
  />

  {landingImagePreview && (
    <img
      src={landingImagePreview}
      className="w-40 rounded mt-2"
      alt="Landing Preview"
    />
  )}
</div>


      {/* =============================================================== */}
      {/* ================= OVERVIEW INFO UI ============================ */}
      {/* =============================================================== */}

<section className="col-span-2 mt-6">
  <div className="flex justify-between items-center">
    <h3 className="text-xl font-semibold">Overview Info</h3>
    <button
      type="button"
      onClick={addOverview}
      className="bg-green-600 text-white px-4 py-1 rounded"
    >
      + Add Overview
    </button>
  </div>

  {overviewinfo.map((item, i) => (
    <div key={i} className="border bg-gray-50 p-4 rounded mt-4">

      {/* Title */}
      <input
        className="border p-2 w-full mb-2"
        name="title"
        placeholder="Title"
        value={item.title}
        onChange={(e) => handleOverviewChange(i, e)}
      />

      {/* Subtitle */}
      <input
        className="border p-2 w-full mb-3"
        name="subtitle"
        placeholder="Subtitle"
        value={item.subtitle}
        onChange={(e) => handleOverviewChange(i, e)}
      />

      {/* DESCRIPTION BLOCKS */}
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">Description</h4>
        <button
          type="button"
          onClick={() => addOverviewDescription(i)}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          + Add Block
        </button>
      </div>

      {(item.description || []).map((desc, j) => (
        <div key={j} className="border p-3 bg-white rounded mb-2">

          <select
            name="type"
            className="border p-2 w-full mb-2"
            value={desc.type}
            onChange={(e) =>
              handleOverviewDescriptionChange(i, j, e)
            }
          >
            <option value="header">Header</option>
            <option value="paragraph">Paragraph</option>
            <option value="list">List</option>
          </select>

          <textarea
            name="content"
            className="border p-2 w-full"
            placeholder="Content"
            value={desc.content}
            onChange={(e) =>
              handleOverviewDescriptionChange(i, j, e)
            }
          />

          <button
            type="button"
            onClick={() => removeOverviewDescription(i, j)}
            className="bg-red-600 text-white px-3 py-1 rounded mt-2"
          >
            Remove Block
          </button>
        </div>
      ))}

      {/* Image */}
      <input
        type="file"
        className="border p-2 w-full mt-3"
        onChange={(e) => handleOverviewImage(i, e)}
      />

      {item.imagePreview && (
        <img
          src={item.imagePreview}
          className="w-32 mt-2 rounded"
          alt="Preview"
        />
      )}

      <button
        type="button"
        onClick={() => removeOverview(i)}
        className="bg-red-700 text-white px-4 py-1 rounded mt-3"
      >
        Remove Overview
      </button>
    </div>
  ))}
</section>


      {/* =============================================================== */}
      {/* ================= Details section =========================== */}
      {/* =============================================================== */}
      
<section className="col-span-2 mt-6">
  <div className="flex justify-between">
    <h3 className="text-xl font-semibold">Details section</h3>
    <button
      type="button"
      onClick={addMigration}
      className="bg-green-600 text-white px-4 py-1 rounded"
    >
      + Add Migration
    </button>
  </div>

  {migration.map((m, i) => (
    <div key={i} className="border p-4 bg-gray-50 rounded mt-4">

      <input
        className="border p-2 w-full mb-2"
        name="title"
        placeholder="Title"
        value={m.title}
        onChange={(e) => handleMigrationChange(i, e)}
      />

      <input
        className="border p-2 w-full mb-2"
        name="subtitle"
        placeholder="Subtitle"
        value={m.subtitle}
        onChange={(e) => handleMigrationChange(i, e)}
      />

      {/* DESCRIPTION BLOCKS */}
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <h4 className="font-semibold">Description</h4>
          <button
            type="button"
            onClick={() => addMigrationDescription(i)}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            + Add Block
          </button>
        </div>

        {m.description.map((d, j) => (
          <div key={j} className="border p-2 rounded mb-2 bg-white">
            <select
              name="type"
              className="border p-2 w-full mb-2"
              value={d.type}
              onChange={(e) => handleMigrationDescriptionChange(i, j, e)}
            >
              <option value="header">Header</option>
              <option value="paragraph">Paragraph</option>
              <option value="list">List</option>
            </select>

            <textarea
              name="content"
              className="border p-2 w-full"
              value={d.content}
              onChange={(e) => handleMigrationDescriptionChange(i, j, e)}
            />

            <button
              type="button"
              onClick={() => removeMigrationDescription(i, j)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* NATIONAL PARK SECTIONS */}
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <h4 className="font-semibold">National Parks</h4>
          <button
            type="button"
            onClick={() => addMigrationSection(i)}
            className="bg-green-700 text-white px-3 py-1 rounded"
          >
            + Add Park
          </button>
        </div>

        {m.section.map((s, j) => (
          <div key={j} className="border p-3 bg-white rounded mb-3">

            <input
              className="border p-2 w-full mb-2"
              name="nationalpark"
              placeholder="National Park Name"
              value={s.nationalpark}
              onChange={(e) => handleMigrationSectionChange(i, j, e)}
            />

            <input
              type="file"
              onChange={(e) => handleMigrationSectionImage(i, j, e)}
            />
            {s.imagePreview && (
              <img src={s.imagePreview} className="w-32 mt-2 rounded" />
            )}

            {/* DETAILS BLOCKS */}
            <div className="mt-3">
              <div className="flex justify-between mb-2">
                <h5 className="font-semibold">Details</h5>
                <button
                  type="button"
                  onClick={() => addMigrationDetail(i, j)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  + Add Detail
                </button>
              </div>

              {s.details.map((d, k) => (
                <div key={k} className="border p-2 rounded mb-2">
                  <select
                    name="type"
                    className="border p-2 w-full mb-2"
                    value={d.type}
                    onChange={(e) => handleMigrationDetailChange(i, j, k, e)}
                  >
                    <option value="header">Header</option>
                    <option value="paragraph">Paragraph</option>
                    <option value="list">List</option>
                  </select>

                  <textarea
                    name="content"
                    className="border p-2 w-full"
                    value={d.content}
                    onChange={(e) => handleMigrationDetailChange(i, j, k, e)}
                  />

                  <button
                    type="button"
                    onClick={() => removeMigrationDetail(i, j, k)}
                    className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => removeMigrationSection(i, j)}
              className="bg-red-700 text-white px-3 py-1 rounded mt-3"
            >
              Remove Park
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => removeMigration(i)}
        className="bg-red-800 text-white px-4 py-1 rounded"
      >
        Remove Migration
      </button>
    </div>
  ))}
</section>

      {/* =============================================================== */}
      {/* ================= Things to do =========================== */}
      {/* =============================================================== */}
   

      <section className="col-span-2 mt-6">
  <div className="flex justify-between items-center">
    <h3 className="text-xl font-semibold">Things to do</h3>
    <button
      type="button"
      onClick={addHighlight}
      className="bg-green-600 text-white px-4 py-1 rounded"
    >
      + Add Highlight
    </button>
  </div>

  {highlight.map((h, i) => (
    <div key={i} className="border p-4 bg-gray-50 rounded mt-4">

      {/* Heading */}
      <input
        className="border p-2 w-full mb-3"
        placeholder="Highlight Heading"
        value={h.heading}
        onChange={(e) => handleHighlightHeading(i, e)}
      />

      {/* Sections */}
      {h.section.map((s, j) => (
        <div key={j} className="border p-3 bg-white rounded mb-3">

          <input
            className="border p-2 w-full mb-2"
            name="title"
            placeholder="Title"
            value={s.title}
            onChange={(e) => handleHighlightSectionChange(i, j, e)}
          />

          <textarea
            className="border p-2 w-full mb-2"
            name="description"
            placeholder="Description"
            value={s.description}
            onChange={(e) => handleHighlightSectionChange(i, j, e)}
          />

          <input
            type="file"
            onChange={(e) => handleHighlightImage(i, j, e)}
          />

          {s.imagePreview && (
            <img
              src={s.imagePreview}
              alt="preview"
              className="w-32 mt-2 rounded"
            />
          )}

          <button
            type="button"
            onClick={() => removeHighlightSection(i, j)}
            className="bg-red-600 text-white px-3 py-1 rounded mt-2"
          >
            Remove Section
          </button>
        </div>
      ))}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => addHighlightSection(i)}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          + Add Section
        </button>

        <button
          type="button"
          onClick={() => removeHighlight(i)}
          className="bg-red-700 text-white px-4 py-1 rounded"
        >
          Remove Highlight
        </button>
      </div>
    </div>
  ))}
</section>


      {/* =============================================================== */}
      {/* ================= BEST TIME SECTION =========================== */}
      {/* =============================================================== */}
    <section className="col-span-2 mt-6">
  <div className="flex justify-between items-center">
    <h3 className="text-xl font-semibold">Best Time to Visit</h3>
    <button
      type="button"
      onClick={addBesttime}
      className="bg-green-600 text-white px-4 py-1 rounded"
    >
      + Add Best Time
    </button>
  </div>

  {besttime.map((bt, i) => (
    <div key={i} className="border p-4 bg-gray-50 rounded mt-4">

      {/* Title */}
      <input
        className="border p-2 w-full mb-3"
        placeholder="Best Time Title"
        value={bt.title}
        onChange={(e) => handleBesttimeTitleChange(i, e)}
      />

      {/* Month Sections */}
      {bt.section.map((s, j) => (
        <div key={j} className="border p-3 bg-white rounded mb-3">

          <input
            className="border p-2 w-full mb-2"
            name="month"
            placeholder="Month(s)"
            value={s.month}
            onChange={(e) => handleBesttimeSectionChange(i, j, e)}
          />

          <textarea
            className="border p-2 w-full"
            name="content"
            placeholder="Description"
            value={s.content}
            onChange={(e) => handleBesttimeSectionChange(i, j, e)}
          />

          <button
            type="button"
            onClick={() => removeBesttimeSection(i, j)}
            className="bg-red-600 text-white px-3 py-1 rounded mt-2"
          >
            Remove Month
          </button>
        </div>
      ))}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => addBesttimeSection(i)}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          + Add Month
        </button>

        <button
          type="button"
          onClick={() => removeBesttime(i)}
          className="bg-red-700 text-white px-4 py-1 rounded"
        >
          Remove Best Time
        </button>
      </div>
    </div>
  ))}
</section>

   {/* =============================================================== */}
      {/* ================= Experience Section =========================== */}
      {/* =============================================================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Experience Section</h3>
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-1 rounded"
            onClick={addAdventure}
          >
            + Add
          </button>
        </div>

        {adventure.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input
              className="border p-2 w-full mb-2"
              name="title"
              placeholder="Title"
              value={item.title}
              onChange={(e) => handleAdventureChange(i, e)}
            />
            <input
              className="border p-2 w-full mb-2"
              name="subtitle"
              placeholder="Subtitle"
              value={item.subtitle}
              onChange={(e) => handleAdventureChange(i, e)}
            />
            <textarea
              className="border p-2 w-full mb-2"
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleAdventureChange(i, e)}
            ></textarea>

            <input
              type="file"
              className="border p-2"
              onChange={(e) => handleAdventureImage(i, e)}
            />
            {item.imagePreview && (
              <img src={item.imagePreview} className="w-32 rounded" />
            )}

            <button
              type="button"
              onClick={() => removeAdventure(i)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-2"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* =============================================================== */}
      {/* ================= Q&A SECTION =========================== */}
      {/* =============================================================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">FAQs / About Booking</h3>
          <button
            type="button"
            onClick={addQa}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            + Add
          </button>
        </div>

        {qa.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input
              className="border p-2 w-full mb-2"
              placeholder="Question"
              value={item.question}
              onChange={(e) => handleQaChange(i, e)}
            />

            <button
              type="button"
              onClick={() => addQaAnswer(i)}
              className="bg-blue-600 text-white px-3 py-1 rounded mb-2"
            >
              + Add Answer Part
            </button>

            {item.answer.map((ans, j) => (
              <div key={j} className="border p-2 rounded mt-2">
                <select
                  name="type"
                  className="border p-2 w-full mb-2"
                  value={ans.type}
                  onChange={(e) => handleQaAnswerChange(i, j, e)}
                >
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea
                  className="border p-2 w-full"
                  placeholder="Content"
                  name="content"
                  value={ans.content}
                  onChange={(e) => handleQaAnswerChange(i, j, e)}
                ></textarea>

                <button
                  type="button"
                  onClick={() => removeQaAnswer(i, j)}
                  className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => removeQa(i)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-4"
            >
              Remove Question
            </button>
          </div>
        ))}
      </section>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded col-span-2 mt-4"
      >
        {editData ? "Update Destination" : "Save Destination"}
      </button>
    </form>
  );
};

export default DestinationDetailsForm;

