import Link from "next/link";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-34 w-full h-full xl:ml-24 p-8 md:mt-[40svh] xl:mt-[150px] flex flex-col items-start"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full"
      >
        <p className="sectionSubText text-gray-300">Introduction</p>
        <h2 className="sectionHeadText text-white">Overview</h2>
      </motion.div>
      
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[16px] leading-[30px] space-y-6 max-w-[800px]"
      >
        <p>
          Hello! I&apos;m Lashman Sabarish, an enthusiastic and versatile Software Developer with expertise 
          in Blockchain, Data Engineering, Web Application Development, and Software Testing. 
          I&apos;m adept at quickly adopting new technologies and crafting innovative solutions. 
          My skill set includes Hadoop, Spark, Playwright, and CircleCI, along with strong proficiency in Solidity, Node.js, 
          and React for web and decentralized application (DApp) development. 
          I possess strong problem-solving abilities and meticulous attention to detail. I&apos;m committed to continuous learning 
          and achieving superior outcomes through the use of advanced technologies and methodologies.
          <br className="sm:block hidden" />
          Let&apos;s collaborate to bring your ideas to life!
        </p>
        
        <div className="flex items-center space-x-2">
          <EmailIcon className="w-6 h-6" />
          <Link
            href="mailto:lashmansabarish@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-all duration-100 ease-in"
          >
            lashmansabarish@gmail.com
          </Link>
        </div>

        <div className="flex gap-5 items-center mt-4">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        
        <Link
          href="https://drive.google.com/file/d/1bO0oEKMIGQEOZgAtNaHzrPdix7lKytsR/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer mt-4">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
