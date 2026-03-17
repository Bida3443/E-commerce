// import Image from "next/image";

// import { Key } from "lucide-react";
// import { text } from "stream/consumers";

const Nav = [
  {
    text: "Home",
    Link: "https://k-dental-six.vercel.app/",
  },
  {
    text:"About",
    link:"https://k-dental-six.vercel.app/",
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
    <section className="flex flex-row items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex lg:flex-row flex-col space-x-100 justify-between items-center py-5">
        <div>
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
          className="w-7 h-7"><path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
        </div>
        <div className=" flex justify-between items-center space-x-10  text-2xl">
          {Nav.map((Nav,index)=>(
            
            <div className="flex gap-10" key={index}>
              
              <a href="/" className="hover:text-blue-700 transition-all duration-300">{Nav.text}</a>
              
            </div>
            
            
          ))}
          <div className="flex justify-end">
            <a href="/" className="bg-blue-700 border text-white hover:bg-white hover:text-blue-700 p-2 rounded-xl transition-all duration-300">Click Here</a>
          </div>
        </div>


      </main>
    </section>
  );
}
