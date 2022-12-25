import { useRoutes } from "react-router-dom";
import pageRoutes from "./pageRoutes";
import ApplicationLayout from "./Layout/Layout";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const currentPage = useRoutes([
    { path: "/", children: [...pageRoutes] },
    { path: "", element: <Navigate to="/dashboard" /> },
  ]);

  return <ApplicationLayout>{currentPage}</ApplicationLayout>;
}

export default App;
