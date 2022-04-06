import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between w-8/12 mx-auto text-brand-100 mb-40">
      <div>
        <Link href="/">
          <a>
            <p className='text-3xl'>on the spot</p> <span className='text-sm pl-20' >With Kenny</span>
          </a>
        </Link>
      </div>
      <div className='flex w-6/12 justify-between text-sm font-bold leading-7'>
        <Link href="">
          <a>Episodes</a>
        </Link>
        <Link href="">
          <a>Become a speaker</a>
        </Link>
        <Link href="">
          <a>Twich</a>
        </Link>
        <Link href="">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
}
