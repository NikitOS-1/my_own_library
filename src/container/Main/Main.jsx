import { useRoutes } from "react-router-dom";
import routes from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "redux/someReducer";

const Main = () => {
  const allPages = useRoutes(routes);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.some.value);
  console.log(value);

  return (
    <main>
      <button onClick={() => dispatch(inc())}>+</button>
      {allPages}
    </main>
  );
};

export default Main;
