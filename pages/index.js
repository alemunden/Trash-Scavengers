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
        <button><a href='/Quiz'>Quiz</a></button>
      </main>
  );
}
