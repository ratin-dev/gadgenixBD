import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;

    window.open(
      `https://wa.me/8801XXXXXXXXX?text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="px-6 py-24 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black">Contact Us</h1>
        <p className="text-gray-400 mt-4">
          We are always here to help you
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* CONTACT INFO */}
        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <Phone className="text-blue-400" />
            <span>+8801797398145, +8801813138293, +8801560057694</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-blue-400" />
            <span>gadgenixbd@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-blue-400" />
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="bg-[#10131f] p-6 rounded-2xl border border-white/10 mt-8">
            <h2 className="text-xl font-bold mb-2">Support Hours</h2>
            <p className="text-gray-400">
              24/7 Online Support Available
            </p>
          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#10131f] p-8 rounded-3xl border border-white/10"
        >

          <h2 className="text-2xl font-bold mb-6">
            Send Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-xl bg-[#050816] border border-white/10"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-xl bg-[#050816] border border-white/10"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full mb-6 px-4 py-3 rounded-xl bg-[#050816] border border-white/10 h-32"
            required
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition py-3 rounded-xl font-semibold"
          >
            <Send size={18} />
            
            Send via WhatsApp
          </button>

        </form>

      </div>

    </div>
  );
}