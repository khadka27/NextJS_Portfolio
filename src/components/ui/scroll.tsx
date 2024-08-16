import { useRef } from "react";
import { useScroll } from "framer-motion";
import "@/components/styles/tailwind.css";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  return <></>;
}

export default Item;
