import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/nav";
import Layout from "@/components/Layout";
import { sendError } from "next/dist/server/api-utils";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>Hello,<b>{session.user.name}</b> </h2>
        <div className="flex bg-gray-300 gap-1 text-black">
          <img src={session.user.image} alt="" className="w-8 h-8 rounded-lg overflow-hidden"></img>
          <span className="py-1 px-2">
          {session?.user?.name}
          </span>
       
        </div>
      </div>
    </Layout>
  );
}
