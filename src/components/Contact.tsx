import { motion } from "motion/react";
import { useInView } from "./useInView";
import {
  Mail,
  Github,
  Linkedin,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { supabase } from "../lib/supabase";

export function Contact() {
  const [ref, isInView] = useInView();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/nessakura-eng",
      color: "hover:text-purple-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/vanessa-gutierrez-74b160267",
      color: "hover:text-blue-400",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", formData);
      
      // Insert message into database
      const { data, error } = await supabase
        .from('messages')
        .insert([
          { name: formData.name, email: formData.email, message: formData.message },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }
      
      console.log("Message saved successfully:", data);
      
      toast.success("Message sent successfully! I'll get back to you soon! 💕");
      setFormData({ name: "", email: "", message: "" });
      
      // Try to send email notification
      try {
        const emailResponse = await fetch(
          'https://ihvlvlzclvrroqbhldqk.supabase.co/functions/v1/send-contact-email',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlodmx2bHpjbHZycm9xYmhsZHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NjEzODUsImV4cCI6MjA3OTMzNzM4NX0.k0Yqd8vgbdOiJZwFMrD9cV-_wC4gxhTr9w_N-WcYNy4`,
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
            }),
          }
        );
        
        const emailResult = await emailResponse.json();
        console.log("Email response:", emailResult);
        
        if (!emailResponse.ok) {
          console.error("Email failed:", emailResult);
        } else {
          console.log("Email sent successfully!");
        }
      } catch (emailError) {
        console.error("Email error:", emailError);
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-[#ffb7c5] text-lg">
                {"<contact>"}
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#ffb7c5] via-[#ffd4e0] to-[#ffcba4] bg-clip-text text-transparent mb-4">
              Let's Connect!
            </h2>
            <p className="text-slate-400 text-lg">
              Got a project in mind? Let's build something
              amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
                <h3 className="text-white text-xl mb-6">
                  Get in Touch
                </h3>
                <p className="text-slate-400 mb-8">
                  I am always open to discussing new projects,
                  creative ideas, or opportunities to be part of
                  your vision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ffb7c5]/10 to-[#ffd4e0]/10 flex items-center justify-center">
                      <Mail
                        className="text-[#ffb7c5]"
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">
                        Email
                      </p>
                      <p className="text-white">
                        nessakura.eng@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-slate-400 mb-4">
                    Follow me on
                  </p>
                  <div className="flex gap-4">
                    {socials.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.link}
                          {...(social.isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            isInView ? { opacity: 1, y: 0 } : {}
                          }
                          transition={{
                            delay: 0.3 + index * 0.1,
                          }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className={`w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 ${social.color} transition-colors`}
                        >
                          <Icon size={20} />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-slate-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#ffb7c5] transition-colors"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#ffb7c5] transition-colors"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#ffb7c5] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#ffb7c5] to-[#ffd4e0] hover:from-[#ff9bb0] hover:to-[#ffb7c5] text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-16"
          >
            <span className="text-[#ffb7c5] text-lg">
              {"</contact>"}
            </span>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-16 pt-8 border-t border-slate-800"
          >
            <p className="text-slate-500">© 2025 Nessakura</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}