import Link from 'next/link';
import { Leckerli_One } from 'next/font/google';

const lekkerliOne = Leckerli_One({
  subsets: ['latin'],
  weight: '400',
});

const NavBar = () => {
  return (
    <nav className="w-full h-[98px] bg-secondary-offWhite px-[62px] flex items-center justify-between drop-shadow-lg fixed">
      <h2 className={`${lekkerliOne.className} text-[45px] text-primary text-center flex-1`}>
        Meuse
      </h2>
      <Link href="/">
        <p className="underline text-primary font-semibold">
          Log in
        </p>
      </Link>
    </nav>
  );
};

export default NavBar;
