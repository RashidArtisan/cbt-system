import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      forceRedirectUrl="/user/dashboard"
      fallbackRedirectUrl="/admin/dashboard"
      appearance={{
        elements: {
          footerAction__havingTrouble: { display: "flex" },
        },
      }}
    />
  );
}
