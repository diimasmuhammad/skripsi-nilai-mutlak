import React, { useState, useEffect } from "react";
import { db } from "../firebase/initFirebase";
import {
  collection,
  endBefore,
  getDocs,
  limit,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import DashboardHalamanGuru from "../components/dashboardHalamanGuru";

export default function jawabanSiswa() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const koleksiDatabase = collection(db, "latihansatu");

    const q = query(koleksiDatabase, orderBy("nama", "asc"));

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
    <DashboardHalamanGuru>
      <div className="bg-white flex justify-center items-center p-7 m-2 border-2  border-trueGray-400 shadow-lg rounded h-kontenguru">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                rowSpan={4}
                className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
              >
                Nama
              </th>
              <th
                colSpan={10}
                className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
              >
                Soal
              </th>
            </tr>
            <tr>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 1
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 2
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 3
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 4
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 5
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 6
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 7
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 8
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 9
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                Soal No 10
              </th>
            </tr>
            <tr>
              <th
                colSpan={10}
                className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider"
              >
                Kunci Jawaban
              </th>
            </tr>
            <tr>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
              <th className="px-5 py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
                A
              </th>
            </tr>
          </thead>
          <tbody className="text-base text-center border border-cyan-400">
            {data.map((action, index) => (
              <tr>
                <td>{action.nama}</td>
                {action.jawaban.map((item, index) => (
                  <td
                    className="border-2 border-white"
                    style={
                      item.isCorrect
                        ? { backgroundColor: "#33ff99" }
                        : { backgroundColor: "#ff4d4d" }
                    }
                  >
                    {item.poin}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardHalamanGuru>
  );
}
