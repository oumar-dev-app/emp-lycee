import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href={"/"}>
      <Image 
      src={"/logoModifier.png"}
      alt='logo'
      width={150}
      height={150}
      priority
      />
    </Link>
  )
}

export default Logo;