import React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { userAccessToken, fetchUser } from "../components/utils/fetchDataUser";

export default function DashboardHalamanGuru(props) {
  const [open, setOpen] = useState(true);

  // const [pengguna, setPengguna] = useState("");

  const [halaman, setHalaman] = useState(1);
  const [halamanMobile, setHalamanMobile] = useState(2);

  // const router = useRouter();

  // useEffect(() => {
  //   const accessToken = userAccessToken();
  //   if (!accessToken) return router.push("/");
  //   const [userInfo] = fetchUser();

  //   setPengguna(userInfo);
  // }, []);

  useEffect(() => {
    setHalaman(JSON.parse(window.localStorage.getItem("bukaHalamanGuru")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bukaHalamanGuru", halaman);
  }, [halaman]);
  useEffect(() => {
    setHalamanMobile(
      JSON.parse(window.localStorage.getItem("bukaHalamanGuruMobile"))
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bukaHalamanGuruMobile", halamanMobile);
  }, [halamanMobile]);

  const logOut = () => {
    localStorage.removeItem("dataGuru");
  };

  return (
    // sidebar
    <div className="flex flex-col">
      <div className="flex bg-gray-200 ">
        <div
          className={
            "duration-300 h-screen bg-cyan-500 relative p-4 pt-8 text-white sm:block hidden " +
            (open ? "w-72" : "w-20")
          }
        >
          <img
            src={"/kontrol.svg"}
            onClick={() => setOpen(!open)}
            className={
              "absolute cursor-pointer -right-3 top-9 w-7 border-2 border-cyan-500 bg-white rounded-full " +
              (!open && "rotate-180")
            }
          />
          <div className="flex gap-x-2 items-center">
            <img
              src="/icon.svg"
              className={
                "cursor-pointer duration-500 w-8 " +
                (!open && "rotate-[360deg]")
              }
            ></img>
            <p
              className={
                "text-sm font-semibold tracking-tighter origin-left duration-300 " +
                (!open && "scale-0")
              }
            >
              {process.env.namaAplikasi}
            </p>
          </div>
          <ul className="pt-8 font-semibold text-cyan-500">
            <Link href="/hasilBelajarSiswa">
              <li
                className={
                  "py-2  text-base flex items-center gap-x-4 cursor-pointer p-2 bg-white hover:text-white hover:ring-2 hover:ring-white hover:bg-cyan-500 rounded-md" +
                  (halaman === 1
                    ? " bg-cyan-500 text-white ring-2 ring-white"
                    : "")
                }
                onClick={() => setHalaman(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 19V5h14l.002 14H5z"></path>
                  <path d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z"></path>
                </svg>
                <span
                  className={
                    " origin-left duration-300 " + (!open && "scale-0 hidden")
                  }
                >
                  Hasil Belajar
                </span>
              </li>
            </Link>
            <Link href="/jawabanSiswa">
              <li
                className={
                  "py-2 mt-2  text-base flex items-center gap-x-4 cursor-pointer p-2 bg-white hover:text-white hover:ring-2 hover:ring-white hover:bg-cyan-500 rounded-md" +
                  (halaman === 2
                    ? " bg-cyan-500 text-white ring-2 ring-white"
                    : "")
                }
                onClick={() => setHalaman(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6.933 12.481-3.274-3.274 1.414-1.414 1.726 1.726 4.299-5.159 1.537 1.281-5.702 6.84z"></path>
                  <path d="M4 22h11v-2H4V8H2v12c0 1.103.897 2 2 2z"></path>
                </svg>
                <span
                  className={
                    " origin-left duration-300 " + (!open && "scale-0 hidden")
                  }
                >
                  Jawaban Siswa
                </span>
              </li>
            </Link>
            <Link href="/edit">
              <li
                className={
                  "py-2 mt-2  text-base flex items-center gap-x-4 cursor-pointer p-2 bg-white hover:text-white hover:ring-2 hover:ring-white hover:bg-cyan-500 rounded-md" +
                  (halaman === 3
                    ? " bg-cyan-500 text-white ring-2 ring-white"
                    : "")
                }
                onClick={() => setHalaman(3)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                  <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                </svg>
                <span
                  className={
                    " origin-left duration-300 " + (!open && "scale-0 hidden")
                  }
                >
                  Edit
                </span>
              </li>
            </Link>
          </ul>
          <div className="flex gap-1 absolute bottom-5 ml-0 cursor-pointer">
            <Link href="/">
              <button
                onClick={logOut}
                type="button"
                className=" bg-white text-base flex items-center text-cyan-500 font-semibold shadow-md p-2 rounded-md hover:bg-cyan-500 hover:text-white hover:ring-2 hover:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
                </svg>
                <span
                  className={
                    "duration-300 font-bold w-36 origin-left " +
                    (!open && "scale-0 hidden")
                  }
                >
                  Beranda
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-auto flex-col">
          <div className="text-2xl font-semibold flex-1 h-screen">
            <div className="bg-cyan-600 h-12 flex justify-between p-2 shadow-lg">
              <div>
                {" "}
                <img
                  src="/icon.svg"
                  className="cursor-pointer duration-500 w-8 "
                ></img>{" "}
              </div>
              <Link href="/" className="text-base tracking-wide">
                <a className="text-white uppercase mx-auto">Halaman Guru </a>
              </Link>

              {/* <div className="text-white flex justify-center items-center gap-2">
                <img
                  className="rounded-full w-12 h-10"
                  src={pengguna?.photoURL}
                  alt=""
                />
                <p className="text-sm">{pengguna.displayName}</p>
              </div> */}
            </div>
            <div>{props.children}</div>
          </div>
        </div>
      </div>

      <div className="bottom-0  mx-auto text-white block sm:hidden">
        <div className="flex container bg-cyan-500 w-130 p-2 mx-3 justify-between">
          <div>
            <Link href="/">
              <button
                className="hover:bg-white hover:text-cyan-500 p-2 rounded-lg"
                onClick={logOut}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
                </svg>
              </button>
            </Link>
          </div>
          <div>
            <Link href="/hasilBelajarSiswa">
              <button
                className={
                  "flex items-center gap-2 hover:bg-white hover:text-cyan-500 p-2 rounded-lg" +
                  (halamanMobile === 2
                    ? " bg-white text-cyan-500 ring-2 ring-cyan-500"
                    : "")
                }
                onClick={() => setHalamanMobile(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 19V5h14l.002 14H5z"></path>
                  <path d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z"></path>
                </svg>
                <span>Hasil Belajar</span>
              </button>
            </Link>
          </div>

          <div>
            <Link href="/jawabanSiswa">
              <button
                className={
                  "flex items-center gap-2 hover:bg-white hover:text-cyan-500 p-2 rounded-lg" +
                  (halamanMobile === 3
                    ? " bg-white text-cyan-500 ring-2 ring-cyan-500"
                    : "")
                }
                onClick={() => setHalamanMobile(3)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6.933 12.481-3.274-3.274 1.414-1.414 1.726 1.726 4.299-5.159 1.537 1.281-5.702 6.84z"></path>
                  <path d="M4 22h11v-2H4V8H2v12c0 1.103.897 2 2 2z"></path>
                </svg>
                <span>Jawaban Siswa</span>
              </button>
            </Link>
          </div>
          <div>
            <Link href="/edit">
              <button
                className={
                  "flex items-center gap-2 hover:bg-white hover:text-cyan-500 p-2 rounded-lg" +
                  (halamanMobile === 4
                    ? " bg-white text-cyan-500 ring-2 ring-cyan-500"
                    : "")
                }
                onClick={() => setHalamanMobile(4)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6.933 12.481-3.274-3.274 1.414-1.414 1.726 1.726 4.299-5.159 1.537 1.281-5.702 6.84z"></path>
                  <path d="M4 22h11v-2H4V8H2v12c0 1.103.897 2 2 2z"></path>
                </svg>
                <span>Edit</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
