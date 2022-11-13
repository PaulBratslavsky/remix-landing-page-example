import { Link } from "@remix-run/react";

export default function PageHeader({ data }) {
  const { heading, subText, text, image, Link: link } = data;
  const imageAltText = image?.data.attributes.alternativeText;
  const imageUrl = `http://localhost:1337${image?.data.attributes.url}`;
  return (
    <div>
      <div className="pt-24 bg-fuchsia-500">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">{subText}</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              {heading}
            </h1>
            <p className="leading-normal text-2xl mb-8">{text}</p>
          {  link && <Link
              to={link.path}
              className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              {link.text}
            </Link>}
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img
              className="w-full md:w-4/5 z-50"
              src={imageUrl}
              alt={imageAltText}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
