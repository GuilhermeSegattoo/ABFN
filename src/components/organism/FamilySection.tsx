import Image from "next/image"

const FamilySection = () => {
  return (
    <div  className="flex justify-center ">
    <Image
      src="/fm.png"
      alt="familia"
      width={1440}
      height={780}
      className="object-contain lg:mt-[10px] mt-[-110px] md:mt-[-260px] w-full max-w-6xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
    />
  </div>
  )
}

export default FamilySection
