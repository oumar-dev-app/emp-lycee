import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href={"/"}>
      <Image 
      src={"/logoModifier.jpg"}
      alt='logo'
      width={160}
      height={160}
      priority
      />
    </Link>
  )
}

export default Logo;