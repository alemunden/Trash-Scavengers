import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
      <main>
        <div>
            <h1>Quiz App</h1>
            <Link href='/quiz'>
                <button>Start Quiz</button>
            </Link>
        </div>
      </main>
  );
}
