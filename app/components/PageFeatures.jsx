import { Link } from "@remix-run/react";

export default function PageFeatures({ data }) {
  const { title, Feature } = data;
  return (
    <section id="features" className="bg-white border-b py-24">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {title}
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        {Feature.map((feature, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
          >
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="flex flex-wrap no-underline hover:no-underline">
                <p className="w-full text-fuchsia-500 text-xs font-bold md:text-sm px-6">
                  {feature.subHeading}
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  {feature.heading}
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  {feature.description}{" "}
                </p>
              </div>
            </div>
            { feature.Link && <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <Link
                  to={feature.Link.path}
                  className="mx-auto lg:mx-0 gradient text-white bg-fuchsia-500 font-bold rounded-full my-6 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  {feature.Link.text}
                </Link>
              </div>
            </div> }
          </div>
        ))}
      </div>
    </section>
  );
}
