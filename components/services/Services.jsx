import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand
          <br /> to be digitalized
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Digitalizing</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
          Your <motion.b whileHover={{color:"orange"}}>Business.</motion.b>
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>PortFolio</h2>
          <p>
          Our websites are designed with the user in mind. We prioritize ease of navigation and ensure that your visitors can effortlessly explore your work, skills, and accomplishments.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Task Management</h2>
          <p>
          Our software is designed with ease of use in mind, providing an intuitive interface that ensures quick adoption by your team without a steep learning curve.We understand that every organization has unique needs. Our software allows for fully customizable workflows, enabling you to tailor task management to fit your specific processes and preferences.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CRM Software</h2>
          <p>
          Our CRM software offers a 360-degree view of your customers, consolidating all interactions and data in one place. This enables your team to better understand customer needs and deliver personalized service.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Customize Software</h2>
          <p>
          we understand that every business has its own unique challenges and requirements. That's why we specialize in creating customized software solutions tailored to your specific needs, ensuring that you have the tools to succeed in today’s competitive market.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
