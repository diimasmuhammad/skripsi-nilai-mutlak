import { useState } from "react";

export default function HalamanLima() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="text-base">
      <button
        className="bg-indigo-500 text-white m-4 p-2 border-none outline-none hover:bg-indigo-400"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button>

      {/* Modal Pop Up */}
      {showModal ? (
        <div className=" bg-black absolute inset-0 opacity-80 flex justify-center items-center z-10 ">
          <div className="modal-wrapper bg-white mx-auto my-20 w-2/3 text-sm rounded-lg shadow-xl">
            <div className="modal-header flex items-center justify-between bg-indigo-500 text-white p-4 text-base">
              <p>Testting</p>
              <span>
                <button
                  className="close-modal-btn cursor-pointer text-lg  hover:text-indigo-500 hover:rounded-lg"
                  onClick={() => setShowModal(!showModal)}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path>
                  </svg>
                </button>
              </span>
            </div>
            <div className="modal-content p-5">
              <div className="modal-body mb-4">
                <h4 className="text-rose-500 text-lg font-semibold">Modal</h4>
                <p className="bg-trueGray-200 p-4 my-4 text-justify">
                  lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn-confirm block ml-auto bg-cyan-500 text-white font-semibold shadow-md py-3 px-6 rounded-md hover:bg-white hover:text-cyan-500 hover:ring-2 hover:ring-cyan-500"
                  onClick={() => setShowModal(!showModal)}
                >
                  Mengerti
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
