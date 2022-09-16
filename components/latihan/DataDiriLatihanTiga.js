import { Alert, Stack } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { db } from "../../firebase/initFirebase";
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
  doc,
  updateDoc,
  where,
} from "firebase/firestore";

const DataDiriLatihanTiga = (props) => {
  const [nama, setNama] = useState("");
  const [asalSekolah, setAsalSekolah] = useState(null);
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const koleksiToken = collection(db, "token");

    const q = query(koleksiToken, where("id", "==", "3"));

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

  const loginLatihan = (e) => {
    e.preventDefault();
    data.map((action) => {
      const tokenLatihan = action.token;

      if (nama === "") {
        setError("Masukkan Data dengan Benar dan Lengkap !");
      } else if (asalSekolah === null) {
        setError("Masukkan Data dengan Benar dan Lengkap !");
      } else {
        if (token === tokenLatihan) {
          const pengguna = {
            namaSiswa: nama,
            sekolah: asalSekolah,
          };
          localStorage.setItem("dataSiswa", JSON.stringify(pengguna));
          props.signin(pengguna);
        } else {
          setError("Token Latihan Salah !");
        }
      }
    });
  };

  return (
    <>
      <div className="flex flex-col sm:py-16 py-16">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Data Diri Siswa</h1>
                <br />
                {error ? (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert severity="error">{error}</Alert>
                  </Stack>
                ) : (
                  ""
                )}
              </div>
              <form onSubmit={loginLatihan}>
                <div className="divide-y divide-gray-200">
                  <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autocomplete="off"
                        id="nama"
                        name="nama"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Nama Siswa"
                        onChange={(e) => setNama(e.target.value)}
                        value={nama}
                      />
                      <label
                        for="nama"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Nama Siswa
                      </label>
                    </div>
                    <div className="relative">
                      <label className=" text-gray-600 py-2 text-sm font-medium">
                        Asal Sekolah
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                        name="asal-sekolah"
                        id="asal-sekolah"
                        onChange={(e) => setAsalSekolah(e.target.value)}
                      >
                        <option value={null} selected>
                          Pilih Sekolah
                        </option>
                        {/* <option value={asalSekolah}>SMA</option> */}
                        {/* <option value={asalSekolah}>SMK</option> */}
                        <option value={asalSekolah}>MA</option>
                        {/* <option value={asalSekolah}>MAK</option> */}
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        autocomplete="off"
                        id="token"
                        name="token"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Token"
                        onChange={(e) => setToken(e.target.value)}
                        value={token}
                      />
                      <label
                        for="token"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Token Latihan
                      </label>
                    </div>
                    <div className="relative text-base flex flex-col sm:flex-row gap-2">
                      <input
                        type="submit"
                        value="Masuk"
                        className="bg-cyan-500 text-white font-semibold shadow-md py-1 px-2 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500 cursor-pointer"
                      />
                      <Link href="/materiBabTiga">
                        <button className="bg-cyan-500 text-white font-semibold shadow-md py-1 px-2 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500 cursor-pointer">
                          Kembali Ke Materi
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataDiriLatihanTiga;
