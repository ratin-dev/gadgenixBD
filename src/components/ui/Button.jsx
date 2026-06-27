import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white",

    secondary:
      "glass text-white border border-white/10",

    white:
      "bg-white text-black hover:bg-neutral-200",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: .96,
      }}
      className={`
      px-7
      py-4
      rounded-full
      font-semibold
      transition-all
      duration-300
      ${styles[variant]}
      ${className}
      `}
    >
      {children}
    </motion.button>
  );
}