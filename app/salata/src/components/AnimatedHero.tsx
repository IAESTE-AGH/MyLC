"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1.2,
          pin: true,
        },
      });

      tl.to(imageRef.current, {
        x: 150,
        rotation: 180,
        scale: 1.2,
        duration: 1,
        ease: "power1.inOut",
      })
        .to(imageRef.current, {
          x: -150,
          rotation: -45,
          scale: 0.8,
          duration: 1,
          ease: "power1.inOut",
        })
        .to(imageRef.current, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        })
        .from(
          textRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="h-screen flex flex-col justify-center items-center w-full overflow-hidden"
    >
      <div className="relative w-full max-w-lg flex flex-col items-center justify-center">
        {/*  Image  */}
        <div
          ref={imageRef}
          className="relative w-64 h-64 md:w-80 md:h-80 shadow-xl rounded-2xl overflow-hidden border-4 border-(--primary) bg-(--background) z-10"
        >
          <Image
            src="/salata.png"
            alt="Animated Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text  */}
        <div ref={textRef} className="mt-12 text-center opacity-100">
          <h2 className="text-3xl font-bold text-(--foreground)">Oto sałata</h2>
          <p className="mt-2 text-(--foreground) opacity-80">
            Twoja cyfrowa towarzyszka do organizowania spotkań ze znajomymi!
          </p>
        </div>
      </div>
    </div>
  );
}
