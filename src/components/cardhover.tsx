import { HoverEffect } from "./ui/card-hover-effect";

function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Portfolio",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.abishekkhadka27.com.np/",
  },
  {
    title: "Todo App",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://github.com/khadka27/React-Todo-App",
  },
  {
    title: "Ecommerce website",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://github.com/khadka27/Java-website-Ecom",
  },
  {
    title: "Calculator App",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/",
  },
  {
    title: "Nextjs Portfolio",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://github.com/khadka27/React-Portfolio",
  },
  {
    title: "Microsoft Clone",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/",
  },
];

export default CardHoverEffectDemo;
