import React, { useRef, useState } from "react";

interface LatestProduct {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  style?: React.CSSProperties;
}

const latestProducts: LatestProduct[] = [
  {
    href: "https://www.apple.com/shop/buy-iphone/iphone-16-pro",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-16-pro-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1726165763260",
    imageAlt: "iPhone 16 Pro",
    title: "iPhone 16 Pro",
    description: "Apple Intelligence. From $999 or $41.62/mo. for 24 months.",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "/shop/buy-watch/apple-watch",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724095131742",
    imageAlt: "Apple Watch Series 10",
    title: "Apple Watch Series 10",
    description: "Instant classic. From $399 or $33.25/mo. for 12 months.",
    bgColor: "bg-white",
    textColor: "text-black",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "/shop/product/MDF54AM/A/46mm-black-unity-sport-loop-unity-rhythm",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-bhm-202501?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1736792017949",
    imageAlt: "Apple Watch Black Unity Sport Loop",
    title: "Apple Watch Black Unity Sport Loop",
    description: "United by rhythm. $49",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "/shop/buy-ipad/ipad-mini",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-mini-202410?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1727814498187",
    imageAlt: "iPad mini",
    title: "iPad mini",
    description: "Apple Intelligence. From $499 or $41.58/mo. for 12 months.",
    bgColor: "bg-white",
    textColor: "text-black",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "/shop/buy-mac/macbook-pro",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-pro-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728342374593",
    imageAlt: "MacBook Pro",
    title: "MacBook Pro",
    description: "Apple Intelligence. From $1599 or $133.25/mo. for 12 months.",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://www.apple.com/shop/buy-iphone/iphone-16",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-16-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725661572513",
    imageAlt: "iPhone 16",
    title: "iPhone 16",
    description: "Apple Intelligence. From $799 or $33.29/mo. for 24 months.",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "/shop/buy-watch/apple-watch-ultra",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725655432734",
    imageAlt: "Apple Watch Ultra 2",
    title: "Apple Watch Ultra 2",
    description: "New finish. Never quit. From $799 or $66.58/mo. for 12 months.",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  
];

const NewItems: React.FC = () => {
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
    <div className="mt-24 relative">
      <h2 className="text-4xl font-semibold">
        The latest. <span className="text-gray-500">Take a look at what's new, right now.</span>
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
          {latestProducts.map((product, index) => (
            <a key={index} href={product.href} className="group">
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
                  <p
                    className={`mt-2 ${product.textColor === "text-white" ? "text-gray-200" : "text-gray-600"}`}
                  >
                    {product.description}
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

export default NewItems;
