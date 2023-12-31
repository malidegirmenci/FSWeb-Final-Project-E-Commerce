import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductCard(props) {
    const categories = useSelector((store) => store.global.categories);
    const history = useHistory();
    const { name, price, images, description, sell_count, category_id, id } = props.data;
    const priceWithoutDiscount = price + (price * 0.3);
    const image = images.length ? images[0].url : ""
    const nameSlug = name.toLowerCase().replaceAll(" ", "-");
    const catCode = categories.find(
        (c) => c.id == category_id
    )?.code;
    const gender = catCode?.slice(0, 1) == 'k' ? 'kadin' : 'erkek'
    const category = catCode?.slice(2)
    const productURL = `/shopping/${gender}/${category}/${id}/${nameSlug}`
    return (
        <div onClick={() => {
            history.push(
                productURL
            );
            window.scrollTo(0, 0);
        }} className="flex flex-col text-center w-[20%] max-sm:w-full shadow-md rounded-b-md cursor-pointer ease-out duration-300 hover:scale-105 hover:ease-out hover:duration-300">
            <div>
                <img src={image} className="max-w-full max-sm:w-full object-cover rounded-t-md  " />
            </div>
            <div className="p-6 flex-col gap-2">
                <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">{name}</h5>
                <h5 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight truncate">{description}</h5>
                <h5 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight truncate">{sell_count} amount purchased</h5>
                <div className="flex gap-1 justify-center">
                    <h5 className="text-stone-300 text-base font-bold leading-normal tracking-tight">${priceWithoutDiscount.toFixed(2)}</h5>
                    <h5 className="text-teal-700 text-base font-bold leading-normal tracking-tight">${price}</h5>
                </div>
                <div className="w-20 h-4 justify-start items-center gap-1.5 inline-flex">
                    <div className="w-4 h-4 bg-sky-500 rounded-full" />
                    <div className="w-4 h-4 bg-teal-700 rounded-full" />
                    <div className="w-4 h-4 bg-orange-400 rounded-full" />
                    <div className="w-4 h-4 bg-slate-800 rounded-full" />
                </div>
            </div>
        </div>
    )
}