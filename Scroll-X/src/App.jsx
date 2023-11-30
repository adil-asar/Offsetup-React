import React, { useRef, useState } from 'react'
import   './app.css'
import Card from './Card'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const App = () => {

const dataCard = [
  { id: "01",
   url:"https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-fruits-farm-flaticons-flat-flat-icons-2.png"  , name: "Fruits"  },
  { id: "02", 
   url:"https://img.icons8.com/external-icongeek26-flat-icongeek26/100/external-headphone-home-appliances-icongeek26-flat-icongeek26.png"  , name: "Headphones" },
  { id: "03",
    url:"https://img.icons8.com/color/100/bracelet.png"  , name: "Accessories" },
  { id: "04",
   url:"https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/100/external-Watches-business-smashingstocks-flat-smashing-stocks.png"   , name: "Watches" },
  { id: "05", 
  url:"https://img.icons8.com/color/100/hamburger.png"   , name: "Snackes" },
  { id: "06", 
  url:"https://img.icons8.com/fluency/100/shoes.png"   , name: "Shoes" },
  { id: "07", 
   url:"https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/100/external-mobilephone-marketing-xnimrodx-lineal-color-xnimrodx-3.png"  , name: "Mobiles" },
  { id: "08", 
   url:"https://img.icons8.com/color/100/bag-front-view.png"  , name: "Bags" },
  { id: "09", 
   url:"https://img.icons8.com/avantgarde/100/bicycle.png"  , name: "Cycles" },
];

const [scroll, setscroll] = useState(0);
const [activeButton, setActiveButton] = useState('left');
const taget_area = useRef(null);
const MemoizedCard = React.memo(Card);


const handleSCroll = (amount) => {
  const newScrollPosition = scroll + amount;
  
  setscroll(newScrollPosition);
  taget_area.current.scrollLeft = newScrollPosition;
  setActiveButton(scroll > 0 ? "left" : "right")


}




  return (
    <div className="main">
    <div className='container'>

<div className='btn-groups'>
        <button 
        disabled={activeButton === "left"}
        onClick={()=>handleSCroll(-370)}> <IoIosArrowBack className='l-arrow' /></button>
        <button 
        disabled={activeButton === "right"}
        onClick={()=>handleSCroll(370)}> <IoIosArrowForward className='r-arrow' /> </button>
      </div>

      <div 
      ref={taget_area}
      className='cards'>
      {
        dataCard.map((item)=>   <MemoizedCard key={item.id} data={item}   />)
      }
      </div>
      

     
   
    </div>
    </div>
  )
}

export default App
