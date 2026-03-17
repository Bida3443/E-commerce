// import Image from "next/image";

import { Key } from "lucide-react";
import { text } from "stream/consumers";

const Nav = [
  {
    text: "Home",
    Link: "/",
  },
  {
    text:"About",
    link:"/",
  },
  {
    text:"Contact",
    link:"/"
  },
  {
    text:"Services",
    link:"/",
  },
  {
    text:"Blog",
    link:"/"
  },
]

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <div>
          {Nav.map((Nav,index)=>(
            <div key={index}>
              <div>{Nav.text}</div>
              <div>{Nav.link}</div>
            </div>
            
          ))}
        </div>
      </main>
    </div>
  );
}


