import Image from "next/image"

const FamilySection = () => {
  return (
    <div id="sobre" className="flex justify-center ">
    <Image
      src="/familiaVerde.png"
      alt="Mapa do Brasil"
      width={1440}
      height={780}
      className="object-contain lg:mt-[-180px] mt-[-100px] md:mt-[-260px] w-full max-w-6xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
    />
  </div>
  )
}

export default FamilySection
