import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    // redirect('/api/auth/signin');
    return (
      <div>
        <h1>Not signed in</h1>
        <button>
        <a href="/api/auth/signin" >Sign in</a>
        </button>
      </div>
    )



  }
  return (
    <div>
      Signed In 😁
    </div>
  );
}
