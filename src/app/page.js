import Navbar from "@/components/shared/Navbar";
import HomePage from "@/components/shared/Home";
import Image from "next/image";
import Card from "./card/page";
import BookCard from "./card/page";

export default function Home() {
  return (
    <div className=" bg-slate-900">
      <HomePage></HomePage>
      <BookCard></BookCard>
    </div>
  );
}
