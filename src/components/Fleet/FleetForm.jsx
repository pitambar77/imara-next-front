import React, { useEffect, useState } from "react";
import API from "../../api/axios.js";

const FleetForm = ({ editData, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // Dynamic Sections
  const [overviewinfo, setOverviewinfo] = useState([
    { title: "", subtitle: "", description: [] },
  ]);

  const [faq, setFaq] = useState([
    { question: "", answer: [] },
  ]);

  // Prefill edit mode
  useEffect(() => {
    if (editData) {
      setFormData(editData);
      setOverviewinfo(editData.overviewinfo ?? []);
      setFaq(editData.faq ?? []);
      setMainImagePreview(editData.image);
    }
  }, [editData]);

  // Handlers
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImage = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  // =====================================
  // Overview Info
  // =====================================
  const addOverviewinfo = () =>
    setOverviewinfo([...overviewinfo, { title: "", subtitle: "", description: [] }]);

  const removeOverviewinfo = (i) => {
    const updated = [...overviewinfo];
    updated.splice(i, 1);
    setOverviewinfo(updated);
  };

  const handleOverviewInfoBase = (i, e) => {
    const updated = [...overviewinfo];
    updated[i][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  const addOverviewInfoBlock = (index) => {
    const updated = [...overviewinfo];
    updated[index].description.push({ type: "paragraph", content: "" });
    setOverviewinfo(updated);
  };

  const handleOverviewInfoBlock = (i, j, e) => {
    const updated = [...overviewinfo];
    updated[i].description[j][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  const removeOverviewInfoBlock = (i, j) => {
    const updated = [...overviewinfo];
    updated[i].description.splice(j, 1);
    setOverviewinfo(updated);
  };

  // =====================================
  // FAQ Section
  // =====================================
  const addFaqSection = () =>
    setFaq([...faq, { question: "", answer: [] }]);

  const removeFaqSection = (i) => {
    const updated = [...faq];
    updated.splice(i, 1);
    setFaq(updated);
  };

  const handleFaqChange = (i, e) => {
    const updated = [...faq];
    updated[i].question = e.target.value;
    setFaq(updated);
  };

  const addFaqAnswer = (i) => {
    const updated = [...faq];
    updated[i].answer.push({ type: "paragraph", content: "" });
    setFaq(updated);
  };

  const handleFaqAnswerChange = (i, j, e) => {
    const updated = [...faq];
    updated[i].answer[j][e.target.name] = e.target.value;
    setFaq(updated);
  };

  const removeFaqAnswer = (i, j) => {
    const updated = [...faq];
    updated[i].answer.splice(j, 1);
    setFaq(updated);
  };

  // =====================================
  // Submit Form
  // =====================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("formData", JSON.stringify(formData));

    if (mainImage) data.append("mainImage", mainImage);

    data.append("overviewinfo", JSON.stringify(overviewinfo));
    data.append("faq", JSON.stringify(faq));

    try {
      let res;
      if (editData) {
        res = await API.put(`/fleet/${editData._id}`, data);
      } else {
        res = await API.post("/fleet", data);
      }

      alert("Saved successfully!");
      onSuccess && onSuccess(res.data);
    } catch (err) {
      console.error(err);
      alert("Error saving fleet data");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">

      <h2 className="col-span-2 text-2xl font-bold">
        {editData ? "Edit Fleet" : "Create Fleet"}
      </h2>

      <input className="border p-2" name="title" placeholder="Title"
        value={formData.title} onChange={handleChange} />

      <input className="border p-2" name="subtitle" placeholder="Subtitle"
        value={formData.subtitle} onChange={handleChange} />

      <div className="col-span-2">
        <label>Main Image</label>
        <input type="file" className="border p-2 w-full" onChange={handleMainImage} />
        {mainImagePreview && <img src={mainImagePreview} className="w-40 rounded mt-2" />}
      </div>

      {/* ================= Overview Info ================= */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Overview Info</h3>
          <button type="button" className="bg-green-600 text-white px-4 py-1 rounded"
            onClick={addOverviewinfo}>+ Add</button>
        </div>

        {overviewinfo.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 rounded mt-3">
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title"
              value={item.title} onChange={(e)=>handleOverviewInfoBase(i,e)} />

            <input className="border p-2 w-full mb-2" name="subtitle" placeholder="Subtitle"
              value={item.subtitle} onChange={(e)=>handleOverviewInfoBase(i,e)} />

            <button type="button" className="bg-blue-600 text-white px-3 py-1 rounded"
              onClick={()=>addOverviewInfoBlock(i)}>+ Add Block</button>

            {item.description.map((desc,j)=>(
              <div key={j} className="border p-3 mt-2 bg-white rounded">
                <select name="type" className="border p-2 w-full mb-2"
                  value={desc.type}
                  onChange={(e)=>handleOverviewInfoBlock(i,j,e)}>
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea className="border p-2 w-full" name="content"
                  placeholder="Content"
                  value={desc.content}
                  onChange={(e)=>handleOverviewInfoBlock(i,j,e)} />

                <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                  onClick={()=>removeOverviewInfoBlock(i,j)}>Remove</button>
              </div>
            ))}

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={()=>removeOverviewinfo(i)}>Remove Section</button>
          </div>
        ))}
      </section>

      {/* ================= FAQ ================= */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">FAQ / About Booking</h3>
          <button type="button" className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={addFaqSection}>+ Add</button>
        </div>

        {faq.map((item, i)=>(
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input className="border p-2 w-full mb-2" placeholder="Question"
              value={item.question} onChange={(e)=>handleFaqChange(i,e)} />

            <button type="button" className="bg-blue-600 text-white px-3 py-1 mb-2 rounded"
              onClick={()=>addFaqAnswer(i)}>+ Add Answer</button>

            {item.answer.map((ans,j)=>(
              <div key={j} className="border p-2 bg-white rounded mt-2">
                <select className="border p-2 w-full mb-2" name="type"
                  value={ans.type}
                  onChange={(e)=>handleFaqAnswerChange(i,j,e)}>
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea className="border p-2 w-full" name="content"
                  placeholder="Content"
                  value={ans.content}
                  onChange={(e)=>handleFaqAnswerChange(i,j,e)} />

                <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                  onClick={()=>removeFaqAnswer(i,j)}>Remove</button>
              </div>
            ))}

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={()=>removeFaqSection(i)}>Remove Question</button>
          </div>
        ))}
      </section>

      <button type="submit" className="bg-blue-600 col-span-2 text-white py-2 rounded mt-4">
        {editData ? "Update Fleet" : "Save Fleet"}
      </button>
    </form>
  );
};

export default FleetForm;
