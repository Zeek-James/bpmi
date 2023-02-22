import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import BarChart from "./BarChart";
import Button from "./Button";
import styles from "./style";

const OurResponse = () => {
  return (
    <>
      <div
        className={`flex ${styles.paddingY} ${styles.paddingX} justify-between `}
      >
        <h3 className={`${styles.heading3} text-primary`}>15 Responses</h3>
        <Link href="/banking-and-finance" passHref={true}>
          <Button text="Back" styles="bg-primary text-white" />
        </Link>
      </div>
      <div className={`${styles.paddingY} ${styles.paddingX}`}>
        <BarChart title="How satisfied were you with the customer service experience for this company?" />
        <BarChart title="How satisfied were you with the compaany’s service delivery?" />
        <BarChart title="How strongly do you agree with the following statement: the company’s process is simple and painless." />
        <BarChart title="How easy is the transaction process with the company?" />
        <BarChart title="How satisfied are you with the services of the company?" />
        <BarChart title="How likely would you be to recommend to a friend or a colleague?" />
        <BarChart title="To what extent does the company services meet your need?" />
        <BarChart title="How satisfied were you with using the website of this company?" />
        <BarChart title="How satisfied were you with the company’s sales process?" />
        <BarChart title="How satisfied were you with the company’s service delivery?" />
      </div>
    </>
  );
};

export default OurResponse;
