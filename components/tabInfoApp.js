import Link from "next/link";
import { useState } from "react";

export default function TabInfoApp() {
  const [bukaTab, setBukaTab] = useState(2);
  return (
    <>
      <div className="flex flex-wrap mt-4 ">
        <div className="w-full">
          {/* Tab Menu */}
          <div className="flex items-center border-b border-indigo-400 py-5 h-10">
            {/* Tab 1 */}
            <button
              className="block p-2 bg-sky-50 hover:shadow-lg hover:bg-sky-200 focus:bg-sky-200 border-r border-indigo-400 outline-none cursor-pointer"
              onClick={() => setBukaTab(1)}
            >
              Daftar Pustaka
            </button>
            {/* Tab 2 */}
            <button
              className="block p-2 bg-sky-50 hover:shadow-lg hover:bg-sky-200 focus:bg-sky-200 border-r border-indigo-400 outline-none cursor-pointer"
              onClick={() => setBukaTab(2)}
            >
              Informasi Aplikasi
            </button>
            {/* Tab 3 */}
            <button
              className="block p-2 bg-sky-50 hover:shadow-lg hover:bg-sky-200 focus:bg-sky-200 border-none outline-none cursor-pointer"
              onClick={() => setBukaTab(3)}
            >
              Petunjuk Aplikasi
            </button>
          </div>
        </div>
        {/* Konten */}
        <div className="flex justify-center text-justify p-4 mt-2 border border-indigo-200 rounded-lg shadow-xl overflow-auto h-80 w-screen">
          {/* Konten Tab 1 */}
          <div className={"pb-5 " + (bukaTab === 1 ? "block" : "hidden")}>
            <h1 className="font-bold uppercase text-xl text-center">
              Daftar Pustaka
            </h1>
            <p className="py-4">
              Media pembelajaran ini dibuat untuk memenuhi persyaratan dalam
              menyelesaikan Program Strata-1 Pendidikan Komputer dengan judul
              tugas akhir : "Pengembangan Media Pembelajaran Interaktif Berbasis
              Web pada Materi Persamaan dan Pertidaksamaan Nilai Mutlak Linear
              Satu Variabel dengan Metode Drill and Practice"
            </p>
            <p className="py-4">
              Media pembelajaran ini dibuat untuk memenuhi persyaratan dalam
              menyelesaikan Program Strata-1 Pendidikan Komputer dengan judul
              tugas akhir : "Pengembangan Media Pembelajaran Interaktif Berbasis
              Web pada Materi Persamaan dan Pertidaksamaan Nilai Mutlak Linear
              Satu Variabel dengan Metode Drill and Practice"
            </p>
            <p className="py-4">
              Media pembelajaran ini dibuat untuk memenuhi persyaratan dalam
              menyelesaikan Program Strata-1 Pendidikan Komputer dengan judul
              tugas akhir : "Pengembangan Media Pembelajaran Interaktif Berbasis
              Web pada Materi Persamaan dan Pertidaksamaan Nilai Mutlak Linear
              Satu Variabel dengan Metode Drill and Practice"
            </p>
          </div>
          {/* Konten Tab 2 */}
          <div className={"pb-5 " + (bukaTab === 2 ? "block" : "hidden")}>
            <h1 className="font-bold uppercase text-xl text-center">Perihal</h1>
            <p className="text-center py-4">
              Media pembelajaran ini dibuat untuk memenuhi persyaratan dalam
              menyelesaikan Program Strata-1 Pendidikan Komputer dengan judul
              tugas akhir : "Pengembangan Media Pembelajaran Interaktif Berbasis
              Web pada Materi Persamaan dan Pertidaksamaan Nilai Mutlak Linear
              Satu Variabel dengan Metode Drill and Practice"
            </p>
            <hr className="pb-5"></hr>
            <h1 className="font-bold uppercase text-xl text-center">
              Tentang Author
            </h1>{" "}
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="px-4">Nama</td>
                  <td className="px-4">:</td>
                  <td className="px-4">Dimas Maulana Muhammad</td>
                </tr>
                <tr>
                  <td className="px-4">Email</td>
                  <td className="px-4">:</td>
                  <td className="px-4">diimasmuhammad@gmail.com</td>
                </tr>
                <tr>
                  <td className="px-4">Dosen Pembimbing 1</td>
                  <td className="px-4">:</td>
                  <td className="px-4">Dr. Harja Santanapurba, M.Kom.</td>
                </tr>
                <tr>
                  <td className="px-4">Dosen Pembimbing 2</td>
                  <td className="px-4">:</td>
                  <td className="px-4">Asdini Sari, M.Pd</td>
                </tr>
                <tr>
                  <td className="px-4">Program Studi</td>
                  <td className="px-4">:</td>
                  <td className="px-4">S-1 Pendidikan Komputer</td>
                </tr>
                <tr>
                  <td className="px-4">Fakultas</td>
                  <td className="px-4">:</td>
                  <td className="px-4">Keguruan dan Ilmu Pendidikan</td>
                </tr>
                <tr>
                  <td className="px-4">Instansi</td>
                  <td className="px-4">:</td>
                  <td className="px-4">Universitas Lambung Mangkurat</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Konten Tab 3 */}
          <div className={"pb-5 " + (bukaTab === 3 ? "block" : "hidden")}>
            <h1 className="font-bold uppercase text-xl text-center">
              Petunjuk Penggunaan Aplikasi
            </h1>
            <p></p>
          </div>
        </div>
        {/* Footer */}
        <div className="item-center mt-4 font-semibold">
          <Link href="/">
            <button
              type="button"
              className="flex gap-2 bg-cyan-500 text-base text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
              </svg>
              Beranda
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
