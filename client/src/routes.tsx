// Admin Imports
import Dashboard from "views/admin/Dashboard";
import AddEvent from "views/admin/AddEvent"
import ViewEvent from "views/admin/ViewEvent"
import EditEvent from "views/admin/EditEvent"

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import { MdHome, MdLock, MdReport } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { BiCctv } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Add Event",
    layout: "/admin",
    path: "addEvent",
    icon: <MdHome className="h-6 w-6" />,
    component: <AddEvent/>,
  },
  {
    name: "Events Schedule",
    layout: "/admin",
    path: "viewEvents",
    icon: <MdHome className="h-6 w-6" />,
    component: <ViewEvent/>,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Edit Event",
    layout: "/admin",
    path: "editEvent",
    icon: <MdLock className="h-6 w-6" />,
    component: <EditEvent />,
  },
  
];
export default routes;
