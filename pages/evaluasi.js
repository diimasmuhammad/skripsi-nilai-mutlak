import DashboardPetunjuk from "../components/dashboardPetunjuk";
import PetunjukLatihan from "../components/latihan/petunjukLatihan";
import { Alert, Stack } from "@mui/material";

import "katex/dist/katex.min.css";
import { soal as dataSoal } from "../components/data/evaluasi/dataSoal";
import { BlockMath, InlineMath } from "react-katex";
import { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "../firebase/initFirebase";
import {
  collection,
  getDocs,
  addDoc,
  endBefore,
  limit,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  serverTimestamp,
  where,
} from "firebase/firestore";
import DataDiriEvaluasi from "../components/latihan/DataDiriEvaluasi";
import { useTimer } from "react-timer-hook";

export default function evaluasi(props) {
  const [dataSiswa, setDataSiswa] = useState([]);

  const [soalSekarang, setSoalSekarang] = useState(0);
  const [soal, setSoal] = useState(dataSoal);
  const [skor, setSkor] = useState({
    benar: 0,
    salah: 0,
  });
  const [hasil, setHasil] = useState(false);

  const { butirSoal, opsiJawaban } = soal[soalSekarang];

  const koleksiUser = collection(db, "evaluasi");

  const time = new Date();
  time.setSeconds(time.getSeconds() + 3620);
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
    const soalTerjawab = soal.filter((item) => item.terpilih);
    let jawabanCek = [];

    soalTerjawab.forEach((item) =>
      item.opsiJawaban.forEach((data) => {
        if (data.terpilih) jawabanCek.push(data);
      })
    );
    const soalBenar = soalTerjawab.filter((item) =>
      item.opsiJawaban.find(
        (opsi) => opsi.isCorrect && opsi.terpilih === opsi.isCorrect
      )
    );

    if (jawabanCek.length < 25) {
      alert("Kamu Harus Mengisi Semua Jawaban");
    } else {
      setHasil(true);
      setSkor({
        benar: soalBenar.length,
        salah: soal.length - soalBenar.length,
      });
      addDoc(koleksiUser, {
        nama: dataSiswa.namaSiswa,
        sekolah: dataSiswa.sekolah,
        skor: soalBenar.length * 4,
        jawaban: jawabanCek,
        tanggal: serverTimestamp(),
      });
    }
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const koleksiKkm = collection(db, "kkmcoba");

    const q = query(koleksiKkm, where("id", "==", "4"));

    const ambilData = onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          tanggal: doc.data().tanggal?.toDate().getTime(),
        }))
      );
    });

    return ambilData;
  }, []);
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
                <p className="mt-2 font-bold text-lg">
                  Nama : {dataSiswa.namaSiswa}
                </p>
                <p className="my-2 font-bold text-lg">
                  Sekolah : {dataSiswa.sekolah}
                </p>
                <p className="my-2 font-bold text-lg">
                  Nilai : {skor.benar * 4}
                </p>
                {data.map((action) => (
                  <>
                    <p className="my-2 font-bold text-lg">KKM : {action.kkm}</p>
                    {skor.benar * 4 < action.kkm ? (
                      <Stack sx={{ width: "100%" }} spacing={2}>
                        <Alert severity="error">
                          Nilai Anda Belum Memenuhi KKM, Silahkan Ulangi Materi
                        </Alert>
                      </Stack>
                    ) : (
                      <Stack sx={{ width: "100%" }} spacing={2}>
                        <Alert severity="success">
                          Nilai Anda Memenuhi KKM
                        </Alert>
                      </Stack>
                    )}
                  </>
                ))}
              </div>
              {data.map((action) => (
                <>
                  {skor.benar * 4 < action.kkm ? (
                    <div className="absolute bottom-0 right-0 mr-8 mb-1 sm:mb-2 text-base">
                      <Link href="/materiBabSatu">
                        <button className=" bg-cyan-500 text-white font-semibold shadow-md py-1 sm:py-2 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                          Ulangi Materi
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="absolute bottom-0 right-0 mr-8 mb-1 sm:mb-2 text-base">
                      <Link href="/">
                        <button className=" bg-cyan-500 text-white font-semibold shadow-md py-1 sm:py-2 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
                          Halaman Utama
                        </button>
                      </Link>
                    </div>
                  )}
                </>
              ))}
            </div>
          ) : (
            <>
              <div className=" text-base">
                <div className="flex flex-col sm:flex-row md:flex-row justify-centr items-center">
                  <div className="flex flex-col w-full sm:w-max border border-indigo-500 m-3 p-4 sm:my-10">
                    {/* Timer */}
                    <div className="flex justify-center items-center p-4 border-b border-indigo-500 font-bold">
                      <p>
                        <span>{hours}</span>:<span>{minutes}</span>:
                        <span>{seconds}</span>
                      </p>
                    </div>
                    {/* navigasi soal */}
                    <div className="flex flex-col sm:flex-row">
                      <div className="grid grid-cols-5 sm:grid-cols-8 gap-4 sm:gap-12 p-4 sm:mr-6 border-b border-indigo-500">
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
                      <div className="flex flex-col justify-center items-center border-b sm:border-l ml-6 border-indigo-500 p-4">
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

                    <ol className="list-upperAlpha list-inside cursor-pointer text-sm sm:text-base">
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
                          <InlineMath math={item.opsi} />
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
            <a className="uppercase text-white bg-indigo-300 w-max p-2 rounded-lg font-bold">
              Evaluasi
            </a>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="mx-5 sm:mx-10">
              <PetunjukLatihan />
            </div>
            <div className="mx-5 sm:mx-10">
              <DataDiriEvaluasi
                signin={(dataSiswa) => setDataSiswa(dataSiswa)}
              />
            </div>
          </div>
        </div>
      )}
    </DashboardPetunjuk>
  );
}
