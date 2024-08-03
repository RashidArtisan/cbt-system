import * as React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col h-full items-center justify-center ">
      {children}
    </main>
  );
};

export default layout;
