import Sidebar from "./_components/Sidebar";
import OrganisationSidebar from "./_components/OrganisationSidebar";
import Navbar from "./_components/Navbar";
import { RedirectToSignUp, SignedOut, SignedIn } from "@clerk/nextjs";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <SignedIn>
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
      </SignedIn>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
    </>
  );
};

export default DashboardLayout;
