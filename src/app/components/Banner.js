"use client";

// image
import Image from "next/image";

// parallax
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern h-screen">
      <div className="container mx-auto h-full flex items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className="w-full flex flex-col sm:flex-row items-center justify-between top-12 sm:top-0"
        >
          {/* text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-col lg:flex-row items-center text-center sm:text-left flex-1 px-6 sm:px-0 text-white">
              <div className="flex-1">
                <div className="font-bangers text-2xl md:text-[32px]">
                  Best pizza in the sity
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bangers drop-shadow-md lg:drop-shadow-lg">
                  Pizza perfection <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          {/* images */}
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            {/* pizza image */}
            <Image
              width={550}
              height={558}
              src={"/pizza-banner.png"}
              alt="hero"
              priority={true}
              className="sm:w-52 lg:w-max"
            />
            {/* chilli image 1 */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-6 left-4 hidden xl:flex"
            >
              <Image
                width={160}
                height={84}
                src={"/chilli-1.png"}
                alt="chilli"
                priority={true}
              />
            </MouseParallaxChild>
            {/* chilli image 2 */}
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.4}
              className="absolute top-16 -left-4 hidden xl:flex"
            >
              <Image
                width={130}
                height={84}
                src={"/chilli-2.png"}
                alt="chilli"
                priority={true}
              />
            </MouseParallaxChild>
            {/* garlic image 1 */}
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.5}
              className="absolute top-8 -left-24 hidden xl:flex"
            >
              <Image
                width={84}
                height={72}
                src={"/garlic-1.png"}
                alt="chilli"
                priority={true}
              />
            </MouseParallaxChild>
            {/* garlic image 2 */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-[22rem] -left-8 hidden xl:flex"
            >
              <Image
                width={100}
                height={72}
                src={"/garlic-2.png"}
                alt="chilli"
                priority={true}
              />
            </MouseParallaxChild>
            {/* garlic image 3 */}
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.9}
              className="absolute top-96 -left-20 hidden xl:flex"
            >
              <Image
                width={100}
                height={72}
                src={"/garlic-3.png"}
                alt="chilli"
                priority={true}
              />
            </MouseParallaxChild>
            {/* leaves */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-96 left-6 hidden xl:flex"
            >
              <Image
                width={200}
                height={120}
                src={"/leaves.png"}
                alt="chilli"
                priority={true}
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
