import { DashboarbSideBar } from "../Componenets/Dashboard/DashboarbSideBar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex min-h-screen w-full">
        {/* Your Sidebar component */}
        <DashboarbSideBar />

        {/* 1. flex-1: Forces the main block to grow and fill the remaining space
          2. min-h-screen: Matches the sidebar's full-viewport height
          3. flex flex-col: Allows control over internal layout layouts
        */}
        <main className="flex-1 min-h-screen">{children}</main>
      </div>
    </>
  );
}
