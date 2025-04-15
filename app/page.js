'use client';

import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>
        Welcome to the Instrument Inventory App <FontAwesomeIcon icon={faGuitar} className={styles.icon} />
      </h1>
      <p className={styles.subheading}>
        Manage, view, and track your musical instruments with ease.
      </p>

      <div className={styles.buttonGroup}>
        <Link href="/collection">
          <button className={styles.button}>View Collection</button>
        </Link>
        <Link href="/admin">
          <button className={styles.button}>Go to Admin</button>
        </Link>
      </div>
    </main>
  );
}
