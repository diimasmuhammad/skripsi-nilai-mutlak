import Layout from "../components/layout";
import Image from "next/image";
import TabKIKD from "../components/tabKIKD";

export default function KompetensiDasar() {
  return (
    <Layout>
      <section className="relative bg-trueGray-200">
        <div className="flex items-center justify-center my-4">
          <div className="flex flex-col bg-white shadow-lg p-6 rounded-lg w-4/5 h-kontenSmall ">
            <div className="flex justify-center">
              <Image src="/education.svg" width={40} height={40}></Image>
            </div>
            <TabKIKD></TabKIKD>
          </div>
        </div>
      </section>
    </Layout>
  );
}
