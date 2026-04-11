import FleetForm from "../../components/Fleet/FleetForm";


const CreateFleet = () => (
  <div className="p-6">
    <FleetForm onSuccess={() => window.location.href="/admin/fleet/list"} />
  </div>
);

export default CreateFleet;
