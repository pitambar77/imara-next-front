import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";
import TeamForm from "../../components/Team/TeamForm";
// import TeamForm from "../../components/Team/TeamForm";

const EditTeam = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/team/${id}`).then((res) => setData(res.data));
  }, [id]);

  return (
    <div className="p-6">
      {data ? (
        // <TeamForm editData={data} onSuccess={() => window.location.href="/admin/team/list"} />
        <TeamForm editData={data} onSuccess={() => window.location.href="list"}/>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditTeam;
