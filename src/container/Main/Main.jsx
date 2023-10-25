import { useRoutes } from "react-router-dom";
import routes from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "redux/someReducer";

const Main = () => {
  const allPages = useRoutes(routes);

  return <main>{allPages}</main>;
};

export default Main;
