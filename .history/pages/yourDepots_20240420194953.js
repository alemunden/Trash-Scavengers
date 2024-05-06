import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'
import NavBar from "@/components/NavBar";
import React from "react";

export default function yourDepots() {
    return(
        <>
        <main>
        <div class="logInSettingsYourDepots">
        <Image src={'/MiaCards/LogIn.png'} width={100} height={38}/>
        <Image src={'/MiaCards/SettingsIcon.png'} width={40} height={38}/>
       </div>
       <div class="searchBarYourDepots">
          <Image src={'/MiaCards/SearchBar.png'} width={422} height={80}/>
        </div>
        <div class="yourDepotsCard">
            <Image src={'/MiaCards/Asset 5.png'} width={415} height={630}/>
        </div>
        <div>
            <NavBar/>
        </div>
        </main>
        </>
    )
}