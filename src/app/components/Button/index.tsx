import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

const Button = (props: ButtonProps) => {
  // This are default values for the button
  const { text = "Read more", href = "/" } = props;
  return (
    <Link
      href={href}
      className="bg-[url('/images/orangebutton.png')] bg-cover bg-center bg-no-repeat text-xl text-white aspect-245/49 text-center hover:shadow-[0_0_10px_5px_rgba(255,165,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer font-bold p-2 hover:bg-[rgba(255,165,0,0.5)]"
    >
      {text}
    </Link>
  );
};

export default Button;
