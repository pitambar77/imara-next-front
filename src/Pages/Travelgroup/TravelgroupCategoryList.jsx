// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import API from "../../api/axios";

// const TravelgroupCategoryList = () => {
//   const { category } = useParams();
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     API.get("/travelgroup")
//       .then((res) => {
//         const filtered = res.data.filter(item => item.category === category);
//         setList(filtered);
//       })
//       .catch(err => console.error(err));
//   }, [category]);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">{category}</h1>
//       <div className="grid grid-cols-3 gap-6 mt-6">
//         {list.map(item => (
//           <div key={item._id} className="border p-4 rounded shadow">
//             <img src={item.image} className="h-40 object-cover w-full rounded" />
//             <h2 className="text-xl font-bold mt-2">{item.title}</h2>

//             <Link to={`/travelgroup/${item.slug}`} className="bg-blue-600 text-white px-4 py-2 mt-3 inline-block rounded">
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TravelgroupCategoryList;

// above code working

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../api/axios";

const TravelgroupCategoryList = () => {
  const { category } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    API.get("/travelgroup")
      .then((res) => {
        const filtered = res.data.filter(
          item => item.category === category
        );
        setList(filtered);
      })
      .catch(err => console.error(err));
  }, [category]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{category}</h1>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {list.map(item => (
          <div
            key={item._id}
            className="border p-4 rounded shadow"
          >
            <img
              src={item.image}
              className="h-40 object-cover w-full rounded"
            />

            <h2 className="text-xl font-bold mt-2">
              {item.title}
            </h2>

            <div className="flex gap-2 mt-3">
              <Link
                to={`/travelgroup/${item.slug}`}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                View
              </Link>

              <Link
                to={`/travelgroup/edit/${item._id}`}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelgroupCategoryList;
