import Button from "@/app/components/Button"
import { newsItems } from "@/data/news"

interface NewsDetailsProps {
    params: { news: string }
}

const NewsDetail = async ({ params }: { params: Promise<{ news: string }> }) => {
    const { news } = await params
    const newsId = parseInt(news)
    const newsData = newsItems.find(item => item.id === newsId)

    return (
        <>
            <div className="bg-[#1B1B1B] text-white min-h-screen p-8 flex flex-col justify-center items-center">
                {newsData ? (
                    <div className="w-full lg:w-[50%] bg-black overflow-hidden">
                        <img src={newsData.image} alt={newsData.title} className="w-full h-[70%] md:h-full object-fill" />

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

            </div>
            <div className="w-screen -mt-10">
                <img
                    src="/images/effects/gradientline.png"
                    alt="Gradient Line"
                    className="w-full object-cover"
                />
            </div>
        </>
    )
}

export default NewsDetail
