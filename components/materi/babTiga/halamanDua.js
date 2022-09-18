import Image from "next/image";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { useState } from "react";
import { Hidden } from "@mui/material";

export default function HalamanDua() {
  const [petunjukSatu, setPetunjukSatu] = useState(false);
  const [petunjukDua, setPetunjukDua] = useState(false);

  const [bukaTab, setBukaTab] = useState(1);
  const [bukaMariMencobaSatu, setBukaMariMencobaSatu] = useState(false);
  const [bukaMariMencobaDua, setBukaMariMencobaDua] = useState(false);
  const [bukaContohSatu, setBukaContohSatu] = useState(false);
  const [bukaContohDua, setBukaContohDua] = useState(false);

  const tooglePetunjukSatu = () => {
    setPetunjukSatu(!petunjukSatu);
  };
  const tooglePetunjukDua = () => {
    setPetunjukDua(!petunjukDua);
  };

  // Save state mari mencoba cara 1
  const [box1A, setBox1A] = useState({});
  const [box1B, setBox1B] = useState({});
  const [box1C, setBox1C] = useState({});
  const [box1D, setBox1D] = useState({});
  const [box1E, setBox1E] = useState({});
  const [box1F, setBox1F] = useState({});
  const [box1G, setBox1G] = useState({});
  const [box1H, setBox1H] = useState({});
  const [box1I, setBox1I] = useState({});

  // Save state mari mencoba cara 2
  const [box2A, setBox2A] = useState({});
  const [box2B, setBox2B] = useState({});
  const [box2C, setBox2C] = useState({});
  const [box2D, setBox2D] = useState({});
  const [box2E, setBox2E] = useState({});
  const [box2F, setBox2F] = useState({});
  const [box2G, setBox2G] = useState({});
  const [box2H, setBox2H] = useState({});
  const [box2I, setBox2I] = useState({});
  const [box2J, setBox2J] = useState({});
  const [box2K, setBox2K] = useState({});
  const [box2L, setBox2L] = useState({});
  const [box2M, setBox2M] = useState({});
  const [box2N, setBox2N] = useState({});
  const [box2O, setBox2O] = useState({});
  const [box2P, setBox2P] = useState({});
  const [box2Q, setBox2Q] = useState({});
  const [box2R, setBox2R] = useState({});
  const [box2S, setBox2S] = useState({});

  // Save state cek jawaban mari mencoba cara 1
  const [cekJawabanBox1A, setCekJawabanBox1A] = useState(false);
  const [cekJawabanBox1B, setCekJawabanBox1B] = useState(false);
  const [cekJawabanBox1C, setCekJawabanBox1C] = useState(false);
  const [cekJawabanBox1D, setCekJawabanBox1D] = useState(false);
  const [cekJawabanBox1E, setCekJawabanBox1E] = useState(false);
  const [cekJawabanBox1F, setCekJawabanBox1F] = useState(false);
  const [cekJawabanBox1G, setCekJawabanBox1G] = useState(false);
  const [cekJawabanBox1H, setCekJawabanBox1H] = useState(false);
  const [cekJawabanBox1I, setCekJawabanBox1I] = useState(false);

  // Save state cek jawaban mari mencoba cara 1
  const [cekJawabanBox2A, setCekJawabanBox2A] = useState(false);
  const [cekJawabanBox2B, setCekJawabanBox2B] = useState(false);
  const [cekJawabanBox2C, setCekJawabanBox2C] = useState(false);
  const [cekJawabanBox2D, setCekJawabanBox2D] = useState(false);
  const [cekJawabanBox2E, setCekJawabanBox2E] = useState(false);
  const [cekJawabanBox2F, setCekJawabanBox2F] = useState(false);
  const [cekJawabanBox2G, setCekJawabanBox2G] = useState(false);
  const [cekJawabanBox2H, setCekJawabanBox2H] = useState(false);
  const [cekJawabanBox2I, setCekJawabanBox2I] = useState(false);
  const [cekJawabanBox2J, setCekJawabanBox2J] = useState(false);
  const [cekJawabanBox2K, setCekJawabanBox2K] = useState(false);
  const [cekJawabanBox2L, setCekJawabanBox2L] = useState(false);
  const [cekJawabanBox2M, setCekJawabanBox2M] = useState(false);
  const [cekJawabanBox2N, setCekJawabanBox2N] = useState(false);
  const [cekJawabanBox2O, setCekJawabanBox2O] = useState(false);
  const [cekJawabanBox2P, setCekJawabanBox2P] = useState(false);
  const [cekJawabanBox2Q, setCekJawabanBox2Q] = useState(false);
  const [cekJawabanBox2R, setCekJawabanBox2R] = useState(false);
  const [cekJawabanBox2S, setCekJawabanBox2S] = useState(false);

  // function cek jawaban mari mencoba cara 1
  const cekJawaban1A = (jawaban1A) => {
    if (jawaban1A.target.value === "-5") {
      setBox1A({ border: "2px solid green" });
      setCekJawabanBox1A(true);
    } else {
      setBox1A({ border: "2px solid red" });
      setCekJawabanBox1A(false);
    }
  };
  const cekJawaban1B = (jawaban1B) => {
    if (jawaban1B.target.value === "2x-1") {
      setBox1B({ border: "2px solid green" });
      setCekJawabanBox1B(true);
    } else {
      setBox1B({ border: "2px solid red" });
      setCekJawabanBox1B(false);
    }
  };
  const cekJawaban1C = (jawaban1C) => {
    if (jawaban1C.target.value === "5") {
      setBox1C({ border: "2px solid green" });
      setCekJawabanBox1C(true);
    } else {
      setBox1C({ border: "2px solid red" });
      setCekJawabanBox1C(false);
    }
  };
  const cekJawaban1D = (jawaban1D) => {
    if (jawaban1D.target.value === "-4") {
      setBox1D({ border: "2px solid green" });
      setCekJawabanBox1D(true);
    } else {
      setBox1D({ border: "2px solid red" });
      setCekJawabanBox1D(false);
    }
  };
  const cekJawaban1E = (jawaban1E) => {
    if (jawaban1E.target.value === "2x") {
      setBox1E({ border: "2px solid green" });
      setCekJawabanBox1E(true);
    } else {
      setBox1E({ border: "2px solid red" });
      setCekJawabanBox1E(false);
    }
  };
  const cekJawaban1F = (jawaban1F) => {
    if (jawaban1F.target.value === "6") {
      setBox1F({ border: "2px solid green" });
      setCekJawabanBox1F(true);
    } else {
      setBox1F({ border: "2px solid red" });
      setCekJawabanBox1F(false);
    }
  };
  const cekJawaban1G = (jawaban1G) => {
    if (jawaban1G.target.value === "-2") {
      setBox1G({ border: "2px solid green" });
      setCekJawabanBox1G(true);
    } else {
      setBox1G({ border: "2px solid red" });
      setCekJawabanBox1G(false);
    }
  };
  const cekJawaban1H = (jawaban1H) => {
    if (jawaban1H.target.value === "x") {
      setBox1H({ border: "2px solid green" });
      setCekJawabanBox1H(true);
    } else {
      setBox1H({ border: "2px solid red" });
      setCekJawabanBox1H(false);
    }
  };
  const cekJawaban1I = (jawaban1I) => {
    if (jawaban1I.target.value === "3") {
      setBox1I({ border: "2px solid green" });
      setCekJawabanBox1I(true);
    } else {
      setBox1I({ border: "2px solid red" });
      setCekJawabanBox1I(false);
    }
  };

  // function cek jawaban mari mencoba cara 1
  const cekJawaban2A = (jawaban2A) => {
    if (jawaban2A.target.value === "2x+5") {
      setBox2A({ border: "2px solid green" });
      setCekJawabanBox2A(true);
    } else {
      setBox2A({ border: "2px solid red" });
      setCekJawabanBox2A(false);
    }
  };
  const cekJawaban2B = (jawaban2B) => {
    if (jawaban2B.target.value === "x+4") {
      setBox2B({ border: "2px solid green" });
      setCekJawabanBox2B(true);
    } else {
      setBox2B({ border: "2px solid red" });
      setCekJawabanBox2B(false);
    }
  };
  const cekJawaban2C = (jawaban2C) => {
    if (jawaban2C.target.value === "2x+5") {
      setBox2C({ border: "2px solid green" });
      setCekJawabanBox2C(true);
    } else {
      setBox2C({ border: "2px solid red" });
      setCekJawabanBox2C(false);
    }
  };
  const cekJawaban2D = (jawaban2D) => {
    if (jawaban2D.target.value === "x+4") {
      setBox2D({ border: "2px solid green" });
      setCekJawabanBox2D(true);
    } else {
      setBox2D({ border: "2px solid red" });
      setCekJawabanBox2D(false);
    }
  };
  const cekJawaban2E = (jawaban2E) => {
    if (jawaban2E.target.value === "2x+5") {
      setBox2E({ border: "2px solid green" });
      setCekJawabanBox2E(true);
    } else {
      setBox2E({ border: "2px solid red" });
      setCekJawabanBox2E(false);
    }
  };
  const cekJawaban2F = (jawaban2F) => {
    if (jawaban2F.target.value === "x+4") {
      setBox2F({ border: "2px solid green" });
      setCekJawabanBox2F(true);
    } else {
      setBox2F({ border: "2px solid red" });
      setCekJawabanBox2F(false);
    }
  };
  const cekJawaban2G = (jawaban2G) => {
    if (jawaban2G.target.value === "2x+5") {
      setBox2G({ border: "2px solid green" });
      setCekJawabanBox2G(true);
    } else {
      setBox2G({ border: "2px solid red" });
      setCekJawabanBox2G(false);
    }
  };
  const cekJawaban2H = (jawaban2H) => {
    if (jawaban2H.target.value === "x+4") {
      setBox2H({ border: "2px solid green" });
      setCekJawabanBox2H(true);
    } else {
      setBox2H({ border: "2px solid red" });
      setCekJawabanBox2H(false);
    }
  };
  const cekJawaban2I = (jawaban2I) => {
    if (jawaban2I.target.value === "0") {
      setBox2I({ border: "2px solid green" });
      setCekJawabanBox2I(true);
    } else {
      setBox2I({ border: "2px solid red" });
      setCekJawabanBox2I(false);
    }
  };
  const cekJawaban2J = (jawaban2J) => {
    if (jawaban2J.target.value === "2x+5") {
      setBox2J({ border: "2px solid green" });
      setCekJawabanBox2J(true);
    } else {
      setBox2J({ border: "2px solid red" });
      setCekJawabanBox2J(false);
    }
  };
  const cekJawaban2K = (jawaban2K) => {
    if (jawaban2K.target.value === "x+4") {
      setBox2K({ border: "2px solid green" });
      setCekJawabanBox2K(true);
    } else {
      setBox2K({ border: "2px solid red" });
      setCekJawabanBox2K(false);
    }
  };
  const cekJawaban2L = (jawaban2L) => {
    if (jawaban2L.target.value === "2x+5") {
      setBox2L({ border: "2px solid green" });
      setCekJawabanBox2L(true);
    } else {
      setBox2L({ border: "2px solid red" });
      setCekJawabanBox2L(false);
    }
  };
  const cekJawaban2M = (jawaban2M) => {
    if (jawaban2M.target.value === "x+4") {
      setBox2M({ border: "2px solid green" });
      setCekJawabanBox2M(true);
    } else {
      setBox2M({ border: "2px solid red" });
      setCekJawabanBox2M(false);
    }
  };
  const cekJawaban2N = (jawaban2N) => {
    if (jawaban2N.target.value === "0") {
      setBox2N({ border: "2px solid green" });
      setCekJawabanBox2N(true);
    } else {
      setBox2N({ border: "2px solid red" });
      setCekJawabanBox2N(false);
    }
  };
  const cekJawaban2O = (jawaban2O) => {
    if (jawaban2O.target.value === "3x+9") {
      setBox2O({ border: "2px solid green" });
      setCekJawabanBox2O(true);
    } else {
      setBox2O({ border: "2px solid red" });
      setCekJawabanBox2O(false);
    }
  };
  const cekJawaban2P = (jawaban2P) => {
    if (jawaban2P.target.value === "x+1") {
      setBox2P({ border: "2px solid green" });
      setCekJawabanBox2P(true);
    } else {
      setBox2P({ border: "2px solid red" });
      setCekJawabanBox2P(false);
    }
  };
  const cekJawaban2Q = (jawaban2Q) => {
    if (jawaban2Q.target.value === "0") {
      setBox2Q({ border: "2px solid green" });
      setCekJawabanBox2Q(true);
    } else {
      setBox2Q({ border: "2px solid red" });
      setCekJawabanBox2Q(false);
    }
  };
  const cekJawaban2R = (jawaban2R) => {
    if (jawaban2R.target.value === "-3") {
      setBox2R({ border: "2px solid green" });
      setCekJawabanBox2R(true);
    } else {
      setBox2R({ border: "2px solid red" });
      setCekJawabanBox2R(false);
    }
  };
  const cekJawaban2S = (jawaban2S) => {
    if (jawaban2S.target.value === "-1") {
      setBox2S({ border: "2px solid green" });
      setCekJawabanBox2S(true);
    } else {
      setBox2S({ border: "2px solid red" });
      setCekJawabanBox2S(false);
    }
  };
  return (
    <>
      <div className="text-base text-justify relative">
        <p className="text-justify">
          Dari masalah sebelumnya maka dapat disimpulkan bahwa pertidaksamaan
          nilai mutlak linear satu variabel dapat diselesaikan dengan cara
          berikut.
        </p>
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 gap-1 border-t-2 mt-2 border-trueGray-300">
          <li className="flex-auto text-center">
            <button
              className={
                " rounded-lg bg-indigo-300 text-white hover:text-indigo-300 w-full block font-medium text-base leading-tight uppercase border-x-0 border-t-0 border-b-2 border-r-2 border-transparent px-6 py-2 my-2 hover:border-indigo-300 hover:bg-gray-100  cursor-pointer " +
                (bukaTab === 1
                  ? " text-indigo-300  bg-gray-100 border-indigo-300"
                  : "")
              }
              onClick={() => setBukaTab(1)}
            >
              Cara 1 (Klik Saya)
            </button>
          </li>

          <li className=" flex-auto text-center">
            <button
              className={
                " rounded-lg bg-indigo-300 text-white hover:text-indigo-300 w-full block font-medium text-base leading-tight uppercase border-x-0 border-t-0 border-b-2 border-r-2 border-transparent px-6 py-2 my-2 hover:border-indigo-300 hover:bg-gray-100  cursor-pointer " +
                (bukaTab === 2
                  ? " text-indigo-300  bg-gray-100 border-indigo-300"
                  : "")
              }
              onClick={() => setBukaTab(2)}
            >
              Cara 2 (Klik Saya)
            </button>
          </li>
        </ul>

        {/* Cara 1 */}
        <div className={bukaTab === 1 ? "block" : "hidden"}>
          <div className="p-2 mt-2 text-sm border-2 border-trueGray-300 text-justify ">
            <ol className="list-decimal pt-2 ml-3 list-outside flex flex-col gap-2">
              <li className="font-bold">Menggunakan Definisi Nilai Mutlak</li>
              <p className="text-justify">
                <InlineMath math="|x| = \begin{cases} x, & \text{untuk } x \ge 0 \\ -x, & \text{untuk } x < 0 \end{cases}" />
              </p>
              <p className="text-justify">
                Untuk setiap <InlineMath>a,x</InlineMath> bilangan riil berlaku
                sifat-sifat nilai mutlak sebagai berikut.
              </p>
              <ol className="list-lowerAlpha list-inside flex flex-col gap-2">
                <li>
                  {" "}
                  Jika <InlineMath>a \ge 0</InlineMath> dan{" "}
                  <InlineMath>|x| \le a</InlineMath>, maka nilai{" "}
                  <InlineMath>-a \le x \le a</InlineMath>.
                </li>
                <li>
                  {" "}
                  Jika <InlineMath>a \lt 0</InlineMath> dan{" "}
                  <InlineMath>|x| \le a</InlineMath>, maka tidak ada bilangan
                  riil <InlineMath>x</InlineMath> yang memenuhi pertidaksamaan.
                </li>
                <li>
                  {" "}
                  Jika <InlineMath>a \gt 0</InlineMath> dan{" "}
                  <InlineMath>|x| \ge a</InlineMath> maka nilai{" "}
                  <InlineMath>x \ge a</InlineMath> atau{" "}
                  <InlineMath>x \le -a</InlineMath>.
                </li>
              </ol>
            </ol>
          </div>
          <button
            className="text-white justify-center bg-indigo-300 w-full h-10 p-2 mt-2 flex rounded-lg items-center font-bold hover:bg-white hover:text-indigo-300 hover:ring-2 hover:ring-indigo-300"
            onClick={() => setBukaContohSatu(!bukaContohSatu)}
          >
            Contoh Soal (Klik Saya)
          </button>
          {/* Contoh Soal Cara 1 */}
          <div className={"" + (bukaContohSatu ? "" : "hidden")}>
            <div className="p-3 pl-5 mt-2 text-sm border-2 border-trueGray-300 flex flex-col gap-2 ">
              <ol className="list-outside list-decimal">
                <li>
                  {" "}
                  Tentukan himpunan penyelesaian dari pertidaksamaan{" "}
                  <InlineMath>|3x+2| \gt 4</InlineMath>!
                </li>
              </ol>

              <p className="font-bold">Penyelesaian:</p>
              <p className="font-bold">Berdasarkan sifat(c), maka:</p>
              <p className="text-justify">
                {" "}
                <InlineMath>|3x+2| \gt 4 </InlineMath>{" "}
              </p>
              <p className="text-justify">
                {" "}
                <InlineMath>3x+2 \lt -4 </InlineMath>{" "}
                <span className="ml-8">atau</span>
                <span className="ml-9">
                  <InlineMath>3x=2 \gt 4</InlineMath>
                </span>
              </p>
              <p className="text-justify">
                {" "}
                <InlineMath>3x \lt -6</InlineMath>
                <span className="ml-32">
                  <InlineMath>3x \gt 2</InlineMath>
                </span>
              </p>
              <p className="text-justify">
                {" "}
                <InlineMath>x \lt -2 </InlineMath>
                <span className="ml-36">
                  <InlineMath>x \gt \dfrac 2 3</InlineMath>
                </span>
              </p>
              <p className="text-justify">
                Jadi, himpunan penyelesaiannya adalah{" "}
                <InlineMath math="\{x|x \lt -2 \text{ atau } x \gt \dfrac 2 3 \}" />
                .
              </p>
            </div>
            <button
              className="text-white justify-center bg-indigo-300 w-full h-10 p-2 mt-2 flex rounded-lg items-center font-bold hover:bg-white hover:text-indigo-300 hover:ring-2 hover:ring-indigo-300"
              onClick={() => setBukaMariMencobaSatu(!bukaMariMencobaSatu)}
            >
              Mari Mencoba (Klik Saya)
            </button>
            <div
              className={
                "p-3 pl-5 mt-2 text-sm border-2 border-trueGray-300 flex flex-col gap-2 " +
                (bukaMariMencobaSatu ? "" : "hidden")
              }
            >
              <div>
                <button
                  onClick={tooglePetunjukSatu}
                  className=" uppercase mt-2 flex justify-between items-center gap-8 px-2 py-1 transition-all duration-300 ease-linear bg-cyan-600 text-white hover:ring-1 hover:ring-cyan-600 rounded-lg hover:bg-white hover:text-cyan-600 hover:rounded-lg cursor-pointer"
                >
                  Petunjuk (klik saya)
                </button>
              </div>
              <div
                className={
                  "bg-cyan-500 w-full p-2 mt-2 text-white " +
                  (petunjukSatu ? "" : "hidden")
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
              <ol className="list-outside list-decimal">
                <li>
                  Tentukan himpunan penyelesaian dari pertidaksamaan{" "}
                  <InlineMath>|2x-1| \le 5</InlineMath>!
                </li>
                <p className="font-bold">Penyelesaian:</p>
                <p className="pt-2">
                  <InlineMath>|2x-1| \le 5</InlineMath>
                </p>
                <p className="py-2 font-bold">Berdasarkan sifat(a),maka:</p>
                <p className="py-2">
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-1(1)"
                      style={box1A}
                      onChange={cekJawaban1A}
                      type="text"
                      placeholder=". . . . . "
                      autoComplete="off"
                    />
                    <InlineMath>\le</InlineMath>
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-1(2)"
                      style={box1B}
                      onChange={cekJawaban1B}
                      type="text"
                      placeholder=". . . . . . . ."
                      autoComplete="off"
                    />
                    <InlineMath>\le</InlineMath>
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-1(3)"
                      style={box1C}
                      onChange={cekJawaban1C}
                      type="text"
                      placeholder=". . . . . "
                      autoComplete="off"
                    />
                  </div>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox1A && cekJawabanBox1B && cekJawabanBox1C
                      ? ""
                      : "hidden")
                  }
                >
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-1(4)"
                      style={box1D}
                      onChange={cekJawaban1D}
                      type="text"
                      placeholder=". . . . . "
                      autoComplete="off"
                    />
                    <InlineMath>\le</InlineMath>
                    <input
                      className="bg-gray-200 appearance-none border-2 mx-3 border-gray-200 rounded-lg w-10 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-1(5)"
                      style={box1E}
                      onChange={cekJawaban1E}
                      type="text"
                      placeholder=". . . . . "
                      autoComplete="off"
                    />
                    <InlineMath>\le</InlineMath>
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-1(6)"
                      style={box1F}
                      onChange={cekJawaban1F}
                      type="text"
                      placeholder=". . . . . "
                      autoComplete="off"
                    />
                  </div>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox1A &&
                    cekJawabanBox1B &&
                    cekJawabanBox1C &&
                    cekJawabanBox1D &&
                    cekJawabanBox1E &&
                    cekJawabanBox1F
                      ? ""
                      : "hidden")
                  }
                >
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-1(7)"
                      style={box1G}
                      onChange={cekJawaban1G}
                      type="text"
                      placeholder=". . . . . "
                      autoComplete="off"
                    />
                    <InlineMath>\le</InlineMath>
                    <input
                      className="bg-gray-200 appearance-none border-2 mx-3 border-gray-200 rounded-lg w-10 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-1(8)"
                      style={box1H}
                      onChange={cekJawaban1H}
                      type="text"
                      placeholder=". . . . . "
                      autoComplete="off"
                    />
                    <InlineMath>\le</InlineMath>
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-1(1)"
                      style={box1I}
                      onChange={cekJawaban1I}
                      type="text"
                      placeholder=". . . . . "
                      autoComplete="off"
                    />
                  </div>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox1A &&
                    cekJawabanBox1B &&
                    cekJawabanBox1C &&
                    cekJawabanBox1D &&
                    cekJawabanBox1E &&
                    cekJawabanBox1F &&
                    cekJawabanBox1G &&
                    cekJawabanBox1H &&
                    cekJawabanBox1I
                      ? ""
                      : "hidden")
                  }
                >
                  Jadi, himpunan penyelesaiannya adalah{" "}
                  <InlineMath math=" \{ x|-2 \le x \le 3 \}" />.
                </p>
              </ol>
            </div>
          </div>
        </div>
        {/* Cara 2 */}
        <div className={bukaTab === 2 ? "block" : "hidden"}>
          <div className="p-2 mt-2 text-sm border-2 border-trueGray-300 text-justify ">
            <ol
              className="list-decimal pt-2 ml-3 list-outside flex flex-col gap-2"
              start={2}
            >
              <li className="font-bold">
                {" "}
                Menggunakan Sifat <InlineMath math="\bf |x|=\sqrt{x^2}" />
              </li>
              <p className="text-justify">
                Langkah-langkah dalam menyelesaikan pertidaksamaan nilai mutlak
                linear satu variabel menggunakan sifat{" "}
                <InlineMath math="|x|=\sqrt{x^2}" /> adalah sebagai berikut.
              </p>

              <ol className="list-lowerAlpha list-inside flex flex-col gap-2">
                <li>
                  Ingat bahwa <InlineMath math="|x|=\sqrt{x^2}" />.
                </li>
                <li>Menentukan pembuat nol.</li>
                <li>Letakkan pembuat nol dan tanda pada garis bilangan.</li>
                <li>Menentukan interval penyelesaian.</li>
                <li>Menuliskan kembali interval penyelesaian.</li>
              </ol>
            </ol>
          </div>
          <button
            className="text-white mx-auto bg-indigo-300 w-full justify-center h-10 p-2 mt-2 flex rounded-lg items-center font-bold hover:bg-white hover:text-indigo-300 hover:ring-2 hover:ring-indigo-300"
            onClick={() => setBukaContohDua(!bukaContohDua)}
          >
            Contoh Soal (Klik Saya)
          </button>
          <div className={" " + (bukaContohDua ? "" : "hidden")}>
            <div className="p-3 pl-5 mt-2 text-sm border-2 border-trueGray-300 flex flex-col gap-2 ">
              <ol className="list-outside list-decimal">
                <li>
                  {" "}
                  Tentukan himpunan penyelesaian dari pertidaksamaan{" "}
                  <InlineMath>|3x+2| \le 4</InlineMath>!
                </li>
              </ol>

              <p className="font-bold">Penyelesaian:</p>
              <p className="text-justify pt-2">
                {" "}
                <InlineMath>|3x+2| \le 4 </InlineMath>{" "}
              </p>
              <p className="text-justify py-2">
                {" "}
                <InlineMath math="\sqrt{(3x+2)^2} \le 4" />
              </p>
              <p className="text-justify py-2">
                {" "}
                <InlineMath math="(\sqrt{(3x+2)^2})^2 \le (4)^2" />{" "}
                <span className="ml-28">(Kuadratkan kedua sisi)</span>
              </p>
              <p className="text-justify py-2">
                <InlineMath math="(3x+2)^2 \le 4^2" />
              </p>
              <p className="text-justify py-2">
                {" "}
                <InlineMath math="(3x+2)^2 - 4^2 \le 0" />
                <span className="ml-32">
                  ( <InlineMath>4^2</InlineMath> pindah ruas ke kiri )
                </span>
              </p>
              <p className="text-justify py-2">
                <InlineMath math="(3x+2+4)(3x+2-4) \le 0" />
              </p>
              <p className="text-justify py-2">
                <InlineMath math="(3x+6)(3x-2) \le 0" />
              </p>
              <p className="text-justify">
                Maka didapatkan pembuat nol <InlineMath>x=-2</InlineMath> dan{" "}
                <InlineMath> x = \dfrac 2 3</InlineMath>.
              </p>
              <p className="text-justify">
                Kemudian letakkan pembuat nol pada garis bilangan.
              </p>
              <p className="py-2">
                <figure>
                  <div className="flex justify-center items-center w-max m-2 mx-auto border border-black">
                    <Image
                      src="/contoh-soal/contoh-soal-grafik-bab-tiga-1.2.png"
                      width={605}
                      height={290}
                    ></Image>
                  </div>
                  <figcaption className=" text-xs font-serif italic pb-2 text-center">
                    Gambar 3.1 Garis bilangan pembuat nol
                  </figcaption>
                </figure>
              </p>
              <p className="py-2">
                <InlineMath>-2 \le x \le \dfrac 2 3</InlineMath>
                <span className="ml-32">
                  (Didapatkan interval penyelesaian)
                </span>
              </p>
              <p className="py-2">
                Jadi, himpunan penyelesaiannya adalah{" "}
                <InlineMath math="\{ x|-2 \le x \le \dfrac 2 3 \}" />.
              </p>
            </div>
            <button
              className="text-white justify-center bg-indigo-300 w-full h-10 p-2 mt-2 flex rounded-lg items-center font-bold hover:bg-white hover:text-indigo-300 hover:ring-2 hover:ring-indigo-300"
              onClick={() => setBukaMariMencobaDua(!bukaMariMencobaDua)}
            >
              Mari Mencoba (Klik Saya)
            </button>
            <div
              className={
                "p-3 pl-5 mt-2 text-sm border-2 border-trueGray-300 flex flex-col gap-2 " +
                (bukaMariMencobaDua ? "" : "hidden")
              }
            >
              <div>
                <button
                  onClick={tooglePetunjukDua}
                  className=" uppercase mt-2 flex justify-between items-center gap-8 px-2 py-1 transition-all duration-300 ease-linear bg-cyan-600 text-white hover:ring-1 hover:ring-cyan-600 rounded-lg hover:bg-white hover:text-cyan-600 hover:rounded-lg cursor-pointer"
                >
                  Petunjuk (klik saya)
                </button>
              </div>
              <div
                className={
                  "bg-cyan-500 w-full p-2 mt-2 text-white " +
                  (petunjukDua ? "" : "hidden")
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
              <ol className="list-outside list-decimal">
                <li>
                  {" "}
                  Tentukan penyelesaian dari pertidaksamaan{" "}
                  <InlineMath>|2x+5| \ge |x+4|</InlineMath>!
                </li>
                <p className="py-2 font-bold">Penyelesaian:</p>
                <p className="py-2">
                  <InlineMath>|2x+5| \ge |x+4|</InlineMath>
                </p>
                <p className="py-2">
                  <div className="flex flex-row gap-2 items-center">
                    <div>
                      <InlineMath math="\sqrt{}(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(1)"
                        style={box2A}
                        onChange={cekJawaban2A}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")^2" />

                      <a className="mx-6">
                        <InlineMath math="\ge" />
                      </a>
                      <InlineMath math="\sqrt{}(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(2)"
                        style={box2B}
                        onChange={cekJawaban2B}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")^2" />
                    </div>
                  </div>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox2A && cekJawabanBox2B ? "" : "hidden")
                  }
                >
                  <div className="flex flex-row gap-2 items-center">
                    <div>
                      <InlineMath math="( \sqrt{}(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(3)"
                        style={box2C}
                        onChange={cekJawaban2C}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")^2)^2" />

                      <a className="mx-4">
                        <InlineMath math="\ge" />
                      </a>
                      <InlineMath math=" (\sqrt{}(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(4)"
                        style={box2D}
                        onChange={cekJawaban2D}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")^2)^2" />
                    </div>
                  </div>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox2A &&
                    cekJawabanBox2B &&
                    cekJawabanBox2C &&
                    cekJawabanBox2D
                      ? ""
                      : "hidden")
                  }
                >
                  <div className="flex flex-row gap-2 items-center">
                    <div>
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(5)"
                        style={box2E}
                        onChange={cekJawaban2E}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")^2" />

                      <a className="mx-9">
                        <InlineMath math="\ge" />
                      </a>
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(6)"
                        style={box2F}
                        onChange={cekJawaban2F}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")^2" />
                    </div>
                  </div>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox2A &&
                    cekJawabanBox2B &&
                    cekJawabanBox2C &&
                    cekJawabanBox2D &&
                    cekJawabanBox2E &&
                    cekJawabanBox2F
                      ? ""
                      : "hidden")
                  }
                >
                  <div className="flex flex-row gap-2 items-center">
                    <div>
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(7)"
                        style={box2G}
                        onChange={cekJawaban2G}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")^2" />
                      <InlineMath math="-" />
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(8)"
                        style={box2H}
                        onChange={cekJawaban2H}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")^2" />

                      <a className="mx-4">
                        <InlineMath math="\ge" />
                      </a>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(9)"
                        style={box2I}
                        onChange={cekJawaban2I}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox2A &&
                    cekJawabanBox2B &&
                    cekJawabanBox2C &&
                    cekJawabanBox2D &&
                    cekJawabanBox2E &&
                    cekJawabanBox2F &&
                    cekJawabanBox2G &&
                    cekJawabanBox2H &&
                    cekJawabanBox2I
                      ? ""
                      : "hidden")
                  }
                >
                  <div className="flex flex-row gap-2 items-center">
                    <div>
                      <InlineMath math="(" />
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(10)"
                        style={box2J}
                        onChange={cekJawaban2J}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")" />
                      <InlineMath math="+" />
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(11)"
                        style={box2K}
                        onChange={cekJawaban2K}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")" />
                      <InlineMath math=")" />
                      <InlineMath math="(" />
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(12)"
                        style={box2L}
                        onChange={cekJawaban2L}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")" />
                      <InlineMath math="-" />
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(13)"
                        style={box2M}
                        onChange={cekJawaban2M}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")" />
                      <InlineMath math=")" />

                      <a className="mx-4">
                        <InlineMath math="\ge" />
                      </a>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(14)"
                        style={box2N}
                        onChange={cekJawaban2N}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox2A &&
                    cekJawabanBox2B &&
                    cekJawabanBox2C &&
                    cekJawabanBox2D &&
                    cekJawabanBox2E &&
                    cekJawabanBox2F &&
                    cekJawabanBox2G &&
                    cekJawabanBox2H &&
                    cekJawabanBox2I &&
                    cekJawabanBox2J &&
                    cekJawabanBox2K &&
                    cekJawabanBox2L &&
                    cekJawabanBox2M &&
                    cekJawabanBox2N
                      ? ""
                      : "hidden")
                  }
                >
                  <div className="flex flex-row gap-2 items-center">
                    <div>
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(15)"
                        style={box2O}
                        onChange={cekJawaban2O}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")" />
                      <InlineMath math="(" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-16 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(16)"
                        style={box2P}
                        onChange={cekJawaban2P}
                        type="text"
                        placeholder=". . . . . . . . "
                        autoComplete="off"
                      />
                      <InlineMath math=")" />

                      <a className="mx-4">
                        <InlineMath math="\ge" />
                      </a>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2(17)"
                        style={box2Q}
                        onChange={cekJawaban2Q}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox2A &&
                    cekJawabanBox2B &&
                    cekJawabanBox2C &&
                    cekJawabanBox2D &&
                    cekJawabanBox2E &&
                    cekJawabanBox2F &&
                    cekJawabanBox2G &&
                    cekJawabanBox2H &&
                    cekJawabanBox2I &&
                    cekJawabanBox2J &&
                    cekJawabanBox2K &&
                    cekJawabanBox2L &&
                    cekJawabanBox2M &&
                    cekJawabanBox2N &&
                    cekJawabanBox2O &&
                    cekJawabanBox2P &&
                    cekJawabanBox2Q
                      ? ""
                      : "hidden")
                  }
                >
                  Maka didapatkan pembuat nol <InlineMath>x \le </InlineMath>{" "}
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                    id="jawaban-2(18)"
                    style={box2R}
                    onChange={cekJawaban2R}
                    type="text"
                    placeholder=". . ."
                    autoComplete="off"
                  />{" "}
                  atau <InlineMath>x \ge </InlineMath>{" "}
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                    id="jawaban-2(19)"
                    style={box2S}
                    onChange={cekJawaban2S}
                    type="text"
                    placeholder=". . ."
                    autoComplete="off"
                  />
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox2A &&
                    cekJawabanBox2B &&
                    cekJawabanBox2C &&
                    cekJawabanBox2D &&
                    cekJawabanBox2E &&
                    cekJawabanBox2F &&
                    cekJawabanBox2G &&
                    cekJawabanBox2H &&
                    cekJawabanBox2I &&
                    cekJawabanBox2J &&
                    cekJawabanBox2K &&
                    cekJawabanBox2L &&
                    cekJawabanBox2M &&
                    cekJawabanBox2N &&
                    cekJawabanBox2O &&
                    cekJawabanBox2P &&
                    cekJawabanBox2Q &&
                    cekJawabanBox2R &&
                    cekJawabanBox2S
                      ? ""
                      : "hidden")
                  }
                >
                  Kemudian letakkan pembuat nol pada garis bilangan.
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox2A &&
                    cekJawabanBox2B &&
                    cekJawabanBox2C &&
                    cekJawabanBox2D &&
                    cekJawabanBox2E &&
                    cekJawabanBox2F &&
                    cekJawabanBox2G &&
                    cekJawabanBox2H &&
                    cekJawabanBox2I &&
                    cekJawabanBox2J &&
                    cekJawabanBox2K &&
                    cekJawabanBox2L &&
                    cekJawabanBox2M &&
                    cekJawabanBox2N &&
                    cekJawabanBox2O &&
                    cekJawabanBox2P &&
                    cekJawabanBox2Q &&
                    cekJawabanBox2R &&
                    cekJawabanBox2S
                      ? ""
                      : "hidden")
                  }
                >
                  <iframe
                    className="border border-cyan-600 ml-16 "
                    scrolling="no"
                    title="Mari mencoba 8 bab 3"
                    src="https://www.geogebra.org/material/iframe/id/kxceqepc/width/1000/height/500/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false"
                    width="1000px"
                    height="500px"
                  >
                    {" "}
                  </iframe>
                </p>
                <p
                  className={
                    "py-2 " +
                    (cekJawabanBox2A &&
                    cekJawabanBox2B &&
                    cekJawabanBox2C &&
                    cekJawabanBox2D &&
                    cekJawabanBox2E &&
                    cekJawabanBox2F &&
                    cekJawabanBox2G &&
                    cekJawabanBox2H &&
                    cekJawabanBox2I &&
                    cekJawabanBox2J &&
                    cekJawabanBox2K &&
                    cekJawabanBox2L &&
                    cekJawabanBox2M &&
                    cekJawabanBox2N &&
                    cekJawabanBox2O &&
                    cekJawabanBox2P &&
                    cekJawabanBox2Q &&
                    cekJawabanBox2R &&
                    cekJawabanBox2S
                      ? ""
                      : "hidden")
                  }
                >
                  Jadi, penyelesaiannya adalah <InlineMath>x \le -3</InlineMath>{" "}
                  atau <InlineMath>x \ge -1</InlineMath>.
                </p>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
