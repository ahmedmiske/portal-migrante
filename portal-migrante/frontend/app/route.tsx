import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./routes/home";
import Servicios from "./routes/servicios";
import Users from "./routes/users";
import NewUser from "./routes/users.new";
import Contacto from "./routes/contacto";
import Sobre from "./routes/sobre";
import Anuncios from "./routes/anuncios";
import Observatorio from "./routes/observatorio";
import AyuntamientosPage from "./routes/ayuntamientos";
import OrganizationsPage from "./routes/organizations";
import NewOrganizationPage from "./routes/organizations.new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "servicios", element: <Servicios /> },
      { path: "anuncios", element: <Anuncios /> },
      { path: "observatorio", element: <Observatorio /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contacto", element: <Contacto /> },
      { path: "users", element: <Users /> },
      { path: "users/new", element: <NewUser /> },
      { path: "organizations", element: <OrganizationsPage /> },
      { path: "organizations/new", element: <NewOrganizationPage /> },
      { path: "ayuntamientos", element: <AyuntamientosPage /> },
    ],
  },
]);

export default router;