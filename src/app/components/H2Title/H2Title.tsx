type Props = {
    text: string,
    size: string,
}

const H2Title = ({text, size = "72px"}: Props) => {
    return (
        <h2 style={{ fontSize: size }} className="text-black">{text}</h2>
    )
}

export default H2Title;