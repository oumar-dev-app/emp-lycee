import Image from 'next/image';
import Link from 'next/link';

function MobileLogo() {
    return (
        <Link href={"/"} className='relative inline-block'>
            <Image
                src={"/logoModifier.png"}
                alt='logo'
                width={300}
                height={300}
                priority
                className='rounded-xl'
            />

            <div className='absolute inset-0 bg-black/80 rounded-xl'></div>
        </Link>
    )
}

export default MobileLogo;