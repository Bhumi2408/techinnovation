import Image from 'next/image'

const Hero = () => {
  return (
    <div>
        <Image src="/banner.png" alt="banner" width={1380} height={600} className="w-full"></Image>
    </div>
  )
}

export default Hero