import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "./options";

export async function requireAdminSession() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "admin") {
    redirect("/");
  }

  return session;
}
