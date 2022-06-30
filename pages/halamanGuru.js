import React from "react";
import Sidebar from "../components/guru/sidebar.js";
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
import { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

export default function halamanGuru() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const koleksiDatabase = collection(db, "latihansatu");

    const q = query(koleksiDatabase, orderBy("nama", "asc"), limit(5));

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

  const showNext = ({ item }) => {
    if (data.length === 0) {
      alert("data kosong");
    } else {
      const koleksiDatabase = collection(db, "latihansatu");

      const q = query(
        koleksiDatabase,
        orderBy("nama", "asc"),
        startAfter(item.nama),
        limit(5)
      );

      const ambilDataSelanjutnya = onSnapshot(q, (querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            tanggal: doc.data().tanggal?.toDate().getTime(),
          }))
        );
        setPage(page + 1);
      });

      return ambilDataSelanjutnya();
    }
  };
  const showPrevious = ({ item }) => {
    const koleksiDatabase = collection(db, "latihansatu");

    const q = query(
      koleksiDatabase,
      orderBy("nama", "asc"),
      endBefore(item.nama),
      limitToLast(5)
    );

    const ambilDataSebelumnya = onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          tanggal: doc.data().tanggal?.toDate().getTime(),
        }))
      );
      setPage(page - 1);
    });

    return ambilDataSebelumnya();
  };

  // const [list, setList] = useState([]);
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await app
  //       .firestore()
  //       .collection("latihansatu")
  //       .orderBy("nama", "desc")
  //       .limit(5)
  //       .onSnapshot(function (querySnapshot) {
  //         var items = [];
  //         querySnapshot.forEach(function (doc) {
  //           items.push({ key: doc.id, ...doc.data() });
  //         });
  //         console.log("first item ", items[0]);
  //         setList(items);
  //       });
  //   };
  //   fetchData();
  // }, []);

  // const showNext = ({ item }) => {
  //   if (list.length === 0) {
  //     alert("Thats all we have for now !");
  //   } else {
  //     const fetchNextData = async () => {
  //       await app
  //         .firestore()
  //         .collection("latihansatu")
  //         .orderBy("nama", "desc")
  //         .limit(5)
  //         .startAfter(item.nama)
  //         .onSnapshot(function (querySnapshot) {
  //           const items = [];
  //           querySnapshot.forEach(function (doc) {
  //             items.push({ key: doc.id, ...doc.data() });
  //           });
  //           setList(items);
  //           setPage(page + 1);
  //         });
  //     };
  //     fetchNextData();
  //   }
  // };

  // const showPrevious = ({ item }) => {
  //   const fetchPreviousData = async () => {
  //     await app
  //       .firestore()
  //       .collection("latihansatu")
  //       .orderBy("nama", "desc")
  //       .endBefore(item.nama)
  //       .limitToLast(5)
  //       .onSnapshot(function (querySnapshot) {
  //         const items = [];
  //         querySnapshot.forEach(function (doc) {
  //           items.push({ key: doc.id, ...doc.data() });
  //         });
  //         setList(items);
  //         setPage(page - 1);
  //       });
  //   };
  //   fetchPreviousData();
  // };

  if (data.length === 0) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="flex bg-gray-200 ">
      <Sidebar></Sidebar>
      <div className="flex flex-auto flex-col">
        <div className="text-2xl font-semibold flex-1 h-screen">
          <div className="bg-cyan-600 h-12 flex justify-between p-2 shadow-lg">
            <div>
              {" "}
              <img
                src="/icon.svg"
                className="cursor-pointer duration-500 w-8 "
              ></img>{" "}
            </div>
            <Link href="/" className="text-base tracking-wide uppercase">
              <a>{process.env.namaAplikasi} </a>
            </Link>

            <div> Profil </div>
          </div>
          <div className="bg-white flex justify-center items-center p-7 m-4 border-2  border-trueGray-400 shadow-lg rounded h-konten">
            <div className="container mx-auto px-4 sm:px-8">
              <div className="">
                <div>
                  <h2 className="text-2xl font-semibold leading-tight">
                    Data Siswa
                  </h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-2 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Nama
                          </th>
                          <th className="px-5 py-3 border-2 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Sekolah
                          </th>
                          <th className="px-5 py-3 border-2 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Nilai
                          </th>
                          <th className="px-5 py-3 border-2 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Tanggal
                          </th>
                        </tr>
                      </thead>
                      <tbody id="tbody1">
                        {data.map((datas) => (
                          <tr id="trow" key={datas.key}>
                            <td className="px-5 py-5 border border-gray-400 bg-white text-sm w-2/5">
                              <div className="flex items-center">
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {datas.nama}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border border-gray-400 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap text-center">
                                {datas.sekolah}
                              </p>
                            </td>
                            <td className="px-5 py-5 border border-gray-400 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap text-center">
                                {datas.skor}
                              </p>
                            </td>
                            <td className="px-5 py-5 border border-gray-400 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap text-center">
                                {moment(datas.tanggal).format(
                                  "dddd, DD-MM-YYYY (h:mm:ss)"
                                )}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {page === 1 ? (
                      ""
                    ) : (
                      <button onClick={() => showPrevious({ item: data[0] })}>
                        Sebelumnya
                      </button>
                    )}
                    {data.length < 5 ? (
                      ""
                    ) : (
                      <button
                        onClick={() =>
                          showNext({ item: data[data.length - 1] })
                        }
                      >
                        Selanjutnya
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="flex text-base">
            <div className=" absolute bottom-0 mb-2 ml-4">
              <button onClick={() => showPrevious(first)}>Sebelumnya</button>{" "}
            </div>
            <div className=" absolute bottom-0 right-0 mr-8 mb-2">
              <button onClick={() => showNext(last)}>Selanjutnya</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
