import React from "react";
import img from "../assets/table.jpg";

export default function Booking() {
  return (
    <>
      <div className="container mx-auto p-5 bg-white rounded-lg shadow-lg flex items-center justify-center w-full font-poppins ">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-semibold mb-4">Book Your Table</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <label
                  htmlFor="person"
                  className="block text-sm font-medium text-gray-600"
                >
                  No. Of person
                </label>
                <input
                  type="number"
                  id="person"
                  name="person"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-300"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="hidden md:block md:w-1/2">
            <img
              src={img}
              alt="Contact Image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}
