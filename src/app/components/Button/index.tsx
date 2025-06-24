"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  href?: string;
  back?: boolean;
}

const Button = (props: ButtonProps) => {
  const { text, href, back } = props;

  const router = useRouter();
  const handleClick = () => {
    router.back()
  }

  const Styling =
    "bg-[url('/images/orangebutton.png')] bg-cover bg-center bg-no-repeat text-xl text-white aspect-245/49 text-center hover:shadow-[0_0_10px_5px_rgba(255,165,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer font-bold p-2 hover:bg-[rgba(255,165,0,0.5)]";

  if (back) {
    return (
      <button onClick={handleClick} className={Styling}>
        {text}
      </button>
    );
  } else if (href) {
    return (
      <Link href={href} className={Styling}>
        {text}
      </Link>
    );
  } else
    return <div className={Styling}>{text}</div>;
};

export default Button;
