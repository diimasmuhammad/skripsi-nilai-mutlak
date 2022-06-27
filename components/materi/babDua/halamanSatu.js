import Image from "next/image";
import { useState } from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export default function HalamanSatu() {
  const [bukaIlustrasi, setBukaIlustrasi] = useState(false);
  const [bukaPenyelesaianSatu, setBukaPenyelesaianSatu] = useState(false);
  const [bukaPenyelesaianDua, setBukaPenyelesaianDua] = useState(false);
  return (
    <>
      <div className="relative text-base text-justify">
        <p className="flex justify-center font-semibold uppercase">
          Persamaan Nilai Mutlak
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
                <li>
                  Siswa mampu menyelesaikan persamaan linear satu variabel
                  dengan benar
                </li>
                <li>
                  Siswa mampu menyelesaikan persamaan nilai mutlak linear satu
                  variabel dengan benar
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex bg-white mt-3 border-t-2 border-trueGray-300 pt-3">
          <p className="uppercase font-bold text-justify text-md">
            2.1 Persamaan Linear Satu Variabel
          </p>
        </div>

        <div className="flex flex-col bg-white text-sm mt-4 border-t-2 border-trueGray-300">
          Sebelumnya kita sudah mempelajari konsep dari nilai mutlak,
          selanjutnya pada topik ini kita akan mempelajari persamaan linear satu
          variabel yang memuat nilai mutlak tersebut.
          <div className="border-t-2 border-trueGray-300 mt-2">
            <a className="text-white bg-indigo-300 w-full justify-center uppercase h-10 p-2 mt-2 flex rounded-lg items-center font-bold">
              Definisi
            </a>
          </div>
          <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 ">
            <p className="text-justify indent-md">
              Sebelum mempelajari persamaan liear satu variabel yang memuat
              nilai mutlak, sebaiknya kita mempelajari persamaan linear satu
              variabel itu sendiri terlebih dahulu.
            </p>
            <p className="text-justify indent-md pt-2">
              Persamaan linear satu variabel (PLSV) adalah persamaan linear yang
              hanya memuat satu variabel dengan pangkat tertingginya satu.
              Bentuk umum persamaan linear satu variabel sebagai berikut.
            </p>
            <div className="flex flex-row gap-5">
              <p className="border border-trueGray-500 p-3 w-max mt-5">
                <InlineMath>ax + b = 0</InlineMath> dimana{" "}
                <InlineMath>a, b \in R</InlineMath> dan{" "}
                <InlineMath>a \ne 0</InlineMath>
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-base">Keterangan:</p>
                <p>x = variabel</p>
                <p>a = koefisien</p>
                <p>b = konstanta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white text-sm mt-4 border-t-2 border-trueGray-300">
          <a className="text-white mt-3 uppercase bg-indigo-300 w-full justify-center h-10 p-2 flex rounded-lg items-center font-bold">
            Kajian Teori
          </a>
          <div className="p-3 mt-2 text-sm border-2 border-trueGray-300 flex flex-col gap-2">
            <p className="text-justify">
              Terdapat beberapa hal yang harus diperhatikan untuk menyelesaikan
              persamaan linear satu variabel.
            </p>
            <ol className="list-lowerAlpha list-inside flex flex-col gap-2 ml-4">
              <li>
                Jika kedua ruas ditambah dengan suatu bilangan, maka diperoleh
                persamaan yang ekuivalen.
                <p className="indent-xs pt-2">Misalnya:</p>
                <p className="indent-xs py-2">
                  <InlineMath>2x-3=5</InlineMath> ekivalen dengan{" "}
                  <InlineMath>2x-3+3=5+3</InlineMath>
                </p>
              </li>
              <li>
                Jika kedua ruas dikurangi dengan suatu bilangan, maka diperoleh
                persamaan yang ekuivalen.
                <p className="indent-xs pt-2">Misalnya:</p>
                <p className="indent-xs py-2">
                  <InlineMath>2x+1=5</InlineMath> ekivalen dengan{" "}
                  <InlineMath>2x+1-1=5-1</InlineMath>
                </p>
              </li>
              <li>
                Jika kedua ruas dikalikan dengan suatu bilangan, maka diperoleh
                persamaan yang ekuivalen.
                <p className="indent-xs pt-2">Misalnya:</p>
                <p className="indent-xs py-2">
                  <InlineMath>\dfrac 1 2 x-1=3</InlineMath> ekivalen dengan{" "}
                  <InlineMath>2 * (\dfrac 1 2 x-1)=2*3</InlineMath>
                </p>
              </li>
              <li>
                Jika kedua ruas dibagi dengan suatu bilangan, maka diperoleh
                persamaan yang ekuivalen.
                <p className="indent-xs pt-2">Misalnya:</p>
                <p className="indent-xs py-2">
                  <InlineMath>2x-4=6</InlineMath> ekivalen dengan{" "}
                  <InlineMath math="\dfrac {2x-4} 2 = \dfrac 6 2" />
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
