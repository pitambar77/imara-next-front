// import TeamForm from "../../components/Team/TeamForm";

import TeamForm from "../../components/Team/TeamForm";

const CreateTeam = () => (
  <div className="p-6">
    {/* <TeamForm onSuccess={() => window.location.href="/admin/team/list"} /> */}
    <TeamForm onSuccess={() => window.location.href="/list"}/>
  </div>
);

export default CreateTeam;
