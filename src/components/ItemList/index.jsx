import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './styles.css';
import {setCart} from '../../redux/Slices/cartSlice';

const data = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/61inz5jfGEL._AC_SY450_.jpg",
    name: "Fire TV Stick 4K streaming device with Alexa Voice Remote (includes TV controls), Dolby Vision",
    price: "CA $59.99",
    description: "Cinematic experience - Watch in vibrant 4K Ultra HD with support for Dolby Vision, HDR, and HDR10+ with Live and free TV, Alexa Voice Remote. You can Control your smart home with easy setup by Plug in behind your TV."
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/71m8cCB4bhL._AC_SX522_.jpg",
    name: "INIU Portable Charger, USB-C 3A High-Speed 10000mAh, Compatible with iPhone, Samsung, Google",
    price: "CA $32.99",
    description: "At INIU, we use only the highest-grade materials, so we do have the confidence to provide an industry-leading 3 years warranty.3A fast charging fuels iPhone up to 78% in just one hour. Also, INIU is the only 5% of power banks got a USB-C IN&OUT port."
  },
  {
    id: 3,
    name: "Sound Bar Wooden MEREDO with HDMI ARC/Bluetooth 5.0/Optical/AUX Connection(Deep Black)",
    image: "https://m.media-amazon.com/images/I/81fdWiNGp9L._AC_SY550_.jpg",
    price: "CA $119.99",
    description: "PREMIUM WOODEN 2.1 SOUND BAR: MEREDO peak power 150W soundbar is made of high-density wood materials, can provide large power carrying capacity, makes the sound thick and powerful, without distortion. Extra Bass, 5 connection modes, optimized sound for various scenes."
  },
  {
    id: 4,
    name: "Multifunction Bluetooth Speaker Outdoor Waterproof Bicycle Speakers TF Card + FM Radio With Bike Horns",
    image: "https://m.media-amazon.com/images/I/71xc48dF1PL._AC_SX679_.jpg",
    price: "CA $49.99",
    description: "Three playing modes-Bluetooth, Micro SD/TF card or radio. Enjoy your favorite music in the way that suits you with this versatile, portable speaker. Not only for music. With 3W led cool white adjustable lights, remindful ring bell and phone call mode, keep you safe on the way."
  },
  {
    id: 5,
    name: "Dysead 24V AC/DC Adapter for Samsung HW-K551 HW-J8500 HW-H570 HW-K650 Soundbar Power Supply",
    image: "https://m.media-amazon.com/images/I/71VlQedzlWL._AC_SX425_.jpg",
    price: "CA $17.45",
    description: "Compatible with: 24VDC 24V Samsung HW-HM45 HW-HM45C HW-HM45C/ZA HWHM45 HWHM45C HWHM45C/ZA HW-H450 HW-H450/ZA DONGA HW-450 HW-J355 HW-J355/ZA HW-J355/ZC HW-J355/ZF HW-J355/CA HW-J450 HW-J550 HW-J470 HW-J470/ZA HW-J470/ZC HW-J470/ZF 2.1-Channel 4.1-Ch Wireless Audio Surround Home Theater Soundbar Speaker Subwoofer System."
  },
  {
    id: 6,
    name: "Sony WH-1000XM5 Wireless Headphones with Auto Noise Cancelling Optimizer, Alexa Voice Control",
    image: "https://m.media-amazon.com/images/I/71CFIXeUuWL._AC_SY550_.jpg",
    price: "CA $498.00",
    description: "Industry Leading noise cancellation available in black and silver color with two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, Up to 30-hour battery life with quick charging."
  },
  {
    id: 7,
    name: "Sony WF-1000XM4 Industry Leading Noise Cancelling Truly Wireless Earbud with Alexa Built-in, Black",
    image: "https://m.media-amazon.com/images/I/51d-gdDTTGL._AC_SX425_.jpg",
    price: "CA $259.99",
    description: "Crystal-clear call quality, beamforming microphone and a bone-conduction sensor provide clear voice detection even in noisy environments,8 hours long battery with Noise Canceling. Frequency Response(Bluetooth Communication)-20Hz."
  },
  {
    id: 8,
    name: "Audio-Technica Direct-Drive Turntable (Analog & USB), Fully Manual, Anti-Skate and Variable Pitch Control Black",
    image: "https://m.media-amazon.com/images/I/81LDEgi0awL._AC_SX450_.jpg",
    price: "CA $419.97",
    description: "Direct-drive, DC servo motor with selectable 33/45/78 RPM speeds. Damped base construction for reduced low-frequency feedback coloration,Fully manual operation featuring adjustable dynamic anti-skate control, variable pitch control with quartz speed lock, and balanced S-shaped tonearm with hydraulically damped lift control and lockable rest."
  },
  {
    id: 9,
    name: "Pyle Phono Turntable Preamp, Audio Stereo Preamplifier with 9V Battery Compartment, RCA IP/OP",
    image: "https://m.media-amazon.com/images/I/81Ija5+tP7L._AC_SX679_.jpg",
    price: "CA $21.99",
    description: "Converts phono signals, low noise operation, can connect it to turntables. This mini preamp has stereo RCA inputs and stereo RCA outputs. Connect the turntable to the RCA inputs and ground. Then, connect the amplifier receiver to the RCA outputs. Can also be powered with 9V battery."
  },
  {
    id: 10,
    name: "Miracase Universal Phone Holder for Car, Cell Phone Holder Mount Compatible with All Phones,Black",
    image: "https://m.media-amazon.com/images/I/61siZsm-8SL._AC_SX679_.jpg",
    price: "CA $19.99",
    description: "Miracase upgraded car vent, excellent phone holder, never fall off, universal compatability, stable and safe holder. [NOTE] For some cars, this product may get a bit close to the steering wheel, we recommend 15cm/6inch distance."
  },
  {
    id: 11,
    name: "Fast Wireless Charger, NANAMI Qi Charging Pad 7.5W Compatible with all devices, 10W Fast Charge",
    image: "https://m.media-amazon.com/images/I/714M4quA-OL._AC_SX679_.jpg",
    price: "CA $17.56",
    description: "Sleek, compact design with non-slip rubber design, this charger feels solid and looks great wherever you use it, takes little place and looks good on your desk. Can be easily carried on the go for convenient wireless charging. No more wires fuss. A good choice of charging pad for apple devices and best buy for gifts."
  },
  {
    id: 12,
    name: "USB C to HDMI Cable, CLDAY USB Thunderbolt 3 Port 4K for MacBooks, Chromebook, Pixel, Dell",
    image: "https://m.media-amazon.com/images/I/71dl0vLP1UL._AC_SX679_.jpg",
    price: "CA $18.98",
    description: "The type c to hdmi cable supports streaming 4K(3840*2160) content, provides blazingly fast data transfer speeds through its HDMI 1.4 interface. Perfect solution for your USB-C MacBook Pro / MacBook, iMac, Dell and ChromeBook, drive one or two HDMI monitors/displays, Compatible with HDMI-enabled TVs/Monitors/Projectors, convenient to use and easy to carry around."
  },
  {
    id: 13,
    name: "Roku Express | HD Streaming Media Player with Simple Remote,Stream free TV and Premium HDMI Cable",
    image: "https://m.media-amazon.com/images/I/71wQxCR5qyL._AC_SX425_.jpg",
    price: "CA $36.52",
    description: "Stream free TV, live news, sports, music, movies, and more. 802.11bgn single-band wireless, Includes high speed HDMI cable. Power consumption is Less than 2.2W. Includes remote with pre-set channel shortcuts."
  },
  {
    id: 14,
    name: "LUOATIP USB Wall Charger, 3-Pack 2.1A/5V Dual Port USB Power Adapter Plug Block Charging Box Brick",
    image: "https://m.media-amazon.com/images/I/51jMWghvunL._AC_SX679_.jpg",
    price: "CA $16.99",
    description: "Widely Compatibility: USB Charger for Phone 13 12 11 Pro Max Xs max XR X/8/7/6/6S Plus SE 5S/5/5C, Pad, Pod, Note, HTC, LG, Motorola, Samsung Galaxy, Google Pixel and more phones.Package includes: LUOATIP 3-Pack Dual Port USB wall charger block."
  }
];

