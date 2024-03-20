import { PiCertificateLight } from "react-icons/pi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Link from "next/link";
import { part1, part2, skills } from "@/utils/data";

const About = () => {
  return (
    <div className="about relative w-11/12 sm:w-9/12 min-h-screen pt-36 sm:pt-48 text-white flex flex-col gap-20 ">
      {/* <Image src={mask} alt="mask" /> */}
      {/* stop */}

      <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        About Me.
      </h1>

      <div className="w-full border-l-2 border-white flex flex-col gap-10">
        {part1.map((item, index) => {
          return (
            <div
              key={index}
              className="box ml-10 flex flex-col gap-4 relative before:absolute before:w-[22px] before:h-[22px] before:rounded-full before:bg-black before:-left-[3.2rem] before:top-0 before:border-2 before:border-white"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  {item.icon}
                  <h1 className="text-xl font-black text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    {item.title}
                  </h1>
                </div>
                <Link
                  href={item.link}
                  target="_blank"
                  className=" font-bold cursor-pointer underline"
                >
                  Profile
                </Link>
              </div>
              <p className="font-normal text-neutral-300">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="w-full flex gap-1 justify-center items-center">
        <MdOutlineVerifiedUser className="text-3xl" />
        <h1 className="text-xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Skills I have gained so far...
        </h1>
      </div>
      <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-5">
        {skills.map((item, index) => {
          return (
            <div
              key={index}
              className="skill text-xs sm:text-xl flex gap-1 justify-center items-center border border-white/[0.2] py-5"
            >
              {item.icon}
              <h1 className="font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="w-full flex gap-1 justify-center items-center">
        <PiCertificateLight className="text-3xl" />
        <h1 className="text-xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Online Certifications...
        </h1>
      </div>
      <div className="w-full border-l-2 border-white flex flex-col gap-10">
        {part2.map((item, index) => {
          return (
            <div
              key={index}
              className="box ml-10 flex flex-col gap-4 relative before:absolute before:w-[22px] before:h-[22px] before:rounded-full before:bg-black before:-left-[3.2rem] before:top-0 before:border-2 before:border-white"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  {item.icon}
                  <h1 className="text-xl font-black text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    {item.title}
                  </h1>
                </div>
                <Link
                  href={item.link}
                  target="_blank"
                  className=" font-bold underline"
                >
                  View
                </Link>
              </div>
              <p className="font-normal text-neutral-300">{item.description}</p>
            </div>
          );
        })}
      </div>
      {/* <TextGenerateEffect words="Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows" /> */}
    </div>
  );
};

export default About;
