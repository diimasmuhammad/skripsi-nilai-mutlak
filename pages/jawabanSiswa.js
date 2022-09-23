import React, { useState, useEffect } from "react";

import DashboardHalamanGuru from "../components/dashboardHalamanGuru";
import KunciJawabanSatu from "../components/guru/hasiljawabansiswa/kunciJawabanSatu";
import KunciJawabanDua from "../components/guru/hasiljawabansiswa/kunciJawabanDua";
import KunciJawabanTiga from "../components/guru/hasiljawabansiswa/kunciJawabanTiga";
import KunciJawabanEvaluasi from "../components/guru/hasiljawabansiswa/kunciJawabanEvaluasi";
import HasilJawabanSatu from "../components/guru/hasiljawabansiswa/hasilJawabanSatu";
import HasilJawabanDua from "../components/guru/hasiljawabansiswa/hasilJawabanDua";
import HasilJawabanTiga from "../components/guru/hasiljawabansiswa/hasilJawabanTiga";
import HasilJawabanEvaluasi from "../components/guru/hasiljawabansiswa/hasilJawabanEvaluasi";

export default function jawabanSiswa() {
  const [selectOpsi, setSelectOpsi] = useState("");
  const [selectSekolah, setSelectSekolah] = useState("");

  return (
    <DashboardHalamanGuru>
      <div className="bg-white flex justify-center items-center p-7 m-2 border-2  border-trueGray-400 shadow-lg rounded h-kontenguru">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex">
            <div className=" border-2 border-cyan-500 w-max rounded-md shadow-lg mb-2 text-sm">
              <select
                className="p-2"
                value={null}
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
                value={null}
                onChange={(e) => setSelectSekolah(e.target.value)}
              >
                <option value="Pilih Sekolah" selected>
                  Pilih Sekolah
                </option>
                <option value="MAN 3 Banjarmasin">MAN 3 Banjarmasin</option>
              </select>
            </div>
          </div>
          <div className=" overflow-auto w-120 sm:w-full h-120">
            <table className=" leading-normal">
              {selectOpsi === "Evaluasi" &&
              selectSekolah === "MAN 3 Banjarmasin" ? (
                <thead>
                  <tr>
                    <th
                      rowSpan={4}
                      className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      No
                    </th>
                    <th
                      rowSpan={4}
                      className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Nama
                    </th>
                    <th
                      colSpan={25}
                      className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Soal
                    </th>
                  </tr>
                  <tr>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 1
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 2
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 3
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 4
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 5
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 6
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 7
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 8
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 9
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 10
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 11
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 12
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 13
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 14
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 15
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 16
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 17
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 18
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 19
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 20
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 21
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 22
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 23
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 24
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 25
                    </th>
                  </tr>
                  <tr>
                    <th
                      colSpan={25}
                      className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Kunci Jawaban
                    </th>
                  </tr>

                  <tr>
                    <KunciJawabanEvaluasi></KunciJawabanEvaluasi>
                  </tr>
                </thead>
              ) : (
                <thead>
                  <tr>
                    <th
                      rowSpan={4}
                      className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      No
                    </th>
                    <th
                      rowSpan={4}
                      className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Nama
                    </th>
                    <th
                      colSpan={10}
                      className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Soal
                    </th>
                  </tr>
                  <tr>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 1
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 2
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 3
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 4
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 5
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 6
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 7
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 8
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 9
                    </th>
                    <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                      Soal No 10
                    </th>
                  </tr>
                  <tr>
                    <th
                      colSpan={10}
                      className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      Kunci Jawaban
                    </th>
                  </tr>
                  <tr
                    className={
                      selectOpsi === "Latihan Bab Satu" &&
                      selectSekolah === "MAN 3 Banjarmasin"
                        ? ""
                        : "hidden"
                    }
                  >
                    <KunciJawabanSatu></KunciJawabanSatu>
                  </tr>
                  <tr
                    className={
                      selectOpsi === "Latihan Bab Dua" &&
                      selectSekolah === "MAN 3 Banjarmasin"
                        ? ""
                        : "hidden"
                    }
                  >
                    <KunciJawabanDua></KunciJawabanDua>
                  </tr>
                  <tr
                    className={
                      selectOpsi === "Latihan Bab Tiga" &&
                      selectSekolah === "MAN 3 Banjarmasin"
                        ? ""
                        : "hidden"
                    }
                  >
                    <KunciJawabanTiga></KunciJawabanTiga>
                  </tr>
                </thead>
              )}

              {selectOpsi === "Evaluasi" &&
              selectSekolah === "MAN 3 Banjarmasin" ? (
                <tbody className="text-base text-center border border-cyan-400 ">
                  <HasilJawabanEvaluasi></HasilJawabanEvaluasi>
                </tbody>
              ) : (
                <>
                  <tbody
                    className={
                      "text-base text-center border border-cyan-400 " +
                      (selectOpsi === "Latihan Bab Satu" &&
                      selectSekolah === "MAN 3 Banjarmasin"
                        ? ""
                        : "hidden")
                    }
                  >
                    <HasilJawabanSatu></HasilJawabanSatu>
                  </tbody>
                  <tbody
                    className={
                      "text-base text-center border border-cyan-400 " +
                      (selectOpsi === "Latihan Bab Dua" &&
                      selectSekolah === "MAN 3 Banjarmasin"
                        ? ""
                        : "hidden")
                    }
                  >
                    <HasilJawabanDua></HasilJawabanDua>
                  </tbody>
                  <tbody
                    className={
                      "text-base text-center border border-cyan-400 " +
                      (selectOpsi === "Latihan Bab Tiga" &&
                      selectSekolah === "MAN 3 Banjarmasin"
                        ? ""
                        : "hidden")
                    }
                  >
                    <HasilJawabanTiga></HasilJawabanTiga>
                  </tbody>
                </>

                //
              )}
            </table>
          </div>
        </div>
      </div>
    </DashboardHalamanGuru>
  );
}
