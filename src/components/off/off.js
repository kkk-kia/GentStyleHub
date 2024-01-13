import './off.css'
import react from 'react'
import coatsAndJackets from '../../images/Coats-and-jackets.webp'
import shirt from '../../images/shirt.jpg'
import Sportswear from '../../images/Sportswear.jpg'
import shoes from '../../images/shoes.jpg'
import jeans from '../../images/jeans1.jpg'
import pants from '../../images/pants.jpg'
import jacket from '../../images/jacket.jpg'
import cap from '../../images/cap.jpg'



const imgUrls=[
    {
        url:Sportswear,
        p:"sport wear",
        pos:"-15px 0"
    },
    {
        url:cap,
        p:"cap"
    },
    {
        url:shirt,
        p:"shirt"
    },
    {
        url:jeans,
        p:"jeans",
        // pos:"-10px 0"
    },
    {
        url:jacket,
        p:"jacket",
        pos:"-10px 0"
    },
    {
        url:shoes,
        p:"shoes",
        pos:"-15px 0"
    },
]

export const Off = ()=>{
return(
    <div className='off-conteiner'>
        <h1 style={{textAlign:"center"}}>UP TO 80% OFF!</h1>
        <div className='items-conteiner'>
            {imgUrls.map((item,index)=>(
                <div key={index}>
                    <img src={item.url} style={{objectPosition:`${item.pos}`}} ></img>
                    <p>{item.p}</p>
                </div>

            ))}
        </div>
        <button>View All</button>
    </div>
)
}