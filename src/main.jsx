import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./component/page/Dashboard/Dashboard";
import ManageTeam from "./component/page/ManageTeam/ManageTeam";
import Contacts from "./component/page/Contacts/Contacts";
import Invoices from "./component/page/Invoices/Invoices";
import Profile from "./component/page/Profile/Profile";
import Calendar from "./component/page/Calendar/Calendar";
import BarChart from "./component/page/BarChart/BarChart";
import PieChart from "./component/page/Pie Chart/PieChart";
import LineChart from "./component/page/Line Chart/LineChart";
import GeographyChart from "./component/page/Geography Chart/GeographyChart";
import FAQ from "./component/page/FAQ/FAQ";

// const router = createBrowserRouter([{path: "/", element:<App />,},]);


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App/>}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<ManageTeam />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />

      <Route path="form" element={<Profile />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ/>} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<GeographyChart />} />



    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);