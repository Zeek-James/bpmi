import Head from "next/head";
import { Button, Herofn, VoteGuide } from "../components";
import { Radio } from "../components/become-a-nominee";
import styles from "../components/style";
import { Questionnaire } from "../components/votePoll";
import { industries } from "../constants";
import { awardCategories, nominees } from "../constants/vote";

export default function VotingPoll() {
  return (
    <>
      <Head>
        <title>BPMI | Voting Poll</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`text-darkText`}>
        <Herofn>
          <div
            className="
        pt-20
      min-h-[490px] lg:h-[520px]
      text-white  flex  items-center justify-end  z-20 px-4"
          >
            <h1 className="lg:text-5xl text-3xl mb-2 leading-[40px] sm:leading-[60px] text-center sm:text-start">
              Voting Poll
            </h1>
          </div>
        </Herofn>
        <VoteGuide />
        <section
          className={`${styles.flexCenter} ${styles.paddingX}  flex-col my-20 border-t-2 pt-6 `}
        >
          <h2 className={`${styles.heading2} text-primary text-center`}>
            Voting Poll
          </h2>
          <form className="w-full  flex flex-col ">
            <div>
              <h3
                className={"text-darkText mb-3 md:mb-6 text-2xl font-semibold"}
              >
                Choose award category:
              </h3>
              <div className=" w-full grid  gap-2  list">
                {awardCategories.map(({ text }) => (
                  <Radio name={text} id={text} context={text} />
                ))}
              </div>
            </div>
            <div>
              <h3
                className={"text-darkText mb-3 md:mb-6 text-2xl font-semibold"}
              >
                Choose Nominee’s industry sector:
              </h3>
              <div className=" w-full grid  gap-2  list">
                {industries.map(({ text, name }) => (
                  <Radio name={name} id={text} context={text} />
                ))}
              </div>
            </div>
            <div className="my-3">
              <h3
                className={"text-darkText mb-3 md:mb-6 text-2xl font-semibold"}
              >
                Choose Nominee:
              </h3>
              <div className=" w-full grid  gap-2  list">
                {nominees.map(({ text }) => (
                  <Radio name={text} id={text} context={text} />
                ))}
              </div>
            </div>
            <div className="my-3 ">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label text-darkText mb-3 md:mb-6 text-2xl font-semibold"
              >
                Tell us why you chose this nominee
              </label>
              <textarea
                className="
        form-control
        block
        w-full
mt-3
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
min-h-[200px]
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
      "
                id="exampleFormControlTextarea1"
                placeholder="Your message"
              ></textarea>
              <p className=" text-xs my-2">
                Please make sure the you enter not more than 500 words in this
                field.
              </p>
            </div>
            <div className="border  w-full mb-3 md:my-10" />
            <div className="flex justify-between">
              <Button
                styles="border border-primary text-primary font-semibold 
                  text-xl 
                  px-20"
                text="Reset"
                onClick={() => {
                  ("");
                }}
              />
              <Button
                styles="bg-primary text-white font-semibold 
                  text-xl px-20"
                text="Next"
                onClick={() => {
                  ("");
                }}
              />
            </div>
            {/* <Questionnaire /> */}
          </form>
        </section>
      </main>
    </>
  );
}
