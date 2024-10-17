import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"


export default async function AccountSettingsPage({}) {
    const session = await getServerSession(authOptions);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[550px] p-6">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your profile details below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="displayName">Display Name</Label>
                <Input 
                    id="displayName" 
                    placeholder="Name of your Account"
                    
                />
                <Label htmlFor="email">Email</Label>
                <Input 
                    id="email" 
                    placeholder="Email"
                    name="email"
                   
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
