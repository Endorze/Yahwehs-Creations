interface CardProps {
  title: string;
  children: React.ReactNode;
}

const CrewCard = (props: CardProps) => {
  const { title, children } = props;
  return (
    <div className="mb-3 md:mb-10 ">
      <h3 className="text-[#E6A54C] text-2xl font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default CrewCard;
