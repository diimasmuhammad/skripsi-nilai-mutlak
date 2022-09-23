import React from "react";
import { db } from "../../../firebase/initFirebase";
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
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import moment from "moment";

export default function ListLatihanSatu() {
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

  const deleteData = (id) => {
    let fieldEdit = doc(db, "latihansatu", id);

    deleteDoc(fieldEdit)
      .then(() => {
        alert("Data Berhasil Dihapus");
      })
      .catch((err) => {
        alert("Tidak Bisa Menghapus Data..");
      });
  };

  if (data.length === 0) {
    return (
      <h1 className="flex items-center justify-center w-96 h-20 text-cyan-600">
        Harap Tunggu. . . .
      </h1>
    );
  }
  return (
    <>
      {data.map((datas, index) => (
        <tr id="trow" key={datas.key}>
          <td className="px-5 py-5 border border-cyan-400 bg-white text-sm ">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-cyan-600 whitespace-no-wrap">{index + 1}</p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 border border-cyan-400 bg-white text-sm w-2/5">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-cyan-600 whitespace-no-wrap">{datas.nama}</p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 border border-cyan-400 bg-white text-sm">
            <p className="text-cyan-600 whitespace-no-wrap text-center">
              {datas.sekolah}
            </p>
          </td>
          <td className="px-5 py-5 border border-cyan-400 bg-white text-sm">
            <p className="text-cyan-600 whitespace-no-wrap text-center">
              {datas.skor}
            </p>
          </td>
          <td className="px-5 py-5 border border-cyan-400 bg-white text-sm">
            <p className="text-cyan-600 whitespace-no-wrap text-center">
              {moment(datas.tanggal).format("dddd, DD-MM-YYYY")}
            </p>
          </td>
          <td className="px-5 py-5 border border-cyan-400 bg-white text-sm">
            <p className="text-cyan-600 whitespace-no-wrap text-center">
              {moment(datas.tanggal).format("h:mm:ss a")}
            </p>
          </td>
          <td className="px-5 py-5 border border-cyan-400 bg-white text-sm">
            <button
              onClick={() => deleteData(datas.id)}
              className=" bg-red-500 py-2 px-4 rounded-lg text-white hover:text-red-500 hover:ring hover:ring-red-500 hover:bg-white"
            >
              Hapus
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
