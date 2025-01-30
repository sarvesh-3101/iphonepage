import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/NavigationBar";
import Product from "../components/Product";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer"; 


import lap from "../assets/lap.jpg";
import phone from "../assets/phone.jpg";
import tab from "../assets/tab.jpg";
import watch from "../assets/watch.jpg";
import airpods from "../assets/airpods.jpg";
import pbank from "../assets/pbank.jpg";
import tv from "../assets/tv.jpg";
import speaker from "../assets/speaker.jpg";
import airtag from "../assets/airtag.jpg";
import gift from "../assets/applegiftcard.jpg";
import Specials from "../components/Specials";
import Experience from "../components/Experience";
import Accessories from "../components/Accessories";
import AppleStore from "../components/Applestore";
import HelpCare from "../components/Helpcare";
import NewItems from "../components/Newitems";

interface ProductData {
  link: string;
  imgSrc: string;
  alt: string;
  title: string;
}

interface LatestProduct {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  style?: React.CSSProperties; 
}

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const products: ProductData[] = [
    { link: "/mac", imgSrc: lap, alt: "Mac", title: "Mac" },
    { link: "/iphone", imgSrc: phone, alt: "iPhone", title: "iPhone" },
    { link: "/ipad", imgSrc: tab, alt: "iPad", title: "iPad" },
    { link: "/watch", imgSrc: watch, alt: "Apple Watch", title: "Apple Watch" },
    { link: "/airpods", imgSrc: airpods, alt: "AirPods", title: "AirPods" },
    { link: "/airtag", imgSrc: airtag, alt: "Airtag", title: "Airtag" },
    { link: "/apple-tv-4k", imgSrc: tv, alt: "Apple Tv 4k", title: "Apple Tv 4k" },
    { link: "/homepod", imgSrc: speaker, alt: "HomePod", title: "HomePod" },
    { link: "/accessories", imgSrc: pbank, alt: "Accessories", title: "Accessories" },
    { link: "/apple-gift-card", imgSrc: gift, alt: "Apple Gift Card", title: "Apple Gift Card" }
  ];

 
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => scrollElement.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white px-5" style={{ }}>
      <Navbar />

      <main className="pt-12">
        <div className="max-w-[1400px] mx-auto">
          <HeroSection />

          <div className="relative w-full mt-16">
            {showLeftArrow && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 px-8 py-4 scrollbar-hide scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch"
              }}
            >
              {products.map((product, index) => (
                <Product
                  key={index}
                  link={product.link}
                  imgSrc={product.imgSrc}
                  alt={product.alt}
                  title={product.title}
                />
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-20 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-2 h-2" />
              </button>
            )}
          </div>



        </div>
      </main>
      <NewItems />
      <HelpCare />
      <AppleStore />
      <Accessories />
      <Experience />
      <Specials />
      <Footer /> 
    </div>
  );
};

export default Home;

