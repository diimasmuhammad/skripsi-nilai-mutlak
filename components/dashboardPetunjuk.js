import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DashboardPetunjuk(props) {
  const [btnSatu, setBtnSatu] = useState(false);
  const [btnDua, setBtnDua] = useState(false);
  const [btnTiga, setBtnTiga] = useState(false);
  const [btnToogle, setBtnToogle] = useState(false);
  return (
    <div className="flex flex-col pt-12">
      {/* Header */}
      <div className="flex flex-col uppercase text-xs md:text-base font-normal sm:text-base sm:font-semibold">
        <div className="flex justify-between fixed inset-x-0 h-12 top-0 bg-cyan-600 text-white items-center border-b-2 border-white">
          {/* <div className="flex ml-3">
            <a
              className="flex justify-between items-center gap-8 px-2 py-1 hover:bg-white hover:text-cyan-500 hover:rounded-lg cursor-pointer"
              onClick={() => setBtnToogle(!btnToogle)}
            >
              Daftar Isi
              {btnToogle ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                >
                  <path d="m21 15.344-2.121 2.121-3.172-3.172-1.414 1.414 3.172 3.172L15.344 21H21zM3 8.656l2.121-2.121 3.172 3.172 1.414-1.414-3.172-3.172L8.656 3H3zM21 3h-5.656l2.121 2.121-3.172 3.172 1.414 1.414 3.172-3.172L21 8.656zM3 21h5.656l-2.121-2.121 3.172-3.172-1.414-1.414-3.172 3.172L3 15.344z"></path>
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                >
                  <path d="M16.121 6.465 14 4.344V10h5.656l-2.121-2.121 3.172-3.172-1.414-1.414zM4.707 3.293 3.293 4.707l3.172 3.172L4.344 10H10V4.344L7.879 6.465zM19.656 14H14v5.656l2.121-2.121 3.172 3.172 1.414-1.414-3.172-3.172zM6.465 16.121l-3.172 3.172 1.414 1.414 3.172-3.172L10 19.656V14H4.344z"></path>
                </svg>
              )}
            </a>
          </div> */}
          <div className="flex mx-auto">
            <Link href="/">
              <a className="flex items-center p-2">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={32}
                  height={32}
                ></Image>
                <span className=" ml-4 tracking-tighter ">
                  {process.env.namaAplikasi}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        {/* Side Bar */}
        {/* <div className="flex">
          <>
            <div
              className={
                "flex-col w-64 h-side bg-cyan-600 border-r-white " +
                (btnToogle ? "" : "hidden")
              }
            >
              <div className="mx-2 mt-2 text-white tracking-tight">
                <nav>
                  <a
                    className="cursor-pointer flex justify-between py-4 px-2 rounded-md hover:bg-white hover:text-cyan-500 "
                    onClick={() => {
                      setBtnSatu(!btnSatu);
                    }}
                  >
                    Pendahuluan
                    {btnSatu ? (
                      <svg
                        className=" w-8 h-6"
                        fill="white"
                        stroke="currentColor"
                      >
                        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                      </svg>
                    ) : (
                      <svg
                        className=" w-8 h-6"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                      </svg>
                    )}
                  </a>
                  <div
                    className={"font-normal mx-4 " + (btnSatu ? "" : " hidden")}
                  >
                    <Link href="/materiBabSatu">
                      <a className="block rounded-md px-5 py-3 hover:bg-white hover:text-cyan-500">
                        Konsep Nilai Mutlak
                      </a>
                    </Link>
                    <Link href="/latihanBabSatu">
                      <a className="block rounded-md px-5 py-3 hover:bg-white hover:text-cyan-500">
                        Latihan 1
                      </a>
                    </Link>
                  </div>

                  <a
                    className="cursor-pointer flex justify-between py-4 px-2 rounded-md hover:bg-white hover:text-cyan-500"
                    onClick={() => {
                      setBtnDua(!btnDua);
                    }}
                  >
                    Persamaan Nilai Mutlak
                    {btnDua ? (
                      <svg
                        className="w-8 h-6"
                        fill="white"
                        stroke="currentColor"
                      >
                        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-6"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                      </svg>
                    )}
                  </a>
                  <div
                    className={"font-normal mx-4 " + (btnDua ? "" : " hidden")}
                  >
                    <Link href="/materiBabDuaBagianSatu">
                      <a className="block rounded-md px-5 py-3 hover:bg-white hover:text-cyan-500">
                        Persamaan Linear Satu Variabel
                      </a>
                    </Link>
                    <Link href="/materiBabDuaBagianDua">
                      <a className="block rounded-md px-5 py-3 hover:bg-white hover:text-cyan-500">
                        Persamaan Nilai Mutlak Linear Satu Variabel
                      </a>
                    </Link>
                    <Link href="/latihanBabDua">
                      <a className="block rounded-md px-5 py-3 hover:bg-white hover:text-cyan-500">
                        Latihan 2
                      </a>
                    </Link>
                  </div>

                  <a
                    className="cursor-pointer flex justify-between py-4 px-2 rounded-md hover:bg-white hover:text-cyan-500"
                    onClick={() => {
                      setBtnTiga(!btnTiga);
                    }}
                  >
                    Pertidaksamaan Nilai Mutlak
                    {btnTiga ? (
                      <svg
                        className="w-8 h-6"
                        fill="white"
                        stroke="currentColor"
                      >
                        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-6"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                      </svg>
                    )}
                  </a>
                  <div
                    className={"font-normal mx-4 " + (btnTiga ? "" : " hidden")}
                  >
                    <Link href="/materiBabTiga">
                      <a className="block rounded-md px-5 py-3 hover:bg-white hover:text-cyan-500">
                        Pertidaksamaan Nilai Mutlak Linear Satu Variabel
                      </a>
                    </Link>
                    <Link href="/latihanBabTiga">
                      <a className="block rounded-md px-5 py-3 hover:bg-white hover:text-cyan-500">
                        Latihan 3
                      </a>
                    </Link>
                  </div>
                  <Link href="/evaluasi">
                    <a className="uppercase font-bold cursor-pointer tracking-wide text-lg flex justify-between py-3 px-2 rounded-md hover:bg-white hover:text-cyan-500">
                      Evaluasi
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </>
        </div> */}
        {/* Konten */}
        <div className="flex flex-col w-screen h-latihan overflow-auto text-2xl p-2 shadow-2xl rounded-lg border-t-4 border-b-4 border-indigo-500 m-4 select-none ">
          {props.children}
        </div>
      </div>
    </div>
  );
}
