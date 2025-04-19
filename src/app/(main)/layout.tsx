import { auth } from "@clerk/nextjs/server";
import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

const MainLayout = async ({ children }: PropsWithChildren) => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
