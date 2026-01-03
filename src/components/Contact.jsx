import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(form.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    setSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          user_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
        setSending(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
        setSending(false);
      });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "gpverma869@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7610100823" },
    { icon: MapPin, label: "Location", value: "Indore, Madhya Pradesh, India" },
  ];

  const quickLinks = [
    { icon: Github, url: "https://github.com/gopalverma33" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/gopal-verma-955531339/" },
    { icon: Mail, url: "mailto:gpverma869@gmail.com" },
    { icon: MessageCircle, url: "https://wa.me/+917610100823" },
    { icon: Instagram, url: "https://www.instagram.com/gopalverrma/" },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20">
      <ToastContainer />

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-gray-900 dark:text-white text-right mb-12"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl dark:text-white mb-6">
              Let’s Connect & Collaborate 🤝
            </h3>

            <p className="text-gray-600 dark:text-white/70 mb-8">
              Whether it’s a new project or collaboration — I’d love to hear from you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/50 dark:bg-white/5 backdrop-blur-xl border rounded-xl p-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-12">
              {quickLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/50 dark:bg-white/5 border"
                >
                  <item.icon className="w-6 h-6 text-blue-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl border"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl border"
              />

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-xl border"
              />

              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-6 py-4 rounded-xl border"
              />

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.05 }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex justify-center gap-2"
              >
                {sending ? "Sending..." : "Send Message"} <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
