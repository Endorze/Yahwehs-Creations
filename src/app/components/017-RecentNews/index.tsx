"use client"
import { useState } from "react"
import { newsItems } from "@/data/news"
import H2Title from "../H2Title/H2Title"
import Link from "next/link"

interface NewsProp {
    id: number
    title: string
    type: string
    date: string
    image: string
    description?: string
}

interface ImageProp {
    image: string
    text: string
}

interface ButtonProps {
    text: string
    href?: string
    onClick?: () => void
}

const Button = ({ text, href, onClick }: ButtonProps) => {
    if (href) {
        return (
            <a href={href} className="bg-[#e6a54c] px-6 py-2 rounded uppercase cursor-pointer hover:opacity-80 transition"> {text}
            </a>
        )
    }

    return (
        <button onClick={onClick}
            className="bg-[#e6a54c] px-6 py-2 rounded uppercase cursor-pointer hover:opacity-80 transition">
            {text}
        </button>
    )
}

const ImagesData = ({ image, text }: ImageProp) => {
    return (
        <img src={image} alt={text} width="20%" height="auto" className="rounded-2xl" />
    )
}

const RecentNews = () => {
    const News: NewsProp[] = newsItems
    const [visibleCount, setVisibleCount] = useState(3)

    const loadMore = () => {
        setVisibleCount((prev) => prev + 4)
    }

    return (
        <div className="bg-[#1B1B1B] text-white">
            <div className="mr-[48px] ml-[48px]">
                <div className="border-b p-4 uppercase">
                    <H2Title text="Recent News" size="24px" />
                </div>

                <div className="flex flex-col gap-4">
                    {News.slice(0, visibleCount).map((item: NewsProp, index) => (
                        <Link href={`/fullnews/${item.id}`} key={index} className="group flex flex-row items-start p-8 border-b gap-[48px] transition-all duration-300 ease-in-out hover:pl-12 hover:bg-[#808080] cursor-pointer">
                            <ImagesData image={item.image} text={item.type} />

                            <div className="flex flex-col mt-8 gap-2">
                                <div className="font-bold text-lg text-[#808080] group-hover:text-[#1B1B1B]">{item.title}</div>
                                <div className="text-sm">{item.type}</div>
                                <div className="text-sm text-[#e6a54c]">{item.date}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {visibleCount < News.length && (
                <div className="flex items-center justify-center p-6 pb-16 uppercase">
                    <Button text="Load More News" onClick={loadMore} />
                </div>
            )}

            <div className="flex items-center justify-center w-full -mt-10 p-[3px]">
                <img src="/images/effects/gradientline.png" alt="Gradient Line" />
            </div>
        </div>
    )
}

export default RecentNews