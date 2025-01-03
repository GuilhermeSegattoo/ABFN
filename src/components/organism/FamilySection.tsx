import Image from "next/image"

const FamilySection = () => {
  return (
    <div  className="flex justify-center ">
    <Image
      src="/fm.png"
      alt="familia"
      width={1440}
      height={780}
      className="object-contain mt-[-300px] mb-[-300px] w-full max-w-6xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
    />
  </div>
  )
}

export default FamilySection
