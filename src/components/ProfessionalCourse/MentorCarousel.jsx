import * as React from "react"
import TeacherCard from "./TeacherCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function MentorCarousel({children}) {
  return (
    <Carousel className="md:basis-1/2 lg:basis-0 "
    >
      <CarouselContent>
       
         <div>
            {children}
             </div>
         
       
      </CarouselContent>
      
    </Carousel>
  )
}

export default MentorCarousel;;
