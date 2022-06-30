import Layout from "../components/layout";
import Image from "next/image";
import TabInfoApp from "../components/tabInfoApp";

export default function Info() {
  return (
    <Layout>
      <section className="relative bg-trueGray-200">
        <div className="flex items-center justify-center mt-16 mb-16">
          <div className="flex flex-col bg-white shadow-lg p-6 rounded-lg w-4/5">
            <div className="flex justify-center">
              <Image src="/info.svg" width={64} height={64}></Image>
            </div>
            <TabInfoApp></TabInfoApp>
          </div>
        </div>
        
      </section>
    </Layout>
  );
}
