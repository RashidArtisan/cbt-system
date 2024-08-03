import { SignedIn, SignOutButton } from "@clerk/nextjs";
import * as React from "react";

const Dashboard = () => {
  return (
    <div>
      AdminDashboard
      <SignedIn>
        <SignOutButton>
          <button>Sign Out</button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
};

export default Dashboard;
