import { newsItems } from "@/data/news"
import Button from "../Button"

interface NewsProp {
    id?: number
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

const RecentNews = () => {
    const News: NewsProp[] = newsItems

    const ImagesData = ({ image, text }: ImageProp) => {
        return (
            <img src={image} alt={text} width="20%" height="auto" />
        )
    }
    return (
        <div className="bg-[#1B1B1B] text-white">
            <div className="mr-[48px] ml-[48px]">
                <h1 className="border-b p-4 text-2xl uppercase">Recent News</h1>

                <div className="flex flex-col gap-4 ">
                    {News.slice(0, 3).map((item: NewsProp, index) => (
                        <div key={index} className="group flex flex-row items-start p-8 border-b gap-[48px] transition-all duration-300 ease-in-out hover:pl-12 hover:bg-[#808080] cursor-pointer">
                            <ImagesData image={item.image} text={item.type} />

                            <div className="flex flex-col mt-8 gap-2">
                                <div className="font-bold text-lg text-[#808080] group-hover:text-[#1B1B1B]">{item.title}</div>
                                <div className="text-sm">{item.type}</div>
                                <div className="text-sm text-[#e6a54c]">{item.date}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="flex items-center justify-center p-6 pb-16 uppercase"><Button text="load more news" href={""} /></div>
            <div className="flex items-center justify-center w-full -mt-10 p-[3px]">
                <img src="/images/effects/gradientline.png" alt="Gradient Line" />
            </div>
        </div>
    )
}
export default RecentNews

