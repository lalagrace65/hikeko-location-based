"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CategoryList from "../components/Home/CategoryList";
import RangeSelect from "../components/Home/RangeSelect";
import SelectRating from "../components/Home/SelectRating";
import GoogleMapView from "../components/Home/GoogleMapView";
import GlobalApi from "@/Shared/GlobalApi";
import TrailList from "@/components/Home/TrailList";

export default function Home() {
  const { data: session } = useSession();
  const [trailList, setTrailList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);

useEffect(()=>{
  getGooglePlace();
},[])
  const getGooglePlace=()=>{
  GlobalApi.getGooglePlace().then((res)=>{
    console.log(res.data.product.results)
  })
}

  return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-4 justify-center">
      <div className="p-3">
        <CategoryList/>
        <RangeSelect/>
        <SelectRating/>
      </div>
      <div className="col-span-3">
        <GoogleMapView/>
        <div className='md:absolute mx-2 w-[90%] md:w-[74%]  
           bottom-36 relative md:bottom-3'>
           <TrailList trailList={trailList}/>
        </div>
      </div>
    </div>
  );
}


