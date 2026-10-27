import React from "react";
import { aboutPageStyles as s } from "@/public/dummyStyles";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import Link from "next/link";
import { email, gmailComposeUrl } from "@/lib/utils";

function AboutPage() {
  const interests = [
    "WEB",
    "MOBILE",
    "LLM/RAG",
    "TRAVEL",
    "MUSIC",
    "MOVIES",
    "READING",
  ];

  const techStack = [
    "React",
    "TypeScript",
    "LLM/RAG",
    "Node.js",
    "Next.js",
    "Postgres",
    "MongoDB",
    "AWS",
  ];
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.backgroundContainer}>
          <div className={s.backgroundEffect}>
            <BackgroundBeamsWithCollision />
          </div>
          <div className={s.contentWrapper}>
            {/* <h1 className={s.mainHeading}>Timothy</h1> */}
            <div className={s.interestsContainer}>
              {interests.map((interest, index) => (
                <span key={interest} className={s.interestItem}>
                  {interest}
                  {index < interests.length - 1 && (
                    <span className={s.interestSeparator}>•</span>
                  )}
                </span>
              ))}
            </div>
            <div className={s.techStackContainer}>
              {techStack.map((tech) => (
                <span key={tech} className={s.techPill}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Content section */}
            <div className={s.sectionsContainer}>
              {/* Who I Am */}
              <section>
                <h2 className={s.sectionHeading}>Who I Am</h2>
                <p className={s.paragraph}>
                  Hello! I&apos;m Timothy, a Nigeria-based engineer passionate
                  about building tools that simplify people&apos;s lives.
                  I&apos;ve been coding since 2022, using majorly JavaScript and
                  Typescript (and other languages like Python on a need-to-use
                  basis) for building ai-powered (and non ai powered) web and
                  mobile applications.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={s.sectionHeading}>My tech stack</h2>
                <p className={s.paragraph}>
                  Over the course of my coding journey, i have built a variety
                  of applications with HTML, CSS, SASS, Blaze, Tailwind CSS,
                  Bootstrap CSS, JavaScript, WordPress, Angular, TypeScript,
                  React/Nextjs, React-Native, Capacitorjs, Meteorjs, Redux,
                  Zustand, Shadcn, Node.js, Expressjs, MongoDB, Next.js, Figma,
                  GitHub, AWS, Azure, etc.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={s.sectionHeading}>My Journey</h2>
                <p className={s.paragraph}>
                  Well I can say that I have tried out a few things for sure. I
                  have a 4.08/5.0 Engineering degree, I have worked as a
                  secondary/high school math teacher, a salesman for a bank and
                  have been writing code and developing web apps using
                  javascript, python and c# for over 3 years now. <br />I have
                  worked full-time jobs, internships, volunteering and personal
                  projects. Check out my{" "}
                  <a
                    href="https://github.com/timmbach"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.contentLink}
                  >
                    Github
                  </a>
                  , for some of my finished and *unfinished👍🏾* projects.
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={s.sectionHeading}>Vision</h2>
                <p className={s.paragraph}>
                  LLMs and AI will automate the mundane and reshape how we work.
                  I strive to stay at the forefront of this transformation.
                </p>
              </section>

              {/* Beyond Code */}
              <section>
                <h2 className={s.sectionHeading}>Beyond Code</h2>
                <p className={s.paragraph}>
                  Love composer music, anime & donghua, really good at FC and
                  fine art. Love visiting and seeing nature in beautiful places.
                </p>
              </section>
            </div>

            <div className={s.ctaContainer}>
              <Link
                href="/contact"
                className={s.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
              >
                <svg
                  className={s.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
