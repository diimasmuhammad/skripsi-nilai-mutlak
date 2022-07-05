import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={
          "duration-300 h-screen bg-cyan-500 relative p-4 pt-8 text-white " +
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
              "cursor-pointer duration-500 w-8 " + (!open && "rotate-[360deg]")
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
          <li className="py-2  text-base flex items-center gap-x-4 cursor-pointer p-2 bg-white hover:text-white hover:ring-2 hover:ring-white hover:bg-cyan-500 rounded-md">
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
          <li className="py-2 mt-2  text-base flex items-center gap-x-4 cursor-pointer p-2 bg-white hover:text-white hover:ring-2 hover:ring-white hover:bg-cyan-500 rounded-md">
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
        </ul>
        <div className="flex gap-1 absolute bottom-5 ml-0 cursor-pointer">
          <Link href="/">
            <button
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
                  "duration-300 font-bold w-52 origin-left " +
                  (!open && "scale-0 hidden")
                }
              >
                Beranda
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
