import { useState } from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export default function HalamanEmpat() {
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

  // Save State Soal 1.b
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

  // Save State Soal 2.a
  const [style3A, setStyle3A] = useState({});
  const [style3B, setStyle3B] = useState({});

  // Save State Soal 2.b
  const [style4A, setStyle4A] = useState({});
  const [style4B, setStyle4B] = useState({});
  const [style4C, setStyle4C] = useState({});

  // Save State Soal 2.c
  const [style5A1, setStyle5A1] = useState({});
  const [style5A2, setStyle5A2] = useState({});
  const [style5B1, setStyle5B1] = useState({});
  const [style5B2, setStyle5B2] = useState({});
  const [style5C1, setStyle5C1] = useState({});
  const [style5C2, setStyle5C2] = useState({});

  // Function cek jawaban soal 1.a
  const cekJawaban1A = (jawaban1A) => {
    if (
      jawaban1A.target.value === "(2x+1)" ||
      jawaban1A.target.value === "2x+1"
    ) {
      setStyle1A({ border: "2px solid green" });
    } else {
      setStyle1A({ border: "2px solid red" });
    }
  };
  const cekJawaban1B = (jawaban1B) => {
    if (jawaban1B.target.value === "2x+1") {
      setStyle1B({ border: "2px solid green" });
    } else {
      setStyle1B({ border: "2px solid red" });
    }
  };
  const cekJawaban1C = (jawaban1C) => {
    if (jawaban1C.target.value === "0") {
      setStyle1C({ border: "2px solid green" });
    } else {
      setStyle1C({ border: "2px solid red" });
    }
  };
  const cekJawaban1D = (jawaban1D) => {
    if (jawaban1D.target.value === "-(2x+1)") {
      setStyle1D({ border: "2px solid green" });
    } else {
      setStyle1D({ border: "2px solid red" });
    }
  };
  const cekJawaban1E = (jawaban1E) => {
    if (jawaban1E.target.value === "2x+1") {
      setStyle1E({ border: "2px solid green" });
    } else {
      setStyle1E({ border: "2px solid red" });
    }
  };
  const cekJawaban1F = (jawaban1F) => {
    if (jawaban1F.target.value === "0") {
      setStyle1F({ border: "2px solid green" });
    } else {
      setStyle1F({ border: "2px solid red" });
    }
  };
  const cekJawaban1G = (jawaban1G) => {
    if (
      jawaban1G.target.value === "(2x+1)" ||
      jawaban1G.target.value === "2x+1"
    ) {
      setStyle1G({ border: "2px solid green" });
    } else {
      setStyle1G({ border: "2px solid red" });
    }
  };
  const cekJawaban1H = (jawaban1H) => {
    if (jawaban1H.target.value === "x") {
      setStyle1H({ border: "2px solid green" });
    } else {
      setStyle1H({ border: "2px solid red" });
    }
  };
  const cekJawaban1I = (jawaban1I) => {
    if (
      jawaban1I.target.value === "(-2x-1)" ||
      jawaban1I.target.value === "-2x-1"
    ) {
      setStyle1I({ border: "2px solid green" });
    } else {
      setStyle1I({ border: "2px solid red" });
    }
  };
  const cekJawaban1J = (jawaban1J) => {
    if (jawaban1J.target.value === "x") {
      setStyle1J({ border: "2px solid green" });
    } else {
      setStyle1J({ border: "2px solid red" });
    }
  };

  // Function cek jawaban soal 1.b
  const cekJawaban2A = (jawaban2A) => {
    if (
      jawaban2A.target.value === "(-x+1)" ||
      jawaban2A.target.value === "-x+1"
    ) {
      setStyle2A({ border: "2px solid green" });
    } else {
      setStyle2A({ border: "2px solid red" });
    }
  };
  const cekJawaban2B = (jawaban2B) => {
    if (jawaban2B.target.value === "-x+1") {
      setStyle2B({ border: "2px solid green" });
    } else {
      setStyle2B({ border: "2px solid red" });
    }
  };
  const cekJawaban2C = (jawaban2C) => {
    if (jawaban2C.target.value === "-(-x+1)") {
      setStyle2C({ border: "2px solid green" });
    } else {
      setStyle2C({ border: "2px solid red" });
    }
  };
  const cekJawaban2D = (jawaban2D) => {
    if (jawaban2D.target.value === "-x+1") {
      setStyle2D({ border: "2px solid green" });
    } else {
      setStyle2D({ border: "2px solid red" });
    }
  };
  const cekJawaban2E = (jawaban2E) => {
    if (
      jawaban2E.target.value === "(-x+1)" ||
      jawaban2E.target.value === "-x+1"
    ) {
      setStyle2E({ border: "2px solid green" });
    } else {
      setStyle2E({ border: "2px solid red" });
    }
  };
  const cekJawaban2F = (jawaban2F) => {
    if (jawaban2F.target.value === "x") {
      setStyle2F({ border: "2px solid green" });
    } else {
      setStyle2F({ border: "2px solid red" });
    }
  };
  const cekJawaban2G = (jawaban2G) => {
    if (jawaban2G.target.value === "1") {
      setStyle2G({ border: "2px solid green" });
    } else {
      setStyle2G({ border: "2px solid red" });
    }
  };
  const cekJawaban2H = (jawaban2H) => {
    if (
      jawaban2H.target.value === "x-1" ||
      jawaban2H.target.value === "(x-1)"
    ) {
      setStyle2H({ border: "2px solid green" });
    } else {
      setStyle2H({ border: "2px solid red" });
    }
  };
  const cekJawaban2I = (jawaban2I) => {
    if (jawaban2I.target.value === "x") {
      setStyle2I({ border: "2px solid green" });
    } else {
      setStyle2I({ border: "2px solid red" });
    }
  };
  const cekJawaban2J = (jawaban2J) => {
    if (jawaban2J.target.value === "1") {
      setStyle2J({ border: "2px solid green" });
    } else {
      setStyle2J({ border: "2px solid red" });
    }
  };

  // Function cek jawaban soal 2.a
  const cekJawaban3A = (jawaban3A) => {
    if (jawaban3A.target.value === "3") {
      setStyle3A({ border: "2px solid green" });
    } else {
      setStyle3A({ border: "2px solid red" });
    }
  };
  const cekJawaban3B = (jawaban3B) => {
    if (jawaban3B.target.value === "9") {
      setStyle3B({ border: "2px solid green" });
    } else {
      setStyle3B({ border: "2px solid red" });
    }
  };

  // Function cek jawaban soal 2.b
  const cekJawaban4A = (jawaban4A) => {
    if (
      jawaban4A.target.value === "|2|*|(-3)|" ||
      jawaban4A.target.value === "|2|.|(-3)|" ||
      jawaban4A.target.value === "|2|x|(-3)|"
    ) {
      setStyle4A({ border: "2px solid green" });
    } else {
      setStyle4A({ border: "2px solid red" });
    }
  };
  const cekJawaban4B = (jawaban4B) => {
    if (
      jawaban4B.target.value === "2*3" ||
      jawaban4B.target.value === "2.3" ||
      jawaban4B.target.value === "2x3"
    ) {
      setStyle4B({ border: "2px solid green" });
    } else {
      setStyle4B({ border: "2px solid red" });
    }
  };
  const cekJawaban4C = (jawaban4C) => {
    if (jawaban4C.target.value === "6") {
      setStyle4C({ border: "2px solid green" });
    } else {
      setStyle4C({ border: "2px solid red" });
    }
  };

  // Cek Jawaban Soal 2.c
  const cekJawaban5A1 = (jawaban5A1) => {
    if (jawaban5A1.target.value === "|4|") {
      setStyle5A1({ border: "2px solid green" });
      // setJawabanEmpatA(true);
    } else {
      setStyle5A1({ border: "2px solid red" });
      // setJawabanEmpatA(false);
    }
  };
  const cekJawaban5A2 = (jawaban5A2) => {
    if (jawaban5A2.target.value === "|16|") {
      setStyle5A2({ border: "2px solid green" });
      // setJawabanEmpatB(true);
    } else {
      setStyle5A2({ border: "2px solid red" });
      // setJawabanEmpatB(false);
    }
  };
  const cekJawaban5B1 = (jawaban5B1) => {
    if (jawaban5B1.target.value === "4") {
      setStyle5B1({ border: "2px solid green" });
      // setJawabanEmpatA(true);
    } else {
      setStyle5B1({ border: "2px solid red" });
      // setJawabanEmpatA(false);
    }
  };
  const cekJawaban5B2 = (jawaban5B2) => {
    if (jawaban5B2.target.value === "16") {
      setStyle5B2({ border: "2px solid green" });
      // setJawabanEmpatB(true);
    } else {
      setStyle5B2({ border: "2px solid red" });
      // setJawabanEmpatB(false);
    }
  };

  const cekJawaban5C1 = (jawaban5C1) => {
    if (jawaban5C1.target.value === "1") {
      setStyle5C1({ border: "2px solid green" });
      // setJawabanEmpatA(true);
    } else {
      setStyle5C1({ border: "2px solid red" });
      // setJawabanEmpatA(false);
    }
  };
  const cekJawaban5C2 = (jawaban5C2) => {
    if (jawaban5C2.target.value === "4") {
      setStyle5C2({ border: "2px solid green" });
      // setJawabanEmpatB(true);
    } else {
      setStyle5C2({ border: "2px solid red" });
      // setJawabanEmpatB(false);
    }
  };
  return (
    <>
      <div className="text-base text-justify relative">
        <a className="mt-3 text-white bg-indigo-300 w-full justify-center p-2 flex rounded-lg items-center font-bold">
          Contoh Soal
        </a>
        <div className="border-t-2 border-trueGray-300 mt-4">
          Untuk lebih memahami konsep nilai mutlak perhatikan beberapa contoh
          berikut
        </div>
        <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 text-justify ">
          {/* Contoh Soal 1 */}
          <ol className="list-decimal list-inside">
            <li>
              Tentukan definisi dari.
              <ol className=" list-lowerAlpha list-inside pl-4">
                <li>
                  <InlineMath>|x+2|</InlineMath>
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol className="list-lowerAlpha list-inside pl-0 sm:pl-4">
                        <li>
                          <InlineMath math="\ |x+2| = \begin{cases}(x+2), \text{untuk } x+2 \ge 0 \\ -(x+2), \text{untuk } x+2 < 0 \end{cases}" />
                          <br />
                          <span className="pl-16">
                            <InlineMath math="\ = \begin{cases}(x+2), \text{untuk } x \ge -2 \\ (-x-2), \text{untuk } x < -2 \end{cases}" />
                          </span>
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
                <li className="pt-4">
                  <InlineMath>|x-3|</InlineMath>
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol
                        className="list-lowerAlpha list-inside pl-0 sm:pl-4 "
                        start={2}
                      >
                        <li className="pt-4">
                          <InlineMath math="\ |x-3| = \begin{cases}(x-3), \text{untuk } x-3 \ge 0 \\ -(x-3), \text{untuk } x-3 < 0 \end{cases}" />
                          <br />
                          <span className="pl-16">
                            <InlineMath math="\ = \begin{cases}(x-3), \text{untuk } x \ge 3 \\ (-x+3), \text{untuk } x < 3 \end{cases}" />
                          </span>
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
          </ol>

          {/* Contoh Soal 2 */}
          <ol className="list-decimal list-inside" start="2">
            <li>
              Hitung penyelesaian dari.
              <ol className=" list-lowerAlpha list-inside pl-4">
                <li>
                  <InlineMath math="|-8|" />
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol className="list-lowerAlpha list-inside pl-4">
                        <li className="pt-4">
                          <InlineMath math="|-8| = |8| = 8" />
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
                <li className="pt-4">
                  <InlineMath math="|4-3|" />
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol
                        className="list-lowerAlpha list-inside pl-4"
                        start={2}
                      >
                        <li className="pt-4">
                          <InlineMath math="|4-3| = |4|-|3| = 4+3 = 7" />
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
                <li className="pt-4">
                  <InlineMath math="|5+7|" />
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol
                        className="list-lowerAlpha list-inside pl-4"
                        start={3}
                      >
                        <li className="pt-4">
                          <InlineMath math="|5+7| = |5|+|7| = 5+7 = 12" />
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
                <li className="pt-4">
                  <InlineMath math="|9|" />
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol
                        className="list-lowerAlpha list-inside pl-4"
                        start={4}
                      >
                        <li className="pt-4">
                          <InlineMath math="|9|= \sqrt{(9)^2} = 9" />
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <a className="mt-3 mx-auto text-white bg-indigo-300 w-full justify-center h-10 p-2 flex rounded-lg items-center font-bold">
          Mari Mencoba
        </a>

        <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 text-justify ">
          <p>
            Setelah memahami kajian teori dan contoh soal dari konsep nilai
            mutlak diatas, mari kerjakan beberapa soal berikut.
          </p>
          <ol className="list-decimal list-inside">
            <li>
              Tentukan definisi dari.
              <ol className=" list-lowerAlpha list-inside pl-4">
                {/* Soal 1.a */}
                <li>
                  <InlineMath>|2x+1|</InlineMath>
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol className="list-lowerAlpha list-inside pl-0 sm:pl-4">
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              <InlineMath math="\ |2x+1| = \Biggr\lbrace" />
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(1)"
                                      style={style1A}
                                      onChange={cekJawaban1A}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(2)"
                                      style={style1B}
                                      onChange={cekJawaban1B}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\ge</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(3)"
                                      style={style1C}
                                      onChange={cekJawaban1C}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(4)"
                                      style={style1D}
                                      onChange={cekJawaban1D}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(5)"
                                      style={style1E}
                                      onChange={cekJawaban1E}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\lt</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(6)"
                                      style={style1F}
                                      onChange={cekJawaban1F}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </span>
                              <br />
                            </div>
                          </div>
                        </li>
                      </ol>

                      <ol className=" list-inside pl-0 sm:pl-4 ml-20">
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              <InlineMath math="= \Biggr\lbrace" />
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(7)"
                                      style={style1G}
                                      onChange={cekJawaban1G}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(8)"
                                      style={style1H}
                                      onChange={cekJawaban1H}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\ge -\dfrac 1 2 </InlineMath>
                                  </div>
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(9)"
                                      style={style1I}
                                      onChange={cekJawaban1I}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.a(10)"
                                      style={style1J}
                                      onChange={cekJawaban1J}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\lt -\dfrac 1 2 </InlineMath>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
                {/* Soal 1.b */}
                <li className="pt-4">
                  <InlineMath>|-x+1|</InlineMath>
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol
                        className="list-lowerAlpha list-inside pl-0 sm:pl-4"
                        start={2}
                      >
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              <InlineMath math="\ |-x+1| = \Biggr\lbrace" />
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(1)"
                                      style={style2A}
                                      onChange={cekJawaban2A}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(2)"
                                      style={style2B}
                                      onChange={cekJawaban2B}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\ge 0</InlineMath>
                                  </div>
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(3)"
                                      style={style2C}
                                      onChange={cekJawaban2C}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(4)"
                                      style={style2D}
                                      onChange={cekJawaban2D}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\lt 0</InlineMath>
                                  </div>
                                </div>
                              </span>
                              <br />
                            </div>
                          </div>
                        </li>
                      </ol>

                      <ol className=" list-inside pl-0 sm:pl-3 ml-24">
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              <InlineMath math="= \Biggr\lbrace" />
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(5)"
                                      style={style2E}
                                      onChange={cekJawaban2E}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(6)"
                                      style={style2F}
                                      onChange={cekJawaban2F}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\le </InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(7)"
                                      style={style2G}
                                      onChange={cekJawaban2G}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(8)"
                                      style={style2H}
                                      onChange={cekJawaban2H}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    , untuk
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(9)"
                                      style={style2I}
                                      onChange={cekJawaban2I}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>\gt </InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban1.b(10)"
                                      style={style2J}
                                      onChange={cekJawaban2J}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              Hitung penyelesaian dari.
              <ol className=" list-lowerAlpha list-inside pl-4">
                {/* Soal 2.a */}
                <li>
                  <InlineMath>|3|^2</InlineMath>
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol className="list-lowerAlpha list-inside pl-0 sm:pl-4">
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              <InlineMath>|3|^2 = </InlineMath>
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban2.a(1)"
                                      style={style3A}
                                      onChange={cekJawaban3A}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                    <InlineMath>^2 = </InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban2.a(2)"
                                      style={style3B}
                                      onChange={cekJawaban3B}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
                {/* Soal 2.b */}
                <li>
                  <InlineMath>|2 * (-3)|</InlineMath>
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol
                        className="list-lowerAlpha list-inside pl-0 sm:pl-4"
                        start={2}
                      >
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              <InlineMath math="|2 * (-3)| = " />
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-20 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban2.b(1)"
                                      style={style4A}
                                      onChange={cekJawaban4A}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />{" "}
                                    <InlineMath>=</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban2.b(2)"
                                      style={style4B}
                                      onChange={cekJawaban4B}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />{" "}
                                    <InlineMath>=</InlineMath>
                                    <input
                                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-16 m-2 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                      id="jawaban2.b(3)"
                                      style={style4C}
                                      onChange={cekJawaban4C}
                                      placeholder=". . . . . . . ."
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
                {/* Soal 2.c */}
                <li>
                  <InlineMath math="|\dfrac {4}{16}|" />
                  <ul className="pl-4 ">
                    <li>
                      <a className="font-bold"> Penyelesaian: </a>
                      <ol
                        className="list-lowerAlpha list-inside pl-0 sm:pl-4"
                        start={3}
                      >
                        <li>
                          <div className="inline-block">
                            <div className="flex flex-row items-center">
                              <InlineMath math="|\dfrac {4}{16}|" />
                              <InlineMath>=</InlineMath>
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <div className="flex flex-col ml-2">
                                      <div>
                                        <input
                                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                          id="jawaban2.c(1)"
                                          style={style5A1}
                                          onChange={cekJawaban5A1}
                                          placeholder=". . . ."
                                          type="text"
                                        />
                                      </div>
                                      <div className="ml-2 mr-2 border-b border-black"></div>
                                      <div>
                                        <input
                                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-1  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                          id="jawaban2.c(2)"
                                          style={style5A2}
                                          onChange={cekJawaban5A2}
                                          placeholder=". . . ."
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                              <span className="ml-2">
                                <InlineMath>=</InlineMath>
                              </span>
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <div className="flex flex-col ml-2">
                                      <div>
                                        <input
                                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                          id="jawaban2.c(3)"
                                          style={style5B1}
                                          onChange={cekJawaban5B1}
                                          placeholder=". . . ."
                                          type="text"
                                        />
                                      </div>
                                      <div className="ml-2 mr-2 border-b border-black"></div>
                                      <div>
                                        <input
                                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-1  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                          id="jawaban2.c(4)"
                                          style={style5B2}
                                          onChange={cekJawaban5B2}
                                          placeholder=". . . ."
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                              <span className="ml-2">
                                <InlineMath>=</InlineMath>
                              </span>
                              <span className="inline-block">
                                <div className="flex flex-col">
                                  <div>
                                    <div className="flex flex-col ml-2">
                                      <div>
                                        <input
                                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                          id="jawaban2.c(5)"
                                          style={style5C1}
                                          onChange={cekJawaban5C1}
                                          placeholder=". . . ."
                                          type="text"
                                        />
                                      </div>
                                      <div className="ml-2 mr-2 border-b border-black"></div>
                                      <div>
                                        <input
                                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-10 m-2 p-1  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                                          id="jawaban2.c(6)"
                                          style={style5C2}
                                          onChange={cekJawaban5C2}
                                          placeholder=". . . ."
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
