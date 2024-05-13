"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
// import { Metadata } from "next";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "You can be!",
//   description: "Your path to be the best QA is ready!",
// };
export function StatCheckbox({
  label,
  message,
  id,
  onChange,
}: {
  label: string;
  message: string;
  id: string;
  onChange: (checked: string | boolean) => void;
}) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id={`input${id}`}
        onCheckedChange={(checked) => {
          return onChange(checked);
        }}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={`input${id}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          <p className="text-xs text-muted-foreground">{message}</p>
        </label>
      </div>
    </div>
  );
}

export default function YourStatsPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  // check if all stats are checked

  const [checkedCounter, setCheckedCounter] = useState<number>(0);

  const handleCheckedChange = (checked: string | boolean) => {
    setCheckedCounter((prevCount) => (checked ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div>
      <Card className="w-full max-w-sm lg:max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Hey {name}</CardTitle>
          <CardDescription>
            Let&apos;s make your checklist, if you are ready to finish your DA
            run.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <span>
            Counter of your stats:{" "}
            <span className="bg-green-300 py-1 px-2 rounded-md">
              {checkedCounter}
            </span>
          </span>
          <div className="pt-4 grid gap-2">
            <StatCheckbox
              id="1"
              label="I am ready to test"
              message="My brain is full of knowledge!"
              onChange={handleCheckedChange}
            />
            <StatCheckbox
              id="2"
              label="I am next QA generation"
              message="Quality is my passion!"
              onChange={handleCheckedChange}
            />
            <StatCheckbox
              id="3"
              label="I love API"
              message="JSON, request, response, auth, I know it all!"
              onChange={handleCheckedChange}
            />
            <StatCheckbox
              id="4"
              label="I am ready to automate whole world"
              message="Playwright, locators, selectors, I know it all!"
              onChange={handleCheckedChange}
            />
            <StatCheckbox
              id="5"
              label="I believe in CI/CD"
              message="Pipelines are my best friends!"
              onChange={handleCheckedChange}
            />
            <StatCheckbox
              id="6"
              label="I believe in myself"
              message="I am the best QA in the world!"
              onChange={handleCheckedChange}
            />
            {checkedCounter === 6 && (
              <div className="text-xl font-bold bg-green-300 p-4 rounded-md mt-8">
                <div className="text-4xl mb-2">🎉</div>{" "}
                <span>You are on the right path to be the best QA!</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
