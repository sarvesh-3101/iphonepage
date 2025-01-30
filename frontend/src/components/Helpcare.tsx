import React, { useRef, useState } from "react";

type HelpCare = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  style?: React.CSSProperties;
};

const helpcares: HelpCare[] = [
  {
    href: "/shop/browse/overlay/store/specialist",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821",
    imageAlt: "Apple Specialist",
    title: "Apple Specialist",
    description: "Shop one on one with a Specialist. Online or in a store.",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://contactretail.apple.com/?c=us&ag=SWSOV&pg=iphone_storemain&l=en&ap=com",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-video-202409?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1725047826258",
    imageAlt: "Shop with a Specialist over video",
    title: "Shop with a Specialist over video",
    description: "Choose your next device in a guided, one-way video session.",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "https://www.apple.com/today/calendar?sessions=skills&topics=daily-sessions&cid=rem-us-taa-store-fundm-cal",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145",
    imageAlt: "Today at Apple",
    title: "Today at Apple",
    description:
      "Join free sessions at your Apple Store. Learn about the latest features and how to go further with your Apple devices.",
    bgColor: "bg-black",
    textColor: "text-white",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "/shop/browse/overlay/store/personal",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-personal-setup-202408_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1727714996705",
    imageAlt: "Apple devices and features, iCloud, iPhone with Face ID and charging cable, Touch ID, power button, battery, MacBook, Apple Watch, messaging, iPad displaying drawing, shipping box",
    title: "ONE-ON-ONE GUIDANCE",
    description: "Get to know your new device with Personal Setup. Let us guide you through setup, data transfer, and the latest features in an online session.",
    bgColor: "bg-white",
    textColor: "text-black",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
  {
    href: "/shop/browse/overlay/store/genius",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375544000",
    imageAlt: "",
    title: "Get expert service and support at the Genius Bar.",
    description: "",
    bgColor: "bg-white",
    textColor: "text-black",
    style: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" },
  },
];

const HelpCare: React.FC = () => {
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
        Help is here. <span className="text-gray-500">Whenever and however you need it.</span>
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
          {helpcares.map((product, index) => (
            <a key={index} href={product.href} className="group">
              <div
                className={`aspect-video ${product.bgColor} rounded-2xl p-10 relative overflow-hidden`}
                style={{ width: "400px", height: "400px", ...product.style }}
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

export default HelpCare;
