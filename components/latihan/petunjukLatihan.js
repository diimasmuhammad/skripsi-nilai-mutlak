export default function PetunjukLatihan() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center">
          <a className="mt-2 text-white bg-indigo-300 w-max p-2 rounded-lg font-semibold text-base">
            Petunjuk Latihan
          </a>
          <div className="border border-trueGray-300 w-full h-96 overflow-auto my-4 p-4 shadow-lg text-base rounded-3xl">
            <p>
              Bacalah petunjuk pengerjaan berikut sebelum mulai mengerjakan :{" "}
            </p>
            <ol className="p-3 list-decimal list-inside">
              <li className="py-3">Kerjakan soal dengan teliti dan benar</li>
              <li className="py-3">Masukkan data diri siswa beserta token</li>
              <li className="py-3">
                Pilih opsi jawaban antara A, B, C, D dan E
              </li>
              <li className="py-3">Pilih dengan mengklik opsi jawaban</li>
              <li className="py-3">
                Pastikan mengklik tombol selesai setelah selesai menjawab
              </li>
              <li className="py-3">Berdoa sebelum mengerjakan</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
