import Head from "next/head";
import { Hero, Layout, PastWinner } from "../components";

const Winners = () => {
  return (
    <>
      <Head>
        <title>BPMI | Past Winners</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={`text-darkText`}>
          <Hero img={"stairs"}>
            <div
              className="
        pt-20
      min-h-[490px] lg:h-[520px]
      text-white  flex  items-center justify-end  z-20 px-4"
            >
              <h1 className="lg:text-5xl text-3xl mb-2 leading-[40px] sm:leading-[60px] text-center sm:text-start">
                Winners
              </h1>
            </div>
          </Hero>
          <PastWinner />
        </main>
      </Layout>
    </>
  );
};

export default Winners;
