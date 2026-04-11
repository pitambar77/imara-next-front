import React, { useState, useEffect } from "react";
import API from "../../api/axios.js";

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://imarabackend.imarakilelenisafaris.com";

const getImageUrl = (url) => {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${API_BASE}/${url.replace(/^\/+/, "")}`;
};

const TravelgroupForm = ({ editData, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    category: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  const [overviewinfo, setOverviewinfo] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [qa, setQa] = useState([]);

  /* ================= PREFILL EDIT MODE ================= */
  useEffect(() => {
    if (!editData) return;

    setFormData({
      title: editData.title || "",
      subtitle: editData.subtitle || "",
      category: editData.category || "",
    });

    setMainImagePreview(getImageUrl(editData.image));

    setOverviewinfo(
      (editData.overviewinfo || []).map((item) => ({
        ...item,
        imagePreview: getImageUrl(item.image),
        existingImage: item.image,
        image: null,
      }))
    );

    setAdventure(
      (editData.adventure || []).map((item) => ({
        ...item,
        imagePreview: getImageUrl(item.image),
        existingImage: item.image,
        image: null,
      }))
    );

    setQa(editData.aboutBooking || []);
  }, [editData]);

  /* ================= BASIC HANDLERS ================= */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  /* ================= OVERVIEW ================= */
  const addOverview = () =>
    setOverviewinfo([
      ...overviewinfo,
      { title: "", subtitle: "", description: [], image: null, imagePreview: null },
    ]);

  const handleOverviewChange = (i, e) => {
    const updated = [...overviewinfo];
    updated[i] = { ...updated[i], [e.target.name]: e.target.value };
    setOverviewinfo(updated);
  };

  const handleOverviewImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...overviewinfo];
    updated[i] = {
      ...updated[i],
      image: file,
      imagePreview: URL.createObjectURL(file),
    };
    setOverviewinfo(updated);
  };

  const addOverviewDescription = (i) => {
    const updated = [...overviewinfo];
    updated[i] = {
      ...updated[i],
      description: [...updated[i].description, { type: "paragraph", content: "" }],
    };
    setOverviewinfo(updated);
  };

  const handleOverviewDescriptionChange = (i, j, e) => {
    const updated = [...overviewinfo];
    const desc = [...updated[i].description];
    desc[j] = { ...desc[j], [e.target.name]: e.target.value };
    updated[i] = { ...updated[i], description: desc };
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

  /* ================= ADVENTURE ================= */
  const addAdventure = () =>
    setAdventure([
      ...adventure,
      { title: "", subtitle: "", description: "", image: null, imagePreview: null },
    ]);

  const handleAdventureChange = (i, e) => {
    const updated = [...adventure];
    updated[i] = { ...updated[i], [e.target.name]: e.target.value };
    setAdventure(updated);
  };

  const handleAdventureImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...adventure];
    updated[i] = {
      ...updated[i],
      image: file,
      imagePreview: URL.createObjectURL(file),
    };
    setAdventure(updated);
  };

  /* ================= QA ================= */
  const addQa = () => setQa([...qa, { question: "", answer: [] }]);

  const handleQaChange = (i, e) => {
    const updated = [...qa];
    updated[i] = { ...updated[i], question: e.target.value };
    setQa(updated);
  };

  const addQaAnswer = (i) => {
    const updated = [...qa];
    updated[i] = {
      ...updated[i],
      answer: [...updated[i].answer, { type: "paragraph", content: "" }],
    };
    setQa(updated);
  };

  const handleQaAnswerChange = (i, j, e) => {
    const updated = [...qa];
    const ans = [...updated[i].answer];
    ans[j] = { ...ans[j], [e.target.name]: e.target.value };
    updated[i] = { ...updated[i], answer: ans };
    setQa(updated);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("title", formData.title);
    data.append("subtitle", formData.subtitle);
    data.append("category", formData.category);

    if (mainImage) data.append("mainImage", mainImage);

    const cleanedOverview = overviewinfo.map((o) => ({
      ...o,
      image: o.image ? undefined : o.existingImage,
    }));

    const cleanedAdventure = adventure.map((a) => ({
      ...a,
      image: a.image ? undefined : a.existingImage,
    }));

    data.append("overviewinfo", JSON.stringify(cleanedOverview));
    data.append("adventure", JSON.stringify(cleanedAdventure));
    data.append("qa", JSON.stringify(qa));

    overviewinfo.forEach((o) => o.image && data.append("overviewImages", o.image));
    adventure.forEach((a) => a.image && data.append("adventureImages", a.image));

    try {
      const res = editData
        ? await API.put(`/travelgroup/${editData._id}`, data)
        : await API.post("/travelgroup", data);

      alert("Saved successfully");
      onSuccess?.(res.data);
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  /* ================= JSX ================= */
  return (
     <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">
      <h2 className="col-span-2 text-xl font-bold">
        {editData ? "Edit Travel Group" : "Create Travel Group"}
      </h2>

      <select
  name="category"
  value={formData.category}
  onChange={handleChange}
  className="border p-2 w-full"
>
  <option value="Tanzania Family Safari">Tanzania Family Safari</option>
  <option value="Tanzania Luxury Safari">Tanzania Luxury Safari</option>
  <option value="Tanzania Private Safari">Tanzania Private Safari</option>
  <option value="Tanzania Wildlife Safari">Tanzania Wildlife Safari</option>
  <option value="Tanzania Midrange Safari">Tanzania Midrange Safari</option>
  <option value="Tanzania Honeymoon Safari">Tanzania Honeymoon Safari</option>
</select>


      <input className="border p-2" name="title" placeholder="Main title" value={formData.title} onChange={handleChange} />
      <input className="border p-2" name="subtitle" placeholder="Subtitle" value={formData.subtitle} onChange={handleChange} />

      {/* Main Image */}
      <div className="col-span-2">
        <label>Main Image</label>
        <input type="file" className="border p-2 w-full" onChange={handleMainImageChange} />
        {mainImagePreview && <img src={mainImagePreview} className="w-40 mt-2 rounded" />}
      </div>

      {/* =============== OVERVIEW INFO SECTION =============== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Overview Info</h3>
          <button type="button" onClick={addOverview} className="bg-green-600 text-white px-4 py-1 rounded">+ Add</button>
        </div>

        {overviewinfo.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 rounded mt-3">

            <input className="border p-2 w-full mb-2" placeholder="Title"
              name="title" value={item.title} onChange={(e)=>handleOverviewChange(i,e)} />

            <input className="border p-2 w-full mb-2" placeholder="Subtitle"
              name="subtitle" value={item.subtitle} onChange={(e)=>handleOverviewChange(i,e)} />

            {/* Description blocks */}
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Description Blocks</h4>
              <button type="button"
                onClick={() => addOverviewDescription(i)}
                className="bg-blue-600 text-white px-3 py-1 rounded">
                + Add Part
              </button>
            </div>

            {item.description.map((desc, j) => (
              <div key={j} className="border p-2 rounded mt-2 bg-white">
                <select name="type" className="border p-2 w-full mb-2"
                  value={desc.type} onChange={(e)=>handleOverviewDescriptionChange(i,j,e)}>
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea className="border p-2 w-full" name="content"
                  placeholder="Content"
                  value={desc.content}
                  onChange={(e)=>handleOverviewDescriptionChange(i,j,e)}></textarea>

                <button type="button"
                  onClick={() => removeOverviewDescription(i,j)}
                  className="bg-red-600 text-white px-3 py-1 rounded mt-2">Remove</button>
              </div>
            ))}

            {/* Image Upload */}
            <input type="file" className="border p-2 mb-2 w-full" onChange={(e)=>handleOverviewImage(i,e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 mt-2 rounded" />}

            <button type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={() => removeOverview(i)}>Remove Section</button>

          </div>
        ))}
      </section>


      {/* =============== ADVENTURE SECTION =============== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Adventure Section</h3>
          <button type="button" onClick={addAdventure} className="bg-green-600 text-white px-4 py-1 rounded">+ Add</button>
        </div>

        {adventure.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 mt-3 rounded">
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title"
              value={item.title} onChange={(e)=>handleAdventureChange(i,e)} />

            <input className="border p-2 w-full mb-2" name="subtitle" placeholder="Subtitle"
              value={item.subtitle} onChange={(e)=>handleAdventureChange(i,e)} />

            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description"
              value={item.description} onChange={(e)=>handleAdventureChange(i,e)}></textarea>

            <input type="file" className="border p-2" onChange={(e)=>handleAdventureImage(i,e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 mt-2 rounded" />}

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={()=>removeAdventureItem(i)}>Remove</button>
          </div>
        ))}
      </section>


      {/* =============== Q&A SECTION =============== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">FAQs / About Booking</h3>
          <button type="button" onClick={addQa} className="bg-green-600 text-white px-4 py-1 rounded">+ Add</button>
        </div>

        {qa.map((item, i)=>(
          <div key={i} className="border bg-gray-50 p-4 rounded mt-3">

            <input className="border p-2 w-full mb-2" placeholder="Question"
              value={item.question} onChange={(e)=>handleQaChange(i,e)} />

            <button type="button" onClick={()=>addQaAnswer(i)}
              className="bg-blue-600 text-white px-3 py-1 rounded mb-2">+ Add Answer Part</button>

            {item.answer.map((ans,j)=>(
              <div key={j} className="border p-2 rounded mt-2 bg-white">
                <select name="type" className="border p-2 w-full mb-2"
                  value={ans.type} onChange={(e)=>handleQaAnswerChange(i,j,e)}>
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea className="border p-2 w-full" name="content"
                  placeholder="Content" value={ans.content}
                  onChange={(e)=>handleQaAnswerChange(i,j,e)}></textarea>

                <button type="button"
                  onClick={()=>removeQaAnswer(i,j)}
                  className="bg-red-600 text-white px-3 py-1 rounded mt-2">Remove Answer</button>
              </div>
            ))}

            <button type="button"
              onClick={()=>removeQa(i)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-4">Remove Question</button>
          </div>
        ))}
      </section>

      <button className="bg-blue-600 text-white py-2 rounded col-span-2 mt-4">
        {editData ? "Update Travel Group" : "Save Travel Group"}
      </button>
    </form>
  );
};

export default TravelgroupForm;





