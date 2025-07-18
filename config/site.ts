export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Liberal Gun Owners of Michigan",
  description:
    "Guns are a fundamental right guaranteed by the Second Amendment to all Americans, not just MAGATs. We are liberal and leftist gun owners in Michigan, collaborating for community and honing our skills.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    // {
    //   label: "Events",
    //   href: "/events",
    // },
    // {
    //   label: "Resources",
    //   href: "/resources",
    // },
  ],
  navButtonItems: {
    contact: {
      label: "Get in Touch!",
      href: "/contact",
    },
    join: {
      label: "Request to Join",
      href: "/join",
    },
    store: {
      label: "Store",
      href: "https://lgomi-merch.printful.me/",
    },
  },
};
