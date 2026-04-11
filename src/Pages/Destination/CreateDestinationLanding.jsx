import DestinationLandingForm from "../../components/Destination/DestinationLandingForm";

const CreateDestinationLanding = () => {
  return (
    <div className="p-6">
      {/* <DestinationLandingForm onSuccess={() => window.location.href = "/admin/destinationlanding/list"} /> */}
      <DestinationLandingForm/>
    </div>
  );
};

export default CreateDestinationLanding;
