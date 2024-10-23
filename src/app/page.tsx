import SingInButton from "@/components/SingInButton";
import { Card,  CardContent,  CardDescription,  CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession()
  if (session?.user) {
   return redirect("/dashboard");
  }
  return (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> 
  <Card className="w- [300 px] ">
    <CardHeader>
      <CardTitle>  Welcome to my course-work🎁! </CardTitle>
      <CardDescription> 
      this is my course-work, here you can pass tests written by AI
      </CardDescription>
    </CardHeader>
    <CardContent>
      <SingInButton text="Sign in with Google 😊"/>
    </CardContent>
  </Card>
  </div>
  );
  
  
}   