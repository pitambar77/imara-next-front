import React, { useState, useEffect } from "react";
import API from "../../api/axios.js";

const SustanbilityForm = ({ editData, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // Sections
  const [overviewinfo, setOverviewinfo] = useState([
    { title: "", subtitle: "", description: [] }
  ]);

  const [adventure, setAdventure] = useState([
    { title: "", subtitle: "", description: "", image: null, imagePreview: null }
  ]);

  const [effective, setEffective] = useState([
    { heading:"", title:"", description:"", image:null, imagePreview:null }
  ]);

  const [whyvisit, setWhyvisit] = useState([
    { heading:"", title:"", description:"", image:null, imagePreview:null }
  ]);

  // Prefill data if editing
  useEffect(() => {
    if (editData) {
      setFormData(editData);
      setOverviewinfo(editData.overviewinfo || []);
      setAdventure(editData.adventure || []);
      setEffective(editData.effective || []);
      setWhyvisit(editData.whyvisit || []);
      setMainImagePreview(editData.image);
    }
  }, [editData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  // ================= OVERVIEW SECTION ======================
  const addOverview = () =>
    setOverviewinfo([...overviewinfo, { title: "", subtitle: "", description: [] }]);

  const removeOverview = (i) => {
    const list = [...overviewinfo];
    list.splice(i, 1);
    setOverviewinfo(list);
  };

  const handleOverviewChange = (i, e) => {
    const updated = [...overviewinfo];
    updated[i][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  const addOverviewDescription = (i) => {
    const updated = [...overviewinfo];
    updated[i].description.push({ type: "paragraph", content: "" });
    setOverviewinfo(updated);
  };

  const removeOverviewDescription = (i, j) => {
    const updated = [...overviewinfo];
    updated[i].description.splice(j, 1);
    setOverviewinfo(updated);
  };

  const handleOverviewDescriptionChange = (i, j, e) => {
    const updated = [...overviewinfo];
    updated[i].description[j][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  // =============== ADVENTURE SECTION ==================
  const addAdventure = () =>
    setAdventure([...adventure, { title:"", subtitle:"", description:"", image:null, imagePreview:null }]);

  const removeAdventure = (i) => {
    const updated = [...adventure];
    updated.splice(i, 1);
    setAdventure(updated);
  };

  const handleAdventureChange = (i, e) => {
    const updated = [...adventure];
    updated[i][e.target.name] = e.target.value;
    setAdventure(updated);
  };

  const handleAdventureImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...adventure];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setAdventure(updated);
  };

  // =============== EFFECTIVE SECTION ==================
  const addEffective = () =>
    setEffective([...effective, { heading:"", title:"", description:"", image:null, imagePreview:null }]);

  const removeEffective = (i) => {
    const updated = [...effective];
    updated.splice(i, 1);
    setEffective(updated);
  };

  const handleEffectiveChange = (i, e) => {
    const updated = [...effective];
    updated[i][e.target.name] = e.target.value;
    setEffective(updated);
  };

  const handleEffectiveImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...effective];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setEffective(updated);
  };

  // =============== WHY VISIT SECTION ==================
  const addWhyvisit = () =>
    setWhyvisit([...whyvisit, { heading:"", title:"", description:"", image:null, imagePreview:null }]);

  const removeWhyvisit = (i) => {
    const updated = [...whyvisit];
    updated.splice(i, 1);
    setWhyvisit(updated);
  };

  const handleWhyvisitChange = (i, e) => {
    const updated = [...whyvisit];
    updated[i][e.target.name] = e.target.value;
    setWhyvisit(updated);
  };

  const handleWhyvisitImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...whyvisit];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setWhyvisit(updated);
  };

  // ================= SUBMIT FORM ======================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("formData", JSON.stringify(formData));

    if (mainImage) data.append("mainImage", mainImage);

    data.append("overviewinfo", JSON.stringify(overviewinfo));
    data.append("adventure", JSON.stringify(adventure));
    data.append("effective", JSON.stringify(effective));
    data.append("whyvisit", JSON.stringify(whyvisit));

    adventure.forEach((x) => x.image && data.append("adventureImages", x.image));
    effective.forEach((x) => x.image && data.append("effectiveImages", x.image));
    whyvisit.forEach((x) => x.image && data.append("whyvisitImages", x.image));

    try {
      let res;
      if (editData) {
        res = await API.put(`/sustanbility/${editData._id}`, data);
      } else {
        res = await API.post("/sustanbility", data);
      }

      alert("Saved successfully");
      onSuccess && onSuccess(res.data);

    } catch (err) {
      console.error(err);
      alert("Error saving sustanbility");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">
      <h2 className="col-span-2 text-xl font-bold">
        {editData ? "Edit Sustanbility" : "Create Sustanbility"}
      </h2>

      {/* BASIC FIELDS */}
      <input className="border p-2" name="title" placeholder="Main Title" value={formData.title} onChange={handleChange} />
      <input className="border p-2" name="subtitle" placeholder="Subtitle" value={formData.subtitle} onChange={handleChange} />

      {/* MAIN IMAGE */}
      <div className="col-span-2">
        <label>Main Image</label>
        <input type="file" className="border p-2 w-full" onChange={handleMainImageChange} />
        {mainImagePreview && <img src={mainImagePreview} className="w-40 rounded mt-2" />}
      </div>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Overview Info</h3>
          <button type="button" className="bg-green-600 text-white px-4 py-1 rounded" onClick={addOverview}>+ Add</button>
        </div>

        {overviewinfo.map((item, i) => (
          <div key={i} className="border p-4 mt-3 bg-gray-50 rounded">
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e)=>handleOverviewChange(i,e)} />
            <input className="border p-2 w-full mb-2" name="subtitle" placeholder="Subtitle" value={item.subtitle} onChange={(e)=>handleOverviewChange(i,e)} />

            <button type="button" onClick={() => addOverviewDescription(i)} className="bg-blue-600 text-white px-3 py-1 rounded mb-2">
              + Add Description Block
            </button>

            {item.description.map((desc, j) => (
              <div key={j} className="border p-2 rounded mt-2 bg-white">
                <select name="type" className="border p-2 w-full mb-2" value={desc.type} onChange={(e)=>handleOverviewDescriptionChange(i,j,e)}>
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea className="border p-2 w-full" name="content" placeholder="Content"
                  value={desc.content} onChange={(e)=>handleOverviewDescriptionChange(i,j,e)}></textarea>

                <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                  onClick={()=>removeOverviewDescription(i,j)}>Remove</button>
              </div>
            ))}

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={()=>removeOverview(i)}>Remove Overview Block</button>
          </div>
        ))}
      </section>


      {/* ================= ADVENTURE SECTION ================= */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Adventure</h3>
          <button type="button" onClick={addAdventure} className="bg-green-600 text-white px-4 py-1 rounded">+ Add</button>
        </div>

        {adventure.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 mt-3 rounded">
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e)=>handleAdventureChange(i,e)} />
            <input className="border p-2 w-full mb-2" name="subtitle" placeholder="Subtitle" value={item.subtitle} onChange={(e)=>handleAdventureChange(i,e)} />
            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={item.description} onChange={(e)=>handleAdventureChange(i,e)}></textarea>

            <input type="file" className="border p-2 mb-2" onChange={(e)=>handleAdventureImage(i,e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 mt-2 rounded" />}

            <button type="button" className="
                bg-red-600 text-white px-3 py-1 rounded mt-2" 
                onClick={()=>removeAdventure(i)}>Remove</button>
          </div>
        ))}
      </section>


      {/* ================= EFFECTIVE SECTION ================= */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Effective Section</h3>
          <button type="button" className="bg-green-600 text-white px-4 py-1 rounded" onClick={addEffective}>+ Add</button>
        </div>

        {effective.map((item,i)=>(
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input className="border p-2 w-full mb-2" name="heading" placeholder="Heading" value={item.heading} onChange={(e)=>handleEffectiveChange(i,e)} />
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e)=>handleEffectiveChange(i,e)} />
            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={item.description} onChange={(e)=>handleEffectiveChange(i,e)}></textarea>

            <input type="file" className="border p-2 mb-2" onChange={(e)=>handleEffectiveImage(i,e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 mt-2 rounded" />}

            <button type="button" className="
                bg-red-600 text-white px-3 py-1 rounded mt-2" 
                onClick={()=>removeEffective(i)}>Remove</button>
          </div>
        ))}
      </section>


      {/* ================= WHY VISIT SECTION ================= */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Why Visit</h3>
          <button type="button" className="bg-green-600 text-white px-4 py-1 rounded" onClick={addWhyvisit}>+ Add</button>
        </div>

        {whyvisit.map((item,i)=>(
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input className="border p-2 w-full mb-2" name="heading" placeholder="Heading" value={item.heading} onChange={(e)=>handleWhyvisitChange(i,e)} />
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e)=>handleWhyvisitChange(i,e)} />
            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={item.description} onChange={(e)=>handleWhyvisitChange(i,e)}></textarea>

            <input type="file" className="border p-2 mb-2" onChange={(e)=>handleWhyvisitImage(i,e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 mt-2 rounded" />}

            <button type="button" className="
                bg-red-600 text-white px-3 py-1 rounded mt-2" 
                onClick={()=>removeWhyvisit(i)}>Remove</button>
          </div>
        ))}
      </section>

      <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-2 mt-4">
        {editData ? "Update Sustanbility" : "Save Sustanbility"}
      </button>
    </form>
  );
};

export default SustanbilityForm;
