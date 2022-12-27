import Dashboard from "./Pages/Dashboard";

const pageRoutes = [
  { path: "dashboard", element: <Dashboard /> },
  { path: "*", element: <>Page not found</> },
];

export default pageRoutes;
