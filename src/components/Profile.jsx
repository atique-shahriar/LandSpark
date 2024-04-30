import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Profile = () => {
  const {user, loading} = useContext(AuthContext);
  const {displayName, email, photoURL} = user;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="w-16 loading loading-spinner text-primary"></span>
        <span className="w-16 loading loading-spinner text-secondary"></span>
        <span className="w-16 loading loading-spinner text-accent"></span>
        <span className="w-16 loading loading-spinner text-neutral"></span>
        <span className="w-16 loading loading-spinner text-info"></span>
        <span className="w-16 loading loading-spinner text-success"></span>
        <span className="w-16 loading loading-spinner text-warning"></span>
        <span className="w-16 loading loading-spinner text-error"></span>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center h-[400px]">
          {photoURL ? (
            <img
              src={photoURL}
              alt="User Photo"
              className="w-40 h-40 rounded-full"
            />
          ) : (
            <CgProfile className="w-32 h-32 rounded-full mr-4"></CgProfile>
          )}
          <div className="flex flex-col items-center">
            {displayName ? (
              <p className="text-2xl font-semibold ">{displayName}</p>
            ) : (
              <div>
                <p className="text-2xl font-semibold ">Name not available</p>
              </div>
            )}

            <p className="text-gray-600">{email}</p>
          </div>
          <Link to="/updateProfile">
            <button className="bg-gradient-to-r from-[#A8D26D] to-[#007F5F]  py-2 px-8 mt-4 rounded-xl font-bold text-white hover:bg-gradient-to-l">
              Update Profile
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
