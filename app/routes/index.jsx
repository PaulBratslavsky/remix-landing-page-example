import qs from "qs";
import PageContent from "~/components/PageContent";
import PageHeader from "~/components/PageHeader";
import PageFeatures from "~/components/PageFeatures";
import PagePricing from "~/components/PagePricing";
import PageCTA from "~/components/PageCTA";
import { useLoaderData } from "@remix-run/react";

const params = (slug) => qs.stringify({
  populate: [
    "Blocks.image",
    "Blocks.Link",
    "Blocks.Feature.Link",
    "Blocks.Content.image",
    "Blocks.Price.Benefit",
    "Blocks.Price.Link",
  ],
  filter: { slug: slug }
});

export async function loader() {
  const BASE_URL = "http://localhost:1337/api/pages?"
  const QUERY = BASE_URL + params("home");
  const response = await fetch(QUERY);
  const data = await response.json();
  return data;
}

function blockRenederer(blocks) {
  return blocks.map((block, index) => {
    console.log(block);
    switch (block.__component) {
      case "page.page-header":
        return <PageHeader key={index} data={block} />;
      case "page.page-content":
        return <PageContent key={index} data={block} />;
      case "page.page-features":
        return <PageFeatures key={index} data={block} />;
      case "page.page-pricing":
        return <PagePricing key={index} data={block} />;
      case "page.cta":
        return <PageCTA key={index} data={block} />;
      default:
        return null;
    }
  });
}

export default function IndexRoute() {
  const data = useLoaderData();
  const blocks = data.data[0].attributes.Blocks;
  const renderedBlocks = blockRenederer(blocks);
  return renderedBlocks;
}
