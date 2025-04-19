import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      {children}
    </main>
  );
};

export default AuthLayout;
