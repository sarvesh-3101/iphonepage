import React from "react";

type AppleStore = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
};

const applestores: AppleStore[] = [
  {
    href: "/shop/browse/overlay/store/delivery",
    imageUrl: "../assets/image.png",
    imageAlt: "Apple Delivery",
    title: "Enjoy two-hour delivery",
    description: "Get two-hour delivery from an Apple Store, free delivery, or easy pickup.",
    bgColor: "bg-apple",
  },
  {
    href: "/shop/browse/overlay/store/tradein",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-trade-in-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821",
    imageAlt: "Trade In Your Device",
    title: "Trade in your current device",
    description: "Get credit toward a new one.",
    bgColor: "bg-dodger-blue",
  },
  {
    href: "/shop/browse/overlay/store/financing",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-financing-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821",
    imageAlt: "Apple Financing",
    title: "Pay in full or pay over time",
    description: "Your choice.",
    bgColor: "bg-apple",
  },
];

const AppleStore: React.FC = () => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-semibold">
        The Apple Store difference. <span className="text-gray-500">Even more reasons to shop with us.</span>
      </h2>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {applestores.map((product, index) => (
          <a key={index} href={product.href} className="group">
            <div
              className={`aspect-video ${product.bgColor} rounded-2xl p-10 relative overflow-hidden`}
              style={{ width: "400px", height: "200px" }}
            >
              <img
                src={product.imageUrl}
                alt={product.imageAlt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-medium text-gray-900">{product.title}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppleStore;
