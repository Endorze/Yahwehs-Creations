interface ButtonProps {
  text?: string;
}

const Button = ({ text = "Read more" }: ButtonProps) => {
  return (
    <div className="bg-[url('/images/orangebutton.png')] bg-cover bg-center bg-no-repeat text-xl text-white aspect-259/61 p-2 text-center hover:shadow-[0_0_10px_5px_rgba(255,165,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer  font-bold  ">
      {text}
    </div>
  );
};

export default Button;
