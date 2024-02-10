import { useState } from "react";
//import Counter from "./Counter"

export default function LikeButton() {
    let [isLiked, setisLiked] = useState(false);
    let [count, setCount] = useState(0);
    let toggleLike = () => {
        setisLiked(!isLiked);
        setCount(count+1);
    };
    let likeStyle = {color: "red"};
    return (
        <div>
            <p>likes = {count}
            </p>
            <p onClick={toggleLike}>
                {
                    isLiked ? (
                        <i className="fa-solid fa-heart" style={likeStyle}></i>
                    ) : (
                        <i className="fa-regular fa-heart"></i>
                    )
                }
                
            </p>
        </div>
    );
}
