import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {

  const { text, href, onClick } = props;
  const ClassName = "bg-[url('/images/orangebutton.png')] bg-cover bg-center bg-no-repeat text-xl text-white aspect-245/49 text-center hover:shadow-[0_0_10px_5px_rgba(255,165,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer font-bold p-2 hover:bg-[rgba(255,165,0,0.5)]"

  if (href) {
    return (

      <Link
        href={href} className={ClassName}> {text}
      </Link>
    )
  } else {
    return (

      <button onClick={onClick} className={ClassName}>
        {text}
      </button>
    )
  }

};

export default Button
