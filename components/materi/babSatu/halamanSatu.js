import Image from "next/image";
import { useState } from "react";
import { InlineMath } from "react-katex";

export default function HalamanSatu() {
  const [petunjuk, setPetunjuk] = useState(false);

  // Save state box tabel
  const [boxTabel1A, setBoxTabel1A] = useState({});
  const [boxTabel1B, setBoxTabel1B] = useState({});
  const [boxTabel1C, setBoxTabel1C] = useState({});
  const [boxTabel1D, setBoxTabel1D] = useState({});
  const [boxTabel1E, setBoxTabel1E] = useState({});
  const [boxTabel1F, setBoxTabel1F] = useState({});

  // Save state cek jawaban tabel
  const [cekJawabanTabel1A, setCekJawabanTabel1A] = useState(false);
  const [cekJawabanTabel1B, setCekJawabanTabel1B] = useState(false);
  const [cekJawabanTabel1C, setCekJawabanTabel1C] = useState(false);
  const [cekJawabanTabel1D, setCekJawabanTabel1D] = useState(false);
  const [cekJawabanTabel1E, setCekJawabanTabel1E] = useState(false);
  const [cekJawabanTabel1F, setCekJawabanTabel1F] = useState(false);

  // Function cek jaawban tabel
  const cekJawaban1A = (jawaban1A) => {
    if (
      jawaban1A.target.value === "depan" ||
      jawaban1A.target.value === "Depan"
    ) {
      setBoxTabel1A({ border: "2px solid green" });
      setCekJawabanTabel1A(true);
    } else {
      setBoxTabel1A({ border: "2px solid red" });
      setCekJawabanTabel1A(false);
    }
  };
  const cekJawaban1B = (jawaban1B) => {
    if (jawaban1B.target.value === "2") {
      setBoxTabel1B({ border: "2px solid green" });
      setCekJawabanTabel1B(true);
    } else {
      setBoxTabel1B({ border: "2px solid red" });
      setCekJawabanTabel1B(false);
    }
  };
  const cekJawaban1C = (jawaban1C) => {
    if (
      jawaban1C.target.value === "belakang" ||
      jawaban1C.target.value === "Belakang"
    ) {
      setBoxTabel1C({ border: "2px solid green" });
      setCekJawabanTabel1C(true);
    } else {
      setBoxTabel1C({ border: "2px solid red" });
      setCekJawabanTabel1C(false);
    }
  };
  const cekJawaban1D = (jawaban1D) => {
    if (jawaban1D.target.value === "1") {
      setBoxTabel1D({ border: "2px solid green" });
      setCekJawabanTabel1D(true);
    } else {
      setBoxTabel1D({ border: "2px solid red" });
      setCekJawabanTabel1D(false);
    }
  };
  const cekJawaban1E = (jawaban1E) => {
    if (
      jawaban1E.target.value === "belakang" ||
      jawaban1E.target.value === "Belakang"
    ) {
      setBoxTabel1E({ border: "2px solid green" });
      setCekJawabanTabel1E(true);
    } else {
      setBoxTabel1E({ border: "2px solid red" });
      setCekJawabanTabel1E(false);
    }
  };
  const cekJawaban1F = (jawaban1F) => {
    if (jawaban1F.target.value === "1") {
      setBoxTabel1F({ border: "2px solid green" });
      setCekJawabanTabel1F(true);
    } else {
      setBoxTabel1F({ border: "2px solid red" });
      setCekJawabanTabel1F(false);
    }
  };
  const tooglePetunjuk = () => {
    setPetunjuk(!petunjuk);
  };
  return (
    <>
      <div className="relative text-base text-justify">
        <p className="flex justify-center font-semibold uppercase">
          Konsep Nilai Mutlak
        </p>
        <div className="flex justify-center mt-5">
          <div className="bg-white w-full mx-auto text-sm shadow-md border-b-4 border-indigo-400 rounded-2xl">
            <div className="bg-indigo-300 flex h-20 items-center">
              <p className="ml-4 text-white font-bold uppercase">
                Tujuan Pembelajaran
              </p>
            </div>
            <div className="p-4">
              <p className="text-base">
                Setelah mempelajari topik ini diharapkan
              </p>
              <ul className="ml-5 list-disc list-inside text-xs sm:text-base">
                <li>Siswa mampu mendefinisikan nilai mutlak dengan tepat</li>
                <li>
                  Siswa mampu menyelesaikan perhitungan bentuk nilai mutlak
                  dengan benar
                </li>
                <li>
                  Siswa mampu menggambarkan grafik fungsi nilai mutlak dengan
                  tepat
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex bg-white mt-3 border-t-2 border-trueGray-300">
          <p className="uppercase font-bold my-3 text-justify text-md">
            1.1 Konsep Nilai Mutlak
          </p>
        </div>
        <div className="flex flex-col bg-white text-sm border-t-2 border-trueGray-300">
          <p className=" indent-sm">
            Pernahkah kalian memikirkan berapa jarak antara rumah ke sekolah?
            Pada saat kalian memikirkan jarak tersebut, pernahkah terlintas
            dalam pikiran kalian bahwa jarak tersebut bernilai positif, negatif,
            atau mungkin selalu positif, atau selalu negatif? Mengapa demikian?
            Tentu kalian penasaran bukan? Untuk menjawab rasa penasaran kalian
            marilah menyimak konsep jarak yang berkaitan dengan nilai mutlak.
            Simaklah ilustrasi berikut.
          </p>
          <div className="border-t-2 border-trueGray-300 mt-2">
            <a className="text-white bg-indigo-300 w-full justify-center h-10 p-2 mt-2 flex rounded-lg items-center font-bold">
              Ilustrasi 1.1
            </a>
          </div>
          <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 ">
            <figure>
              <div className="flex justify-center items-center w-max m-2 mx-auto border border-black">
                <img
                  src="materi/sketsa-ilustrasi-jarak.png"
                  className="w-80 sm:w-130 h-48 sm:h-80"
                  alt=""
                />
                {/* <Image
                  src="/materi/sketsa-ilustrasi-jarak.png"
                  width={650}
                  height={280}
                ></Image> */}
              </div>
              <figcaption className=" text-xs font-serif italic pb-2 text-center">
                Gambar 1.1 Sketsa Ilustrasi Rumah
              </figcaption>
            </figure>
            <p className="text-justify indent-sm">
              Seorang anak akan menempuh perjalanan pergi pulang dari rumah ke
              sekolah setiap hari. Untuk itu Ia harus menempuh jarak tertentu,
              baik itu searah maupun berlawanan arah dari rumah ke sekolahnya.
              Kalian dapat memperhatikan Gambar 1 di atas, bahwa semua jarak
              yang mungkin akan ditempuh oleh anak tersebut dinyatakan dalam
              bilangan postif. Apakah kalian sudah mulai memahami konsep jarak?
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-white text-sm mt-4 border-t-2 border-trueGray-300">
          <a className="text-white mt-3 bg-indigo-300 w-full justify-center h-10 p-2 flex rounded-lg items-center font-bold">
            Ilustrasi 1.2
          </a>
          <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 ">
            <p className="text-justify indent-sm">
              Rudi bermain lompat-lompatan di lapangan. Dari posisi diam, rudi
              melompat ke depan 2 langkah, kemudian 3 langkah ke belakang,
              dilanjutkan 2 langkah ke depan, kemudian 1 langkah ke belakang,
              dan akhirnya 1 langkah lagi ke belakang.
            </p>

            <p className="text-justify indent-sm py-2">
              Secara matematis, ilustrasi ini dapat dinyatakan sebagai berikut.{" "}
            </p>
            <p className="text-justify indent-sm">
              Kita definisikan lompatan ke depan adalah searah dengan sumbu x
              positif. Dengan demikian, lompatan ke belakang adalah searah
              dengan sumbu x negatif. Perhatikan sketsa garis bilangan berikut.
            </p>
            <figure>
              <div className="flex justify-center items-center w-max m-2 mx-auto border border-black">
                <img
                  src="/materi/sketsa-garis-bilangan.png"
                  className="w-80 sm:w-130 h-48 sm:h-80"
                  alt=""
                />
                {/* <Image
                  src="/materi/sketsa-garis-bilangan.png"
                  quality={100}
                  width={800}
                  height={450}
                ></Image> */}
              </div>
              <figcaption className=" text-xs font-serif italic pb-2 text-center">
                Gambar 1.2 Sketsa Pergerakan Garis Bilangan
              </figcaption>
            </figure>

            <p className="text-justify indent-sm">
              Dari sketsa garis bilangan di atas didapatkan tabel sebagai
              berikut, kemudian{" "}
              <a className="font-bold">
                lengkapi keterangan tabel yang kosong!
              </a>
            </p>
            <div className="ml-8">
              <button
                onClick={tooglePetunjuk}
                className=" uppercase mt-2 flex justify-between items-center gap-8 px-2 py-1 transition-all duration-300 ease-linear bg-cyan-600 text-white hover:ring-1 hover:ring-cyan-600 rounded-lg hover:bg-white hover:text-cyan-600 hover:rounded-lg cursor-pointer"
              >
                Petunjuk
              </button>
            </div>
            <div
              className={
                "bg-cyan-500 p-2 mt-2 text-white " + (petunjuk ? "" : "hidden")
              }
            >
              <ol className="list-decimal pl-3">
                <li>
                  <div className="flex  items-center">
                    {" "}
                    <span className="mr-4">
                      Isi kotak kosong dengan jawaban anda
                    </span>
                    <img
                      src="/materi/1.png"
                      className="rounded-full w-20 h-14"
                    />
                  </div>
                </li>
                <li>
                  <div className="flex  items-center">
                    {" "}
                    <span className="mr-4">
                      Jika jawaban salah maka sisi kotak akan berwarna merah
                    </span>
                    <img
                      src="/materi/2.png"
                      className="rounded-full w-20 h-14"
                    />
                  </div>
                </li>
                <li>
                  <div className="flex  items-center">
                    {" "}
                    <span className="mr-4">
                      Jika jawaban benar maka sisi kotak akan berwarna hijau
                    </span>
                    <img
                      src="/materi/3.png"
                      className="rounded-full w-20 h-14"
                    />
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex justify-center items-center text-center pt-4">
              <table className="table-auto border-collapse border border-cyan-600 ...">
                <thead className="h-10 bg-cyan-500 text-white">
                  <tr>
                    <th className="border border-cyan-400">
                      Keterangan Pergerakan
                    </th>
                    <th className="border border-cyan-400">
                      Sketsa Pergerakan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-cyan-400">
                      Ke depan , 2 langkah{" "}
                    </td>
                    <td className="border border-cyan-400">
                      {" "}
                      <Image
                        src="/materi/sketsa-tabel-1.png"
                        className=""
                        quality={100}
                        width={464}
                        height={160}
                      ></Image>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-cyan-400">
                      Ke belakang , 3 langkah{" "}
                    </td>
                    <td className="border border-cyan-400 w-max">
                      <Image
                        src="/materi/sketsa-tabel-2.png"
                        className=""
                        quality={100}
                        width={500}
                        height={230}
                      ></Image>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-cyan-400 p-2">
                      Ke
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-24 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1(1)"
                        style={boxTabel1A}
                        onChange={cekJawaban1A}
                        placeholder=". . . . . . . . . . ."
                        autoComplete="off"
                        type="text"
                      />
                      ,
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1(2)"
                        style={boxTabel1B}
                        onChange={cekJawaban1B}
                        placeholder=". . . "
                        autoComplete="off"
                        type="text"
                      />
                      langkah{" "}
                    </td>
                    <td className="border border-cyan-400">
                      <Image
                        src="/materi/sketsa-tabel-3.png"
                        className=""
                        quality={100}
                        width={520}
                        height={280}
                      ></Image>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-cyan-400 p-2">
                      Ke
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-24 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1(3)"
                        style={boxTabel1C}
                        onChange={cekJawaban1C}
                        placeholder=". . . . . . . . . . ."
                        autoComplete="off"
                        type="text"
                      />
                      ,
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1(4)"
                        style={boxTabel1D}
                        onChange={cekJawaban1D}
                        placeholder=". . . "
                        autoComplete="off"
                        type="text"
                      />
                      langkah{" "}
                    </td>
                    <td className="border border-cyan-400">
                      <Image
                        src="/materi/sketsa-tabel-4.png"
                        className=""
                        quality={100}
                        width={520}
                        height={300}
                      ></Image>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-cyan-400 p-2">
                      Ke
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-24 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200 "
                        id="jawaban-1(5)"
                        style={boxTabel1E}
                        onChange={cekJawaban1E}
                        placeholder=". . . . . . . . . . ."
                        autoComplete="off"
                        type="text"
                      />
                      ,
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1(4)"
                        style={boxTabel1F}
                        onChange={cekJawaban1F}
                        placeholder=". . . "
                        autoComplete="off"
                        type="text"
                      />
                      langkah{" "}
                    </td>
                    <td className="border border-cyan-400">
                      <Image
                        src="/materi/sketsa-tabel-5.png"
                        className=""
                        quality={100}
                        width={520}
                        height={300}
                      ></Image>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-justify indent-sm py-2">
              Dari tabel di atas dapat kita misalkan bahwa{" "}
              <InlineMath math="2x-8" /> adalah posisi diam rudi. Kemudian anak
              panah pertama menunjukkan pergerakan pertama rudi dari posisi diam
              yaitu 2 langkah ke depan (mengarah ke sumbu{" "}
              <InlineMath math="x" /> positif atau <InlineMath math="+2" />
              ). Kemudian anak panah kedua menunjukkan pergerakan kedua rudi
              yaitu 3 langkah ke belakang (mengarah ke sumbu{" "}
              <InlineMath math="x" /> negatif atau <InlineMath math="-3" />
              ). Demikian seterusnya hingga rudi berhenti pada pergerakan
              kelima.
            </p>
            <p className="text-justify indent-sm">
              Jadi, kita dapat melihat pergerakan akhir rudi dari posisi awal
              adalah 1 langkah saja ke belakang{" "}
              <InlineMath math="(x = -1 \text{ atau } x = (+2) + (-3) + (+2) + (-1) " />{" "}
              <InlineMath math=" + (-1) = -1)"></InlineMath>, tetapi konsep
              nilai mutlak disini adalah berapa banyak langkah yang diambil
              rudi. Kita hanya menghitung banyak langkah, bukan arahnya,
              sehingga banyak langkahnya adalah{" "}
              <InlineMath
                math="|2| + |-3| +
                |2| + |-1| + |-1| = 9"
              />{" "}
              (atau 9 langkah).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
