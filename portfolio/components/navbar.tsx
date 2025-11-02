"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedinIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center gap-2" href="/">
            <Logo />
            <p className="font-semibold tracking-tight text-inherit">
              {siteConfig.name}
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-6 hidden gap-4 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-sm font-medium tracking-tight transition-colors hover:text-primary data-[active=true]:text-primary",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 items-center justify-end gap-4 sm:flex"
        justify="end"
      >
        <NavbarItem className="flex items-center gap-3">
          <Link
            isExternal
            aria-label="LinkedIn"
            className="text-default-500 transition-colors hover:text-primary"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon />
          </Link>
          <Link
            isExternal
            aria-label="GitHub"
            className="text-default-500 transition-colors hover:text-primary"
            href={siteConfig.links.github}
          >
            <GithubIcon />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 justify-end pl-4 sm:hidden">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-4 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <NextLink className="text-lg font-medium" href={item.href}>
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="mx-4 mt-8 flex gap-4">
          <Link
            isExternal
            className="flex items-center gap-2 text-sm text-default-500"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </Link>
          <Link
            isExternal
            className="flex items-center gap-2 text-sm text-default-500"
            href={siteConfig.links.github}
          >
            <GithubIcon size={18} />
            GitHub
          </Link>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
