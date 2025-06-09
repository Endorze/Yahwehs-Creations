import Button from "@/app/components/Button"
import { newsItems } from "@/data/news"

interface NewsDetailsProps {
    params: { news: string }
}

const NewsDetail = async ({ params }: NewsDetailsProps) => {
    params = await params
    const newsId = parseInt(params.news)
    const newsData = newsItems.find(item => item.id === newsId)

    return (
        <div className="bg-[#1B1B1B] text-white min-h-screen p-8 flex flex-col justify-center items-center">
            {newsData ? (
                <div className="w-full md:w-[50%] bg-black overflow-hidden">
                    <div className="w-full h-[60vh]">
                        <img src={newsData.image} alt={newsData.title} className="w-full h-full object-fill" />
                    </div>

                    <div className="text-left p-4">
                        <h1 className="text-3xl font-bold mb-4">{newsData.title}</h1>
                        <p className="text-[#e6a54c] mb-2">{newsData.date}</p>
                        <p className="mb-4">{newsData.type}</p>
                        <p className="leading-relaxed">{newsData.description}</p>
                    </div>

                    <div className="text-left p-4 pb-16 uppercase">
                        <Button text="back" href="/blog" />
                    </div>
                </div>
            ) : (
                <div>No data found</div>
            )}
            <div className="flex items-center justify-center w-full -mt-10 p-[3px]">
                <img src="/images/effects/gradientline.png" alt="Gradient Line" />
            </div>
        </div>
    )
}

export default NewsDetail
