import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href={"/"}>
      <Image 
      src={"/logoModifier.png"}
      alt='logo'
      width={130}
      height={130}
      priority
      />
    </Link>
  )
}

export default Logo;