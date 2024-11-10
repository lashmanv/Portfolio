import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt
      className="w-[250px]"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05} // Slight scale on hover for added effect
      transitionSpeed={450}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full rounded-[20px] shadow-card"
        style={{
          background: "linear-gradient(135deg, rgba(255,105,180,0.5), rgba(0,255,255,0.5))",
          padding: "1px",
        }}
      >
        <div className="dark:bg-bgSecondaryDark bg-bgSecondaryLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <div className="w-16 h-16 object-contain relative">{icon}</div>
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[20px] font-bold text-center w-[80%]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
