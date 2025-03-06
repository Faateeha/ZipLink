const Pricing = () => {
    const plans = [
      {
        name: "Free",
        price: "$0",
        features: ["Basic link shortening", "Limited analytics", "Custom aliases"],
        buttonText: "Get Started",
        buttonStyle: "border border-green-600 text-green-600 hover:bg-blue-100 dark:hover:bg-blue-900",
      },
      {
        name: "Pro",
        price: "$9.99/mo",
        features: ["Advanced analytics", "Branded links", "Priority support"],
        buttonText: "Upgrade Now",
        buttonStyle: "bg-green-600 text-white hover:bg-green-500",
      },
      {
        name: "Business",
        price: "$29.99/mo",
        features: ["Team collaboration", "API access", "Dedicated support"],
        buttonText: "Contact Us",
        buttonStyle: "bg-green-600 text-white hover:bg-green-500",
      },
    ];
  
    return (
      <section id="pricing" className="py-16 px-6 md:px-12 lg:px-20 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold  dark:text-white">Simple & Transparent Pricing</h2>
          <p className="mt-2 dark:text-gray-300">
            Choose the plan that fits your needs. No hidden fees, just value.
          </p>
        </div>
  
        {/* Pricing Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 dark:bg-gray-800 shadow-lg rounded-lg border  dark:border-green-500 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold dark:text-white">{plan.name}</h3>
              <p className="mt-2 text-4xl font-bold text-green-500">{plan.price}</p>
              <ul className="mt-4 space-y-2  dark:text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-green-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 px-4 py-2 w-full rounded-md font-medium transition ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Pricing;
  