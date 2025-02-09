import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }

    // Send email using Email.js
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, // Environment variable for Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, // Environment variable for Template ID
        {
          fullName: formData.fullName,
          city: formData.city,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string // Environment variable for User ID
      )
      .then(
        (response: { status: any; text: any }) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({
            fullName: "",
            city: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          console.error("FAILED...", error);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-900"
    >
      <div className="relative flex items-center justify-center">
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4 Sine">Contact Me</h2>
        </div>
        <h1 className="shadow-text">Contact</h1>
      </div>
      <div className="grid md:grid-cols-2 items-center overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white my-6 font-[sans-serif]">
        <div className="p-8 bg-black">
          <h2 className="text-3xl font-bold text-white">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>

          {isSent && (
            <div className="bg-green-100 text-green-800 p-2 rounded mt-4">
              ✅ Message sent successfully!
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-800 p-2 rounded mt-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No."
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message"
                className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="relative h-full">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3516.263173732178!2d84.0034950561415!3d28.199315779737095!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1722495380506!5m2!1sen!2snp"
            className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
