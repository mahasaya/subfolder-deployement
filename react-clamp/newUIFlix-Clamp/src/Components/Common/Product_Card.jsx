import React from 'react'
import { LuTickets } from "react-icons/lu";
import { ProductDetails } from '../../assets/dummyData';
import { CiDeliveryTruck } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import CTAButtons from '../Common/CTAButtons';
import fall_back_img from "../../assets/images/fall_back_product_img.jpg";
const Product_Card = ({productName,img,tag,details}) => {
    function viewproduct(){
        console.log("view product clicked")
    }
    function addTobasket(){
        console.log("add to baaslet clicked")
    }
    const ProdImg = img || fall_back_img
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] h-auto mx-auto gap-5 my-6 py-6 px-10 bg-white rounded-xl'>
        {/* IMAGE-CONTIANER */}
        <div className='flex flex-col items-center gap-6 justify-center'>
            {/* IMAGE */}
        <div className="w-full h-auto flex items-center flix-hs-locator">
            <img
                src={`${ProdImg}`}
                alt="Product"
                className="max-w-full h-auto object-contain"
            />
        </div>

        </div>

        {/* DETAILS-CONTAINER */}
        <div className='flex flex-col justify-center gap-3 md:gap-5'>

            <span className='text-[20px] leading-5 md:leading-[24px] font-medium text-[#213038]'>
                {productName}
            </span>

            <ul className='list-disc ml-3 md:ml-5'>
                {[...Array(4)].map((_,index)=>(
                    <li className='text-[14px] leading-4 md:leading-[21px] text-[#213038] mt-2.5' key={index}>Lorem,  neque deleniti voluptatem nulla, ab quam culpa iste laborum amet modi ipsum!</li>
                ))}
            </ul>
            <div className='p-2 rounded border border-[#cdd8df] cursor-pointer flex items-start gap-1.5'>
                <LuTickets size={24} color='#21303866'/>
                <div className='flex flex-col'>
                    <span>{details?.emi?.offers}</span>
                    <span className='text-[#e5006d]'>+6 more offers</span>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-10 items-end'>
                    <span className='text-[20px] leading-5 md:leading-[24px] font-medium text-[#213038]'>
                        {details?.emi?.price}
                    </span>
                    <span className='text-[14px] leading-5 md:leading-[24px] font-medium text-[#e5006d]'>Save {details?.emi?.save}</span>
                </div>
                <span> {details?.emi?.text}</span>
                <div className='flex gap-2 p-2 flex-col w-[40%] md:w-[40%] h-auto'>
                    {details?.emi?.banner.map((Img,index)=>(
                        <img className={` h-auto ${index===1 ? "w-[85%]":"w-full"} `} key={index} src={Img}/>
                    ))}
                </div>
            </div>

            <div className='m-0 p-2 rounded bg-[#f5f7fd] w-full inline-block'>
                <div className='flex gap-2.5'>
                    <CiDeliveryTruck size={24}  color='#328636'/>
                    <span className=' text-[15px] '>Delivery availiable</span>
                </div>
                <div className='flex gap-2.5 mt-1'>
                    <CiShop size={24} color='#328636'/>
                    <span className=' text-[15px]'>Free in-store collection in as little as 1 hour</span>
                </div>
            </div>

            <div className='flex md:items-start items-center flex-col gap-4 md:gap-6'>
               <CTAButtons 
                text={"Add to basket"}
                outline={true}
                btnFunction={viewproduct}
               />
                <CTAButtons 
                text={"Buy Now"}
                outline={false}
                btnFunction={addTobasket}
               />
            </div>
        </div>
    </div>
  )
}

export default Product_Card