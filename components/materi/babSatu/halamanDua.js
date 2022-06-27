import Image from "next/image";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";

export default function HalamanDua() {
  const [style1, setStyle1] = useState({});
  const [jawabanSatu, setJawabanSatu] = useState(false);
  const [style2a, setStyle2a] = useState({});
  const [style2b, setStyle2b] = useState({});
  const [jawabanDuaA, setJawabanDuaA] = useState();
  const [jawabanDuaB, setJawabanDuaB] = useState();
  const [style3, setStyle3] = useState({});
  const [jawabanTiga, setJawabanTiga] = useState();
  const [style4a, setStyle4a] = useState({});
  const [style4b, setStyle4b] = useState({});
  const [jawabanEmpatA, setJawabanEmpatA] = useState();
  const [jawabanEmpatB, setJawabanEmpatB] = useState();
  const [style5, setStyle5] = useState({});
  const [jawabanLima, setJawabanLima] = useState();

  const cekJawaban1 = (jawaban1) => {
    if (jawaban1.target.value === "3") {
      setStyle1({ border: "2px solid green" });
      setJawabanSatu(true);
    } else {
      setStyle1({ border: "2px solid red" });
      setJawabanSatu(false);
    }
  };
  const cekJawaban2a = (jawaban2a) => {
    if (jawaban2a.target.value === "3") {
      setStyle2a({ border: "2px solid green" });
      setJawabanDuaA(true);
    } else {
      setStyle2a({ border: "2px solid red" });
      setJawabanDuaA(false);
    }
  };
  const cekJawaban2b = (jawaban2b) => {
    if (jawaban2b.target.value === "4") {
      setStyle2b({ border: "2px solid green" });
      setJawabanDuaB(true);
    } else {
      setStyle2b({ border: "2px solid red" });
      setJawabanDuaB(false);
    }
  };

  const cekJawaban3 = (jawaban3) => {
    if (jawaban3.target.value === "0") {
      setStyle3({ border: "2px solid green" });
      setJawabanTiga(true);
    } else {
      setStyle3({ border: "2px solid red" });
      setJawabanTiga(false);
    }
  };
  const cekJawaban4a = (jawaban4a) => {
    if (jawaban4a.target.value === "5") {
      setStyle4a({ border: "2px solid green" });
      setJawabanEmpatA(true);
    } else {
      setStyle4a({ border: "2px solid red" });
      setJawabanEmpatA(false);
    }
  };
  const cekJawaban4b = (jawaban4b) => {
    if (jawaban4b.target.value === "2") {
      setStyle4b({ border: "2px solid green" });
      setJawabanEmpatB(true);
    } else {
      setStyle4b({ border: "2px solid red" });
      setJawabanEmpatB(false);
    }
  };
  const cekJawaban5 = (jawaban5) => {
    if (jawaban5.target.value === "3") {
      setStyle5({ border: "2px solid green" });
      setJawabanLima(true);
    } else {
      setStyle5({ border: "2px solid red" });
      setJawabanLima(false);
    }
  };
  return (
    <>
      <div className="text-base text-justify relative">
        <p className="indent-sm pb-2">
          Setelah melihat ilustrasi diatas maka dapat disimpulkan bahwa secara
          geometris, nilai mutlak suatu bilangan adalah jarak antara bilangan
          itu dengan nol pada garis bilangan real. Dengan demikian, tidak
          mungkin nilai mutlak suatu bilangan bernilai negatif, tetapi mungkin
          saja bernilai nol.
        </p>
        <p className="indent-sm">
          Nilai mutlak dilambangkan dengan tanda | |
          <a className="font-bold"> (absolut)</a>. Sebagai contoh, notasi |5|
          menyatakan jarak 5 satuan dari titik 0 pada garis bilangan.
        </p>
        <div className="flex justify-center">
          <Image
            src="/materi/pergerakan-garis-bilangan.png"
            className=""
            width={675}
            height={131}
          ></Image>
        </div>
        <p className="mb-2 border-b-2 border-trueGray-300">
          Sehingga |5| = |-5| = 5.
        </p>
        <a className="mt-2 text-white bg-indigo-300 w-full justify-center h-10 p-2 flex rounded-lg items-center font-bold">
          Mari Mencoba 1
        </a>
        <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 ">
          <p>
            Hitunglah nilai hasil dari beberapa nilai mutlak dibawah ini,
            kemudian gambarkan grafik pergerakan nilai pada garis bilangan di
            canvas yang sudah disediakan.
          </p>
          <ul className=" list-decimal list-inside pl-2 py-4 sm:pl-7">
            <li>
              <div className="inline-block">
                <div className="flex flex-row items-center">
                  <InlineMath>|3|=</InlineMath>
                  <div>
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 p-2 m-2 ml-9 text-gray-700 leading-tight focus:bg-white focus:outline-none"
                      style={style1}
                      id="jawaban-1"
                      type="text"
                      onChange={cekJawaban1}
                      autoComplete="off"
                    />
                  </div>
                  <div className={" ml-8 " + (jawabanSatu ? "" : "hidden")}>
                    <ChevronDoubleRightIcon className="w-10 h-10 text-cyan-500 animate-pulse" />
                  </div>
                </div>
              </div>

              <iframe
                className={
                  "border border-cyan-600 ml-16 " +
                  (jawabanSatu ? "inline-block" : "hidden")
                }
                scrolling="no"
                title="marimencoba1"
                src="https://www.geogebra.org/material/iframe/id/gk7serkq/width/850/height/300/border/888888/sfsb/true/smb/false/stb/true/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/true/sdz/false/ctl/false"
                width="850px"
                height="300px"
              >
                {" "}
              </iframe>
            </li>
            <li className="pt-7">
              <div className="inline-block">
                <div className="flex flex-row items-center">
                  <InlineMath>|\dfrac 3 4|=</InlineMath>
                  <div>
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 m-2 p-2 ml-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2a"
                        type="text"
                        style={style2a}
                        onChange={cekJawaban2a}
                        autoComplete="off"
                      />
                    </div>
                    <div className="ml-8 mr-2 border-b border-black"></div>
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 m-2 p-2 ml-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-2b"
                        type="text"
                        style={style2b}
                        onChange={cekJawaban2b}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      " ml-8 " + (jawabanDuaA && jawabanDuaB ? "" : "hidden")
                    }
                  >
                    <ChevronDoubleRightIcon className="w-10 h-10 text-cyan-500 animate-pulse" />
                  </div>
                </div>
              </div>

              <iframe
                className={
                  "border border-cyan-600 ml-16 " +
                  (jawabanDuaA && jawabanDuaB ? "inline-block" : "hidden")
                }
                scrolling="no"
                title="marimencoba2"
                src="https://www.geogebra.org/material/iframe/id/g8k4gjrj/width/850/height/300/border/888888/sfsb/true/smb/false/stb/true/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/true/sdz/false/ctl/false"
                width="850px"
                height="300px"
              >
                {" "}
              </iframe>
            </li>
            <li className="pt-7">
              <div className="inline-block">
                <div className="flex flex-row items-center">
                  <InlineMath>|0|=</InlineMath>{" "}
                  <div className="ml-1">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 p-2 m-2 ml-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-3"
                      type="text"
                      style={style3}
                      onChange={cekJawaban3}
                      autoComplete="off"
                    />
                  </div>
                  <div className={" ml-8 " + (jawabanTiga ? "" : "hidden")}>
                    <ChevronDoubleRightIcon className="w-10 h-10 text-cyan-500 animate-pulse" />
                  </div>
                </div>
              </div>
              <iframe
                className={
                  "border border-cyan-600 ml-16 " +
                  (jawabanTiga ? "inline-block" : "hidden")
                }
                scrolling="no"
                title="marimencoba3"
                src="https://www.geogebra.org/material/iframe/id/g8k4gjrj/width/850/height/300/border/888888/sfsb/true/smb/false/stb/true/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/true/sdz/false/ctl/false"
                width="850px"
                height="300px"
              >
                {" "}
              </iframe>
            </li>
            <li className="pt-7">
              <div className="inline-block">
                <div className="flex flex-row items-center">
                  <InlineMath>|-\dfrac 5 2|=</InlineMath>
                  <div>
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 m-2 p-2 ml-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-4a"
                        type="text"
                        style={style4a}
                        onChange={cekJawaban4a}
                        autoComplete="off"
                      />
                    </div>
                    <div className="ml-3 mr-2 border-b border-black"></div>
                    <div>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 m-2 p-2 ml-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                        id="jawaban-4b"
                        type="text"
                        style={style4b}
                        onChange={cekJawaban4b}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      " ml-8 " +
                      (jawabanEmpatA && jawabanEmpatB ? "" : "hidden")
                    }
                  >
                    <ChevronDoubleRightIcon className="w-10 h-10 text-cyan-500 animate-pulse" />
                  </div>
                </div>
              </div>
              <iframe
                className={
                  "border border-cyan-600 ml-16 " +
                  (jawabanEmpatA && jawabanEmpatB ? "inline-block" : "hidden")
                }
                scrolling="no"
                title="marimencoba4"
                src="https://www.geogebra.org/material/iframe/id/sqx4ebe8/width/850/height/300/border/888888/sfsb/true/smb/false/stb/true/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false"
                width="850px"
                height="300px"
              >
                {" "}
              </iframe>
            </li>
            <li className="pt-7">
              <div className="inline-block">
                <div className="flex flex-row items-center">
                  <InlineMath>|-3|=</InlineMath>{" "}
                  <div className="ml-1">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-12 p-2 m-2 ml-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-200"
                      id="jawaban-5"
                      type="text"
                      style={style5}
                      onChange={cekJawaban5}
                      autoComplete="off"
                    />
                  </div>
                  <div className={" ml-8 " + (jawabanLima ? "" : "hidden")}>
                    <ChevronDoubleRightIcon className="w-10 h-10 text-cyan-500 animate-pulse" />
                  </div>
                </div>
              </div>
              <iframe
                className={
                  "border border-cyan-600 ml-16 " +
                  (jawabanLima ? "inline-block" : "hidden")
                }
                scrolling="no"
                title="marimencoba5"
                src="https://www.geogebra.org/material/iframe/id/gk7serkq/width/850/height/300/border/888888/sfsb/true/smb/false/stb/true/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/true/sdz/false/ctl/false"
                width="850px"
                height="300px"
              >
                {" "}
              </iframe>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
