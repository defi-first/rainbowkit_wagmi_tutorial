import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const ClientHome = dynamic(() => import("./components/ClientHome"));

  return (
    <div className={styles.container} suppressHydrationWarning>
      <ClientHome />
    </div>
  );
};

export default Home;
