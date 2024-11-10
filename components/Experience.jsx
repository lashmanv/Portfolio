import { useTheme } from "next-themes";
import { useState, useEffect, memo } from "react";
import dynamic from "next/dynamic";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiences } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const Image = dynamic(() => import("next/image"), { ssr: false });

const ExperienceCard = memo(({ experience, theme }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: theme === "dark"
        ? "linear-gradient(90deg, rgba(33,33,52,1) 0%, rgba(39,39,61,1) 50%, rgba(33,33,52,1) 100%)"
        : "linear-gradient(90deg, rgba(224,234,240,1) 0%, rgba(232,239,243,1) 50%, rgba(224,234,240,1) 100%)",
      color: theme === "dark" ? "#e5e6e9" : "#7e8c9f",
      boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
      borderLeft: `1px solid rgba(128, 77, 238, 0.5)`,
      borderRight: `1px solid rgba(128, 77, 238, 0.5)`,
      borderBottom: `1px solid rgba(128, 77, 238, 0.5)`,
      borderRadius: "4px",
    }}
    contentArrowStyle={{
      borderRight: `7px solid ${theme === "dark" ? "#2b2b42" : "#e0eaf0"}`,
    }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[60%] h-[60%] relative">
          <a href={experience.link} target="_blank" rel="noopener noreferrer" className="no-underline">
            <Image
              src={experience.icon}
              alt={experience.company_name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    }
  >
    <h3 className="text-[24px] font-bold mb-1" style={{ color: theme === "dark" ? "#e5e6e9" : "#333" }}>
      {experience.title}
    </h3>
    <p className="text-[16px] font-semibold" style={{ margin: 0, color: theme === "dark" ? "#aaa" : "#555" }}>
      {experience.company_name}
    </p>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={index} className="text-[14px] leading-relaxed" style={{ color: theme === "dark" ? "#e5e6e9" : "#555" }}>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
));

ExperienceCard.displayName = "ExperienceCard";

function Experience() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section id="work" className="w-full p-4 mt-20">
      <div>
        <p className="sectionSubText text-center">What I have done so far</p>
        <h2 className="sectionHeadText text-center">Work Experience</h2>
      </div>
      <VerticalTimeline animate={false} lineColor={theme === "dark" ? "#7e8c9f" : "#8c9db1"}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} theme={theme} />
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
