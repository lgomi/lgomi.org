"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/react";
import { Link } from "@heroui/react";
import { link as linkStyles } from "@heroui/theme";
import { button as buttonStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const { contact, join } = siteConfig.navButtonItems;

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">
              LGO<span className="text-blue-300">Mi</span>
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="sm:flex basis-1/5 sm:basis-full" justify="end">
        <Link
          isDisabled
          className={`${buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "shadow",
          })} font-bold`}
          href={contact.href}
        >
          {contact.label}
        </Link>
        <Link
          isDisabled
          className={`${buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })} font-bold`}
          href={join.href}
        >
          {join.label}
        </Link>
      </NavbarContent>
    </HeroUINavbar>
  );
};
