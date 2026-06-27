import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  User,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`
        fixed
        top-7
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <Container className="h-15 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src="/gadgenixFAV.png"
            alt="Gadgenix BD"
            className="w-10 h-10 object-contain"
          />

          <span className="hidden md:block text-3xl font-black">
            Gadgenix
            <span className="text-blue-500">BD</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-300">

          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold"
                  : "hover:text-blue-500 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">

          <Search className="hidden sm:block cursor-pointer hover:text-blue-500" />

          <User className="hidden sm:block cursor-pointer hover:text-blue-500" />

          <ShoppingCart className="cursor-pointer hover:text-blue-500" />

          <div className="hidden lg:block">
            <Link to="/shop">
            <Button>Shop Now</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden
              bg-[#050816]/95
              backdrop-blur-2xl
              border-t
              border-white/10
            "
          >

            <nav className="flex flex-col px-6 py-6">

              {links.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `py-4 border-b border-white/10 transition ${
                      isActive
                        ? "text-blue-500 font-semibold"
                        : "hover:text-blue-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

              ))}

                {/* <Link to="/shop">
            <Button className="mt-6 w-full">Shop Now</Button>
            </Link> */}

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}