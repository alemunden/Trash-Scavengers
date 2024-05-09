import styles from "@/styles/InfoRecycling.module.css";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function InfoRecycling() {
    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
        <div className={styles.main}>
            <div className={styles.title}>
                <Link href="/Info" className={styles.backButton}>
                    <Image src={'/backarrowicon.webp'} height={36.16} width={40.96}/>
                </Link>
                <h1>Recycling / Blue Bin</h1>
            </div>
            <div className={styles.textContainer}>
                    <p className={styles.description}>Most plastic products can be recycled using the Recycling bin or the "blue bin" in British Columbia. These products are able to be reused and remade into other plastic products that use recycled materials, reducing the amount of new plastic being used.</p>
                    <div>
                        <h2 className={styles.listTitle}>Items that go into the blue bin:</h2>
                        <dl>
                            <dt className={styles.listSection}>Plastic Containers</dt>
                                <dd className={styles.listItem}>Plastic bottles</dd>
                                <dd className={styles.listItem}>Jugs</dd>
                                <dd className={styles.listItem}>Microwaveable bowls and cups</dd>
                                <dd className={styles.listItem}>Plastic utensils</dd>
                            <dt className={styles.listSection}>Aluminum Containers</dt>
                                <dd className={styles.listItem}>Aluminum foil</dd>
                                <dd className={styles.listItem}>Empty aluminum spray containers</dd>
                                <dd className={styles.listItem}>Aluminum cans and lids used for food</dd>
                                <dd className={styles.listItem}>Paper napkins</dd>
                        </dl>
                    </div>
            </div>
        </div>
        <NavBar/>
        </>
    )
}