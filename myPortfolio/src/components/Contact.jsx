import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/Github.png";
import Lottie from "lottie-react";
import contactusanimation from "../assets/contactusanimation.json";



const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS Template ID
        form.current,
        import.meta.env.VITE_PUBLIC_KEY // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <>
      <div
        className="z-50 relative py-10 px-5 md:px-0 bg-gray-800"
        id="contact"
      >
        <div className="mb-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
              <h2 className="text-3xl underline font-bold mb-3 text-red-500">
                Get In Touch
              </h2>
              <p className="mb-4 text-white/85">
                I'm always open to new opportunities and collaboration. Feel
                free to reach out!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground/60 hover:text-forground/80">
                  <img src={instagram} alt="Instagram" className="h-6 w-6" />
                </a>
                <a href="www.linkedin.com/in/kuldeep-gohel" className="text-foreground/60 hover:text-forground/80">
                  <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
                </a>
                <a href="https://github.com/kuldeepgohel" className="text-foreground/60 hover:text-forground/80">
                  <img src={github} alt="GitHub" className="h-6 w-6" />
                </a>
              </div>
              <Lottie
                animationData={contactusanimation}
                loop={true}
                className="mx-auto w-[350px] lg:w-[500px]"
              />
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-500 p-10 shadow-lg shadow-red-300"
            >
              <h1 className="text-gray-900 text-4xl font-bold mb-7">
                Contact Me
              </h1>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="block mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="block mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message"
                  className="block mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-3 py-2 rounded-lg"
              >
                Send Message
              </button>
              {status && (
                <p className="mt-4 text-sm text-center text-gray-800">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
