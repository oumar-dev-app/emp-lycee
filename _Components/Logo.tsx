import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href={"/"}>
      <Image 
      src={"/logoModifier.png"}
      alt='logo'
      width={110}
      height={110}
      priority
      />
    </Link>
  )
}

export default Logo;