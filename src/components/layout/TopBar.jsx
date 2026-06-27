import { Truck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-7 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
    >
      <Container className="h-full flex items-center justify-center gap-3 text-sm font-medium">
        <Truck size={16} />
        <span>Free Delivery on orders above ৳3000</span>
        <Sparkles size={16} />
      </Container>
    </motion.div>
  );
}