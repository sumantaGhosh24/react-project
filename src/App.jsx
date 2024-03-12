import {BrowserRouter, Routes, Route} from "react-router-dom";

import {
  Accordion,
  AccordionMultipleSelection,
  Alert,
  Breadcrumbs,
  FileExplorer,
  GithubProfileFinder,
  Home,
  ImageSlider,
  JobBoard,
  LightDarkMode,
  LikeButton,
  Loader,
  LoadMoreData,
  Modal,
  MultiSelectInput,
  OtpLogin,
  Pagination,
  PasswordGenerator,
  ProgressBar,
  QrCodeGenerator,
  RandomColorGenerator,
  ScrollIndicator,
  ScrollTopAndBottom,
  ScrollToSection,
  SearchAutocomplete,
  StarRating,
  Stepper,
  Tabs,
  TreeView,
} from "./components";

const routes = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/accordion",
    component: <Accordion />,
  },
  {
    id: 3,
    path: "/accordion-multiple-selection",
    component: <AccordionMultipleSelection />,
  },
  {
    id: 4,
    path: "/modal",
    component: <Modal />,
  },
  {
    id: 5,
    path: "/tabs",
    component: <Tabs />,
  },
  {
    id: 6,
    path: "/random-color-generator",
    component: <RandomColorGenerator />,
  },
  {
    id: 7,
    path: "/scroll-indicator",
    component: <ScrollIndicator />,
  },
  {
    id: 8,
    path: "/search-autocomplete",
    component: <SearchAutocomplete />,
  },
  {
    id: 9,
    path: "/star-rating",
    component: <StarRating />,
  },
  {
    id: 10,
    path: "/tree-view",
    component: <TreeView />,
  },
  {
    id: 11,
    path: "/qr-code-generator",
    component: <QrCodeGenerator />,
  },
  {
    id: 12,
    path: "/scroll-top-and-bottom",
    component: <ScrollTopAndBottom />,
  },
  {
    id: 13,
    path: "/scroll-to-section",
    component: <ScrollToSection />,
  },
  {
    id: 14,
    path: "/load-more-data",
    component: <LoadMoreData />,
  },
  {
    id: 15,
    path: "/image-slider",
    component: <ImageSlider />,
  },
  {
    id: 16,
    path: "/github-profile-finder",
    component: <GithubProfileFinder />,
  },
  {
    id: 17,
    path: "/pagination",
    component: <Pagination />,
  },
  {
    id: 18,
    path: "/progress-bar",
    component: <ProgressBar />,
  },
  {
    id: 19,
    path: "/loader",
    component: <Loader />,
  },
  {
    id: 20,
    path: "/alert",
    component: <Alert />,
  },
  {
    id: 21,
    path: "/breadcrumbs",
    component: <Breadcrumbs />,
  },
  {
    id: 22,
    path: "/like-button",
    component: <LikeButton />,
  },
  {
    id: 23,
    path: "/light-dark-mode",
    component: <LightDarkMode />,
  },
  {
    id: 24,
    path: "/password-generator",
    component: <PasswordGenerator />,
  },
  {
    id: 25,
    path: "/multi-select-input",
    component: <MultiSelectInput />,
  },
  {
    id: 26,
    path: "/stepper",
    component: <Stepper />,
  },
  {
    id: 27,
    path: "/job-board",
    component: <JobBoard />,
  },
  {
    id: 28,
    path: "/otp-login",
    component: <OtpLogin />,
  },
  {
    id: 29,
    path: "/file-explorer",
    component: <FileExplorer />,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
