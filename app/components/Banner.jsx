"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container"



const Banner = () => {
    let settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <section>
            <Container classname='bg-green-500 rounded mx-6 text-white'>
                <Slider {...settings}>

                    {
                        sliderInfoArray.map(slide => (
                            <div key={slide.id} className={`relative w-full h-48 ${slide.titleColor} flex-col gap-8 justify-center items-center flex`}>
                                <h2 className="text-4xl font-extrabold capitalize max-w-[90%] ">{slide.title}</h2>
                                <p className={`${slide.textColor} text-xl leading-6`}>{slide.subtitle}</p>
                            </div>
                        ))
                    }

                </Slider>
            </Container>
        </section>
    )
}

export default Banner

const sliderInfoArray = [
    {
        id: 1,
        title: "we will refund 1% of the product price",
        subtitle: "However if it's broken out of your carelessness, shi-shi we no dey give",
        titleColor: "text-blue-500",
        textColor: "text-blue-200"
    },
    {
        id: 2,
        title: "we will refund 1% of the product price",
        subtitle: "However if it's broken out of your carelessness, shi-shi we no dey give",
        titleColor: "text-slate-500",
        textColor: "text-slate-200"
    },
    {
        id: 3,
        title: "we will refund 1% of the product price",
        subtitle: "However if it's broken out of your carelessness, shi-shi we no dey give",
        titleColor: "text-yellow-500",
        textColor: "text-yellow-200"
    },
]