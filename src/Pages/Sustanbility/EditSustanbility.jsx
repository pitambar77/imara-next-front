import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios.js";
import SustanbilityForm from "../../components/SustanbilityForm/SustanbilityForm.jsx";
// import SustanbilityForm from "../../components/Sustanbility/SustanbilityForm";

const EditSustanbility = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/sustanbility/${id}`).then((res) => setData(res.data));
  }, [id]);

  return (
    <div className="p-6">
      {data ? (
        // <SustanbilityForm editData={data} onSuccess={() => window.location.href="/admin/sustanbility/list"} />
        <SustanbilityForm/>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default EditSustanbility;
