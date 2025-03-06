import { FiMail, FiTwitter, FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-20 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold dark:text-white">Get in Touch</h2>
        <p className="mt-2 dark:text-gray-300">
          Have questions or feedback? Reach out to us!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 max-w-3xl mx-auto dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 text-gray-900 dark:text-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md  dark:bg-gray-900 text-gray-900 dark:text-white"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 text-gray-900 dark:text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info & Socials */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-300">Or reach us at:</p>
        <a
          href="mailto:support@ziplink.com"
          className="text-green-600 dark:text-green-400 font-medium flex justify-center items-center space-x-2 mt-2"
        >
          <FiMail size={18} />
          <span>support@ziplink.com</span>
        </a>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
            <FiTwitter green={24} />
          </a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
            <FiGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
