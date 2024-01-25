"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./UI/SectionHeading";
import useSectionView from "@/hooks/useSection-View";

const About = () => {
  const [observerRef] = useSectionView("About")
//   const { ref: observerRef, inView } = useInView({
//     threshold: 0.75,
//   }); //ref to attach the oberver APi with element and a value weather it is in view or not
//   const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

// useEffect(() => {
//   if (inView && new Date() - timeOfLastClick > 1000 ) {
//     setActiveSection("About");
//   }
// }, [inView]);
  
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={observerRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>
      <p className="mb-3">
        I am an enthusiastic person about technology, from early ages of my life. I
        have spent the last{" "}
        <span className="font-medium">1.5 years at FirstNetSystems</span> to get
        hands-on experience in data science,{" "}
        <strong className="font-medium">website building</strong> and{" "}
        <strong className="font-medium">Programming.</strong> Currently I am
        enrolled in Software Engineering working on a Bio-Medical project based
        on <strong className="font-medium"> Machine Learning </strong> and{" "}
        <strong className="font-medium"> Deep Learning.</strong>{" "}
        <span className="italic">I enjoy the problem solving aspect</span> of Engineering. I <span className="underline">like</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          C++, Pyhton, MongoDB,Django and Wordpress.
        </span>
        . I am also familiar with Mysql. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">part-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>,I do tutions in Programming and Science subjects, enjoy
        Sketching, watching movies, and hiking.I am always open to
        <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium">Photography </span>. I&apos;m
        also learning how to play the guitar.
      </p>
    </motion.section>
  );
};

export default About;
