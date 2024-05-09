import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Info.module.css";
import Link from 'next/link'
import NavBar from "@/components/NavBar";
import VerticalChart from "@/components/VerticalChart";

export default function Info() {
    return(
        <>
        <main>
        <div class="logInSettingsInfo">
        <Image src={'/MiaCards/LogIn.png'} width={100} height={38} tabIndex="6"/>
        <Image src={'/MiaCards/SettingsIcon.png'} width={40} height={38} tabIndex="7"/>
       </div>
       <div class="searchBarInfo">
          <Image src={'/MiaCards/SearchBar.png'} width={422} height={80} tabIndex="8"/>
        </div>
        <button className={}>Read More</button>
        <div class="infoCard">
            <Image src={'/MiaCards/Asset 6.png'} width={422} height={1550}/>
        </div>
        <div className={styles.verticalChart}>
            <VerticalChart/>
        </div>
        </main>
        <NavBar tabIndex="1"/>
        </>
    )
}