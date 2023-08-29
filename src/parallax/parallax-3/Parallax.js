import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./styles.css";

import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";

export const Parallax = () => {
  const { innerHeight } = window;

  const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image1}` }} />
        <h1>Parallax</h1>
      </section>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image2}` }} />
        <h1>So smooth</h1>
      </section>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image3}` }} />
        <h1>Nice, right?</h1>
      </section>
    </>
  );
};
