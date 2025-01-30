import React, { useState } from "react";
import { Search, ShoppingBag } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  sections?: StoreSection[];
}

interface StoreSection {
  title: string;
  items: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { 
    label: "Store", 
    href: "/store",

  },

  
  { label: "Mac", href: "/mac" },
  { label: "iPad", href: "/ipad" },
  { label: "iPhone", href: "/iphone" },
  { label: "Watch", href: "/watch" },
  { label: "Vision", href: "/vision" },
  { label: "AirPods", href: "/airpods" },
  { label: "TV & Home", href: "/tv-home" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Accessories", href: "/accessories" },
  { label: "Support", href: "/support" },
];

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 z-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between h-12 px-4">
            <a href="/" className="shrink-0">
              <svg
                className="w-4 h-4 text-gray-800"
                viewBox="0 0 15 18"
                fill="currentColor"
              >
                <path d="M12.9656 6.17055C12.5456 6.49055 11.9556 6.92055 11.2056 6.89055C11.1156 6.23055 11.4056 5.52055 11.7856 5.07055C12.1656 4.62055 12.8356 4.21055 13.4656 4.19055C13.5356 4.89055 13.2956 5.57055 12.9656 6.17055ZM13.4456 7.01055C12.3456 6.94055 11.4156 7.56055 10.8856 7.56055C10.3556 7.56055 9.53563 7.05055 8.65563 7.07055C7.47563 7.09055 6.39563 7.78055 5.81563 8.86055C4.60563 11.0205 5.51563 14.1905 6.68563 15.9305C7.25563 16.7905 7.93563 17.7405 8.85563 17.7105C9.74563 17.6805 10.0656 17.1505 11.1356 17.1505C12.2056 17.1505 12.4856 17.7105 13.4156 17.6905C14.3756 17.6705 14.9656 16.8205 15.5356 15.9605C16.1656 14.9905 16.4256 14.0505 16.4456 13.9805C16.4256 13.9605 14.4156 13.1805 14.3956 10.7805C14.3856 8.76055 16.0156 7.81055 16.0756 7.77055C15.2456 6.54055 13.9656 6.41055 13.4456 7.01055Z" />
              </svg>
            </a>

            <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    className={`text-sm text-gray-700 hover:text-gray-900 py-3 ${
                      hoveredItem === item.href ? "text-gray-900" : ""
                    }`}
                  >
                    {item.label}
                  </a>

                  {item.sections && hoveredItem === item.href && (
                    <div
                      className="absolute left-0 pt-3 w-200 z-50"
                      style={{ transform: "translateX(-50%)", left: "50%" }}
                    >
                      <div className="bg-white shadow-lg rounded-lg mx-auto max-w-7xl">
                        <div className="p-12">
                          <div className="grid grid-cols-3 gap-5">
                            {item.sections.map((section) => (
                              <div
                                key={section.title}
                                className="flex flex-col"
                              >
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                                  {section.title}
                                </h3>
                                <ul className="space-y-4">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.href}>
                                      <a
                                        href={subItem.href}
                                        className="text-xl text-gray-900 hover:text-blue-600 font-medium block leading-tight"
                                      >
                                        {subItem.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="text-gray-700 hover:text-gray-900"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                className="text-gray-700 hover:text-gray-900"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
