import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <>
      <div>The request page not found</div>
      <Link href="/">Go to Login</Link>
    </>
  );
};

export default PageNotFound;
