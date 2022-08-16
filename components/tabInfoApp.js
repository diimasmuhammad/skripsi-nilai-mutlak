import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
          <div
            className={
              "pb-5 bg-cyan-500 text-white " +
              (bukaTab === 3 ? "block" : "hidden")
            }
          >
            <h1 className="font-bold uppercase text-xl text-center">
              Petunjuk Penggunaan Aplikasi
            </h1>
            <Image
              src="/ss1.png"
              quality={100}
              width={1898}
              height={892}
            ></Image>

            <p className="mb-4">
              <ol className="list-decimal p-4 bg-cyan-500">
                <li className="ml-2">Mulai</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-20 h-12"
                      src="/mulai.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke menu aplikasi
                  </p>
                </div>
              </ol>
            </p>
            <Image
              src="/ss2.png"
              quality={100}
              width={1898}
              height={892}
            ></Image>

            <p className="mb-4">
              <ol className="list-decimal p-4 bg-cyan-500">
                <li className="ml-2">Info Aplikasi</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-64 h-12"
                      src="/kunjungi.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke menu Info Aplikasi
                  </p>
                </div>
                <li className="ml-2">Kompetensi Inti Kompetensi Dasar</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-64 h-12"
                      src="/kunjungi.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke menu Kompetensi Inti
                    Kompetensi dasar
                  </p>
                </div>
                <li className="ml-2">Materi Belajar</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-64 h-12"
                      src="/kunjungi.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke menu Materi Belajar
                  </p>
                </div>
              </ol>
            </p>
            <Image
              src="/ss3.png"
              quality={100}
              width={1898}
              height={892}
            ></Image>

            <p className="mb-4">
              <ol className="list-decimal p-4 bg-cyan-500">
                <li className="ml-2">Daftar Pustaka</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-32 h-10"
                      src="/dapus.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke tab Daftar Pustaka
                  </p>
                </div>
                <li className="ml-2">Informasi</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-32 h-10"
                      src="/perihal.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke tab Informasi Aplikasi
                  </p>
                </div>
                <li className="ml-2">Petunjuk</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-32 h-10"
                      src="/petunjuk.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke tab Petunjuk
                  </p>
                </div>
                <li className="ml-2">Kolom Konten</li>
                <div className="ml-2">
                  <p>Akan menampilkan konten pada setiap tab </p>
                </div>
                <li className="ml-2">Beranda</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-28 h-10"
                      src="/beranda.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke Halaman Awal
                  </p>
                </div>
              </ol>
            </p>
            <Image
              src="/ss4.png"
              quality={100}
              width={1898}
              height={892}
            ></Image>
            <p className="mb-4">
              <ol className="list-decimal p-4 bg-cyan-500">
                <li className="ml-2">Kompetensi Inti</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-32 h-10"
                      src="/ki.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke tab Kompetensi Inti
                  </p>
                </div>
                <li className="ml-2">Kompetensi Dasar</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-32 h-10"
                      src="/kd.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke tab Kompetensi Dasar
                  </p>
                </div>
                <li className="ml-2">Kolom Konten</li>
                <div className="ml-2">
                  <p>Akan menampilkan konten pada setiap tab </p>
                </div>

                <li className="ml-2">Beranda</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-28 h-10"
                      src="/beranda.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke Halaman Awal
                  </p>
                </div>
              </ol>
            </p>

            <Image
              src="/ssmateri.png"
              quality={100}
              width={1898}
              height={892}
            ></Image>
            <p>
              <ol className="list-decimal p-4 bg-cyan-500">
                <li className="ml-2">Beranda</li>
                <div className="ml-2">
                  <p>
                    Jika{" "}
                    <img
                      className="inline-block w-10 h-6"
                      src="/beranda1.png"
                      alt=""
                    />{" "}
                    ditekan maka akan mengarahkan ke Halaman Utama
                  </p>
                </div>
                <li className="ml-2">Navigasi Daftar Isi</li>
                <div className="ml-2">
                  <p>
                    Navigasi ini terletak di bagian kiri yang berisi judul tiap
                    subbab pada bab Persamaan dan Pertidaksamaan Nilai Mutlak
                    Linear. Pengguna dapat pergi ke halaman awal subbab yang
                    diinginkan dengan menekan salah satunya.
                  </p>
                </div>
                <li className="ml-2">Kolom Materi</li>
                <div className="ml-2">
                  <p>
                    Akan menyajikan materi, contoh beserta latihan interaktif
                    pada setiap sub bab nya
                  </p>
                </div>
                <li className="ml-2">Navigasi Halaman</li>
                <div className="ml-2">
                  <p>
                    Navigasi ini terletak di bagian bawah kolom materi. Navigasi
                    ini bersifat linear, yang mana pengguna dapat berpindah ke
                    halaman selanjutnya atau ke halaman sebelumnya.
                  </p>
                </div>
              </ol>
            </p>
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
