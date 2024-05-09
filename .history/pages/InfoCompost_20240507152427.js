import styles from "@/styles/InfoCompost.module.css";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function InfoCompost() {
    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
        <div className={styles.main}>
            <div className={styles.title}>
                <Image src={'/backarrowicon.webp'} height={36.16} width={40.96}/>
                <h1>Compost / Green Bin</h1>
            </div>
            <div className={styles.textContainer}>
                    <p className={styles.description}>All compost products belong in the compost, better known as the "green bin" in British Columbia's recycling collection program. Using your green bin to dispose of compost does a huge part in helping the environment by reducing greenhouse gas emissions and making sure that your food waste is going back into the environment.</p>
                    <div>
                        <h2 className={styles.listTitle}>Items that go into the green bin:</h2>
                        <dl>
                            <dt className={styles.listSection}>Food Waste</dt>
                                <dd className={styles.listItem}>Bread, pasta, grains</dd>
                                <dd className={styles.listItem}>Dairy products</dd>
                                <dd className={styles.listItem}>Fruits and vegetables</dd>
                                <dd className={styles.listItem}>Plate scrapings or leftovers</dd>
                            <dt className={styles.listSection}>Food-Soiled Paper</dt>
                                <dd className={styles.listItem}>Empty cereal boxes</dd>
                                <dd className={styles.listItem}>Paper plates and dishes</dd>
                                <dd className={styles.listItem}>Pizza boxes with food residue</dd>
                                <dd className={styles.listItem}>Paper napkins</dd>
                        </dl>
                    </div>
            </div>
        </div>
        <NavBar/>
        </>
    )
}