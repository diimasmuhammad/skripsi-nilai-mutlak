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
                <option value="MA">MA</option>
              </select>
            </div>
          </div>
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
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
                  selectOpsi === "Latihan Bab Satu" && selectSekolah === "MA"
                    ? ""
                    : "hidden"
                }
              >
                <KunciJawabanSatu></KunciJawabanSatu>
              </tr>
              <tr
                className={
                  selectOpsi === "Latihan Bab Dua" && selectSekolah === "MA"
                    ? ""
                    : "hidden"
                }
              >
                <KunciJawabanDua></KunciJawabanDua>
              </tr>
              <tr
                className={
                  selectOpsi === "Latihan Bab Tiga" && selectSekolah === "MA"
                    ? ""
                    : "hidden"
                }
              >
                <KunciJawabanTiga></KunciJawabanTiga>
              </tr>
              <tr
                className={
                  selectOpsi === "Evaluasi" && selectSekolah === "MA"
                    ? ""
                    : "hidden"
                }
              >
                <KunciJawabanEvaluasi></KunciJawabanEvaluasi>
              </tr>
            </thead>

            <tbody
              className={
                "text-base text-center border border-cyan-400 " +
                (selectOpsi === "Latihan Bab Satu" && selectSekolah === "MA"
                  ? ""
                  : "hidden")
              }
            >
              <HasilJawabanSatu></HasilJawabanSatu>
            </tbody>
            <tbody
              className={
                "text-base text-center border border-cyan-400 " +
                (selectOpsi === "Latihan Bab Dua" && selectSekolah === "MA"
                  ? ""
                  : "hidden")
              }
            >
              <HasilJawabanDua></HasilJawabanDua>
            </tbody>
            <tbody
              className={
                "text-base text-center border border-cyan-400 " +
                (selectOpsi === "Latihan Bab Tiga" && selectSekolah === "MA"
                  ? ""
                  : "hidden")
              }
            >
              <HasilJawabanTiga></HasilJawabanTiga>
            </tbody>
            <tbody
              className={
                "text-base text-center border border-cyan-400 " +
                (selectOpsi === "Evaluasi" && selectSekolah === "MA"
                  ? ""
                  : "hidden")
              }
            >
              <HasilJawabanEvaluasi></HasilJawabanEvaluasi>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardHalamanGuru>
  );
}
