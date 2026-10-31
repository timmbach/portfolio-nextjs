"use client";

import React from "react";
import { Award, Briefcase, Code2, Rocket, Users } from "lucide-react";
import { aboutPageStyles, timelineStyles as s } from "@/public/dummyStyles";
import { Timeline } from "../components/ui/timeline";

function ExperiencePage() {
  const data = [
    {
      title: "May 2025 - Oct 2026",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Fullstack Developer - Fundation GmbH
              </h3>
              <p className={s.contentSubtitle}>
                Building{" "}
                <a
                  href="https://ai-flow.eu"
                  aria-label="Ai-flow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={aboutPageStyles.contentLink}
                >
                  Ai-Flow
                </a>{" "}
                and{" "}
                <a
                  href="https://fomo-social.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={aboutPageStyles.contentLink}
                >
                  Fomo Social
                </a>
              </p>
              <p className={s.contentSubtitle}>
                Remote - Cologne, North Rhine-Westphalia, Germany.
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Improved the node-based workflow executor for AI-Flow, including
              the pluggable retrieval-source component for pulling LLM context
              from REST APIs, email, documents(including googledrive and
              onedrive), and calendars.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Built user-scoped credential management for AI-Flow. Encrypted,
              isolated across users, with OAuth refresh-token handling
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              On Ai-Flow, I implemented permissions across subscription plans
              and user roles from the product requirements, building the
              permissions table and wiring feature gating across workflow tools,
              triggers, and agents.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              On Ai-Flow, I Set up microsoft teams chat, slack chat, telegram
              chat, as triggers for our agentic workflows.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Built installable AI-Flow chatbots for Slack, Microsoft Teams, and
              Telegram, routing incoming messages into AI-Flow workflows and
              returning results to the originating channel.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Integrated Pinecone for vector search in AI-Flow&apos;s RAG
              pipeline, powering context retrieval from indexed documents,
              email, and API responses.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              <span>
                Built{" "}
                <a
                  href="https://fomo-social.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={aboutPageStyles.contentLink}
                >
                  Fomo Social
                </a>{" "}
                entirely including auth forms, broadcast timeline, circles
                feature, contacts syncing, notifications management, etc. with
                capacitorjs, node.js and mssql. Available on android, web and
                ios.
              </span>
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Meteorjs</span>
            <span className={s.techBadge}>Capacitorjs</span>
            <span className={s.techBadge}>JavaScript</span>
            <span className={s.techBadge}>Blaze</span>
            <span className={s.techBadge}>Node.js</span>
            <span className={s.techBadge}>MongoDB</span>
            <span className={s.techBadge}>Mssql</span>
            <span className={s.techBadge}>LLM/RAG</span>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2024 - May 2025",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerPurple}>
              <Code2 className={s.iconPurple} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Fullstack Developer - DivVerse Labs
              </h3>
              <p className={s.contentSubtitle}>
                Maintenance of{" "}
                <a
                  href="https://app.loubby.ai"
                  aria-label="LoubbyAi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={aboutPageStyles.contentLink}
                >
                  LoubbyAi
                </a>{" "}
                and{" "}
                <a
                  href="https://app.cybermap.ai"
                  aria-label="Cybermap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={aboutPageStyles.contentLink}
                >
                  Cybermap
                </a>
              </p>
              <p className={s.contentSubtitle}>Remote - Texas, US.</p>
            </div>
          </div>

          {/* Responsibilities */}
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Implemented CyberMap&apos;s authentication page, sidebar,
              compliance-readiness assessment, ai recommendations, profile
              settings and loading states from the approved Figma designs,
              matching the provided UI/UX spec including responsive layouts and
              form validation.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Implemented role-based access control for CyberMap across the
              frontend and API, enforcing permissions for subscribers, team
              admins, and super admins at every layer.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Also on Cybermap, I pulled control evidence to evaluate SOC 2 and
              GDPR readiness. Implemented control-evaluation logic mapping cloud
              findings to SOC 2 and GDPR requirements, generating per-account
              readiness scores.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              <span>
                On{" "}
                <a
                  href="https://app.loubby.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={aboutPageStyles.contentLink}
                >
                  LoubbyAi
                </a>
                , I worked on setting up pending tasks checks for
                job-seekers/employees and employers/recruiters. And generation
                maintenance work on forms, calendars and improving code
                efficiency during periodic code cleanup marathons.
              </span>
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Next.js</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>Node.js</span>
            <span className={s.techBadge}>MongoDB</span>
            <span className={s.techBadge}>AWS</span>
          </div>
        </div>
      ),
    },
    // {
    //   title: "Jul 2024 - Sep 2024",
    //   content: (
    //     <div className={s.itemContainer}>
    //       <div className={s.itemFlexContainer}>
    //         <div className={s.iconContainerPurple}>
    //           <Code2 className={s.iconPurple} />
    //         </div>
    //         <div>
    //           <h3 className={s.contentTitle}>
    //             Software Engineer - DreamlineAi
    //           </h3>
    //           <p className={s.contentSubtitle}>
    //             Maintenance of{" "}
    //             <a
    //               href="https://app.loubby.ai"
    //               aria-label="LoubbyAi"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className={aboutPageStyles.contentLink}
    //             >
    //               LoubbyAi
    //             </a>{" "}
    //             and{" "}
    //             <a
    //               href="https://app.cybermap.ai"
    //               aria-label="Cybermap"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className={aboutPageStyles.contentLink}
    //             >
    //               Cybermap
    //             </a>
    //           </p>
    //           <p className={s.contentSubtitle}>Remote - Texas, US.</p>
    //         </div>
    //       </div>

    //       {/* Responsibilities */}
    //       <ul className={s.list}>
    //         <li className={s.listItem}>
    //           <span className={s.bulletPurple}></span>
    //           Implemented CyberMap&apos;s authentication page, sidebar,
    //           compliance-readiness assessment, ai recommendations, profile
    //           settings and loading states from the approved Figma designs,
    //           matching the provided UI/UX spec including responsive layouts and
    //           form validation.
    //         </li>
    //         <li className={s.listItem}>
    //           <span className={s.bulletPurple}></span>
    //           Set up on frontend and server side, the RBAC for Cybermap, having
    //           regular subscribed users, team admins and super admins. All with
    //           different permission levels
    //         </li>
    //         <li className={s.listItem}>
    //           <span className={s.bulletPurple}></span>
    //           Also on Cybermap, I pulled control evidence to evaluate SOC 2 and
    //           GDPR readiness. Implemented control-evaluation logic mapping cloud
    //           findings to SOC 2 and GDPR requirements, generating per-account
    //           readiness scores.
    //         </li>
    //         <li className={s.listItem}>
    //           <span className={s.bulletPurple}></span>
    //           <span>
    //             On{" "}
    //             <a
    //               href="https://app.loubby.ai"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className={aboutPageStyles.contentLink}
    //             >
    //               LoubbyAi
    //             </a>
    //             , I worked on setting up pending tasks checks for
    //             job-seekers/employees and employers/recruiters. And generation
    //             maintenance work on forms, calendars and improving code
    //             efficiency during periodic code cleanup marathons.
    //           </span>
    //         </li>
    //       </ul>
    //       <div className={s.techBadgesContainer}>
    //         <span className={s.techBadge}>Next.js</span>
    //         <span className={s.techBadge}>TypeScript</span>
    //         <span className={s.techBadge}>React</span>
    //         <span className={s.techBadge}>Node.js</span>
    //         <span className={s.techBadge}>MongoDB</span>
    //         <span className={s.techBadge}>AWS</span>
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Aug 2024 - May 2025",
    //   content: (
    //     <div className={s.itemContainer}>
    //       <div className={s.itemFlexContainer}>
    //         <div className={s.iconContainerPurple}>
    //           <Code2 className={s.iconPurple} />
    //         </div>
    //         <div>
    //           <h3 className={s.contentTitle}>
    //             Fullstack Developer - DivVerse Labs
    //           </h3>
    //           <p className={s.contentSubtitle}>
    //             Maintenance of{" "}
    //             <a
    //               href="https://app.loubby.ai"
    //               aria-label="LoubbyAi"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className={aboutPageStyles.contentLink}
    //             >
    //               LoubbyAi
    //             </a>{" "}
    //             and{" "}
    //             <a
    //               href="https://app.cybermap.ai"
    //               aria-label="Cybermap"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className={aboutPageStyles.contentLink}
    //             >
    //               Cybermap
    //             </a>
    //           </p>
    //           <p className={s.contentSubtitle}>Remote - Texas, US.</p>
    //         </div>
    //       </div>

    //       {/* Responsibilities */}
    //       <ul className={s.list}>
    //         <li className={s.listItem}>
    //           <span className={s.bulletPurple}></span>
    //           Implemented CyberMap&apos;s authentication page, sidebar,
    //           compliance-readiness assessment, ai recommendations, profile
    //           settings and loading states from the approved Figma designs,
    //           matching the provided UI/UX spec including responsive layouts and
    //           form validation.
    //         </li>
    //         <li className={s.listItem}>
    //           <span className={s.bulletPurple}></span>
    //           Set up on frontend and server side, the RBAC for Cybermap, having
    //           regular subscribed users, team admins and super admins. All with
    //           different permission levels
    //         </li>
    //         <li className={s.listItem}>
    //           <span className={s.bulletPurple}></span>
    //           Also on Cybermap, I pulled control evidence to evaluate SOC 2 and
    //           GDPR readiness. Implemented control-evaluation logic mapping cloud
    //           findings to SOC 2 and GDPR requirements, generating per-account
    //           readiness scores.
    //         </li>
    //         <li className={s.listItem}>
    //           <span className={s.bulletPurple}></span>
    //           <span>
    //             On{" "}
    //             <a
    //               href="https://app.loubby.ai"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className={aboutPageStyles.contentLink}
    //             >
    //               LoubbyAi
    //             </a>
    //             , I worked on setting up pending tasks checks for
    //             job-seekers/employees and employers/recruiters. And generation
    //             maintenance work on forms, calendars and improving code
    //             efficiency during periodic code cleanup marathons.
    //           </span>
    //         </li>
    //       </ul>
    //       <div className={s.techBadgesContainer}>
    //         <span className={s.techBadge}>Next.js</span>
    //         <span className={s.techBadge}>TypeScript</span>
    //         <span className={s.techBadge}>React</span>
    //         <span className={s.techBadge}>Node.js</span>
    //         <span className={s.techBadge}>MongoDB</span>
    //         <span className={s.techBadge}>AWS</span>
    //       </div>
    //     </div>
    //   ),
    // },
    {
      title: "Key Achievements",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerEmerald}>
              <Award className={s.iconEmerald} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Milestones & Recognition</h3>
              <p className={s.contentSubtitle}>
                Significant achievements across journey{" "}
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className={s.achievementGrid}>
            {/* <div className={s.achievementCard}>
              <div className={s.achievementCardTitle}>Funding Raised</div>
              <div className={s.achievementCardValue}>$100k+</div>
              <div className={s.achievementCardSub}>
                From accelerators & investors
              </div>
            </div> */}
            <div className={s.achievementCard}>
              <div className={s.achievementCardTitle}>Users Served</div>
              <div className={s.achievementCardValue}>20k+</div>
              <div className={s.achievementCardSub}>Across all platforms</div>
            </div>
            <div className={s.achievementCard}>
              <div className={s.achievementCardTitle}>Years Experience</div>
              <div className={s.achievementCardValue}>3+</div>
              <div className={s.achievementCardSub}>Building at scale</div>
            </div>
          </div>
          {/* Specializations */}
          <div className={s.specializationContainer}>
            <div className={s.specializationTitle}>Specializations</div>
            <div className={s.specializationBadgesContainer}>
              <span className={s.specializationBadge}>
                Fullstack Web Development
              </span>
              <span className={s.specializationBadge}>Mobile Development</span>
              {/* <span className={s.specializationBadge}></span> */}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className="mb-0">
          {/* <div className={s.timelineBadge}> */}
          <span className={s.timelineBadge}>Career Timeline</span>
          {/* </div> */}
          {/* <h1 className={s.mainTitle}>Changelog from my journey</h1> */}
          {/* <p className={s.mainParagraph}>
            I&apos;ve been working at Kay.ai for the past 1.5 years.
            <br />
            Here&apos;s a timeline of my journey across multiple startups and
            projects.
          </p> */}
          {/* <div className={s.legendContainer}>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}></div>
              <span className={s.legendText}>Current Role</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-purple-500`}></div>
              <span className={s.legendText}>AI Startup</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-green-500`}></div>
              <span className={s.legendText}>Growth Startup</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-amber-500`}></div>
              <span className={s.legendText}>Early Career</span>
            </div>
          </div> */}
        </div>

        <Timeline data={data} />
        <div className={s.techSectionContainer}>
          <div className={s.techSectionHeader}>
            <div className={s.techSectionIconContainer}>
              <Code2 className={s.techSectionIcon} />
            </div>
            <div>
              <h3 className={s.techSectionTitle}>Technologies Mastered</h3>
              <p className={s.techSectionSubtitle}>
                Fullstack expertise across modern technologies
              </p>
            </div>
          </div>
          <div className={s.techGrid}>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>Frontend</div>
              <div className={s.techCardContent}>
                TypeScript, React, Angular, React-Native, Meteorjs, Blaze,
                Capacitorjs
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textEmerald}`}>
                Backend
              </div>
              <div className={s.techCardContent}>Node.js</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textPurple}`}>
                Databases
              </div>
              <div className={s.techCardContent}>
                PostgreSQL, MongoDB, Mssql
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textAmber}`}>Cloud</div>
              <div className={s.techCardContent}>AWS, Docker, CI/CD</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textRose}`}>AI</div>
              <div className={s.techCardContent}>OpenAi, Vector DBs</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textCyan}`}>Tools</div>
              <div className={s.techCardContent}>
                VS Code, Android Studio, Xcode, Figma
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
