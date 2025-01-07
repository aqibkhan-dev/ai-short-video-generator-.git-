import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";
import Header from "./dashboard/_components/Header";
import SideNav from "./dashboard/_components/SideNav";




export default function Home() {
  return (
    <div>
   <Header/>
   <SideNav/>
     </div>
  );
}
