import { useEffect, useState } from "react";

export default function MouseGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (

    <div
      className="hidden lg:block fixed pointer-events-none z-0"
      style={{
        left: position.x - 200,
        top: position.y - 200,
      }}
    >

      <div className="w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[130px]" />

    </div>

  );
}