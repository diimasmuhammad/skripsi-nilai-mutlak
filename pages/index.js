import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        {/* Home */}
        <section className="relative">
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-10 lg:mt-15">
            {/* konten */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-center lg:text-left mb-6">
                Selamat Datang
              </h1>

              <h2 className="font-semibold text-1xl md:text-2xl lg:text-3xl text-center lg:text-left mb-6">
                Media Interaktif Pembelajaran Persamaan dan Pertidaksamaan Nilai
                Mutlak Linear
              </h2>
              <p className="text-center lg:text-left mb-6">
                Untuk SMA/MA Kelas X Semester Ganjil
              </p>
              <div className="flex justify-center flex-wrap">
                <Link href="#Menu">
                  <button
                    type="button"
                    className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  >
                    Mulai
                  </button>
                </Link>
              </div>
            </div>
            {/* Ilustrasi */}
            <div className="flex justify-center flex-1 md:mb-5 lg:mb-0">
              <Image src="/gambar1.svg" width={512} height={512}></Image>
            </div>
          </div>
        </section>
        {/* Menu */}
        <section id="Menu" className=" bg-trueGray-100 py-20 mt-20 lg:mt-40">
          {/* head */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-2xl text-center font-semibold">
              Menu Aplikasi
            </h1>
            <p className="text-center">
              Berikut adalah beberapa menu yang tersedia pada aplikasi
            </p>
          </div>

          {/* fitur*/}
          <div className="container grid grid-cols md:grid-cols-1 lg:grid-cols-3 gap-5 mt-20">
            {/* fitur 4*/}
            <div className="flex rotate-0 hover:rotate-3 duration-200 bg-gradient-to-tr from-white via-white to-cyan-400 flex-col rounded-md shadow-md lg:mb-16">
              <div className="p-6 flex flex-col items-center text-center">
                <Image src="/info.svg" width={64} height={64}></Image>
                <h3 className="mt-5 mb-2 text-lg uppercase">Info Aplikasi</h3>
                <p className="mb-2 font-light">
                  Halaman informasi mengenai aplikasi
                </p>
              </div>
              <div className="flex p-6 mt-12">
                <Link href="/info">
                  <button
                    type="button"
                    className="flex-1 bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  >
                    Kunjungi
                  </button>
                </Link>
              </div>
            </div>
            {/* fitur 1*/}
            <div className="flex rotate-0 hover:rotate-3 duration-200 bg-gradient-to-t from-white via-cyan-400 to-white flex-col rounded-md shadow-md lg:my-8">
              <div className="p-6 flex flex-col items-center text-center">
                <Image src="/education.svg" width={64} height={64}></Image>
                <h3 className="mt-5 mb-2 text-lg uppercase">
                  Kompetensi Inti Kompetensi Dasar
                </h3>
                <p className="mb-2 font-light">
                  Informasi Kompetensi Dasar Persamaan dan Pertidaksamaan Nilai
                  Mutlak Linear Satu Variabel
                </p>
              </div>
              <div className="flex p-6 ">
                <Link href="/kompetensiDasar">
                  <button
                    type="button"
                    className="flex-1 bg-cyan-500 text-white font-semibold mb-4 shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  >
                    Kunjungi
                  </button>
                </Link>
              </div>
            </div>
            {/* fitur 2*/}
            <div className="flex rotate-0 hover:-rotate-3 duration-200 bg-gradient-to-tl from-white via-white to-cyan-400 flex-col rounded-md shadow-md lg:mb-16">
              <div className="p-6 flex flex-col items-center text-center">
                <Image src="/buku.svg" width={64} height={64}></Image>
                <h3 className="mt-5 mb-2 text-lg uppercase">Materi Belajar</h3>
                <p className="mb-2 font-light">
                  Materi Persamaan dan Pertidaksamaan Nilai Mutlak Linear Satu
                  Variabel
                </p>
              </div>
              <div className="flex p-6 ">
                <Link href="/petaKonsep">
                  <button
                    type="button"
                    className="flex-1 bg-cyan-500 text-white font-semibold shadow-md py-3 mt-12 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  >
                    Kunjungi
                  </button>
                </Link>
              </div>
            </div>
            {/* fitur 3*/}
            {/* <div className="flex rotate-0 hover:-rotate-3 duration-200 bg-gradient-to-br from-white via-white to-cyan-400 flex-col rounded-md shadow-md lg:mb-16 ">
              <div className="p-6 flex flex-col items-center text-center">
                <Image src="/report.svg" width={64} height={64}></Image>
                <h3 className="mt-5 mb-2 text-lg uppercase">
                  Rekap Nilai Siswa
                </h3>
                <p className="mb-2 font-light">
                  Laporan hasil belajar siswa (Khusus Guru)
                </p>
              </div>
              <div className="flex p-6 mt-6 ">
                <Link href="/hasilBelajarSiswa">
                  <button
                    type="button"
                    className="flex-1 bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  >
                    Kunjungi
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </section>
      </Layout>
    </>
  );
}
