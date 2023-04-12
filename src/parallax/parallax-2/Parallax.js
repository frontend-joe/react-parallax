import "./styles.css";

import html from "./html.png";
import css from "./css.png";
import es6 from "./es6.png";
import react from "./react.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import logo from "./logo.svg";
import { useEffect, useRef } from "react";

export const Parallax = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <nav>
        <img src={logo} />
        <a href="#"> Home </a>
        <a href="#"> Skills </a>
        <a href="#"> Contact </a>
      </nav>
      <section className="banner">
        <div className="banner-content">
          <h2>Hi, I'm Peter</h2>
          <h3>Frontend Developer</h3>
        </div>
      </section>
      <div ref={containerRef} className="container">
        <section className="description panel blue">
          <img src={html} />
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="panel red">
          <img src={css} />
          <h2>CSS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="description panel blue">
          <img src={es6} />
          <h2>ES6</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
        <section className="panel red">
          <img src={react} />
          <h2>React JS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
      </div>
      <section className="footer">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your email" />

          <textarea rows={6} placeholder="Message" />
          <button>SUBMIT</button>
        </form>
      </section>
    </>
  );
};
