import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Banner from "./Banner";
import TodaySale from "./TodaySale";
import Divider from "../../Component/Devider";
import BrowesCategories from "./Categories";
import BestSellingProduct from "./BestSellingProduct";
import AdvertiseBanner from "./AdvertiseBanner";
import OurProduct from "./OurProduct";
import Featured from "./Featured";
import Testimonial from "./Testimonial";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks/productHook";
import axios from "axios";
import { addProduct } from "../../Redux/slice/getAllProductSlice";

const Home = () => {

  const productData = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  
  const getProductData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/getall");
      console.log("res ==>", res.data);
      dispatch(addProduct(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log("productData is heres", productData);

  useEffect(() => {
    // postProducts()
    getProductData();
    // dispatch(productData)
  }, []);


  console.log(productData,"Home Product===============>>");
  
  return (
    <>
      <div className="mx-10 my-4 ">
        <section>
          <Banner />
        </section>
        <section className="mt-8">
          <TodaySale  />
        </section>
          <Divider />
        <section className="mt-8">
          <BrowesCategories  />
        </section>
        <Divider />
        <section className="mt-8">
          <BestSellingProduct  />
        </section>
        <section className="mt-8">
          <AdvertiseBanner  />
        </section>
        <section className="mt-8">
          <OurProduct  />
        </section>
        <section className="mt-16">
          <Featured />
        </section>
        <section className="mt-16">
          <Testimonial />
        </section>
      </div>

      {/* <button 
      className="bg-redjustify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
      onClick={handleClearLocalStorage}
      >
        Logouts
      </button> */}
    </>
  );
};

export default Home;
