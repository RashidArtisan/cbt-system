import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex flex-col h-full items-center justify-center ">
      <SignIn
        forceRedirectUrl="/exam/welcome"
        appearance={{
          elements: {
            formFieldAction__password: { display: "none" },
            footerAction__signIn: { display: "none" },
            footerAction__havingTrouble: { display: "none" },
          },
        }}
      />
    </main>
  );
}
