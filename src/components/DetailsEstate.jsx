import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsEstate = () => {
  const estates = useLoaderData();
  const {id} = useParams();
  const estate = estates.find((estate) => estate.id == id);

  const {
    segment_name,
    estate_title,
    description,
    price,
    status,
    area,
    location,
    image,
    facilities,
  } = estate;
  console.log(estate);

  return (
    <div className="w-11/12 lg:w-3/4  mx-auto">
      <Helmet>
        <title>Estate </title>
      </Helmet>
      <div className="grid grid-cols-1 gap-6 my-6">
        <div className=" flex flex-col justify-center items-center">
          <img
            src={image}
            alt=""
            className=" w-4/5 lg:w-3/5 shadow-xl rounded-xl"
          />
          <h3 className="text-2xl font-medium mt-4">{estate_title}</h3>
        </div>
        <div className="space-y-6">
          <p className="font-medium py-3 border-y-2 ">
            {segment_name}, {location}
          </p>
          <p className="text-justify">
            <span className="font-bold text-lg">Description: </span>
            {description}
          </p>
          <p className="border-b-2 pb-6">
            <span className="font-bold text-lg">Facilities </span>
            <ul className="ml-10">
              <li className="list-disc font-semibold">{facilities[0]}</li>
              <li className="list-disc font-semibold">{facilities[1]}</li>
              <li className="list-disc font-semibold">{facilities[2]}</li>
            </ul>
          </p>
          <table>
            <tr className="h-10">
              <td>Area</td>
              <td>:</td>
              <td className="pl-2 font-bold">{area}</td>
            </tr>
            <tr className="h-10">
              <td>Price</td>
              <td>:</td>
              <td className="pl-2 font-bold">{price}</td>
            </tr>
            <tr className="h-10">
              <td>Status</td>
              <td>:</td>
              <td className="pl-2 font-bold">{status}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12 mb-10">
        <Link to={"/"}>
          <button className="bg-green-600 text-white font-medium px-5 py-2 rounded-lg">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsEstate;
