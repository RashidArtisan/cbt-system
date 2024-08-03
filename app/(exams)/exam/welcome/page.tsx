import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const Welcome = () => {
  return (
    <div>
      Welcome <SignOutButton />
    </div>
  );
};

export default Welcome;
