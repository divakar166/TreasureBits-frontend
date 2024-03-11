import RegistrationPage from "@/pages/registration";
import UsersPage from "@/pages/users";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RegistrationPage />
      <UsersPage />
    </main>
  );
}
