import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews,setReviews] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className="my-20">
            <SectionTitle
            subHeading="What Our Client say"
            heading="Testimonials"
            >
            </SectionTitle>

            {/* reviews:{reviews.length} */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide
            key={review._id}>

                <div className="my-16 mx-24 flex flex-col items-center">
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />


                    <p className="py-8">{review.details}</p>
                    <p className="text-2xl text-orange-400">{review.name}</p>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
        </section>
    );
};

export default Testimonials;