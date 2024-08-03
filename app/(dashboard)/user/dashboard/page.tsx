import { SignedIn, SignOutButton } from "@clerk/nextjs";
import * as React from "react";

const Dashboard = () => {
  return (
    <div>
      <SignedIn>
        <SignOutButton redirectUrl="/sign-in" />
      </SignedIn>
    </div>
  );
};

export default Dashboard;
