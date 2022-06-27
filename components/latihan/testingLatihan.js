import DashboardLatihan from "../dashboardLatihan";

export default function TestingLatihan() {
  return (
    <DashboardLatihan>
      <div className="flex flex-row relative">
        {/* navigasi butir soal */}
        <div className="flex flex-col border border-trueGray-500 w-96 mx-5 my-36 shadow-lg">
          <div className="flex flex-row border-b border-trueGray-500">
            <div className="grid grid-rows-4 grid-flow-col gap-4 p-5 border-r border-trueGray-500">
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                1
              </option>
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                2
              </option>
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                3
              </option>
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                4
              </option>
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                5
              </option>
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                6
              </option>
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                7
              </option>
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                8
              </option>
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                9
              </option>
              <option className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 hover:bg-cyan-500 transition duration-150 rounded-full font-bold hover:text-green-50 cursor-pointer">
                10
              </option>
            </div>

            <div className="flex mx-5 items-center">Timerssssssssssssssss</div>
          </div>
          <div className="flex justify-center items-center p-4">
            <button className="bg-cyan-500 text-white font-semibold shadow-md py-2 px-4 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500">
              Selesai
            </button>
          </div>
        </div>
        {/* konten */}
        <div className="flex flex-col justify-center p-3">
          <div> Konten</div>
        </div>
      </div>
    </DashboardLatihan>
  );
}
