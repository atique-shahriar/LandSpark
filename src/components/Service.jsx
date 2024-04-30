import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Service</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-10">
          <h1 className="text-3xl text-center font-bold my-2">Our Services</h1>
          <p className="text-center w-3/4 lg:w-3/6 mx-auto">
            Welcome to our land real estate services page! Here are the services
            we offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-full rounded-lg h-52"
              src="https://www.mayonfoundations.com/images/comes-real-estate.webp"
              alt="Property Listings"
            />
            <h3 className="text-xl font-semibold text-center my-2">
              Property Listings
            </h3>
            <p className="text-justify">
              Explore our comprehensive listings of land properties for sale or
              rent, including residential, commercial, and agricultural land.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-full rounded-lg h-52"
              src="https://st3.depositphotos.com/1010613/14143/i/450/depositphotos_141438506-stock-photo-real-estate-appraisal-document.jpg"
              alt="Land Appraisal"
            />
            <h3 className="text-xl font-semibold text-center my-2">
              Land Appraisal
            </h3>
            <p className="text-justify">
              Our experienced appraisers provide accurate evaluations of land
              properties to help you make informed decisions.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-full rounded-lg h-52"
              src="https://www.sapientrealty.com/wp-content/uploads/2020/03/real-estate-consulting-copy.jpg"
              alt="Real Estate Consulting"
            />
            <h3 className="text-xl font-semibold text-center my-2">
              Real Estate Consulting
            </h3>
            <p className="text-justify">
              Get expert advice and guidance on land investment strategies,
              market trends, and property development opportunities.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-full rounded-lg h-52"
              src="https://nearterm.com/wp-content/uploads/2020/10/nearterm-land-surveyor-1024x512.jpg"
              alt="Land Surveying"
            />
            <h3 className="text-xl font-semibold text-center my-2">
              Land Surveying
            </h3>
            <p className="text-justify">
              Ensure the accuracy of property boundaries and legal descriptions
              with our professional land surveying services.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-full rounded-lg h-52"
              src="https://media.istockphoto.com/id/1283752513/photo/real-estate-property-management-with-investor-making-profit-by-increasing-value-and-earning.jpg?s=612x612&w=0&k=20&c=o9mazS2RsEiRRtf2DVheWHxxQPN3VvqmW9GYxr9yqeE="
              alt="Property Management"
            />
            <h3 className="text-xl font-semibold text-center my-2">
              Property Management
            </h3>
            <p className="text-justify">
              Trust us to handle the day-to-day operations and maintenance of
              your land assets, maximizing their value and profitability.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              className="w-full rounded-lg h-52"
              src="https://media.istockphoto.com/id/1163942706/photo/backhoe-working-in-road-construction-site-with-mountains-and-sky-background.jpg?s=612x612&w=0&k=20&c=vIYSPvX93_WsBy2GZ9NGKUuuGRe85jJWAEYmTr20BUg="
              alt="Land Development"
            />
            <h3 className="text-xl font-semibold text-center my-2">
              Land Development
            </h3>
            <p className="text-justify">
              From land acquisition to project completion, we offer
              comprehensive land development services tailored to your specific
              needs and goals.
            </p>
          </div>
        </div>

        <Link to="/contact">
          <p className="mt-8 text-blue-700 text-center font-medium">
            Contact us to learn more about how we can assist you in your land
            real estate endeavors!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Service;
