import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import styles from "./styles/app.css"

const navItems = [
  {
    name: "About",
    path: "#about",
    type: "link",
  },
  {
    name: "Features",
    path: "#features",
    type: "link",
  },
  {
    name: "Pricing",
    path: "#pricing",
    type: "link",
  },
  {
    name: "CTA",
    path: "#cta",
    type: "link",
  },
  {
    name: "CTA",
    path: "/",
    type: "button",
  },
];

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="leading-normal tracking-normal text-white gradient">
        <TopNav navItems={navItems}/>
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
