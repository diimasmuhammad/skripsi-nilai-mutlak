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
  doc,
  updateDoc,
} from "firebase/firestore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function EditKkm() {
  const [data, setData] = useState([]);
  const [ID, setID] = useState(null);
  const [nama, setNama] = useState("");
  const [kkm, setKkm] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const koleksiKkm = collection(db, "kkmcoba");

    const q = query(koleksiKkm, orderBy("id", "asc"));

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

  const getID = (id, nama, kkm) => {
    setID(id);
    setNama(nama);
    setKkm(kkm);
    setIsUpdate(true);
  };
  const updateKkm = (id) => {
    let fieldEdit = doc(db, "kkmcoba", ID);
    updateDoc(fieldEdit, {
      nama: nama,
      kkm: Number(kkm),
    })
      .then(() => {
        alert("Data Berhasil Diubah");
        setNama("");
        setKkm(null);
        setIsUpdate(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <table className="min-w-full leading-normal" id="print-tabel">
        <thead>
          <tr>
            <th className="px-5 w-full py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
              Opsi
            </th>
            <th className="px-5 w-full py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
              KKM
            </th>
            <th className="px-5 w-full py-3 border-2 border-white bg-cyan-400 text-center text-xs font-semibold text-white uppercase tracking-wider">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((action) => (
            <tr>
              <td className="px-5 py-5 border border-cyan-400 bg-white text-sm">
                {action.nama}
              </td>

              <td className="px-5 py-5 border border-cyan-400 bg-white text-sm">
                {action.kkm}
              </td>
              <td className="px-5 py-5 border border-cyan-400 bg-white text-sm">
                <button
                  onClick={() => getID(action.id, action.nama, action.kkm)}
                  className=" bg-green-500 py-2 px-4 rounded-lg text-white hover:text-green-500 hover:ring hover:ring-green-500 hover:bg-white"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={isUpdate}
        onClose={updateKkm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className=" bg-gray-400 flex flex-col gap-2 items-center justify-center"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit KKM
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <input
            className="p-3"
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
          />
          <input
            className="p-3"
            type="number"
            placeholder="KKM"
            value={kkm}
            onChange={(event) => setKkm(event.target.value)}
          />

          <button
            className=" p-4 bg-cyan-500 text-white hover:bg-white hover:text-cyan-500 hover:ring hover:ring-cyan-500"
            onClick={updateKkm}
          >
            Update
          </button>
        </Box>
      </Modal>
    </div>
  );
}
