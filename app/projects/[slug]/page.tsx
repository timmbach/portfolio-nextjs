import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectDetailStyles as s } from "@/public/dummyStyles";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/utils";
import { ArrowLeft, ExternalLink, Package } from "lucide-react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { GithubIcon } from "@/app/icons";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

// The page itself does NOT await params — it only renders the shell.
export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        <div className="mb-8">
          <Link href="/projects" className={s.backButton}>
            <ArrowLeft className={s.backIcon} />
            Back to Projects
          </Link>
        </div>

        <Suspense fallback={<ProjectDetailSkeleton />}>
          <ProjectDetail params={params} />
        </Suspense>
      </div>
      <BackgroundBeams />
    </div>
  );
}

// The child awaits params — inside the Suspense boundary.
async function ProjectDetail({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <div className={s.projectHeader}>
        <div className={s.headerFlex}>
          <div className={s.headerLeft}>
            <div className={s.titleContainer}>
              <h1 className={s.projectTitle}>{project.title}</h1>
              <span
                className={`${s.statusBadge} ${project.status === "active" ? s.statusActive : s.statusInactive}`}
              >
                {project.status}
              </span>
            </div>
            <p className={s.projectDescription}>{project.description}</p>

            <div className={s.tagsContainer}>
              {project.tags.map((tag) => (
                <span key={tag} className={s.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={s.actionButtonsContainer}>
            {project.links.visit && (
              <Link
                href={project.links.visit}
                target="_blank"
                rel="noopener noreferrer"
                className={s.visitButton}
              >
                <ExternalLink className={s.buttonIcon} />
                Visit Live
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={s.imageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={s.projectImage}
        />
      </div>

      <div className={s.gridContainer}>
        <div className={s.mainContent}>
          <section>
            <h2 className={s.sectionTitle}>Project Overview</h2>
            <div className={s.prose}>
              <p className={s.proseText}>{project.detailedDescription}</p>
            </div>
          </section>
          <section>
            <h2 className={s.sectionTitle}>Learning Outcomes</h2>
            <div className={s.learningOutcomesGrid}>
              {project.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className={s.learningOutcomeCard}>
                  <div className={s.learningOutcomeNumber}>
                    <span className={s.learningOutcomeNumberText}>
                      {idx + 1}
                    </span>
                  </div>
                  <span className={s.learningOutcomeText}>{outcome}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className={s.sidebar}>
          <section>
            <h3 className={s.sidebarSectionTitle}>Tech Stack</h3>
            <div className={s.techStackContainer}>
              {project.techStack.map((tech) => (
                <span key={tech} className={s.techStackItem}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className={s.sidebarSectionTitle}>Project Links</h3>
            <div className={s.linksContainer}>
              {project.links.github && (
                <a
                  href={project.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={s.linkCard}
                >
                  <GithubIcon className={s.linkIcon} />
                  <span className={s.linkText}>View Source Code</span>
                </a>
              )}
              {project.links.visit && (
                <a
                  href={project.links.visit}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={s.linkCard}
                >
                  <ExternalLink className={s.linkIcon} />
                  <span className={s.linkText}>Live Demo</span>
                </a>
              )}
              {project.links.pypi && (
                <a
                  href={project.links.pypi}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={s.linkCard}
                >
                  <Package className={s.linkIcon} />
                  <span className={s.linkText}>Pypi Package</span>
                </a>
              )}
            </div>
          </section>

          <section className={s.sidebarSection}>
            <h3 className={s.sidebarSectionTitle}>Project Info</h3>
            <div className={s.projectInfoContainer}>
              <div>
                <p className={s.projectInfoLabel}>Author</p>
                <div className={s.authorContainer}>
                  <img
                    className={s.authorAvatar}
                    src={project.authorAvatar}
                    alt={project.author}
                  />
                  <p className={s.authorName}>{project.author}</p>
                </div>
              </div>
              <div>
                <p className={s.projectInfoLabel}>Status</p>
                <p className={s.projectInfoText}>{project.status}</p>
              </div>
              <div>
                <p className={s.projectInfoLabel}>Category</p>
                <p className={s.projectInfoText}>{project.tags[0]}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function ProjectDetailSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-10 w-2/3 rounded bg-zinc-800" />
      <div className="h-4 w-full rounded bg-zinc-800" />
      <div className="h-4 w-5/6 rounded bg-zinc-800" />
      <div className="h-64 w-full rounded bg-zinc-800" />
    </div>
  );
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
  };
}
