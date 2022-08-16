import React from "react";
import DashboardHalamanGuru from "../components/dashboardHalamanGuru";
import ListLatihanSatu from "../components/guru/listsiswa/listLatihanSatu";
import ListLatihanDua from "../components/guru/listsiswa/listLatihanDua";
import ListLatihanTiga from "../components/guru/listsiswa/listLatihanTiga";
import Evaluasi from "../components/guru/listsiswa/listEvaluasi";
import { useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default function hasilBelajarSiswa() {
  const [halaman, setHalaman] = useState(1);
  const [selectOpsi, setSelectOpsi] = useState();
  const [selectSekolah, setSelectSekolah] = useState();
  const [opsiSatu, setOpsiSatu] = useState(false);
  const [opsiDua, setOpsiDua] = useState(false);
  const [opsiTiga, setOpsiTiga] = useState(false);
  const [opsiEmpat, setOpsiEmpat] = useState(false);
  const [opsiSekolah, setOpsiSekolah] = useState(false);

  // const gantiOpsiSatu = (isiOpsiSatu) => {
  //   if (isiOpsiSatu.target.value === "Latihan Bab Satu") {
  //     setOpsiSatu(true);
  //   } else {
  //     setOpsiSatu(false);
  //   }
  // };
  // const gantiOpsiDua = (isiOpsiDua) => {
  //   if (isiOpsiDua.target.value === "Latihan Bab Dua") {
  //     setOpsiDua(true);
  //   } else {
  //     setOpsiDua(false);
  //   }
  // };
  // const gantiOpsiTiga = (isiOpsiTiga) => {
  //   if (isiOpsiTiga.target.value === "Latihan Bab Tiga") {
  //     setOpsiTiga(true);
  //   } else {
  //     setOpsiTiga(false);
  //   }
  // };
  // const gantiOpsiEmpat = (isiOpsiEmpat) => {
  //   if (isiOpsiEmpat.target.value === "Evaluasi") {
  //     setOpsiEmpat(true);
  //   } else {
  //     setOpsiEmpat(false);
  //   }
  // };
  // const gantiOpsiSekolah = (isiOpsiSekolah) => {
  //   if (isiOpsiSekolah.target.value === "MA") {
  //     setOpsiSekolah(true);
  //   } else {
  //     setOpsiSekolah(false);
  //   }
  // };

  return (
    <DashboardHalamanGuru>
      <div className="bg-white flex justify-center items-center p-7 m-2 border-2  border-trueGray-400 shadow-lg rounded h-kontenguru">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex">
            <div className=" border-2 border-cyan-500 w-max rounded-md shadow-lg mb-2 text-sm">
              <select
                className="p-2"
                value={selectOpsi}
                onChange={(e) => setSelectOpsi(e.target.value)}
              >
                <option value="Pilih Laporan" selected>
                  Pilih Laporan
                </option>
                <option value="Latihan Bab Satu">Latihan Bab Satu</option>
                <option value="Latihan Bab Dua">Latihan Bab Dua</option>
                <option value="Latihan Bab Tiga">Latihan Bab Tiga</option>
                <option value="Evaluasi">Evaluasi</option>
              </select>
            </div>
            <div className="ml-4 border-2 border-cyan-500 w-max rounded-md shadow-lg mb-2 text-sm">
              <select
                className="p-2"
                value={selectSekolah}
                onChange={(e) => setSelectSekolah(e.target.value)}
              >
                <option value="Pilih Sekolah" selected>
                  Pilih Sekolah
                </option>
                <option value="MA">MA</option>
              </select>
            </div>
            {/* <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="print-tabel"
              filename="tablexls"
              sheet="tablexls"
              buttonText="Download as XLS"
            /> */}
          </div>

          {/* <button
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
            </button> */}

          <div className="">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal" id="print-tabel">
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
                        Hari/Tanggal
                      </th>
                      <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Jam
                      </th>
                    </tr>
                  </thead>

                  <tbody
                    className={
                      selectOpsi === "Latihan Bab Satu" &&
                      selectSekolah === "MA"
                        ? ""
                        : "hidden"
                    }
                  >
                    <ListLatihanSatu></ListLatihanSatu>
                  </tbody>
                  <tbody
                    className={
                      selectOpsi === "Latihan Bab Dua" && selectSekolah === "MA"
                        ? ""
                        : "hidden"
                    }
                  >
                    <ListLatihanDua></ListLatihanDua>
                  </tbody>
                  <tbody
                    className={
                      selectOpsi === "Latihan Bab Tiga" &&
                      selectSekolah === "MA"
                        ? ""
                        : "hidden"
                    }
                  >
                    <ListLatihanTiga></ListLatihanTiga>
                  </tbody>
                  <tbody
                    className={
                      selectOpsi === "Evaluasi" && selectSekolah === "MA"
                        ? ""
                        : "hidden"
                    }
                  >
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
