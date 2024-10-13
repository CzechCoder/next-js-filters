"use server";

import { HomeComponent } from "@/app/components/home";

export default async function Home() {
  return (
    <div className="home">
      <HomeComponent />
    </div>
  );
}
