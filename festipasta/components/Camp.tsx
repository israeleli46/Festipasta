import Image from 'react';



interface CampProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  height?: number;
  width?: number;
  }
const CampSite = ({backgroundImage ,title , subtitle,width,height}:CampProps) => {
  return (
    <>
     
      <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}>
          <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10"/>    
      </div>
  
    </>
   
  )
}
const Camp = () => {
  return (
    <>
     <section className='2xl:max-container relative grid grid-cols-1 w-full h-full xl:my-35 sm:h-[700px]'> 
      <div className='hide-scrollbar flex gap-2 overflow-x-auto space-x-4 pb-50 sm:w-full sm:h-[500px] max-w-full max-h-full object-contain '>
               
        <CampSite       
         backgroundImage="bg-[url('/pic4.jpeg')] "
        title=""
        subtitle=""      
        />
        <CampSite
         backgroundImage="bg-[url('/pic3.jpeg')] "
        title=""
        subtitle=""
        />
      
        <CampSite
         backgroundImage="bg-[url('/pic5.jpeg')]"
        title=""
        subtitle=""
        />
        <CampSite
         backgroundImage="bg-[url('/pic2.jpeg')] "
        title=""
        subtitle=""
        />
   
       </div>
      
     </section>
    </>
   
  )
}

export default Camp