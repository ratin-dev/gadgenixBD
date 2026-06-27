import { Outlet } from "react-router-dom";

import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="bg-[#050816] text-white min-h-screen flex flex-col">

      {/* TOP BAR */}
      <TopBar />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-28">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}