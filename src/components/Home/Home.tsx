import { useEffect } from "react";

// import styles from "./styles/Home.module.css";

//import NameBanner from "./NameBanner";
//import SectionTwo from "./SectionTwo";
//import SectionThree from "./SectionThree";

export default function Home(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      
    </main>
  );
}