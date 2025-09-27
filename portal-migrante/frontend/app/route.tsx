import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./routes/home";
import Servicios from "./routes/servicios";
import Users from "./routes/users";
import NewUser from "./routes/users.new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "servicios", element: <Servicios /> },
      { path: "users", element: <Users /> },
      { path: "users/new", element: <NewUser /> }
    ],
  },
]);

export default router;
