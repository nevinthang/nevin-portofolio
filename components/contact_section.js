"use client";

import React, { useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    // Create a FormData object from the form element
    const formData = new FormData(e.target);
    // Convert FormData to a plain object
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
      // Reset the form fields
      e.target.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const InputWrapper = ({ children }) => <div className="relative transform transition-all duration-300 hover:translate-x-1">{children}</div>;

  return (
    <div className="mt-20 px-4 sm:px-10 md:px-20 lg:px-40" id="contact">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Create Something <span className="text-primary">Amazing</span> Together
          </h2>
          <p className="text-gray-400">Have an idea? I'd love to hear about your project and explore how we can collaborate.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <InputWrapper>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center px-4 border-b border-gray-800">
                    <FiUser className="text-gray-400 w-5 h-5" />
                    <input type="text" name="name" placeholder="Your Name" className="w-full bg-transparent py-4 px-3 text-gray-200 placeholder-gray-400 focus:outline-none" required />
                  </div>
                </div>
              </div>
            </InputWrapper>

            {/* Email Input */}
            <InputWrapper>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center px-4 border-b border-gray-800">
                    <FiMail className="text-gray-400 w-5 h-5" />
                    <input type="email" name="email" placeholder="Your Email" className="w-full bg-transparent py-4 px-3 text-gray-200 placeholder-gray-400 focus:outline-none" required />
                  </div>
                </div>
              </div>
            </InputWrapper>
          </div>

          {/* Subject Input */}
          <InputWrapper>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <div className="flex items-center px-4 border-b border-gray-800">
                  <FiMessageSquare className="text-gray-400 w-5 h-5" />
                  <input type="text" name="subject" placeholder="Subject" className="w-full bg-transparent py-4 px-3 text-gray-200 placeholder-gray-400 focus:outline-none" required />
                </div>
              </div>
            </div>
          </InputWrapper>

          {/* Message Input */}
          <InputWrapper>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <textarea name="message" placeholder="Your Message" rows="6" className="w-full bg-transparent py-4 px-6 text-gray-200 placeholder-gray-400 focus:outline-none" required></textarea>
              </div>
            </div>
          </InputWrapper>

          {status.message && <div className={`p-4 rounded-lg ${status.type === "success" ? "bg-green-900/50 text-green-300 border border-green-500/50" : "bg-red-900/50 text-red-300 border border-red-500/50"}`}>{status.message}</div>}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={sending}
              className="group relative px-8 py-4 bg-primary text-black font-bold rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                <span>{sending ? "Sending..." : "Send Message"}</span>
                <FiSend className={`w-4 h-4 transform transition-transform duration-300 ${sending ? "translate-x-1" : "group-hover:translate-x-1"}`} />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
