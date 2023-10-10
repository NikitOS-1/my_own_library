import LoadingScreen from "./components/LoadingScreen";
import { Suspense, lazy } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/Home/Home")));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Error />,
  },
];
