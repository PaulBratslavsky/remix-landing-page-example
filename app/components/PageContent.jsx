export default function PageContent({ data }) {
  const { title, Content } = data;

  return (
    <section id="about" className="bg-white border-b py-24">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {title}
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        {Content.map((item, index) => {
          const imageAltText = item.image?.data.attributes.alternativeText;
          const imageUrl = `http://localhost:1337${item.image?.data.attributes.url}`;
          if (index % 2 === 0) {
            return (
              <div key={index} className="flex flex-wrap">
                <div className="w-5/6 sm:w-1/2 p-6">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8">{item.content}</p>
                </div>
                {item.image && (
                  <div className="w-full sm:w-1/2 p-6">
                    <img src={imageUrl} alt={imageAltText} />
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="flex flex-wrap flex-col-reverse sm:flex-row"
              >
                {item.image && (
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img src={imageUrl} alt={imageAltText} />
                  </div>
                )}
                <div className="w-full sm:w-1/2 p-6 mt-6">
                  <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-8">{item.content}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
