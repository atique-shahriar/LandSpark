import { Helmet } from "react-helmet-async";
import { MdPhoneInTalk } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="rounded-xl p-5 my-6">
        <h4 className="text-3xl font-bold text-center">Contact Us</h4>
      </div>
      <div className="flex  justify-center">
        <div className="flex flex-col lg:flex-row w-fit gap-10">
          <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Phone Contact
            </h2>
            <div className="flex justify-center">
              <MdPhoneInTalk className="text-7xl bg-[#259162] text-white rounded-[100%] p-3  mb-4"></MdPhoneInTalk>
            </div>
            <p className="text-gray-700 mb-2">
              For any urgent inquiries, you can reach us by phone:
            </p>
            <p className="text-[#259162] font-bold flex justify-center">
              123-456-7890
            </p>
          </div>

          <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Live Chat
            </h2>
            <div className="flex justify-center">
              <RiCustomerService2Fill className="text-7xl bg-[#259162] text-white rounded-[100%] p-3  mb-4"></RiCustomerService2Fill>
            </div>
            <p className="text-gray-700 mb-2">
              Our live chat support is available 24/7. Click below to start a
              chat:
            </p>
            <div className="flex justify-center">
              <button className="bg-[#259162] text-white font-bold px-4 py-2 rounded-md hover:bg-[#1b6d49] transition duration-300">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto bg-green-100 p-6 rounded-lg shadow-md pt-48 -mt-36 mb-10">
        <h2 className="text-4xl font-semibold mb-4 text-center">
          Get in Touch
        </h2>
        <form>
          <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="First Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="xyz@gmail.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="+012345678911"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Subject
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Write a meaningful subject"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Notes
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Write in Details . . . . . . "
              className="w-full px-4 py-2 border border-gray-300 resize-none rounded-md comment focus:outline-none focus:border-green-500"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#259162] text-white font-medium px-4 py-2 rounded-md hover:bg-dky-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
