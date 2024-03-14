import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main 
      // className="flex justify-center flex-col items-center min-h-screen p-24"
    >
      <Navbar />
      Welcome
      <Link href="/dashboard" >dashboard </Link>
    </main>
  );
}
