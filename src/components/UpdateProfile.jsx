import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../authProvider/AuthProvider";

const UpdateProfile = () => {
  const {updateCreateUser} = useContext(AuthContext);
  const handleUpdateUserData = (e) => {
    const name = e.target.username.value;
    const photoUrl = e.target.photoUrl.value;

    console.log(name, photoUrl);

    updateCreateUser(name, photoUrl)
      .then(() => {
        toast.success("Successfully update profile info");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-[#A8D26D] to-[#007F5F]">
        <Helmet>
          <title>Update Profile</title>
        </Helmet>
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white w-4/5 lg:w-1/3 rounded-lg mx-auto p-10 h-5/6 ">
            <h3 className="text-center font-bold text-2xl md:text-4xl mb-10 text-[#007F5F]">
              Update Profile Info
            </h3>
            <form onSubmit={handleUpdateUserData}>
              <label htmlFor="text" className="block mt-6">
                Name
              </label>
              <input
                className="block px-5 py-2  border-b-2 w-full mt-2 "
                name="username"
                type="text"
                placeholder="Type name"
                required
              />

              <label htmlFor="photoUrl" className="block mt-6">
                PhotoUrl
              </label>
              <input
                className="block px-5 py-2  border-b-2 w-full mt-2 "
                name="photoUrl"
                type="text"
                placeholder="Type photo url link"
                required
              />

              <div className="flex mt-4 justify-center">
                <input
                  type="submit"
                  value="SAVE CHANGES"
                  className="bg-gradient-to-r from-[#A8D26D] to-[#007F5F] w-3/4 py-2 rounded-xl font-bold text-white hover:bg-gradient-to-l"
                />
              </div>
            </form>
            <ToastContainer></ToastContainer>
            <div className="flex flex-col items-center justify-center  mt-6">
              <p className="mt-2">
                Donot update infor?{" "}
                <span className="text-[#007F5F] hover:font-semibold">
                  <Link to="/profile">Back to Profile</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
