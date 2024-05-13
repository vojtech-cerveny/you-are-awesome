"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const [name, setName] = useState("");
  const router = useRouter();
  const handleInputChange = (event: any) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (name !== "") {
      router.push("/your-stats?name=" + name);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your name</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Name</Label>
          <Input
            id="email"
            type="email"
            placeholder="Your awesome name"
            required
            onChange={handleInputChange}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}
