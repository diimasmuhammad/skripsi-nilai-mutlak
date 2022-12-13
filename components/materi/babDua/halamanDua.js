import Image from "next/image";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useState } from "react";

export default function HalamanDua() {
  const [petunjuk, setPetunjuk] = useState(false);
  // Save State soal 1.a
  const [style1A, setStyle1A] = useState({});
  const [style1B, setStyle1B] = useState({});
  const [style1C, setStyle1C] = useState({});
  const [style1D, setStyle1D] = useState({});
  const [style1E, setStyle1E] = useState({});
  const [style1F, setStyle1F] = useState({});
  const [style1G, setStyle1G] = useState({});
  const [style1H, setStyle1H] = useState({});
  const [style1I, setStyle1I] = useState({});
  const [style1J, setStyle1J] = useState({});
  const [style1K, setStyle1K] = useState({});

  // Save State soal 1.b
  const [style2A, setStyle2A] = useState({});
  const [style2B, setStyle2B] = useState({});
  const [style2C, setStyle2C] = useState({});
  const [style2D, setStyle2D] = useState({});
  const [style2E, setStyle2E] = useState({});
  const [style2F, setStyle2F] = useState({});
  const [style2G, setStyle2G] = useState({});
  const [style2H, setStyle2H] = useState({});
  const [style2I, setStyle2I] = useState({});
  const [style2J, setStyle2J] = useState({});
  const [style2K, setStyle2K] = useState({});

  // Save state kondisi soal 1.a
  const [jawabanSatuA, setJawabanSatuA] = useState(false);
  const [jawabanSatuB, setJawabanSatuB] = useState(false);
  const [jawabanSatuC, setJawabanSatuC] = useState(false);
  const [jawabanSatuD, setJawabanSatuD] = useState(false);
  const [jawabanSatuE, setJawabanSatuE] = useState(false);
  const [jawabanSatuF, setJawabanSatuF] = useState(false);
  const [jawabanSatuG, setJawabanSatuG] = useState(false);
  const [jawabanSatuH, setJawabanSatuH] = useState(false);
  const [jawabanSatuI, setJawabanSatuI] = useState(false);
  const [jawabanSatuJ, setJawabanSatuJ] = useState(false);
  const [jawabanSatuK, setJawabanSatuK] = useState(false);

  // Save state kondisi soal 1.b
  const [jawabanDuaA, setjawabanDuaA] = useState(false);
  const [jawabanDuaB, setjawabanDuaB] = useState(false);
  const [jawabanDuaC, setjawabanDuaC] = useState(false);
  const [jawabanDuaD, setjawabanDuaD] = useState(false);
  const [jawabanDuaE, setjawabanDuaE] = useState(false);
  const [jawabanDuaF, setjawabanDuaF] = useState(false);
  const [jawabanDuaG, setjawabanDuaG] = useState(false);
  const [jawabanDuaH, setjawabanDuaH] = useState(false);
  const [jawabanDuaI, setjawabanDuaI] = useState(false);
  const [jawabanDuaJ, setjawabanDuaJ] = useState(false);
  const [jawabanDuaK, setjawabanDuaK] = useState(false);

  const tooglePetunjuk = () => {
    setPetunjuk(!petunjuk);
  };

  // Function cek jawaban soal 1.a
  const cekJawaban1A = (jawaban1A) => {
    if (jawaban1A.target.value === "5") {
      setStyle1A({ border: "2px solid green" });
      setJawabanSatuA(true);
    } else {
      setStyle1A({ border: "2px solid red" });
      setJawabanSatuA(false);
    }
  };
  const cekJawaban1B = (jawaban1B) => {
    if (jawaban1B.target.value === "9") {
      setStyle1B({ border: "2px solid green" });
      setJawabanSatuB(true);
    } else {
      setStyle1B({ border: "2px solid red" });
      setJawabanSatuB(false);
    }
  };
  const cekJawaban1C = (jawaban1C) => {
    if (jawaban1C.target.value === "-23") {
      setStyle1C({ border: "2px solid green" });
      setJawabanSatuC(true);
    } else {
      setStyle1C({ border: "2px solid red" });
      setJawabanSatuC(false);
    }
  };
  const cekJawaban1D = (jawaban1D) => {
    if (jawaban1D.target.value === "7") {
      setStyle1D({ border: "2px solid green" });
      setJawabanSatuD(true);
    } else {
      setStyle1D({ border: "2px solid red" });
      setJawabanSatuD(false);
    }
  };
  const cekJawaban1E = (jawaban1E) => {
    if (jawaban1E.target.value === "-4") {
      setStyle1E({ border: "2px solid green" });
      setJawabanSatuE(true);
    } else {
      setStyle1E({ border: "2px solid red" });
      setJawabanSatuE(false);
    }
  };
  const cekJawaban1F = (jawaban1F) => {
    if (jawaban1F.target.value === "-16") {
      setStyle1F({ border: "2px solid green" });
      setJawabanSatuF(true);
    } else {
      setStyle1F({ border: "2px solid red" });
      setJawabanSatuF(false);
    }
  };
  const cekJawaban1G = (jawaban1G) => {
    if (jawaban1G.target.value === "x") {
      setStyle1G({ border: "2px solid green" });
      setJawabanSatuG(true);
    } else {
      setStyle1G({ border: "2px solid red" });
      setJawabanSatuG(false);
    }
  };
  const cekJawaban1H = (jawaban1H) => {
    if (jawaban1H.target.value === "-16") {
      setStyle1H({ border: "2px solid green" });
      setJawabanSatuH(true);
    } else {
      setStyle1H({ border: "2px solid red" });
      setJawabanSatuH(false);
    }
  };
  const cekJawaban1I = (jawaban1I) => {
    if (jawaban1I.target.value === "-4") {
      setStyle1I({ border: "2px solid green" });
      setJawabanSatuI(true);
    } else {
      setStyle1I({ border: "2px solid red" });
      setJawabanSatuI(false);
    }
  };
  const cekJawaban1J = (jawaban1J) => {
    if (jawaban1J.target.value === "x") {
      setStyle1J({ border: "2px solid green" });
      setJawabanSatuJ(true);
    } else {
      setStyle1J({ border: "2px solid red" });
      setJawabanSatuJ(false);
    }
  };
  const cekJawaban1K = (jawaban1K) => {
    if (jawaban1K.target.value === "4") {
      setStyle1K({ border: "2px solid green" });
      setJawabanSatuK(true);
    } else {
      setStyle1K({ border: "2px solid red" });
      setJawabanSatuK(false);
    }
  };

  // Function cek jawaban soal 1.b
  const cekJawaban2A = (jawaban2A) => {
    if (jawaban2A.target.value === "2") {
      setStyle2A({ border: "2px solid green" });
      setjawabanDuaA(true);
    } else {
      setStyle2A({ border: "2px solid red" });
      setjawabanDuaA(false);
    }
  };
  const cekJawaban2B = (jawaban2B) => {
    if (jawaban2B.target.value === "4") {
      setStyle2B({ border: "2px solid green" });
      setjawabanDuaB(true);
    } else {
      setStyle2B({ border: "2px solid red" });
      setjawabanDuaB(false);
    }
  };
  const cekJawaban2C = (jawaban2C) => {
    if (jawaban2C.target.value === "3") {
      setStyle2C({ border: "2px solid green" });
      setjawabanDuaC(true);
    } else {
      setStyle2C({ border: "2px solid red" });
      setjawabanDuaC(false);
    }
  };
  const cekJawaban2D = (jawaban2D) => {
    if (jawaban2D.target.value === "15") {
      setStyle2D({ border: "2px solid green" });
      setjawabanDuaD(true);
    } else {
      setStyle2D({ border: "2px solid red" });
      setjawabanDuaD(false);
    }
  };
  const cekJawaban2E = (jawaban2E) => {
    if (jawaban2E.target.value === "6") {
      setStyle2E({ border: "2px solid green" });
      setjawabanDuaE(true);
    } else {
      setStyle2E({ border: "2px solid red" });
      setjawabanDuaE(false);
    }
  };
  const cekJawaban2F = (jawaban2F) => {
    if (jawaban2F.target.value === "18") {
      setStyle2F({ border: "2px solid green" });
      setjawabanDuaF(true);
    } else {
      setStyle2F({ border: "2px solid red" });
      setjawabanDuaF(false);
    }
  };
  const cekJawaban2G = (jawaban2G) => {
    if (jawaban2G.target.value === "x") {
      setStyle2G({ border: "2px solid green" });
      setjawabanDuaG(true);
    } else {
      setStyle2G({ border: "2px solid red" });
      setjawabanDuaG(false);
    }
  };
  const cekJawaban2H = (jawaban2H) => {
    if (jawaban2H.target.value === "18") {
      setStyle2H({ border: "2px solid green" });
      setjawabanDuaH(true);
    } else {
      setStyle2H({ border: "2px solid red" });
      setjawabanDuaH(false);
    }
  };
  const cekJawaban2I = (jawaban2I) => {
    if (jawaban2I.target.value === "6") {
      setStyle2I({ border: "2px solid green" });
      setjawabanDuaI(true);
    } else {
      setStyle2I({ border: "2px solid red" });
      setjawabanDuaI(false);
    }
  };
  const cekJawaban2J = (jawaban2J) => {
    if (jawaban2J.target.value === "x") {
      setStyle2J({ border: "2px solid green" });
      setjawabanDuaJ(true);
    } else {
      setStyle2J({ border: "2px solid red" });
      setjawabanDuaJ(false);
    }
  };
  const cekJawaban2K = (jawaban2K) => {
    if (jawaban2K.target.value === "3") {
      setStyle2K({ border: "2px solid green" });
      setjawabanDuaK(true);
    } else {
      setStyle2K({ border: "2px solid red" });
      setjawabanDuaK(false);
    }
  };
  return (
    <>
      <div className="text-base text-justify relative">
        <a className="text-white bg-indigo-300 w-full justify-center p-2 flex rounded-lg items-center font-bold">
          Contoh Soal
        </a>
        <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 flex flex-col gap-2">
          <p>Tentukan nilai x yang memenuhi persamaan berikut:</p>
          <ol className="list-lowerAlpha list-inside flex flex-col gap-2">
            <li>
              <InlineMath>x-5=6</InlineMath>
            </li>
            <li>
              <InlineMath>2x+3=1</InlineMath>
            </li>
          </ol>
          <p className="font-bold">Penyelesaian:</p>
          <ol className="list-lowerAlpha list-inside flex flex-col gap-2">
            <li>
              <InlineMath>x-5=6</InlineMath>
              <p className="indent-xs py-2">
                <InlineMath>x-5+5=6+5</InlineMath>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="black"
                    stroke="currentColor"
                    className="inline-block relative ml-6"
                  >
                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                  </svg>
                </span>
                <span className="font-bold">Kedua ruas ditambah 5</span>
              </p>
              <p className="indent-xs py-2">
                <InlineMath>x=11</InlineMath>
              </p>
              <p className="indent-xs">
                Jadi, penyelesaian adalah <InlineMath>x=11</InlineMath>
              </p>
            </li>
            <li>
              <InlineMath>2x+3=1</InlineMath>
              <p className="indent-xs py-2">
                <InlineMath>2x+3-3=1-3</InlineMath>{" "}
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="black"
                    stroke="currentColor"
                    className="inline-block relative ml-3"
                  >
                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                  </svg>
                </span>
                <span className="font-bold">Kedua ruas dikurangi 3</span>
              </p>
              <p className="indent-xs py-2">
                <InlineMath>2x=-2</InlineMath>
              </p>
              <p className="indent-xs py-2">
                <InlineMath math="\dfrac {2x} 2 = \dfrac {-2} 2" />
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="black"
                    stroke="currentColor"
                    className="inline-block relative ml-20"
                  >
                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                  </svg>
                </span>{" "}
                <span className="font-bold">Kedua ruas dibagi 2</span>
              </p>
              <p className="indent-xs py-2">
                <InlineMath>x=-1</InlineMath>
              </p>

              <p className="indent-xs pt-2">
                Jadi, penyelesaian adalah <InlineMath>x=-1</InlineMath>
              </p>
            </li>
          </ol>
        </div>
        {/* Mari Mencoba 4 */}
        <a className="text-white bg-indigo-300 w-full justify-center  p-2 flex rounded-lg items-center font-bold mt-2 mx-auto">
          Mari mencoba
        </a>
        {/* <div>
          <button
            onClick={tooglePetunjuk}
            className=" uppercase mt-2 flex justify-between items-center gap-8 px-2 py-1 transition-all duration-300 ease-linear bg-cyan-600 text-white hover:ring-1 hover:ring-cyan-600 rounded-lg hover:bg-white hover:text-cyan-600 hover:rounded-lg cursor-pointer"
          >
            Petunjuk (klik saya)
          </button>
        </div> */}
        <div
          className="bg-cyan-500 w-full p-2 mt-2 text-white "
          // className={
          //   "bg-cyan-500 w-full p-2 mt-2 text-white " +
          //   (petunjuk ? "" : "hidden")
          // }
        >
          <ol className="list-decimal pl-3">
            <li>
              <div className="flex  items-center">
                {" "}
                <span className="mr-4">
                  Isi kotak kosong dengan jawaban anda
                </span>
                <img src="/materi/1.png" className="rounded-full w-20 h-14" />
              </div>
            </li>
            <li>
              <div className="flex  items-center">
                {" "}
                <span className="mr-4">
                  Jika jawaban salah maka sisi kotak akan berwarna merah
                </span>
                <img src="/materi/2.png" className="rounded-full w-20 h-14" />
              </div>
            </li>
            <li>
              <div className="flex  items-center">
                {" "}
                <span className="mr-4">
                  Jika jawaban benar maka sisi kotak akan berwarna hijau
                </span>
                <img src="/materi/3.png" className="rounded-full w-20 h-14" />
              </div>
            </li>
          </ol>
        </div>
        <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 flex flex-col gap-2">
          <ol className="list-decimal list-outside flex flex-col gap-2 ml-1">
            {/* Soal 1 */}
            <li>
              {" "}
              Penyelesaian dari persamaan{" "}
              <InlineMath>5x - 7 = 9x - 23</InlineMath> adalah . . . .
              <ul className="list-inside flex flex-col gap-2">
                <li>
                  <a className="font-bold">Penyelesaian:</a>
                </li>
                <li>
                  <div className="flex flex-row gap-20">
                    <div>
                      <InlineMath math="5x - 7 \hspace{0.18cm}" />
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <InlineMath math="\hspace{-0.95cm} 9x - 23" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-8">
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(1)"
                        style={style1A}
                        onChange={cekJawaban1A}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath>x</InlineMath> <InlineMath>-</InlineMath>{" "}
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(2)"
                        style={style1B}
                        onChange={cekJawaban1B}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath>x</InlineMath>
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(3)"
                        style={style1C}
                        onChange={cekJawaban1C}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                      <InlineMath>+</InlineMath>{" "}
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(4)"
                        style={style1D}
                        onChange={cekJawaban1D}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </li>
                <li
                  className={
                    "py-2" +
                    (jawabanSatuA &&
                    jawabanSatuB &&
                    jawabanSatuC &&
                    jawabanSatuD
                      ? " "
                      : " hidden")
                  }
                >
                  <div className="flex flex-row gap-20">
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(5)"
                        style={style1E}
                        onChange={cekJawaban1E}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath>x</InlineMath>
                      <InlineMath math="\hspace{0.31cm}" />
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <InlineMath math="\hspace{0.1cm}" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(6)"
                        style={style1F}
                        onChange={cekJawaban1F}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                    </div>
                  </div>
                </li>
                <li
                  className={
                    "py-2" +
                    (jawabanSatuA &&
                    jawabanSatuB &&
                    jawabanSatuC &&
                    jawabanSatuD &&
                    jawabanSatuE &&
                    jawabanSatuF
                      ? " "
                      : " hidden")
                  }
                >
                  <div className="flex flex-row gap-10">
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(7)"
                        style={style1G}
                        onChange={cekJawaban1G}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath math="\hspace{1.35cm}" />
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(8)"
                        style={style1H}
                        onChange={cekJawaban1H}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                      <InlineMath>:</InlineMath>{" "}
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(9)"
                        style={style1I}
                        onChange={cekJawaban1I}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                    </div>
                  </div>
                </li>
                <li
                  className={
                    "py-2" +
                    (jawabanSatuA &&
                    jawabanSatuB &&
                    jawabanSatuC &&
                    jawabanSatuD &&
                    jawabanSatuE &&
                    jawabanSatuF &&
                    jawabanSatuG &&
                    jawabanSatuH &&
                    jawabanSatuI
                      ? " "
                      : " hidden")
                  }
                >
                  <div className="flex flex-row gap-20">
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(10)"
                        style={style1J}
                        onChange={cekJawaban1J}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath math="\hspace{0.51cm}" />
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <InlineMath math="\hspace{0.1cm}" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-1a(11)"
                        style={style1K}
                        onChange={cekJawaban1K}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                    </div>
                  </div>
                </li>
                <li
                  className={
                    "py-2" +
                    (jawabanSatuA &&
                    jawabanSatuB &&
                    jawabanSatuC &&
                    jawabanSatuD &&
                    jawabanSatuE &&
                    jawabanSatuF &&
                    jawabanSatuG &&
                    jawabanSatuH &&
                    jawabanSatuI &&
                    jawabanSatuJ &&
                    jawabanSatuK
                      ? " "
                      : " hidden")
                  }
                >
                  Jadi, penyelesaian dari persamaan{" "}
                  <InlineMath>5x - 7 = 9x - 23</InlineMath> adalah{" "}
                  <InlineMath>x=4</InlineMath>
                </li>
              </ul>
            </li>
            {/* Soal 2 */}
            <li>
              Nilai <InlineMath>x</InlineMath> yang memenuhi persamaan{" "}
              <InlineMath>2x - 15 = -4x +3</InlineMath> adalah . . . .
              <ul className="list-inside flex flex-col gap-2">
                <li>
                  <a className="font-bold">Penyelesaian:</a>
                </li>
                <li>
                  <div className="flex flex-row gap-20">
                    <div>
                      <InlineMath math="2x - 15 \hspace{0.03cm}" />
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <InlineMath math="\hspace{-0.95cm} -4x +3" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-8">
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(1)"
                        style={style2A}
                        onChange={cekJawaban2A}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath>x</InlineMath> <InlineMath>+</InlineMath>{" "}
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(2)"
                        style={style2B}
                        onChange={cekJawaban2B}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath>x</InlineMath>
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(3)"
                        style={style2C}
                        onChange={cekJawaban2C}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                      <InlineMath>+</InlineMath>{" "}
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(4)"
                        style={style2D}
                        onChange={cekJawaban2D}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </li>
                <li
                  className={
                    "py-2" +
                    (jawabanDuaA && jawabanDuaB && jawabanDuaC && jawabanDuaD
                      ? " "
                      : " hidden")
                  }
                >
                  <div className="flex flex-row gap-20">
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(5)"
                        style={style2E}
                        onChange={cekJawaban2E}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath>x</InlineMath>
                      <InlineMath math="\hspace{0.31cm}" />
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <InlineMath math="\hspace{0.1cm}" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(6)"
                        style={style2F}
                        onChange={cekJawaban2F}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                    </div>
                  </div>
                </li>
                <li
                  className={
                    "py-2" +
                    (jawabanDuaA &&
                    jawabanDuaB &&
                    jawabanDuaC &&
                    jawabanDuaD &&
                    jawabanDuaE &&
                    jawabanDuaF
                      ? " "
                      : " hidden")
                  }
                >
                  <div className="flex flex-row gap-10">
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(7)"
                        style={style2G}
                        onChange={cekJawaban2G}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath math="\hspace{1.35cm}" />
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(8)"
                        style={style2H}
                        onChange={cekJawaban2H}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                      <InlineMath>:</InlineMath>{" "}
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(9)"
                        style={style2I}
                        onChange={cekJawaban2I}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                    </div>
                  </div>
                </li>
                <li
                  className={
                    "py-2" +
                    (jawabanDuaA &&
                    jawabanDuaB &&
                    jawabanDuaC &&
                    jawabanDuaD &&
                    jawabanDuaE &&
                    jawabanDuaF &&
                    jawabanDuaG &&
                    jawabanDuaH &&
                    jawabanDuaI
                      ? " "
                      : " hidden")
                  }
                >
                  <div className="flex flex-row gap-20">
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(10)"
                        style={style2J}
                        onChange={cekJawaban2J}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />
                      <InlineMath math="\hspace{0.51cm}" />
                    </div>
                    <div className="font-bold">=</div>
                    <div>
                      <InlineMath math="\hspace{0.1cm}" />
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-8 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a(11)"
                        style={style2K}
                        onChange={cekJawaban2K}
                        type="text"
                        placeholder=". . ."
                        autoComplete="off"
                      />{" "}
                    </div>
                  </div>
                </li>
                <li
                  className={
                    "py-2" +
                    (jawabanDuaA &&
                    jawabanDuaB &&
                    jawabanDuaC &&
                    jawabanDuaD &&
                    jawabanDuaE &&
                    jawabanDuaF &&
                    jawabanDuaG &&
                    jawabanDuaH &&
                    jawabanDuaI &&
                    jawabanDuaJ &&
                    jawabanDuaK
                      ? " "
                      : " hidden")
                  }
                >
                  Jadi, penyelesaian dari persamaan{" "}
                  <InlineMath>2x - 15 = -4x +3</InlineMath> adalah{" "}
                  <InlineMath>x=3</InlineMath>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
