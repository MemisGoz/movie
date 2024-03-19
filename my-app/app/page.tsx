
import Image from "next/image"
 
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Search from "@/components/Search"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="w-full relative">
      
        <AspectRatio ratio={16 / 9} className="bg-muted lg:h-[73.33%]">
        <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-1/3">
            <h1 className="text-center text-4xl">Movio</h1>
            <p>Search for movies and actors</p>
            <Search />
          </div>
        
       
       
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
     
    </main>
  );
}
