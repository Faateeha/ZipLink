import link from "../../public/link.png";

const Features = () => {
  return (
    <section
      id="features"
      className="py-16 px-6 md:px-12 lg:px-20 md:mt-8  dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold dark:text-white">
            Simplify Your Links with ZipLink
          </h2>
          <p className="mt-4 dark:text-gray-300">
            ZipLink makes it easy to shorten, share, and track your URLs. No
            more long, messy links—just clean, simple, and shareable URLs.
          </p>
          <button className="bg-green-500 py-2 px-4 rounded-2xl my-2 hover:bg-green-600">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={link}
            alt="ZipLink Features"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
