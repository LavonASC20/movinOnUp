"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { NavbarSubsection } from "../NavbarSubsection";

export const OurContactFormSubsection = (): JSX.Element => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    emailjs.send(
        "service_2yy5qhu",     // import.meta.env.VITE_EMAILJS_SERVICE_ID!
        "template_pf8h5do",     // import.meta.env.VITE_EMAILJS_TEMPLATE_ID!
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "_1u_zScZGk2hV1aGQ"     // import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (err) => {
          console.error("EmailJS error:", err);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section className="w-full bg-white pt-[125px]">
      <NavbarSubsection />
      <div className="max-w-2xl mx-auto p-6 border rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <p className="text-sm italic text-center mb-4">
          Tell us any details about your request, including if you'd like tutoring in a topic not listed in our catalog!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject You're Requesting"
            value={form.subject}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Request Details"
            value={form.message}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded min-h-[120px]"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded w-full"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {success && <p className="text-green-600 mt-2">Message sent successfully!</p>}
          {error && <p className="text-red-600 mt-2">Please fill out all fields or try again.</p>}
        </form>
      </div>
    </section>
  );
}
