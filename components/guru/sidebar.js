import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={
          "duration-300 h-screen bg-cyan-500 relative p-4 pt-8 " +
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
        <ul className="pt-8 font-semibold text-black">
          <li className="py-2  text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-trueGray-200 rounded-md">
            <img src="/laporan.svg"></img>
            <span
              className={" origin-left duration-300 " + (!open && "scale-0")}
            >
              Hasil Belajar
            </span>
          </li>
          <li className="py-2  text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-trueGray-200 rounded-md">
            <img src="/cek.svg"></img>
            <span
              className={" origin-left duration-300 " + (!open && "scale-0")}
            >
              Jawaban Siswa
            </span>
          </li>
        </ul>
        <div className="flex gap-1 items-center absolute bottom-5 ml-0 cursor-pointer">
          <Link href="/">
            <button
              type="button"
              className=" bg-white text-base text-cyan-500 font-semibold shadow-md p-2 rounded-md hover:bg-cyan-500 hover:text-white hover:ring-2 hover:ring-white"
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
          <Link href={"/"}>
            <span
              className={
                "duration-300 font-bold w-52 origin-left bg-white p-2 rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-white hover:ring-2 hover:ring-white " +
                (!open && "scale-0")
              }
            >
              Beranda
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
