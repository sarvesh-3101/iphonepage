
import React from "react";

interface ProductProps {
  link: string;
  imgSrc: string;
  alt: string;
  title: string;
}

const Product: React.FC<ProductProps> = ({ link, imgSrc, alt, title }) => {
  return (
    <a href={link} className="group flex-none w-40">
      <div className="aspect-square bg-gray-0 rounded-xl p-4 flex items-center justify-center">
        <img
          src={imgSrc}
          alt={alt}
          className="w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="mt-0 text-sm font-medium text-center">{title}</h3>
    </a>
  );
};

export default Product;