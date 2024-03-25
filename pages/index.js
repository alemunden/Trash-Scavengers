import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import QuestionOne from "./questions/QuestionOne";
import QuestionTwo from "./questions/QuestionTwo";
import QuestionThree from "./questions/QuestionThree";
import QuestionFour from "./questions/QuestionFour";

export default function Home() {
  return (
      <main>
        <p>What is the easiest to recycle?</p>
        <ol>
          <li>Aluminum Cans</li>
          <li>Plastic Bags</li>
          <li>Glass</li>
          <li>Paper</li>
        </ol>
        <QuestionOne/>
        <QuestionTwo/>
        <QuestionThree/>
        <QuestionFour/>
      </main>
  );
}
