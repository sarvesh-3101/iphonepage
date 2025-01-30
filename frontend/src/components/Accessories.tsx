import React, { useRef, useState } from "react";

type Accessories = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  style?: React.CSSProperties; 
};

const accessories: Accessories[] = [
  {
    href: "https://www.apple.com/shop/accessories/all/new-arrivals",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-accessories-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723822259651",
    imageAlt: "Apple Accessories",
    title: "In with the new.",
    description:
      "Your favorite accessories. Now available in bold new colors and with innovative new features.",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }, 
  },
  {
    href: "https://www.apple.com/shop/product/MA7E4ZM/A/iphone-16-pro-clear-case-with-magsafe",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723930332796",
    imageAlt: "iPhone 16 Pro Clear Case with MagSafe",
    title: "iPhone 16 Pro Clear Case with MagSafe",
    description: "$49.00",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://www.apple.com/shop/product/MDF54AM/A/46mm-black-unity-sport-loop-unity-rhythm",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MDF54?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1734628448223",
    imageAlt: "Black Unity Sport Loop Unity Rhythm",
    title: "46mm Black Unity Sport Loop - Unity Rhythm",
    description: "$49.00",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://www.apple.com/shop/product/MXKD3AM/A/49mm-natural-titanium-milanese-loop-medium",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXKC3ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723919332235",
    imageAlt: "Natural Titanium Milanese Loop with polished mesh and magnetic hook closure",
    title: "49mm Natural Titanium Milanese Loop - Medium",
    description: "$199.00",
    bgColor: "bg-white",
    textColor: "text-black",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://www.apple.com/shop/product/MYY63ZM/A/iphone-16-silicone-case-with-magsafe-ultramarine",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYY63?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723236736369",
    imageAlt: "iPhone 16 Silicone Case with MagSafe in Ultramarine, embedded Apple logo in center, attached to iPhone 16 Ultramarine finish, seen through camera cut out.",
    title: "iPhone 16 Silicone Case with MagSafe – Ultramarine",
    description: "$49.00",
    bgColor: "bg-white",
    textColor: "text-black",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://www.apple.com/shop/product/MA6X4ZM/A/iphone-finewoven-wallet-with-magsafe-deep-blue",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA6X4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723573541193",
    imageAlt: "iPhone FineWoven Wallet with MagSafe in Deep Blue, back exterior, card slot at top, embedded Apple logo in the center, stitching along the edges.",
    title: "iPhone FineWoven Wallet with MagSafe – Deep Blue",
    description: "$59.00",
    bgColor: "bg-white",
    textColor: "text-black",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
];

const Accessories: React.FC = () => {
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
        Accessories. <span className="text-gray-500">Essentials that pair perfectly with your favorite devices.</span>
      </h2>

      <div className="relative flex items-center">
        {showLeftArrow && (
          <button
            className="absolute left-0 bg-gray-700 text-white p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
          >
            ◀
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-6 mt-6 overflow-x-scroll no-scrollbar whitespace-nowrap"
          style={{ scrollBehavior: "smooth", maxWidth: "100%" }}
          aria-live="polite"
        >
          {accessories.map((product, index) => (
            <a
              key={index}
              href={product.href}
              className="group"
              aria-label={product.title}
            >
              <div
                className={`aspect-video ${product.bgColor} rounded-2xl p-10 relative overflow-hidden`}
                style={{ width: "400px", height: "500px", ...product.style }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className={`absolute inset-0 w-full h-full object-cover ${product.textColor === "text-white" ? "opacity-75" : ""} group-hover:scale-105 transition-transform duration-300`}
                />
                <div className="relative z-10">
                  <h3 className={`text-2xl font-medium ${product.textColor || "text-gray-900"}`}>
                    {product.title}
                  </h3>
                  <p className={`mt-2 ${product.textColor === "text-white" ? "text-gray-200" : "text-gray-600"}`}>
                    {product.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="absolute right-0 bg-gray-700 text-white p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
};

export default Accessories;
