import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Estate = ({estate}) => {
  console.log(estate);
  const {
    id,
    segment_name,
    estate_title,
    description,
    price,
    status,
    area,
    location,
    image,
    view_property_button,
  } = estate;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="p-4 border rounded-2xl">
      <div className="bg-gray-100 rounded-xl flex justify-center">
        <img
          src={image}
          alt=""
          className="h-[250px] w-full shadow-md rounded-xl p-4"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        />
      </div>

      <h3 className="my-3 text-xl font-medium">{segment_name}</h3>
      <h4 className="border-b border-dashed pb-4 font-medium">
        {estate_title},
        <span className="ml-1 font-normal text-sm ">{location}</span>
      </h4>
      <p className="text-justify border-b border-dashed py-2">
        {description.slice(0, 260)}
        <Link to={`/estate/${id}`}>
          <span className="font-semibold text-blue-600 hover:cursor-pointer">
            ... Read more.
          </span>
        </Link>
      </p>

      <div className="pt-2 flex justify-between font-medium">
        <p>{area}</p>
        <p>{price}</p>
        <p>{status}</p>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to={`/estate/${id}`}
          className="bg-gradient-to-r from-[#A8D26D] to-[#007F5F] w-3/4 py-2 rounded-xl font-bold text-white text-center hover:bg-gradient-to-l"
        >
          {view_property_button}
        </Link>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.object,
};

export default Estate;
