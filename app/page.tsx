"use client";
import { cn } from "@/lib/utils";
import { homePageStyles, spotlightStyles } from "@/public/dummyStyles";
import { useEffect, useRef } from "react";
import { Spotlight } from "./components/ui/spotlight";
import { PointerHighlight } from "./components/ui/pointer-highlight";
import Link from "next/link";

function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => {
        console.log("Autoplay prevented:", e);
      });
    }
  }, []);

  return (
    <>
      <div className={homePageStyles.container}>
        <div
          className={cn(
            homePageStyles.backgroundGrid.wrapper,
            homePageStyles.backgroundGrid.pattern,
          )}
        />
        <Spotlight className={spotlightStyles.position} fill="#00CFFF" />
        <div className={homePageStyles.gradientOverlay} />

        <section className={homePageStyles.heroSection}>
          <div className="relative">
            <h2>Hey, I&apos;m Timothy</h2>
            <h2 className={homePageStyles.h2}>
              Fullstack{" "}
              <span className={homePageStyles.spanInline}>
                <PointerHighlight>Developer</PointerHighlight>
              </span>
            </h2>

            <div className="mb-6">
              <div className={homePageStyles.calloutCard.wrapper}>
                <div className={homePageStyles.calloutCard.innerContainer}>
                  <div className={homePageStyles.calloutCard.textContainer}>
                    {/* <svg
                      className={homePageStyles.calloutCard.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path d="M3 12l9-9 9 9" strokeWidth="1.2" />
                    </svg> */}

                    <div className={homePageStyles.calloutCard.text}>
                      Connect with me on LinkedIn
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label="Connect on LinkedIn"
                    className={`${homePageStyles.calloutCard.button} cursor-pointer hover:scale-105`}
                  >
                    <a
                      href="https://www.linkedin.com/in/timothy-mbachu/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Connect
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <p className={homePageStyles.paragraph}>
              <span className={homePageStyles.spanInline}>
                I turn ideas into live Products.
              </span>
              <span className={homePageStyles.spanInline}>
                I&apos;m a Fullstack Software Developer, currently looking for
                my next project. I have built and maintained multiple products
                in past 3 years.
              </span>
              {/* Currently working as a Founding Engineer at{" "}
              <a
                className={homePageStyles.link}
                href="https://invoicegenerator-frontend-tdng.onrender.com/"
              >
                Invoice-AI
              </a> */}
            </p>

            <article className={homePageStyles.article.wrapper}>
              <div className={homePageStyles.article.videoContainer}>
                <video
                  ref={videoRef}
                  className={homePageStyles.article.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  disableRemotePlayback
                  style={homePageStyles.article.videoStyles}
                >
                  <source src="/featured-work.webm" type="video/webm" />
                  Your browser does not support the video tag.{" "}
                  <Link href={"/projects"}>Please see all projects </Link>
                </video>
              </div>

              <div className={homePageStyles.article.content}>
                <div className={homePageStyles.article.header}>
                  <svg
                    className={homePageStyles.article.headerIcon}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>

                  <span>Featured Work</span>
                </div>
                <h3 className={homePageStyles.article.title}>
                  Ai-Flow - by Fundation GmbH
                </h3>
                <p className={homePageStyles.article.description}>
                  Grounded AI agents for your team&apos;s data
                </p>
                <div className={homePageStyles.article.linkContainer}>
                  <Link
                    href="/projects"
                    className={homePageStyles.article.link}
                  >
                    <span>See my projects</span>
                    <svg
                      className={homePageStyles.article.linkIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
