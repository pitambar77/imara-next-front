import { useParams } from "react-router-dom";
import SeoForm from "../../components/SeoForm";

const TravelgroupSeo = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Travel group SEO Settings
      </h2>

      <SeoForm
        referenceId={id}
        referenceType="travelgroup"
      />
    </div>
  );
};
export default TravelgroupSeo