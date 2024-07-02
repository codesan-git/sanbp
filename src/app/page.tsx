import Todos from "@/components/Todos";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default function Home() {
  return (
    <main>
      <LogoutLink>
        <Button variant={'destructive'}>Logout</Button>
      </LogoutLink>
      <Todos />
    </main>
  );
}
