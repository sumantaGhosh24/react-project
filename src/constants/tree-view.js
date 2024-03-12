export const treeViewData = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about-us",
    children: [
      {
        label: "Profile",
        to: "/profile",
        children: [
          {
            label: "Portfolio",
            to: "/portfolio",
          },
        ],
      },
      {
        label: "Education",
        to: "/education",
      },
    ],
  },
  {
    label: "Contact Us",
    to: "/contact-us",
  },
];
