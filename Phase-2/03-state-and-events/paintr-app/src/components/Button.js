import { useState } from "react";



function Button({ name }) {

    const [isClicked, setIsClicked] = useState(false)

    return ( 
        <>
            {name === "cart" ? (
            <button onClick={() => setIsClicked(!isClicked)}>
                {!isClicked ? "Add To Cart": "Added To Cart"}
            </button>)
            :
            (<button onClick={() => setIsClicked(!isClicked)}>
                {!isClicked ? "Like": "Liked"}
            </button>)
            }   
        </>
    )
}

export default Button