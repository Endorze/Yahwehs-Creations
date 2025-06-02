interface ButtonProps {
  text?: string;
}

const Button = ({ text = "Read more" }: ButtonProps) => {
  return (
    <div className="bg-[url('/images/orangebutton.png')] bg-cover bg-center bg-no-repeat  text-xl  text-white aspect-259/61 p-2 text-center ">
      {text}
    </div>
  );
};

export default Button;
