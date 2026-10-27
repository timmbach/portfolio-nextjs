"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toolsPageStyles as s } from "@/public/dummyStyles";
import { CometCard } from "../components/ui/comet-card";

interface Tool {
  name: string;
  category: string;
  icon: string;
  href: string;
}

const tools: Tool[] = [
  {
    name: "VS Code",
    category: "IDE",
    icon: "/vscode.webp",
    href: "https://code.visualstudio.com",
  },
  {
    name: "MongoDB Compass",
    category: "Database Management",
    icon: "/mongodb.svg",
    href: "https://www.mongodb.com/products/tools/compass",
  },
  {
    name: "Slack",
    category: "Communication",
    icon: "/slack.webp",
    href: "https://slack.com",
  },
  {
    name: "Medium",
    category: "Writing",
    icon: "/medium.webp",
    href: "https://medium.com",
  },
  {
    name: "Android Studio",
    category: "IDE",
    icon: "/android.webp",
    href: "https://developer.android.com/studio",
  },
  {
    name: "Xcode",
    category: "IDE",
    icon: "/xcode.png",
    href: "https://apps.apple.com/us/app/xcode/id497799835",
  },
  {
    name: "Cursor",
    category: "IDE",
    icon: "/cursor.webp",
    href: "https://cursor.sh",
  },
  {
    name: "ChatGPT",
    category: "Productivity",
    icon: "/chatgpt.webp",
    href: "https://chat.openai.com",
  },
  {
    name: "Notion",
    category: "Productivity",
    icon: "/notion.webp",
    href: "https://notion.so",
  },
  {
    name: "Microsoft Teams",
    category: "Communication",
    icon: "/msteams.svg",
    href: "https://www.microsoft.com/en-us/microsoft-teams",
  },
  {
    name: "Gemini",
    category: "Productivity",
    icon: "/gemini.webp",
    href: "https://gemini.google.com",
  },
];

function ToolsPage() {
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.headerContainer}>
          {/* <h1 className={s.headerTitle}>Shovels</h1> */}
          <p className={s.headerSubtitle}>
            Tools I frequently use for day to day work
          </p>
        </div>
        <div className={s.toolsGrid}>
          {tools.map((tool) => (
            <CometCard key={tool.name}>
              <Link
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={s.toolCardLink}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className={s.toolIconContainer}>
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    width={56}
                    height={56}
                    className={s.toolIcon}
                  />
                </div>

                <div className={s.toolTextContainer}>
                  <h3 className={s.toolName}>{tool.name}</h3>
                  <p className={s.toolCategory}>{tool.category}</p>
                </div>
              </Link>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToolsPage;
