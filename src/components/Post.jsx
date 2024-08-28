import { Link } from "react-router-dom";


const Post = ({ item }) => {

    return (
        <div className="relative product-card border border-yellow-300 hover:border-yellow-400 rounded-lg w-[200px] h-[100px] shadow-2xl group">
            <Link to={`/${item.id}`}>
                <div className="flex justify-center overflow-hidden p-2 h-[170px] relative">
                    <p className="text-md font-bold overflow-x-hidden truncate">{item.title}</p>
                </div>
                <div className="absolute bottom-0 w-full bg-white bg-opacity-75 p-2 rounded-b-lg">
                <p className="text-md font-semibold overflow-x-hidden truncate">
                    {item.body}
                </p>
            </div>
            </Link>
        </div>
    );
};

export default Post;
