import * as React from "react";
import styles from "../styles/styles.scss";
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Main/>
      <Footer/>
    </main>
  )
}

export default IndexPage
