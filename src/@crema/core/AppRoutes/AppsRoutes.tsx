import React from "react";
import { Navigate } from "react-router-dom";
import { RoutePermittedRole } from "@crema/constants/AppEnums";

const Mail = React.lazy(() => import("../../../modules/apps/Mail"));
const ToDo = React.lazy(() => import("../../../modules/apps/ToDo"));
const Contact = React.lazy(() => import("../../../modules/apps/Contact"));
const ScrumBoard = React.lazy(() => import("../../../modules/apps/ScrumBoard"));
const Chat = React.lazy(() => import("../../../modules/apps/Chat"));
const Wall = React.lazy(() => import("../../../modules/apps/Wall"));
const Calendar = React.lazy(() => import("../../../modules/apps/Calendar"));
const CompanyGroup = React.lazy(
  () => import("../../../modules/apps/CompanyGroup/index")
);
const SiteMaster = React.lazy(
  () => import("../../../modules/apps/SiteMaster/index")
);
const BuildingMaster = React.lazy(
  () => import("../../../modules/apps/BuildingMaster/index")
);
const FloorMaster = React.lazy( 
  () => import("../../../modules/apps/FloorMaster/index")
);
const RoomMaster = React.lazy(
  () => import("../../../modules/apps/RoomMaster/index")
);
const Location = React.lazy(
  () => import("../../../modules/apps/Location/index")
);
const LayoutView = React.lazy(
  () => import("../../../modules/apps/LayoutView/index")
);
const Dashboard = React.lazy(
  () => import("../../../modules/dashboards/Home/index")
);
const AssetCategories = React.lazy(
  () => import("../../../modules/apps/AssetCategory/index")
);
const AssetSubCategories = React.lazy(
  () => import("../../../modules/apps/AssetSubCategory/index")
);
const BrandMaster = React.lazy(
  () => import("../../../modules/apps/BrandMaster/index")
);
const ModelMaster = React.lazy(
  () => import("../../../modules/apps/ModelMaster/index")
);

const DepartmentMaster = React.lazy(
  () => import("../../../modules/apps/DepartmentMaster/index")
);
const EmployeeMaster = React.lazy(
  () => import("../../../modules/apps/EmployeeMaster/index")
);
const SupplierMaster = React.lazy(
  () => import("../../../modules/apps/SupplierMaster/index")
);
const CustomerMaster = React.lazy(
  () => import("../../../modules/apps/CustomerMaster/index")
);
const Receipt = React.lazy(() => import("../../../modules/apps/Receipt/index"));
const AssetRegister = React.lazy(
  () => import("../../../modules/apps/AssetRegister/index")
);
const AssetRegisterForm = React.lazy(
  () => import("../../../modules/apps/AssetRegister/RegisterForm/Index")
);
const AddReceipt = React.lazy(
  () => import("../../../modules/apps/Receipt/AddEditProduct/index")
);

const Projects = React.lazy(
  () => import("../../../modules/apps/Projects/index")
);

const Employees = React.lazy(
  () => import("../../../modules/apps/Employees/index")
);

const ProjectTasks = React.lazy(
  () => import("../../../modules/apps/ProjectTasks/index")
);
const Brand = React.lazy(
  () => import("../../../modules/apps/Brands")
);
const Models = React.lazy(
  () => import("../../../modules/apps/Models")
);
const Status = React.lazy(
  () => import("../../../modules/apps/Status")
);
const Complaints = React.lazy(
  () => import("../../../modules/apps/Complaints")
);
const ProjectReports = React.lazy(
  () => import("../../../modules/apps/customer/index")
);

const EmployeeReports = React.lazy(
  () => import("../../../modules/apps/EmployeeReports/index")
);
const LowStock = React.lazy(
  () => import("../../../modules/apps/LowStockProduct/index")
);
const EditTechnician = React.lazy(
  () => import("../../../modules/apps/ModelMaster/UpdateItem/index")
);
const AddTechnician = React.lazy(
  () => import("../../../modules/apps/ModelMaster/AddItem/index")
);

const Purchase = React.lazy(
  () => import('../../../modules/apps/Purchase/index')
)

export const appsConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      "/apps/mail/label/:label",
      "/apps/mail/label/:label/:id",
      "/apps/mail/:folder",
      "/apps/mail/:folder/:id",
    ],
    element: <Mail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/mail",
    element: <Navigate to="/apps/mail/inbox" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      "/apps/todo/label/:label",
      "/apps/todo/label/:label/:id",
      "/apps/todo/:folder",
      "/apps/todo/:folder/:id",
    ],
    element: <ToDo />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      "/apps/calender/label/:label",
      "/apps/calender/label/:label/:id",
      "/apps/calender/:folder",
      "/apps/calender/:folder/:id",
    ],
    element: <Calendar />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/todo",
    element: <Navigate to="/apps/todo/all" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/calender",
    element: <Navigate to="/apps/calender/all" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/contact/folder/:name", "/apps/contact/label/:name"],
    element: <Contact />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/contact",
    element: <Navigate to="/apps/contact/folder/all" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/chat"],
    element: <Chat />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/scrum-board/:id", "/apps/scrum-board"],
    element: <ScrumBoard />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/wall"],
    element: <Wall />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/company-group",
    element: <CompanyGroup />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/sitemaster",
    element: <SiteMaster />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/building-master",
    element: <BuildingMaster />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/room-master",
    element: <RoomMaster />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/technician-master",
    element: <ModelMaster />,
  },
  // {
  //   permittedRole: RoutePermittedRole.User,
  //   path: "/apps/layout-view",
  //   element: <LayoutView />,
  // },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/dashboard",
    element: <Dashboard />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/asset-categories",
    element: <AssetCategories />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/asset-subcategories",
    element: <AssetSubCategories />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/brand-masters",
    element: <BrandMaster />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/model-masters",
    element: <ModelMaster />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/department-masters",
    element: <DepartmentMaster />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/employee-masters",
    element: <EmployeeMaster />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/supplier-masters",
    element: <SupplierMaster />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/customer-masters",
    element: <CustomerMaster />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/receipt",
    element: <Receipt />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/add-receipt",
    element: <AddReceipt />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/asset-register",
    element: <AssetRegister />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/register-form-asset",
    element: <AssetRegisterForm />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/service_entry",
    element: <Projects />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/add_customer",
    element: <ProjectReports />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/projects/:projectID/tasks",
    element: <ProjectTasks />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/inventory/products",
    element: <Employees />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/inventory/category",
    element: <FloorMaster />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path:'/apps/inventory/sub_category',
    element:<LayoutView/>
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/checkout",
    element: <EmployeeReports />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/service-details",
    element: <Mail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/company",
    element: < Brand/>,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/model",
    element: < Models/>,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/status",
    element: < Status/>,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/complaints",
    element: < Complaints/>,
  },
  {
    permittedRole:RoutePermittedRole.User,
    path:"/apps/inventory/lowstock",
    element:<LowStock/>
  },
  {
    permittedRole:RoutePermittedRole.User,
    path:"/apps/technician/create-technician",
    element:<AddTechnician/>
  },
  {
    permittedRole:RoutePermittedRole.User,
    path:"/apps/technician/:id/update-technician",
    element:<EditTechnician/>
  },
  {
    permittedRole:RoutePermittedRole.User,
    path:'/apps/purchase',
    element:<Purchase/>
  }
];
