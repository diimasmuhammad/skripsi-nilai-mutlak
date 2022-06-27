import DashboardPetunjuk from "../components/dashboardPetunjuk";
import PetunjukLatihan from "../components/latihan/petunjukLatihan";
import "katex/dist/katex.min.css";
import { soal as dataSoal } from "../components/data/latihanSatu/dataSoal";
import { BlockMath, InlineMath } from "react-katex";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "../firebase/initFirebase";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import DataDiri from "../components/latihan/DataDiri";
import { useTimer } from "react-timer-hook";

export default function latihanBabSatu(props) {
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

  const time = new Date();
  time.setSeconds(time.getSeconds() + 910);
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => cekHasil(),
  });

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
      tanggal: serverTimestamp(),
    });
  };

  return (
    <DashboardPetunjuk>
      {dataSiswa !== null ? (
        <>
          {hasil ? (
            <div className="flex flex-col">
              <a className="mt-1 text-white bg-indigo-300 w-max p-2 flex rounded-lg items-center font-bold mx-auto">
                Hasil Latihan
              </a>

              <div className="border border-indigo-400 shadow-xl flex flex-col items-center mx-auto w-max p-4 mt-4">
                <p className="text-center">Skor Latihan Anda :</p>
                <p className="mt-2 font-bold text-lg">{dataSiswa.namaSiswa}</p>
                <p className="my-2 font-bold text-lg">{dataSiswa.sekolah}</p>
                <p className="my-2 font-bold text-lg">{skor.benar * 10}</p>
              </div>
              <div className="absolute bottom-0 right-0 mr-8 mb-1 sm:mb-2 text-base">
                <Link href="/materiBabDuaBagianSatu">
                  <button className=" bg-cyan-500 text-white font-semibold shadow-md py-1 sm:py-2 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                    Materi Selanjutnya
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="relative text-base">
                <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center">
                  <div className="flex flex-col w-full sm:w-max border border-indigo-500 m-3 p-4 sm:my-20">
                    {/* Timer */}
                    <div className="flex justify-center items-center p-4 border-b border-indigo-500 font-bold">
                      <p>
                        <span>{minutes}</span>:<span>{seconds}</span>
                      </p>
                    </div>
                    {/* navigasi soal */}
                    <div className="flex flex-col sm:flex-row">
                      <div className="grid grid-cols-4 gap-6 p-8 border-b sm:border-r border-indigo-500">
                        {soal.map((item, index) => (
                          <option
                            className={
                              "flex items-center justify-center w-10 h-10 transition duration-150 rounded-full border border-trueGray-400 font-bold hover:text-green-50 hover:bg-indigo-500 cursor-pointer" +
                              (index === soalSekarang
                                ? " bg-indigo-500 text-white"
                                : item?.terpilih
                                ? " bg-green-500 text-white"
                                : " bg-transparent")
                            }
                            onClick={() => setSoalSekarang(index)}
                          >
                            {index + 1}
                          </option>
                        ))}
                      </div>
                      {/* Petunjuk */}
                      <div className="flex flex-col justify-center items-center p-4">
                        <div className="flex flex-row items-center justify-between gap-4 font-bold">
                          <option className="flex items-center justify-center sm:w-14 sm:h-10 h-10 w-10 p-2 transition duration-150 rounded-full border border-trueGray-400 "></option>
                          <h2>= </h2>
                          <h2>Soal Belum Dijawab</h2>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-4 py-2 font-bold">
                          <option className="flex items-center justify-center sm:w-14 sm:h-10 h-10 w-10 p-2 bg-green-500 rounded-full border border-trueGray-400 "></option>
                          <h2>= </h2>
                          <h2>Soal Sudah Dijawab</h2>
                        </div>
                      </div>
                    </div>
                    {/* Tombol Selesai */}
                    <div className="flex justify-center items-center p-4 border-t border-indigo-500">
                      <button
                        className="bg-cyan-500 text-white font-semibold shadow-md py-2 px-4 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                        onClick={() => cekHasil()}
                      >
                        Selesai
                      </button>
                    </div>
                  </div>
                  {/* soal */}
                  <div className="flex flex-col w-full h-max border border-indigo-500 p-4">
                    <div className="text-sm sm:text-base">
                      <p>
                        <span>{soalSekarang + 1}. </span>
                        <InlineMath>{butirSoal}</InlineMath>
                      </p>
                    </div>

                    <ol
                      className={
                        "list-upperAlpha list-inside cursor-pointer text-sm sm:text-base" +
                        (soalSekarang >= 6 && soalSekarang < 9
                          ? " grid grid-cols-1 gap-2 sm:grid-cols-2"
                          : " ")
                      }
                    >
                      {opsiJawaban.map((item, index) => (
                        <li
                          key={index}
                          className={
                            "mt-4 hover:bg-white  font-semibold hover:text-indigo-400 p-2 border hover:border-indigo-500 rounded shadow-lg " +
                            (item?.terpilih
                              ? " bg-green-500 text-white border-green-500"
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
              <div className="flex text-base">
                <div className="absolute bottom-0 mb-1 sm:mb-2 -ml-2">
                  <button
                    className="bg-cyan-500 text-white font-semibold shadow-md py-1 sm:py-2 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                    onClick={() => soalSebelumnya()}
                    disabled={soalSekarang === 0 ? true : false}
                  >
                    Sebelumnya
                  </button>
                </div>

                <div className="absolute bottom-0 right-0 mr-8 mb-1 sm:mb-2">
                  {soal.length - 1 === soalSekarang ? (
                    <button
                      className="bg-cyan-500 text-white font-semibold shadow-md py-1 sm:py-2 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                      onClick={() => cekHasil()}
                    >
                      Selesai
                    </button>
                  ) : (
                    <button
                      className="bg-cyan-500 text-white font-semibold shadow-md py-1 sm:py-2 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                      onClick={() => soalSelanjutnya()}
                    >
                      Selanjutnya
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        // Data Diri dan Petunjuk Pengerjaan
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center justify-center">
            <a className="text-white bg-indigo-300 w-max p-2 rounded-lg font-bold">
              Latihan 1
            </a>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="mx-5 sm:mx-10">
              <PetunjukLatihan />
            </div>
            <div className="mx-5 sm:mx-10">
              <DataDiri signin={(dataSiswa) => setDataSiswa(dataSiswa)} />
            </div>
          </div>
        </div>
      )}
    </DashboardPetunjuk>
  );
}
