import Sidebar from "./_components/Sidebar";
import OrganisationSidebar from "./_components/OrganisationSidebar";
import Navbar from "./_components/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-screen">
      <Sidebar />
      <div className="pl-[60px] h-screen">
        <div className="flex gap-x-3 h-screen">
          <OrganisationSidebar />
          <div className="h-screen flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
