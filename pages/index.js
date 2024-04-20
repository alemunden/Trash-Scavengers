import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
      <main>
        <div class="dateIndex">
          <h2>Thursday Apr 18</h2>
        </div>
        <div class="logInAndSettings">
          <Image src={'/MiaCards/LogIn.png'} width={100} height={38}/>
          <Image src={'/MiaCards/SettingsIcon.png'} width={40} height={38}/>
        </div>
        <div class="searchBar">
          <Image src={'/MiaCards/SearchBar.png'} width={422} height={80}/>
        </div>
        <div class="homePageCard">
          <Image src={'/MiaCards/Asset 1.png'} width={410} height={630}/>
        </div>
        <div class="navBarIndex">
          <NavBar/>  
        </div>  
      </main>
  );
}
