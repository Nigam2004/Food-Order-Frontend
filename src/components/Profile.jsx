import React, { useState, useContext, useEffect } from "react";
import { Cart } from "../../Context";

function Profile() {
  const { logedIn, setLogedIn } = useContext(Cart);
  let [show, setShow] = useState(false);
  const myData = async () => {
    const token = sessionStorage.getItem("token");
    console.log(token);
    try {
      const res = fetch("http://localhost:4000/user/mydata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    myData();
  }, []);
  return (
    <div className="relative">
      <div
        className=" text-orange-500 rounded-lg cursor-pointer border-2 border-orange-500 px-2 font-bold shadow-md"
        onClick={() => {
          setShow(!show);
        }}
      >
        NB
      </div>
      {show && (
        <div
          className="absolute   w-36 py-2 px-3 right-0 rounded shadow-md bg-white border-orange-500 border-b-4"
          data-aos="zoom-in"
        >
          <h1>Nigam Bisoyi</h1>
          <button
            onClick={() => {
              setLogedIn(false);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
