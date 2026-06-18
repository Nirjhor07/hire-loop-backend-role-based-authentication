import { DashboarbSideBar } from "../Componenets/Dashboard/DashboarbSideBar";


export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex min-h-screen">
        <DashboarbSideBar />
        <main>{children}</main>
      </div>
    </>
  );
}
