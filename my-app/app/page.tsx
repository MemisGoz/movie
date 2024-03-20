"use client"
import Image from "next/image"
 
import { AspectRatio } from "@/components/ui/aspect-ratio"
import NewSearch from "@/components/NewSearch"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="w-full absolute ">
      
        <AspectRatio ratio={16 / 9} className="bg-muted lg:h-[73.33%] ">
      
  
       
       
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>

        <div className="absolute  h-full text-center  left-1/2 transform  -translate-x-[50%] -translate-y-[73.33%] z-40 lg:w-1/3">
            <div className="flex flex-col justify-center h-auto">
            <h1 className="text-center text-4xl">Movio</h1>
            <p>Find your Movie, Tv-show and actor info here.</p>
            
            <NewSearch />
            </div>
          </div>
        
      </div>
     
    </main>
  );
}
