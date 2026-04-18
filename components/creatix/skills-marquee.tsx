"use client";

const skills = [
  "UX Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "User Research",
  "UI Design",
  "Prototyping",
  "Branding",
];

export function SkillsMarquee() {
  return (
    <section className="bg-zinc-950 py-8 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="mx-6 text-zinc-600 text-lg md:text-xl font-medium flex items-center gap-4"
            >
              <span className="text-lime-400">★</span>
              {skill}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="mx-6 text-zinc-600 text-lg md:text-xl font-medium flex items-center gap-4"
            >
              <span className="text-lime-400">★</span>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
