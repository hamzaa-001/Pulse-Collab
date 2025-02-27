"use client";

import BoardList from "./_components/BoardList";
import EmptyOrg from "./_components/EmptyOrg";
import { useOrganization } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { RedirectToSignUp, SignedIn, SignedOut } from "@clerk/nextjs";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    query?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();
  return (
    <>
      <SignedIn>
        <div className="p-5 w-full h-[calc(100%-80px)]">
          {!organization ? (
            <EmptyOrg />
          ) : (
            <BoardList orgId={organization.id} query={searchParams} />
          )}
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
    </>
  );
};

export default DashboardPage;
