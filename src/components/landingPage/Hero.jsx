import React from 'react';

const Hero = () => (
    <section className="flex  z-5 mt-[5rem]  flex-col items-center justify-center min-h-[60vh] bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fast &amp; Reliable Logistics Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
            Delivering your packages safely and on time, every time. Experience seamless shipping with Liberty Express Logistics.
        </p>
        <a
            href="#get-started"
            className="bg-[#ffb347] text-[#1e3c72] px-8 py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-[#ffd580] transition"
        >
            Get Started
        </a>
    </section>
);

export default Hero;