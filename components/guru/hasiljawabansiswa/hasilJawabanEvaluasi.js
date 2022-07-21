import React, { useEffect, useState } from "react";
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
} from "firebase/firestore";

export default function HasilJawabanEvaluasi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const koleksiDatabase = collection(db, "evaluasi");

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
  if (data.length === 0) {
    return (
      <h1 className="flex items-center justify-center w-96 h-20 text-cyan-600">
        Harap Tunggu. . . .
      </h1>
    );
  }
  return (
    <>
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
    </>
  );
}
