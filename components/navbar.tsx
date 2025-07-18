"use client";

import { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Link } from "@heroui/react";
import { link as linkStyles } from "@heroui/theme";
import { button as buttonStyles } from "@heroui/theme";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { contact, join, store } = siteConfig.navButtonItems;

  const navbarMenuItems = siteConfig.navItems.map((item, index) => (
    <NavbarMenuItem key={index}>
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
    </NavbarMenuItem>
  ));

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="LGOMi icon"
              height={45}
              src="/lgomi-icon-blue.png"
              width={120}
            />
          </NextLink>
        </NavbarBrand>
        <NavbarMenu className="lg:flex gap-4 justify-start ml-2">
          {navbarMenuItems}
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarMenuItems}
      </NavbarContent>

      <NavbarContent className="sm:flex basis-1/5 sm:basis-full" justify="end">
        <Link
          className={`${buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "shadow",
          })} font-bold hidden`}
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
          })} font-bold hidden`}
          href={join.href}
        >
          {join.label}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })} font-bold`}
          href={store.href}
        >
          {store.label}
        </Link>
      </NavbarContent>
    </HeroUINavbar>
  );
};
