import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const ShowPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("eyecross.png")) {
      ref.current.src = "Eyes-icon.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "eyecross.png";
      passwordRef.current.type = "password";
    }
  };

  const SavePassword = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className=" mycontainer flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          Password Box
          <span className="text-green-700">/&gt;</span>
        </h1>
        <p className="text-green-600 text-lg font-semibold text-center">
          Your own Password Manager
        </p>

        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border border-green-700 px-4 py-1 w-full"
            type="text"
            name="site"
            id="#site"
          />
          <div className="flex justify-between w-full">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-600 px-4 py-1 "
              type="text"
              name="username"
              id="#username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-600 px-4 py-1 "
                type="password"
                name="password"
                id="#password"
              />
              <span
                className="absolute right-[3px] top-0 cursor-pointer"
                onClick={ShowPassword}
              >
                <img
                  ref={ref}
                  src="/eyecross.png"
                  alt="Show"
                  className="w-9 p-2"
                ></img>
              </span>
            </div>
          </div>
          <button
            onClick={SavePassword}
            className="flex justify-center items-center bg-green-500 rounded-full px-4 py-1 gap-2 w-fit hover:bg-green-400 border border-black"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="passwords ">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to Show</div>}
          {passwordArray != 0 && (
            <table className="table-auto w-full rounded-2xl-md overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3">Site</th>
                  <th className="py-3">Username</th>
                  <th className="py-3">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 ">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-3 border border-white text-center w-32">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                      </td>
                      <td className="py-3 border border-white text-center w-32">
                        {item.username}
                      </td>
                      <td className="py-3 border border-white text-center w-32">
                        {item.password}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;
