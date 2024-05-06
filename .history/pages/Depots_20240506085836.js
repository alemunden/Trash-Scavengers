import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'
import NavBar from "@/components/NavBar";

export default function Depots() {
    return(
        <>
        <main>
            <div class="logInSettingsDepots">
                <Image src={'/MiaCards/LogIn.png'} width={100} height={38}/>
                <Image src={'/MiaCards/SettingsIcon.png'} width={40} height={38}/>
            </div>
            <div class="searchBarDepots">
                <Image src={'/MiaCards/SearchBar.png'} width={422} height={80}/>
            </div>
            <div class="depotsCard">
                <Image src={'/MiaCards/Asset 2.png'} width={422} height={630}/>
                <div class="becDepotPage">
                    <h4 tabindex='1'>Burnaby Eco Center</h4>
                </div>    
            </div>
        </main>
        <NavBar/>
        </>
    )
}