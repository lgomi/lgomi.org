export const forms = {
  contact: [
    {
      errorMessage: "Please enter a valid email address",
      fieldType: "input",
      id: "email",
      label: "Email",
      placeholder: "johnbrown123@example.com",
      required: true,
      type: "email",
      validation: () => null,
    },
    {
      errorMessage: "Please enter your name",
      fieldType: "input",
      id: "name",
      label: "Name",
      placeholder: "John Brown",
      required: true,
      type: "text",
      validation: () => null,
    },
    {
      errorMessage: "Please enter a subject for your inquiry",
      fieldType: "input",
      id: "subject",
      label: "Subject",
      placeholder: "I would like to talk about...",
      required: true,
      type: "text",
      validation: () => null,
    },
    {
      fieldType: "textarea",
      id: "message",
      label: "Message",
      placeholder: "Here are details about my inquiry...",
      required: true,
      type: undefined,
      validation: (value: string) => {
        if (value.length < 20) return "Too short. Please elaborate.";
        if (value.length > 3000)
          return "Too many characters. Max character count: 3000.";
      },
    },
  ],
  join: {
    personal: [
      {
        errorMessage: "Please enter a valid email address",
        fieldType: "input",
        id: "email",
        label: "Email",
        placeholder: "johnbrown123@example.com",
        required: true,
        type: "email",
        validation: () => null,
      },
      {
        errorMessage: "Please enter your name",
        fieldType: "input",
        id: "name",
        label: "Name",
        placeholder: "John Brown",
        required: true,
        type: "text",
        validation: () => null,
      },

      {
        errorMessage: "Please tell us where you're from",
        fieldType: "select",
        id: "region",
        label: "Region",
        placeholder: "Choose your region...",
        required: true,
        validation: () => null,
        options: [
          {
            key: "southeast",
            label: "Southeast - Detroit, Ann Arbor, Flint",
            counties: [
              "Genesee",
              "Lapeer",
              "Livingston",
              "Macomb",
              "Monroe",
              "Oakland",
              "St. Clair",
              "Washtenaw",
              "Wayne",
            ],
          },
          {
            key: "central",
            label: "Central - Lansing, Jackson",
            counties: [
              "Clinton",
              "Eaton",
              "Gratiot",
              "Hillsdale",
              "Ingham",
              "Jackson",
              "Lenawee",
              "Shiawassee",
            ],
          },
          {
            key: "southwest",
            label: "Southwest - Kalamazoo, Battle Creek",
            counties: [
              "Allegan",
              "Barry",
              "Berrien",
              "Branch",
              "Calhoun",
              "Cass",
              "Kalamazoo",
              "St. Joseph",
              "Van Buren",
            ],
          },

          {
            key: "west",
            label: "West - Grand Rapids, Holland, Muskegon",
            counties: [
              "Clare",
              "Ionia",
              "Isabella",
              "Kent",
              "Lake",
              "Mason",
              "Mecosta",
              "Montcalm",
              "Muskegon",
              "Newaygo",
              "Oceana",
              "Osceola",
              "Ottawa",
            ],
          },
          {
            key: "east",
            label: "East - Saginaw, Bay City, Midland",
            counties: [
              "Alcona",
              "Arenac",
              "Bay",
              "Gladwin",
              "Huron",
              "Iosco",
              "Midland",
              "Ogemaw",
              "Oscoda",
              "Saginaw",
              "Sanilac",
              "Tuscola",
            ],
          },
          {
            key: "north",
            label: "North - Traverse City, Alpena",
            counties: [
              "Alpena",
              "Antrim",
              "Benzie",
              "Charlevoix",
              "Cheboygan",
              "Crawford",
              "Emmet",
              "Grand Traverse",
              "Kalkaska",
              "Leelanau",
              "Manistee",
              "Missaukee",
              "Montmorency",
              "Otsego",
              "Presque Isle",
              "Roscommon",
              "Wexford",
            ],
          },
          {
            key: "upper",
            label: "Upper Peninsula",
            counties: ["All counties in the Upper Peninsula"],
          },
          {
            key: "nonmichigander",
            label: "I do not live in Michigan",
            counties: undefined,
          },
        ],
      },
      {
        errorMessage: null,
        fieldType: "input",
        id: "city",
        label: "City",
        placeholder: "City (optional)",
        required: false,
        type: "text",
        validation: () => null,
      },
    ],
    interview: [
      {
        fieldType: "textarea",
        id: "interest",
        label: "What interests you in joining Liberal Gun Owners of Michigan?",
        placeholder:
          "I want to get my CPL. I want to train others in firearm safety. I want to make friends and shoot guns...",
        required: true,
        type: undefined,
        validation: (value: string) => {
          if (value.length < 20) return "Too short. Please elaborate.";
          if (value.length > 3000)
            return "Too many characters. Max character count: 3000.";
        },
      },
      {
        fieldType: "textarea",
        id: "issues",
        label: "What political and social issues are most important to you?",
        placeholder:
          "I feel strongly about workers' rights, equality for all, protecting abortion access, fighting fascism...",
        required: true,
        type: undefined,
        validation: (value: string) => {
          if (value.length < 20) return "Too short. Please elaborate.";
          if (value.length > 3000)
            return "Too many characters. Max character count: 3000.";
        },
      },
      {
        fieldType: "select",
        id: "experience",
        label:
          "What is your experience (if any) with firearms handling and safety?",
        placeholder: "Choose a level of experience...",
        required: true,
        type: undefined,
        validation: () => null,
        options: [
          {
            key: "none",
            label: "None",
          },
          {
            key: "beginner",
            label: "Beginner",
          },
          {
            key: "novice",
            label: "Novice",
          },
          {
            key: "intermediate",
            label: "Intermediate",
          },
          {
            key: "advanced",
            label: "Advanced",
          },
          {
            key: "expert",
            label: "Expert",
          },
        ],
      },
    ],
    socials: {
      active: [
        {
          fieldType: "input",
          iconPath: "/discord-logo.png",
          id: "discord",
          label: "Discord",
          placeholder: "johnbrown123",
          required: false,
          type: "text",
          validation: () => null,
        },
        {
          fieldType: "input",
          iconPath: "/signal-logo.png",
          id: "signal",
          label: "Signal",
          placeholder: "@johnbrown123.45",
          required: false,
          type: "text",
          validation: () => null,
        },
      ],
      passive: [
        {
          fieldType: "input",
          iconPath: "/bluesky-logo.png",
          id: "bluesky",
          label: "BlueSky",
          placeholder: "@johnbrown123.bsky.social",
          required: false,
          type: "text",
          validation: () => null,
        },
        {
          fieldType: "input",
          iconPath: "/reddit-logo.png",
          id: "reddit",
          label: "Reddit",
          placeholder: "u/johnbrown123",
          required: false,
          type: "text",
          validation: () => null,
        },
      ],
    },
    acknowledgements: [
      {
        fieldType: "checkbox",
        id: "rules",
        label:
          "I acknowledge this is gun club focused on education, safety, and community support.",
        required: true,
        validation: (value: string) => null,
      },
      {
        fieldType: "checkbox",
        id: "behavior",
        label:
          "I acknowledge that it is my personal responsibility to conduct myself safely and respectfully, both in-person and virtually, and to comply with all state and federal laws pertaining to the ownership, carry, and use of a firearm. I understand that my membership is subject to disciplinary action up to and including revocation for violations including (but not limited to) unsafe firearm handling practices; threats, bullying, or harassment of members; gaslighting; promotion of mis/disinformation; and espousing political and social ideologies that are at extreme odds with the purpose of this organization.",
        required: true,
        validation: (value: string) => null,
      },
    ],
  },
};
