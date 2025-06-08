type Props = {
    text: string,
    size: string,
}

const H3Title = ({text, size = "24px"}: Props) => {
    return (
        <h2 style={{ fontSize: size, color: "#e6a54c"}}>{text}</h2>
    )
}

export default H3Title;