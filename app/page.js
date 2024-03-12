import MainHeader from "@/components/MainHeader";
import Link from "next/link";

export default function Home() {
  return (
    <main 
      // className="flex justify-center flex-col items-center min-h-screen p-24"
    >
      <MainHeader />
      Welcome
      <Link href="/dashboard" >dashboard </Link>
    </main>
  );
}
