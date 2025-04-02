import { ReactNode } from "react";

export const clubResources = [
  {
    id: 1,
    title: "Club Rules",
    content: "club rules go here",
  },
  {
    id: 2,
    title: "FAQ",
    content: "faq goes here",
  },
];

export const externalResources = [
  {
    id: 1,
    title: "Buying Your First Firearm",
    subtitle: "Informational guides for making your first firearm purchase",
    resources: [],
  },
  {
    id: 2,
    title: "Firearm Safety",
    subtitle: "Resources for safe handling and storage of firearms",
    resources: [
      {
        id: 1,
        title: "test resource 1",
        href: "https://www.google.com",
        description: "this is a test",
      },
      {
        id: 2,
        title: "test resource 2",
        href: "https://www.google.com/mail",
        description: "this is a test",
      },
    ],
  },
  {
    id: 3,
    title: "Firearms and Accessories",
    subtitle:
      "Companies selling firearms and accessories that lean left or are at least politically neutral",
    resources: [],
  },
  {
    id: 4,
    title: "Local Businesses",
    subtitle:
      "Michigan businesses that are left-leaning, 2SLGBTQIA+ friendly, and/or support social equity and the working class",
    resources: [],
  },
  {
    id: 5,
    title: "Liberal Gun Youtubers",
    subtitle:
      "Youtube channels and other video media from liberal gun enthusiasts",
    resources: [],
  },
  {
    id: 6,
    title: "Liberal Podcasts",
    subtitle:
      "Podcasts about guns, politics, history, and social issues from a left-leaning perspective",
    resources: [],
  },
];

export type TClubResource = {
  id: number;
  title: string;
  content: string | ReactNode;
};

type TExternalResource = {
  id: number;
  title: string;
  href: string;
  description: string;
};

type TSection = {
  id: number;
  title: string;
  subtitle?: string;
  resources?: TExternalResource[];
};

export type TClubResources = TClubResource[];

export type TExternalResources = TSection[];
