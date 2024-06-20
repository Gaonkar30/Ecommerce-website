import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/nav"
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      test
    </Layout>
  )
}
