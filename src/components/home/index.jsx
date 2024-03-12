import {Link} from "react-router-dom";

import "./index.css";

const links = [
  {
    id: 1,
    path: "/",
    component: "Home",
  },
  {
    id: 2,
    path: "/accordion",
    component: "Accordion",
  },
  {
    id: 3,
    path: "/accordion-multiple-selection",
    component: "Accordion Multiple Selection",
  },
  {
    id: 4,
    path: "/modal",
    component: "Modal",
  },
  {
    id: 5,
    path: "/tabs",
    component: "Tabs",
  },
  {
    id: 6,
    path: "/random-color-generator",
    component: "Random Color Generator",
  },
  {
    id: 7,
    path: "/scroll-indicator",
    component: "Scroll Indicator",
  },
  {
    id: 8,
    path: "/search-autocomplete",
    component: "Search Autocomplete",
  },
  {
    id: 9,
    path: "/star-rating",
    component: "Star Rating",
  },
  {
    id: 10,
    path: "/tree-view",
    component: "Tree View",
  },
  {
    id: 11,
    path: "/qr-code-generator",
    component: "QR Code Generator",
  },
  {
    id: 12,
    path: "/scroll-top-and-bottom",
    component: "Scroll Top And Bottom",
  },
  {
    id: 13,
    path: "/scroll-to-section",
    component: "Scroll To Section",
  },
  {
    id: 14,
    path: "/load-more-data",
    component: "Load More Data",
  },
  {
    id: 15,
    path: "/image-slider",
    component: "Image Slider",
  },
  {
    id: 16,
    path: "/github-profile-finder",
    component: "Github Profile Finder",
  },
  {
    id: 17,
    path: "/pagination",
    component: "Pagination",
  },
  {
    id: 18,
    path: "/progress-bar",
    component: "Progress Bar",
  },
  {
    id: 19,
    path: "/loader",
    component: "Loader",
  },
  {
    id: 20,
    path: "/alert",
    component: "Alert",
  },
  {
    id: 21,
    path: "/breadcrumbs",
    component: "Breadcrumbs",
  },
  {
    id: 22,
    path: "/like-button",
    component: "Like Button",
  },
  {
    id: 23,
    path: "/light-dark-mode",
    component: "Light Dark Mode",
  },
  {
    id: 24,
    path: "/password-generator",
    component: "Password Generator",
  },
  {
    id: 25,
    path: "/multi-select-input",
    component: "Multi Select Input",
  },
  {
    id: 26,
    path: "/stepper",
    component: "Stepper",
  },
  {
    id: 27,
    path: "/job-board",
    component: "Job Board",
  },
  {
    id: 28,
    path: "/otp-login",
    component: "Otp Login",
  },
  {
    id: 29,
    path: "/file-explorer",
    component: "File Explorer",
  },
];

const Home = () => {
  return (
    <div className="h-container">
      <h1 className="h-heading">React Projects</h1>
      <div className="h-links">
        {links.map((link) => (
          <Link key={link.id} to={link.path} className="h-link-item">
            {link.component}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
