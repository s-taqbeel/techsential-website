import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const HomeScreen = React.lazy(() => import("pages/HomeScreen"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homescreen" element={<HomeScreen />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
