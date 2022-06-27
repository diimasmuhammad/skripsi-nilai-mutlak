import "katex/dist/katex.min.css";
import { soal as dataSoal } from "../data/dataSoal";
import { BlockMath, InlineMath } from "react-katex";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DataDiri from "./DataDiri";
import { db } from "../../firebase/initFirebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function LatihanSatu() {
  const [dataSiswa, setDataSiswa] = useState([]);

  const [soalSekarang, setSoalSekarang] = useState(0);
  const [soal, setSoal] = useState(dataSoal);
  const [skor, setSkor] = useState({
    benar: 0,
    salah: 0,
  });
  const [hasil, setHasil] = useState(false);

  const { butirSoal, opsiJawaban } = soal[soalSekarang];

  const koleksiUser = collection(db, "latihansatu");

  const userState = () => {
    const data = localStorage.getItem("pengguna");
    const userobject = data !== null ? JSON.parse(data) : null;
    setDataSiswa(userobject);
  };

  useEffect(() => {
    userState();
  }, []);

  const soalSelanjutnya = () => {
    if (soal.length - 1 === soalSekarang) return;
    setSoalSekarang(soalSekarang + 1);
  };

  const soalSebelumnya = () => {
    if (soalSekarang === 0) return;
    setSoalSekarang(soalSekarang - 1);
  };

  const pilihOpsiJawaban = (jawabanTerpilih, opsiJawabanTerpilih) => {
    setSoal(
      soal.map((item, index) =>
        index === jawabanTerpilih
          ? {
              ...item,
              terpilih: true,
              opsiJawaban: opsiJawaban.map((item, index) =>
                index === opsiJawabanTerpilih
                  ? { ...item, terpilih: true }
                  : { ...item, terpilih: false }
              ),
            }
          : item
      )
    );
  };

  const cekHasil = () => {
    setHasil(true);
    const soalTerjawab = soal.filter((item) => item.terpilih);
    const soalBenar = soalTerjawab.filter((item) =>
      item.opsiJawaban.find(
        (opsi) => opsi.isCorrect && opsi.terpilih === opsi.isCorrect
      )
    );
    setSkor({
      benar: soalBenar.length,
      salah: soal.length - soalBenar.length,
    });
    addDoc(koleksiUser, {
      nama: dataSiswa.namaSiswa,
      sekolah: dataSiswa.sekolah,
      skor: soalBenar.length * 10,
    });
  };

  return (
    <>
      {dataSiswa !== null ? (
        <div className="relative">
          {hasil ? (
            <div>
              <a className="mt-1 text-white bg-indigo-300 w-max p-2 flex rounded-lg items-center font-bold mx-auto">
                Hasil Latihan
              </a>

              <div className="border border-indigo-400 shadow-xl flex flex-col items-center mx-auto w-max p-4 mt-4">
                <p className="text-center">Skor Latihan Anda :</p>
                <p className="mt-20 font-bold text-lg">{dataSiswa.namaSiswa}</p>
                <p className="font-bold text-lg">{dataSiswa.sekolah}</p>
                <p className="font-bold text-lg">{skor.benar * 10}</p>
                <Link href="/">
                  <button className=" bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                    Materi Selanjutnya
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-row justify-center items-center">
                {/* Navigasi soal */}
                <div className=" border border-trueGray-300 p-4 grid grid-cols-2 sm:grid-cols-10 gap-4 text-center my-4 shadow-xl mx-3">
                  {soal.map((item, index) => (
                    <div
                      className={
                        "rounded-full h-10 w-10 border border-indigo-500 p-2 cursor-pointer " +
                        (index === soalSekarang
                          ? " bg-indigo-500 text-white"
                          : item?.terpilih
                          ? " bg-green-500 text-white"
                          : " bg-transparent")
                      }
                      onClick={() => setSoalSekarang(index)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
                {/* Soal */}
                <div className="flex flex-col w-full sm:w-max h-max border border-trueGray-400 p-6 shadow-2xl">
                  <div>
                    <p>
                      <span className="text-lg">{soalSekarang + 1}. </span>
                      <InlineMath>{butirSoal}</InlineMath>
                    </p>
                  </div>
                  <div className="flex flex-col py-4 cursor-pointer">
                    <ol className=" list-upperAlpha list-inside">
                      {opsiJawaban.map((item, index) => (
                        <li
                          key={index}
                          className={
                            "mt-4 hover:bg-white  font-semibold hover:text-indigo-400 py-2 px-4 border hover:border-indigo-500 rounded shadow-lg " +
                            (item?.terpilih
                              ? " bg-white text-indigo-400 border-indigo-500"
                              : " bg-indigo-400 text-white border-white")
                          }
                          onClick={() => pilihOpsiJawaban(soalSekarang, index)}
                        >
                          {soalSekarang >= 6 && soalSekarang < 9 ? (
                            <Image
                              src={item.opsi}
                              width="298"
                              height="200"
                              layout="responsive"
                            ></Image>
                          ) : (
                            <InlineMath math={item.opsi} />
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
              {/* navigasi next/before */}
              <div className="flex justify-between items-center px-4 mt-12 mb-3">
                <button
                  className="bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  onClick={() => soalSebelumnya()}
                  disabled={soalSekarang === 0 ? true : false}
                >
                  Sebelumnya
                </button>
                {soal.length - 1 === soalSekarang ? (
                  <button
                    className="bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                    onClick={() => cekHasil()}
                  >
                    Selesai
                  </button>
                ) : (
                  <button
                    className="bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                    onClick={() => soalSelanjutnya()}
                  >
                    Selanjutnya
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <DataDiri signin={(dataSiswa) => setDataSiswa(dataSiswa)} />
      )}
    </>
  );
}
