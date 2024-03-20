"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FollowerPointerCard } from "./following-pointer";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    source?: string;
    pic: StaticImageData;
    tags: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("grid grid-cols-1 lg:grid-cols-2 ", className)}
      suppressHydrationWarning={true}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.source && (
              <CardTitle>
                <h4 className={"text-zinc-100 font-bold tracking-wide mt-4"}>
                  {item.title}
                </h4>
                <button className="inline-flex px-5 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  outline-none">
                  <FollowerPointerCard
                    title={<TitleComponent title={"Github"} />}
                  >
                    <Link href={item.source ? item.source : ""} target="_blank">
                      Code
                    </Link>
                  </FollowerPointerCard>
                </button>
              </CardTitle>
            )}
            <FollowerPointerCard
              title={<TitleComponent title={"Click to Watch live"} />}
            >
              <Link href={item?.link} target="_blank" key={idx}>
                <Image
                  src={item.pic}
                  alt={item.title}
                  width={500}
                  height={200}
                  className="mt-4"
                  priority
                />
                <CardDescription>{item.description}</CardDescription>
                <div className="w-full mt-5">
                  {item.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="w-fit float-left mr-1 mb-2 rounded-md flex justify-center items-center border border-white/[0.2] px-2"
                    >
                      <h1 className="font-bold w-fit text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        {tag}
                      </h1>
                    </div>
                  ))}
                </div>
              </Link>
            </FollowerPointerCard>
          </Card>
        </div>
      ))}
    </div>
  );
};

const TitleComponent = ({ title }: { title: string }) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn(" flex justify-between", className)}>{children}</div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-5 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
