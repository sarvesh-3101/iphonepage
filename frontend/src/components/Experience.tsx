import React, { useRef, useState } from "react";

type Experience = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
};

const experiences: Experience[] = [
  {
    href: "https://www.apple.com/apple-intelligence",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-apple-intelligence-202410_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729187913412",
    imageAlt: "Apple Intelligence banner with highlights for writing, focus, and communication features",
    title: "APPLE INTELLIGENCE",
    description: "New features for writing, focus, communication, and more.",
    bgColor: "bg-white"
  },
  {
    href: "https://tv.apple.com/us/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-tv-services-202501?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1733945929334",
    imageAlt: "Apple TV+ promotional banner",
    title: "APPLE TV+",
    description: "Get 3 months of Apple TV+ free when you buy an Apple device.",
    bgColor: "bg-white"
  },
  {
    href: "https://www.apple.com/apple-one",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375546000",
    imageAlt: "Apple Services - Apple Music, TV+, Arcade, News+, Fitness+, iCloud+",
    title: "Six Apple services. One easy subscription.",
    description: "",
    bgColor: "bg-white"
  },
  {
    href: "https://www.apple.com/support/products/?cid=aaa-ols-home-acpp-step-store-0922",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applecare-202409?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1723747544269",
    imageAlt: "AppleCare+",
    title: "We’ve got you covered.",
    description: "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    href: "https://www.apple.com/apple-pay",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202409_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1725374577628",
    imageAlt: "Apple Pay",
    title: "Discover all the ways to use Apple Pay.",
    description: "",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

const Experience: React.FC = () => {
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
        The Apple experience. <span className="text-gray-500">Do even more with Apple products and services.</span>
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
          {experiences.map((experience, index) => (
            <a key={index} href={experience.href} className="group">
              <div
                className={`aspect-video ${experience.bgColor} rounded-2xl p-10 relative overflow-hidden`}
                style={{
                  width: "450px",
                  height: "500px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", 
                }}
              >
                <img
                  src={experience.imageUrl}
                  alt={experience.imageAlt}
                  className={`absolute inset-0 w-full h-full object-cover ${
                    experience.textColor === "text-white" ? "opacity-75" : ""
                  } group-hover:scale-105 transition-transform duration-300`}
                />
                <div className="relative z-10">
                  <h3 className={`text-2xl font-medium ${experience.textColor || "text-gray-900"}`}>{experience.title}</h3>
                  <p className={`mt-2 ${experience.textColor === "text-white" ? "text-gray-200" : "text-gray-600"}`}>
                    {experience.description}
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

export default Experience;
