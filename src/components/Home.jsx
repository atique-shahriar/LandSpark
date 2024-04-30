import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Estate from "./Estate";

const Home = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch("estates.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="w-11/12 lg:w-3/4  mx-auto mt-16">
        <div className="mb-10">
          <h3 className="text-3xl text-center font-bold my-2">Estates</h3>
          <p className="text-center w-3/4 lg:w-3/6 mx-auto">
            Explore prime real estate offerings, from majestic mountains to
            serene waterfronts. Let us guide you to your perfect land
            investment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {estates.map((estate) => (
            <Estate key={estate.id} estate={estate}></Estate>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
