import { useAuth } from "@/app/hooks/useAuth";
import React from "react";

const { user } = useAuth();

const Page = () => {
  return <div>page</div>;
};

export default Page;
