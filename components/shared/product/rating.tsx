// https://v0.dev/chat/PW7RbMctgbv
import React from 'react'
import { Star } from 'lucide-react'

const Rating = ({rating=0,size=6}:{rating:number,size?:number}) => {
    const fullStars=Math.floor(rating)
    const partialStar=rating % 1
    const emptyStar=5 - Math.ceil(rating)
  return (
    <div className='flex items-center' aria-label={`Rating: ${rating} out of 5 stars`}>
        {
            [...Array(fullStars)].map((_,i)=>(
                <Star key={`full-${i}`} className='w-6 h-6 fill-yellow-400 text-yellow-400'/>
 
            ))
        }
        {partialStar > 0 && (
            <div className='relative'>
                <Star className='w-6 h-6 text-yellow-400'/>
               <div className={`absolute top-0 left-0 overflow-hidden w-[${partialStar * 100}%]`}>
                 <Star className='w-6 h-6 fill-yellow-400 text-yellow-400' />
                </div>
            </div>
        )}
        {[...Array(emptyStar)].map((_,i)=>(
            <Star key={`empty-${i}`} className={`w-${size} h-${size} text-primary`}/>
        ))}
    </div>
  )
}

export default Rating