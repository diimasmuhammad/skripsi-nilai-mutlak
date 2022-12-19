import React from "react";
import { Alert, Stack } from "@mui/material";

import { db } from "../../../firebase/initFirebase";
import {
  collection,
  endBefore,
  getDocs,
  limit,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  doc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const DataDiriGuru = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [passw, setPassw] = useState("");

  useEffect(() => {
    const koleksiUsername = collection(db, "userguru");

    const ambilData = onSnapshot(koleksiUsername, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          tanggal: doc.data().tanggal?.toDate().getTime(),
        }))
      );
    });

    return ambilData;
  }, []);

  const loginGuru = (e) => {
    e.preventDefault();
    data.map((action) => {
      const nama = action.namapengguna;
      const pass = action.passwordpengguna;

      if (user === "") {
        setError("Data username tidak ada!");
      } else {
        if (passw === pass) {
          const penggunahalguru = {
            namaGuru: user,
            passGuru: passw,
          };
          localStorage.setItem("dataGuru", JSON.stringify(penggunahalguru));
          props.signin(penggunahalguru);
        } else {
          setError("Data password tidak ada!");
        }
      }
    });
  };
  return (
    <div>
      <div>
        <section className="h-screen">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form onSubmit={loginGuru}>
                  {error ? (
                    <Stack sx={{ width: "100%" }} spacing={2}>
                      <Alert severity="error">{error}</Alert>
                    </Stack>
                  ) : (
                    ""
                  )}
                  <div className="relative mb-8">
                    <input
                      autocomplete="off"
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Username"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                    />
                    <label
                      for="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>
                  {/* <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Username"
                    />
                  </div> */}

                  {/* <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Password"
                    />
                  </div> */}
                  <div className="relative mb-8">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={(e) => setPassw(e.target.value)}
                      value={passw}
                    />
                    <label
                      for="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>

                  <div className="text-center lg:text-left">
                    <input
                      type="submit"
                      value="Login"
                      className="cursor-pointer inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-white hover:text-blue-700 hover:ring-1 hover:ring-blue-700 hover:shadow-lg focus:bg-white focus:text-blue-700 focus:ring-blue-700 focus:shadow-lg focus:outline-none focus:ring-1 active:bg-white active:shadow-lg active:text-blue-700 active:ring-1 active:ring-blue-700 transition duration-150 ease-in-out"

                      // className="bg-cyan-500 text-white font-semibold shadow-md py-1 px-2 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500 cursor-pointer"
                    />
                    {/* <button
                      type="button"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-white hover:text-blue-700 hover:ring-1 hover:ring-blue-700 hover:shadow-lg focus:bg-white focus:text-blue-700 focus:ring-blue-700 focus:shadow-lg focus:outline-none focus:ring-1 active:bg-white active:shadow-lg active:text-blue-700 active:ring-1 active:ring-blue-700 transition duration-150 ease-in-out"
                    >
                      Login
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default DataDiriGuru;
