import React from "react";
import { useState } from "react";

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
        <ul className="pt-8">
          <li className="py-2 text-trueGray-600 text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-trueGray-200 rounded-md">
            <img src="/laporan.svg"></img>
            <span
              className={" origin-left duration-200 " + (!open && "hidden")}
            >
              Hasil Belajar
            </span>
          </li>
          <li className="py-2 text-trueGray-600 text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-trueGray-200 rounded-md">
            <img src="/cek.svg"></img>
            <span
              className={" origin-left duration-200 " + (!open && "hidden")}
            >
              Jawaban Siswa
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
