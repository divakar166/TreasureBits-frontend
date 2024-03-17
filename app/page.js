import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main 
      className=""
    >
      <Navbar />
      Welcome
      <Link href="/dashboard" >dashboard </Link>
    </main>
  );
}
