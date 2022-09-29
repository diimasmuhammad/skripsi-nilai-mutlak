import React from "react";
import DashboardHalamanGuru from "../components/dashboardHalamanGuru";
import ListLatihanSatu from "../components/guru/listsiswa/listLatihanSatu";
import ListLatihanDua from "../components/guru/listsiswa/listLatihanDua";
import ListLatihanTiga from "../components/guru/listsiswa/listLatihanTiga";
import Evaluasi from "../components/guru/listsiswa/listEvaluasi";
import { useState } from "react";
// import { useRouter } from "next/router";
// import { userAccessToken, fetchUser } from "../components/utils/fetchDataUser";
// import { useEffect } from "react";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default function hasilBelajarSiswa() {
  // const [halaman, setHalaman] = useState(1);
  const [selectOpsi, setSelectOpsi] = useState();
  const [selectSekolah, setSelectSekolah] = useState();
  // const [opsiSatu, setOpsiSatu] = useState(false);
  // const [opsiDua, setOpsiDua] = useState(false);
  // const [opsiTiga, setOpsiTiga] = useState(false);
  // const [opsiEmpat, setOpsiEmpat] = useState(false);
  // const [opsiSekolah, setOpsiSekolah] = useState(false);
  // const [pengguna, setPengguna] = useState({});

  // const router = useRouter();

  // useEffect(() => {
  //   const accessToken = userAccessToken();
  //   if (!accessToken) return router.push("/");
  //   const [userInfo] = fetchUser();

  //   setPengguna(userInfo);
  // }, []);

  return (
    <DashboardHalamanGuru>
      <div className="bg-white flex justify-center items-center p-7 m-2 border-2  border-trueGray-400 shadow-lg rounded sm:h-kontenguru h-screen">
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
                <option value="MAN 3 Banjarmasin">MAN 3 Banjarmasin</option>
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

          <div className="">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-auto h-120 w-120 sm:w-full">
                <table className="min-w-full leading-normal " id="print-tabel">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        No
                      </th>
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
                      <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Aksi
                      </th>
                    </tr>
                  </thead>

                  <tbody
                    className={
                      selectOpsi === "Latihan Bab Satu" &&
                      selectSekolah === "MAN 3 Banjarmasin"
                        ? " "
                        : "hidden"
                    }
                  >
                    <ListLatihanSatu></ListLatihanSatu>
                  </tbody>
                  <tbody
                    className={
                      selectOpsi === "Latihan Bab Dua" &&
                      selectSekolah === "MAN 3 Banjarmasin"
                        ? ""
                        : "hidden"
                    }
                  >
                    <ListLatihanDua></ListLatihanDua>
                  </tbody>
                  <tbody
                    className={
                      selectOpsi === "Latihan Bab Tiga" &&
                      selectSekolah === "MAN 3 Banjarmasin"
                        ? ""
                        : "hidden"
                    }
                  >
                    <ListLatihanTiga></ListLatihanTiga>
                  </tbody>
                  <tbody
                    className={
                      selectOpsi === "Evaluasi" &&
                      selectSekolah === "MAN 3 Banjarmasin"
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
  );
}
