
import styles from "./page.module.css";

import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Resources from "@/app/components/Resources";
import FeaturedSection from "@/app/components/FeaturedSection";



export default async function Home() {
  
   
  return (
    <>
    <Navbar />
    <Hero />
    {/* <FeaturedSection /> */}
    <Resources />
    </>
  );
}


