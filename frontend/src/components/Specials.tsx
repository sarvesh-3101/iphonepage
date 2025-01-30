import React, { useRef, useState } from "react";

type Special = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  style?: React.CSSProperties;
};

const specials: Special[] = [
  {
    href: "https://www.apple.com/shop/buy-iphone/carrier-offers",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-carriertrade-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1725466294938",
    imageAlt: "iPhone carrier trade-in offer",
    title: "CARRIER DEALS",
    description: "Get up to $830-$1000 in credit on a new iPhone with AT&T, Boost Mobile, T‑Mobile, or Verizon. Trade‑in may be required.",
    bgColor: "bg-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://www.apple.com/shop/education-pricing",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202406?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1732199422552",
    imageAlt: "MacBook Air 13-inch in Midnight and iPad Air, both with rounded corners and thin bezels",
    title: "EDUCATION",
    description: "Buy a new Mac or iPad with education savings.",
    bgColor: "bg-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://www.apple.com/shop/refurbished",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202408?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1721055057263",
    imageAlt: "Apple products including Apple Watch, Apple TV, iPad, iPhone, MacBook, AirPods, HomePod, Apple Pencil, and Mac mini",
    title: "CERTIFIED REFURBISHED",
    description: "Shop refurbished Apple products backed by a one‑year warranty.",
    bgColor: "bg-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://www.apple.com/retail/business",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-business-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724096343921",
    imageAlt: "Business",
    title: "Business",
    description: "From enterprise to small business, we’ll work with you.",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "http://www.apple.com/r/store/government",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259305816",
    imageAlt: "Government",
    title: "Government",
    description: "Special pricing is available for state, local, and federal agencies.",
    bgColor: "bg-white",
    textColor: "text-black",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "http://www.apple.com/shop/browse/home/veterans_military",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veteran-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723659938034",
    imageAlt: "Veterans and Military",
    title: "Veterans and Military",
    description: "Active and veteran members may be eligible for exclusive savings.",
    bgColor: "bg-white",
    textColor: "text-black",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
];

const Specials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });

      setTimeout(() => {
        setShowLeftArrow(newScrollLeft > 0);
        setShowRightArrow(newScrollLeft < scrollWidth - clientWidth);
      }, 300);
    }
  };

  return (
    <div className="mt-10 relative">
      <h2 className="text-4xl font-semibold">
        Special Savings. <span className="text-gray-500">iPhone carrier deals and exclusive savings for school, businesses, and more.</span>
      </h2>

      <div className="relative flex items-center">
        {showLeftArrow && (
          <button
            className="absolute left-0 bg-gray-700 text-white p-2 rounded-full z-10"
            onClick={() => handleScroll("left")}
          >
            ◀
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-6 mt-6 overflow-x-scroll no-scrollbar whitespace-nowrap"
          style={{ scrollBehavior: "smooth", maxWidth: "100%" }}
        >
          {specials.map((special, index) => (
            <a key={index} href={special.href} className="group">
              <div
                className={`aspect-video ${special.bgColor} rounded-2xl p-10 relative overflow-hidden`}
                style={{ width: "400px", height: "500px", ...special.style }}
              >
                <img
                  src={special.imageUrl}
                  alt={special.imageAlt}
                  className={`absolute inset-0 w-full h-full object-cover ${
                    special.textColor === "text-white" ? "opacity-75" : ""
                  } group-hover:scale-105 transition-transform duration-300`}
                />
                <div className="relative z-10">
                  <h3 className={`text-2xl font-medium ${special.textColor || "text-gray-900"}`}>
                    {special.title}
                  </h3>
                  <p
                    className={`mt-2 ${
                      special.textColor === "text-white" ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    {special.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="absolute right-0 bg-gray-700 text-white p-2 rounded-full z-10"
            onClick={() => handleScroll("right")}
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
};

export default Specials;
