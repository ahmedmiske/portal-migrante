import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./routes/home";
import Servicios from "./routes/servicios";
import Users from "./routes/users";
import NewUser from "./routes/users.new";
import LoginUser from "./routes/users.login";
import Contacto from "./routes/contacto";
import Sobre from "./routes/sobre";
import Anuncios from "./routes/anuncios";
import Observatorio from "./routes/observatorio";
import AyuntamientosPage from "./routes/ayuntamientos";
import OrganizationsPage from "./routes/organizations";
import NewOrganizationPage from "./routes/organizations.new";
import ServiceInfoPage from "./routes/service-info";
import AsociacionesPage from "./routes/asociaciones";
import ForoMigrantesPage from "./routes/foro";
import CulturaVascaPage from "./routes/cultura-vasca";
import LegalTermsPage from "./routes/legal-terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "servicios", element: <Servicios /> },
      { path: "servicios/salud", element: <ServiceInfoPage serviceId="salud" /> },
      { path: "servicios/vivienda", element: <ServiceInfoPage serviceId="vivienda" /> },
      { path: "servicios/empleo", element: <ServiceInfoPage serviceId="empleo" /> },
      { path: "servicios/educacion", element: <ServiceInfoPage serviceId="educacion" /> },
      { path: "servicios/legal", element: <ServiceInfoPage serviceId="legal" /> },
      { path: "servicios/asociaciones", element: <AsociacionesPage /> },
      { path: "foro", element: <ForoMigrantesPage /> },
      { path: "cultura-vasca", element: <CulturaVascaPage /> },
      { path: "anuncios", element: <Anuncios /> },
      { path: "observatorio", element: <Observatorio /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contacto", element: <Contacto /> },
      { path: "condiciones", element: <LegalTermsPage /> },
      { path: "users", element: <Users /> },
      { path: "users/new", element: <NewUser /> },
      { path: "users/login", element: <LoginUser /> },
      { path: "organizations", element: <OrganizationsPage /> },
      { path: "organizations/new", element: <NewOrganizationPage /> },
      { path: "ayuntamientos", element: <AyuntamientosPage /> },
    ],
  },
]);

export default router;
