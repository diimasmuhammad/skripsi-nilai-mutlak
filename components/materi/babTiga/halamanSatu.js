import Image from "next/image";
import { useState } from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export default function HalamanSatu() {
  const [bukaPenyelesaianSatu, setBukaPenyelesaianSatu] = useState(false);
  const [bukaPenyelesaianDua, setBukaPenyelesaianDua] = useState(false);
  return (
    <>
      <div className="relative text-base text-justify">
        <p className="flex justify-center font-semibold uppercase">
          Pertidaksamaan Nilai Mutlak
        </p>
        <div className="flex justify-center mt-3">
          <div className="bg-white w-full mx-auto text-sm shadow-md border-b-4 border-indigo-400 rounded-2xl">
            <div className="bg-indigo-300 flex h-16 items-center">
              <p className="ml-4 text-white font-bold uppercase">
                Tujuan Pembelajaran
              </p>
            </div>
            <div className="p-4">
              <p className="text-base">
                Setelah mempelajari topik ini diharapkan
              </p>
              <ul className="ml-5 list-disc list-inside text-xs sm:text-base">
                <li>
                  Siswa mampu menyelesaikan pertidaksamaan nilai mutlak linear
                  satu variabel dengan benar
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white text-sm mt-4 border-t-2 border-trueGray-300">
          <a className="text-white mt-3 bg-indigo-300 w-full justify-center h-10 p-2 flex rounded-lg items-center font-bold">
            Pengantar
          </a>
          <div className="p-1 mt-2 text-sm border-2 border-trueGray-300 ">
            <p className="text-justify indent-sm">
              Berdasarkan konsep nilai mutlak dan persamaan nilai mutlak, kita
              akan mempelajari bagaimana konsep pertidaksamaan nilai mutlak
              linear satu variabel.
            </p>
            <p className="text-justify indent-sm pt-2">
              Dalam kehidupan sehari-hari, banyak kita jumpai kasus yang
              melibatkan pembatasan suatu hal. Seperti lowongan kerja
              mensyaratkan pelamar dengan batas usia tertentu, batas nilai cukup
              seorang pelajar agar dinyatakan lulus dari ujian, dan batas berat
              bersih suatu kendaraan yang diperbolehkan oleh dinas perhubungan.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white text-sm mt-4 border-t-2 border-trueGray-300">
          Untuk memahami cara menyelesaian pertidaksamaan nilai mutlak, mari
          cermati contoh masalah yang berhubungan dengan pertidaksamaan nilai
          mutlak berikut ini.
          <div className="border-t-2 border-trueGray-300 mt-2">
            <a className="text-white bg-indigo-300 w-full justify-center h-10 p-2 mt-2 flex rounded-lg items-center font-bold">
              Masalah 3.1
            </a>
          </div>
          <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 flex flex-col gap-2">
            <p className="text-justify indent-sm">
              Seorang bayi lahir prematur di sebuah Rumah Sakit Ibu dan Anak.
              Untuk mengatur suhu tubuh bayi tetap stabil di suhu 34℃, maka
              harus dimasukkan ke inkubator selama 2 hari. Suhu inkubator harus
              dipertahankan berkisar antara 32℃ hingga 35℃. Bayi tersebut lahir
              dengan BB seberat 2.100-2.500 gram. Jika pengaruh suhu ruangan
              membuat suhu inkubator menyimpang sebesar 0,2℃, tentukan interval
              perubahan suhu inkubator.
            </p>
          </div>
          <button
            className="text-white mt-3 bg-indigo-300 w-full justify-center h-10 p-2 flex rounded-lg items-center font-bold hover:bg-white hover:text-indigo-300 hover:ring-2 hover:ring-indigo-300"
            onClick={() => setBukaPenyelesaianSatu(!bukaPenyelesaianSatu)}
          >
            Penyelesaian 3.1 (Klik Saya)
          </button>
          <div
            className={
              "p-3 mt-2 text-sm border-2 border-trueGray-300 flex flex-col gap-2 " +
              (bukaPenyelesaianSatu ? "" : "hidden")
            }
          >
            <p className="text-justify indent-sm">
              Pada kasus tersebut di atas, kita sudah mendapatkan data dan suhu
              inkubator yang harus dipertahankan selama 1-2 hari semenjak
              kelahiran, yaitu 34℃. Misalkan t adalah segala kemungkinan
              perubahan suhu inkubator akibat pengaruh suhu ruang, dengan
              perubahan yang diharapkan sebesar 0,2℃, Nilai mutlak suhu tersebut
              dapat dimodelkan, yaitu sebagai berikut.
            </p>
            <BlockMath>|t-34|≤0,2</BlockMath>
            <p className="text-center font-bold">
              Cara I (Menggunakan definisi nilai mutlak)
            </p>
            <p className="text-justify">
              Dengan menggunakan definisi nilai mutlak,{" "}
              <InlineMath>|t-34|</InlineMath> ditulis menjadi
            </p>
            <BlockMath math="|t-34| = \begin{cases} t-34, & \text{jika } t \ge 34 \\ -(t-34), & \text{jika } t < 34 \end{cases}" />
            <p className="text-justify">
              Akibatnya <InlineMath>|t-34| \le 0,2</InlineMath> berubah menjadi
            </p>
            <p className="text-justify">
              <InlineMath>t-34 \le 0,2</InlineMath> dan{" "}
              <InlineMath>-(t-34) \le 0,2</InlineMath> atau
            </p>
            <p className="text-justify">
              <InlineMath>t-34 \le 0,2</InlineMath> dan{" "}
              <InlineMath>(t-34) \ge -0,2</InlineMath> atau
            </p>
            <p className="text-justify">Atau dituliskan menjadi</p>
            <p className="text-justify">
              <InlineMath math="|t-34| \le 0,2 \Leftrightarrow -0,2 \le t-34 \le 0,2" />
            </p>
            <p className="text-justify indent-xl">
              <InlineMath math="\Leftrightarrow 33,8 \le t \le 34,2" />
            </p>
            <p className="text-justify">
              Dengan demikian, interval perubahan suhu inkubator adalah{" "}
              <InlineMath math="\{ t|33,8 \le t \le 34,2 \}" />.
            </p>
            <p className="text-justify">
              Jadi, perubahan suhu inkubator itu bergerak dari 33,8℃ sampai
              dengan 34,2℃.
            </p>

            <p className="text-center font-bold pt-2">
              Cara II (Menggunakan sifat nilai mutlak{" "}
              <InlineMath math="\bf |t|=\sqrt{(t^2)}" />)
            </p>
            <p className="text-justify">
              <InlineMath math="|t-34| \le 0,2 \Leftrightarrow \sqrt{(t-34)^2} \le 0,2" />
            </p>
            <p className="text-justify indent-xl">
              <InlineMath math="\Leftrightarrow (t-34)^2 \le (0,2)^2" />
            </p>
            <p className="text-justify indent-xl">
              <InlineMath math="\Leftrightarrow (t-34)^2 - (0,2)^2 \le 0" />
            </p>
            <p className="text-justify indent-xl">
              <InlineMath math="\Leftrightarrow [(t-34)-(0,2)][(t-34)+(0,2)] \le 0" />
            </p>
            <p className="text-justify indent-xl">
              <InlineMath math="\Leftrightarrow [(t-34,2)][(t-33,8)] \le 0" />
            </p>
            <p className="text-justify">
              Jadi, nilai pembuat nol nya adalah <InlineMath>t=34,2</InlineMath>{" "}
              atau <InlineMath>t=33,8</InlineMath>.
            </p>
            <p className="text-justify">
              Sehingga jika kita lihat dari garis bilangannya maka didapatkan
              interval <InlineMath math="\{ t|33,8 \le t \le 34,2 \}" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
