

export interface ImageThumbnailProps {
   imageUrl : string,
   toggleImageModal : Function
}

export interface ExhibitorHeaderProps {
  manufacturerLogo: string,
  modelLogo : string
}

export interface ExhibitorProps {
   model : string
}

export interface ExhibitorFooterProps {
   maxSpeed : number,
   maxSpeedUnit : string,
   accelerationRange : string,
   acceletarionTime : string,
   powerLegend : string,
   powerValue : string
}

export interface PaginatorProps {
   onPreviousClick : Function,
   onNextClick : Function
 }
 
export interface CharacteristicsProps {
   engineType : string,
   enginePower : string,
   fuelTankCapacity : string,
   assemblyFlag : string,
   width : string,
   length : string,
   height : string,
   weight : string
}

export interface AboutProps {
   about : string,
   photos : string[]
}
