"use client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductList from "./components/OfferList";
import { useRef } from "react";

export default function Home() {
  const offersRef = useRef<HTMLDivElement | null>(null);
  const scrollToOffers = () => {
    if (offersRef.current) {
      offersRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Navbar />
      <Header scrollToOffers={scrollToOffers}/>
      <ProductList ref={offersRef}/>
    </>
  );
}
