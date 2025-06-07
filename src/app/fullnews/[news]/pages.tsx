import Button from "@/app/components/Button"
import { newsItems } from "@/data/news"

interface PageProps {
    params: { news: string }
}

const NewsDetail = async ({ params }: PageProps) => {
    const newsId = parseInt(params.news)
    const newsData = newsItems.find(item => item.id === newsId)

    return (
        <div className="bg-[#1B1B1B] text-white min-h-screen p-8 flex flex-col justify-center items-center">
            {newsData ?
                <div className="border rounded-b-2xl w-full md:w-3/5 ">
                    <div className="flex flex-col justify-center items-center"> 
                        <img src={newsData.image} alt={newsData.title}  className="w-full object-contain" /> 
                        </div>
                    <div className="text-left p-[16px]">
                        <h1 className="text-3xl font-bold mb-4">{newsData.title}</h1>
                        <p className="text-[#e6a54c] mb-2">{newsData.date}</p>
                        <p className="mb-4">{newsData.type}</p>
                        <p className="leading-relaxed">{newsData.description || "No description provided."}</p>
                    </div>
                </div>
                : <div>"no data found"</div>
            }
            <div className="flex items-center justify-center p-6 pb-16 uppercase"><Button text="back" href={"/"} /></div>
        </div>
    )
}

export default NewsDetail