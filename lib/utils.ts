import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project, projects } from "./projects-data";

// Shadcn utils
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// projects utils
/** Return a project by slug or null */
export function getProjectBySlug(
  slug: string | undefined | null,
): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  const project = projects.find((p) => p.slug === normalized) ?? null;
  return project;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}
/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}

// Others
export function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// compose email utils
export const email = "follow.timothy@gmail.com";
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
