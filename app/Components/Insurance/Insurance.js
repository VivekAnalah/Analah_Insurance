import Linking from "./Linking";
// import Link from "next/link";
export default function Insurance({item,ins}) {
    let insuranceName = ins;
  const myArr = insuranceName.split(" ");
  console.log("insuranceName ", myArr[0]);

  return (
    <Linking path={`Insurance_pages/${myArr[0]}`}>
     {/* <Link href={`Insurance/${myArr[0]}`} > */}
     <div
      className={
       " p-2 flex justify-center flex-col items-center "
        }
    >
      {item.id === 7 ?<img
        src={`/${item.img}`}
        alt=""
        className={"object-contain  w-[65%] h-[40px] lg:h-[40px] 2xl:h-[60px] mt-[10px] insurance-home-img"}
      /> : <img
      src={`/${item.img}`}
      alt=""
      className={"object-contain  w-[55%] h-[40px] lg:h-[40px] 2xl:h-[60px] mt-[10px] insurance-home-img"}
    /> }
      {/* <img
        src={require(`../Assets/Images/${item.img}`)}
        alt=""
        className={"object-contain  w-[45%] h-[40px] lg:h-[50px] xl:h-[60px] mt-[10px]"}
      /> */}

    <div className="contents">
      <h6 className="text-[75%]  pt-2  font-bold  lg:w-10/12 min-h-[39px] insurance-home-text">
      {/* xl:text-sm font-normal  font*/}
        {item.name}
      </h6>
    </div>

    </div>
   {/* </Link> */}
    
    </Linking>
   
  )
}
