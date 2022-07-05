import React from "react";
import DashboardHalamanGuru from "../components/dashboardHalamanGuru";
import ListLatihanSatu from "../components/guru/listsiswa/listLatihanSatu";
import ListLatihanDua from "../components/guru/listsiswa/listLatihanDua";
import ListLatihanTiga from "../components/guru/listsiswa/listLatihanTiga";
import Evaluasi from "../components/guru/listsiswa/listEvaluasi";
import { useState } from "react";

export default function hasilBelajarSiswa() {
  const [halaman, setHalaman] = useState(1);

  return (
    <DashboardHalamanGuru>
      <div className="bg-white flex justify-center items-center p-7 m-2 border-2  border-trueGray-400 shadow-lg rounded h-kontenguru">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex border-2 border-cyan-500 w-max rounded-md shadow-lg mb-2 text-sm">
            <button
              onClick={() => setHalaman(1)}
              className=" active:bg-cyan-500 block p-2 text-cyan-600 hover:shadow-lg hover:bg-cyan-400 focus:bg-cyan-400 hover:text-white focus:text-white active:text-white border-r border-indigo-400 outline-none cursor-pointer"
            >
              Latihan Bab Satu
            </button>
            <button
              onClick={() => setHalaman(2)}
              className="active:bg-cyan-500 block p-2 text-cyan-600 hover:shadow-lg hover:bg-cyan-400 focus:bg-cyan-400 hover:text-white focus:text-white active:text-white border-r border-indigo-400 outline-none cursor-pointer"
            >
              Latihan Bab Dua
            </button>
            <button
              onClick={() => setHalaman(3)}
              className="active:bg-cyan-500 block p-2 text-cyan-600 hover:shadow-lg hover:bg-cyan-400 focus:bg-cyan-400 hover:text-white focus:text-white active:text-white border-r border-indigo-400 outline-none cursor-pointer"
            >
              Latihan Bab Tiga
            </button>
            <button
              onClick={() => setHalaman(4)}
              className="active:bg-cyan-500 block p-2 text-cyan-600 hover:shadow-lg hover:bg-cyan-400 focus:bg-cyan-400 hover:text-white focus:text-white active:text-white border-r border-indigo-400 outline-none cursor-pointer"
            >
              Evaluasi
            </button>
          </div>

          <div className="">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Nama
                      </th>
                      <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Sekolah
                      </th>
                      <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Nilai
                      </th>
                      <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Tanggal
                      </th>
                    </tr>
                  </thead>
                  <tbody className={halaman === 1 ? " " : "hidden"}>
                    <ListLatihanSatu></ListLatihanSatu>
                  </tbody>
                  <tbody className={halaman === 2 ? " " : "hidden"}>
                    <ListLatihanDua></ListLatihanDua>
                  </tbody>
                  <tbody className={halaman === 3 ? " " : "hidden"}>
                    <ListLatihanTiga></ListLatihanTiga>
                  </tbody>
                  <tbody className={halaman === 4 ? " " : "hidden"}>
                    <Evaluasi></Evaluasi>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardHalamanGuru>
    // {/* <div>
    //   <div className="flex text-base">
    //     <div className=" absolute bottom-0 mb-2 ml-4">
    //       <button onClick={() => showPrevious(first)}>Sebelumnya</button>{" "}
    //     </div>
    //     <div className=" absolute bottom-0 right-0 mr-8 mb-2">
    //       <button onClick={() => showNext(last)}>Selanjutnya</button>
    //     </div>
    //   </div>
    // </div> */}
  );
}
