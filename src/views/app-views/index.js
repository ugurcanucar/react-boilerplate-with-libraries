import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./home"));
const Dashboard = React.lazy(() => import("./Dashboard"));

const routes = [
  {
    key: 1,
    path: "/home",
    element: <Home />,
  },
  {
    key: 2,
    path: "/dashboard",
    element: <Dashboard />,
  },
];
export const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
        <Route path={`*`} element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
