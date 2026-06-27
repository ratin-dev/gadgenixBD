import { useEffect, useState } from "react";
import { Menu, ShoppingCart, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-7 left-0 right-0 z-40 transition-all duration-300
        ${
          scrolled
            ? "bg-[#050816]/80 backdrop-blur-2xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <Container className="h-18 flex items-center justify-between">

        <h1 className="text-3xl font-black">
          <Link
  to="/"
  className="flex items-center gap-3"
>
  <img
    src="/gadgenixFAV.png"
    alt="Gadgenix BD"
    className="h-10 w-10 object-contain"
  />

  <span className="hidden lg:block text-3xl font-black">
    Gadgenix
    <span className="text-blue-500">BD</span>
  </span>
</Link>
        </h1>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex gap-10 text-gray-300">

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-5">

          <Search className="cursor-pointer hover:text-blue-500" />
          <User className="cursor-pointer hover:text-blue-500" />
          <ShoppingCart className="cursor-pointer hover:text-blue-500" />

          <div className="hidden lg:block">
            <Button>Shop Now</Button>
          </div>

          <Menu className="lg:hidden" />
        </div>

      </Container>
    </header>
  );
}