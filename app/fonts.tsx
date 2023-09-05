
import { Arsenal, Permanent_Marker, Norican } from 'next/font/google'
 
export const arsenal = Arsenal({  
  weight: ['400', '700'], 
  subsets: ['latin'] 
})

export const norican = Norican({
   weight: ['400'],
   subsets: ['latin'] ,
})

export const permanentMarker = Permanent_Marker({
  weight: ['400'], 
  subsets: ['latin'] ,
  display: 'swap'
});
