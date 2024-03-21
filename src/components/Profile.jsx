import React, { useState, useContext, useEffect } from "react";
import { Cart } from "../../Context";

function Profile() {
  const { logedIn, setLogedIn } = useContext(Cart);
  let [show, setShow] = useState(false);
  const [profile, setProfile] = useState();
  let fLetter = profile?.firstName.split("")[0];
  let sLetter = profile?.lastName.split("")[0];
  const token = JSON.parse(sessionStorage.getItem("token"));
  const myData = async (token) => {
    try {
      const res = await fetch("http://localhost:5000/user/mydata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      let { data } = await res.json();
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myData(token);
  }, []);
  return (
    <div className="relative">
      <div
        className=" text-orange-500 rounded-lg cursor-pointer border-2 border-orange-500 px-2 font-bold shadow-md"
        onClick={() => {
          setShow(!show);
        }}
      >
        {fLetter + sLetter}
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
              sessionStorage.removeItem("token");
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
