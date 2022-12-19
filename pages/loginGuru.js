import React from "react";

import DataDiriGuru from "../components/guru/login/dataDiriGuru";
import { useState, useEffect } from "react";

export default function loginGuru() {
  const [dataGuru, setDataGuru] = useState([]);
  const userState = () => {
    const data = localStorage.getItem("userguru");
    const userobject = data !== null ? JSON.parse(data) : null;
    setDataGuru(userobject);
  };

  useEffect(() => {
    userState();
  }, []);

  return (
    <div>
      {dataGuru !== null ? (
        <div>tes</div>
      ) : (
        <DataDiriGuru
          signin={(dataGuru) => setDataGuru(dataGuru)}
        ></DataDiriGuru>
      )}
    </div>
  );
}
