"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarStyles as s } from "@/public/dummyStyles";
import {
  CloseIcon,
  ExperienceIcon,
  HomeIcon,
  IconProps,
  MailIcon,
  MenuIcon,
  ProjectsIcon,
  ToolsIcon,
  UserIcon,
} from "../icons";
import { TypingAnimation } from "./ui/typing-animation";
import { socials } from "@/lib/constants";

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-sidebar") &&
        !target.closest(".mobile-menu-target")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileMenuOpen]);

  const navItems: {
    href: string;
    label: string;
    Icon: React.ComponentType<IconProps>;
  }[] = [
    { href: "/", label: "Home", Icon: HomeIcon },
    { href: "/projects", label: "Projects", Icon: ProjectsIcon },
    { href: "/experience", label: "Experience", Icon: ExperienceIcon },
    { href: "/tools", label: "Tools", Icon: ToolsIcon },
    { href: "/about", label: "About", Icon: UserIcon },
    { href: "/contact", label: "Contact", Icon: MailIcon },
  ];

  return (
    <>
      <div className={s.mobileTopNav}>
        <div className={s.mobileTopNavInner}>
          <div className={s.mobileAvatarContainer}>
            <div className={s.mobileAvatar}>
              <Image
                src="/timothy-img.png"
                alt="Timothy avatar"
                width={40}
                height={40}
                className={s.mobileAvatarImage}
                priority
              />
            </div>
            <div className="">
              <div className={s.mobileName}>Timothy Mbachu</div>
              <TypingAnimation
                className={s.mobileTyping}
                words={["Web", "Mobile", "Fullstack"]}
                typeSpeed={50}
                deleteSpeed={150}
                pauseDelay={2000}
                loop
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.mobileSpacer}></div>
      <aside className={s.desktopSidebar} aria-label="desktop-sidebar">
        <div className={s.desktopAvatarContainer}>
          <div className={s.desktopAvatar}>
            <Image
              src="/timothy-img.png"
              alt="Timothy avatar"
              width={48}
              height={48}
              className={s.desktopAvatarImage}
              priority
            />
          </div>
          <div className="">
            <div className={s.desktopName}>Timothy Mbachu</div>
            <TypingAnimation
              className={s.desktopTyping}
              words={["Web", "Mobile", "Fullstack"]}
              typeSpeed={50}
              deleteSpeed={150}
              pauseDelay={2000}
              loop
            />
          </div>
        </div>
        <nav
          id="desktop-sidebar"
          className={s.navContainer}
          aria-label="Primary"
        >
          <ul className={s.navList}>
            {navItems.map(({ href, label, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${s.navItem} ${pathname === href ? s.navItemActive : s.navItemInactive}`}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  <Icon className={s.navIcon} />
                  <span className={s.navLabel}>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={s.connectLabel}>Connect</div>
          <ul className={s.socialList}>
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className={s.socialItem}
                  title={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.imgSrc ? (
                    <Image
                      src={social.imgSrc}
                      alt={social.label}
                      width={24}
                      height={24}
                      className={s.socialIcon}
                    />
                  ) : (
                    <svg
                      className={s.socialIcon}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={social.svgPath} />
                    </svg>
                  )}
                  <span className={s.socialLabel}>{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div
        className={`${s.mobileOverlay} ${isMobileMenuOpen ? s.mobileOverlayVisible : s.mobileOverlayHidden}`}
      >
        <div
          className={`${s.mobileOverlayBg} ${isMobileMenuOpen ? s.mobileOverlayBgVisible : s.mobileOverlayBgHidden}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`${s.mobileSidebar} ${isMobileMenuOpen ? s.mobileSidebarVisible : s.mobileSidebarHidden}`}
        >
          <div className={s.mobileSidebarHeader}>
            <div className={s.mobileHeaderInner}>
              <div className={s.mobileAvatarContainer}>
                <div className={s.mobileAvatar}>
                  <Image
                    src="/timothy-img.png"
                    alt="Timothy avatar"
                    width={40}
                    height={40}
                    className={s.mobileAvatarImage}
                    priority
                  />
                </div>
                <div className="">
                  <div className={s.mobileName}>Timothy Mbachu</div>
                  <TypingAnimation
                    className={s.mobileTyping}
                    words={["Web", "Mobile", "Fullstack Development"]}
                    typeSpeed={50}
                    deleteSpeed={150}
                    pauseDelay={2000}
                    loop
                  />
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={s.mobileCloseButton}
                aria-label="Close Menu"
              >
                <CloseIcon className={s.mobileCloseIcon} />
              </button>
            </div>
          </div>
          <div className={s.mobileContent}>
            <nav className="mb-8">
              <div className={s.mobileSectionLabel}>Home</div>
              <ul className={s.mobileNavList}>
                {navItems.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`${s.mobileNavItem} ${pathname === href ? s.navItemActive : s.navItemInactive}`}
                      aria-label={pathname === href ? "page" : undefined}
                    >
                      <Icon className={s.mobileNavIcon} />
                      <span className={s.mobileNavLabel}>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={s.mobileSocialSection}>
              <div className={s.mobileSectionLabel}>Connect</div>
              <div className={s.mobileSocialList}>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={s.mobileSocialItem}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      className={s.mobileSocialIcon}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={social.svgPath} />
                    </svg>
                    <span className={s.mobileSocialText}>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={s.mobileFooter}>
            <div className={s.mobileFooterLabel}>Reach out &rarr;</div>
            <div className={s.mobileFooterText}>
              <div className="">Made by Timothy | 2026</div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.bottomNav}>
        <div className={s.bottomNavContainer}>
          <div className={s.bottomNavInner}>
            <div className={s.bottomNavBar}>
              <div className={s.bottomNavGrid}>
                {navItems.map(({ href, label, Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`${s.bottomNavLink} ${pathname === "href" ? s.bottomNavLinkActive : s.bottomNavLinkInactive}`}
                    aria-label="label"
                  >
                    <Icon className={s.bottomNavIcon} />
                  </Link>
                ))}
              </div>
              <div className={s.bottomNavDivider}></div>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={s.bottomMenuButton}
                aria-label="Open Menu"
              >
                <MenuIcon className={s.bottomMenuIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