const getItemById = (id, items) =>{ 
return(
    items.filter((item) => item.id == id)
);
}

const Item =(props) =>{
  const dispatch = useDispatch();
  const [cartProductId, setCartProductId] = useState(0);


 return (
  <div key ={props.item.id} className="card item-card">
  <img src={props.item.image} className="card-img-top item-image" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.item.name}</h5>
    <h6 className="card-text">{props.item.price}</h6>
    {/* <p className="card-text">{item.description}</p>  */}
    <a href="#" className="btn btn-primary"
      onClick = {()=> { 
        dispatch(setCart(getItemById(props.item.id, data)))
        setCartProductId(props.item.id)
        setTimeout(()=>{
              setCartProductId(0)
        }, 3000)
      }
     }>
    Add to cart
    </a>
    { cartProductId ? <span className="text-success"> Added ✅ </span> : '' }

  </div>
</div>
 );
}

function ItemList (){

const cart= useSelector(
    (state) => state.itemsInCart.cart
);
 
console.log(cart)  

const [products] = useState(data);

const filterBy = useSelector((state) => state.productFilter.filter);

  const content = data.map((item)=>
   <Item item ={item}/>
  );

  return(
    <div className="listOfItems">
    {products.filter((item) => filterBy ? item.name.toLowerCase().includes(filterBy.toLowerCase()) : true)
    .map((item)=> (
      <Item item ={item}/>
    ))
    } 
    </div>
  );
}

export default ItemList;