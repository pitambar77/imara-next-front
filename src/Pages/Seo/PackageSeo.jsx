import { useParams } from "react-router-dom";
import SeoForm from "../../components/SeoForm";

const PackageSeo = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Package SEO Settings
      </h2>

      <SeoForm
        referenceId={id}
        referenceType="package"
      />
    </div>
  );
};

export default PackageSeo