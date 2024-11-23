import aboutImage from "../assets/images/about-image.png";

export const About = () => {
    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                        Welcome to xxx restaurant, your portal to a gastronomic universe where every meal is an event, and every dish, a revelation. Here at our haven, we don't just serve food; we weave tales through textures and tastes. Our kitchen is a laboratory of love, where ingredients are not just mixed but are harmoniously married to create culinary symphonies. 

                        Step into our world, where the ambiance whispers secrets of flavors yet to unfold, and the aroma is an olfactory overture to the feast that awaits. Our team of culinary artisans, with their deft hands and imaginative minds, ensures that each plate that leaves our kitchen is not just food, but an experience wrapped in flavors.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="Savor's Haven - Where Every Bite is a Story" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}