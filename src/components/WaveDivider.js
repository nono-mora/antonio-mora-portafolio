"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LayeredMorphDivider = () => {
  const dividerRef = useRef();

  useGSAP(
    () => {
      const layers = dividerRef.current.querySelectorAll("path");

      layers.forEach((layer, i) => {
        gsap.to(layer, {
          duration: 6 + i * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          attr: { d: layer.dataset.alt },
        });

        gsap.to(layer, {
          y: `-=${10 + i * 5}`,
          ease: "none",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: dividerRef }
  );

  return (
    <div className="relative h-48 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50" />

      <div
        ref={dividerRef}
        className="absolute bottom-0 w-full overflow-hidden leading-none"
      >
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="w-full h-48"
        >
          <path
            d="M0,120 C300,180 900,60 1200,140 L1200,200 L0,200 Z"
            data-alt="M0,130 C250,100 950,200 1200,120 L1200,200 L0,200 Z"
            fill="#38bdf8"
            fillOpacity="0.3"
          />
          <path
            d="M0,140 C350,200 850,80 1200,160 L1200,200 L0,200 Z"
            data-alt="M0,150 C300,180 900,100 1200,150 L1200,200 L0,200 Z"
            fill="#0ea5e9"
            fillOpacity="0.2"
          />
          <path
            d="M0,160 C400,220 800,120 1200,180 L1200,200 L0,200 Z"
            data-alt="M0,170 C350,210 850,150 1200,170 L1200,200 L0,200 Z"
            fill="#0284c7"
            fillOpacity="0.15"
          />
        </svg>
      </div>
    </div>
  );
};

export default LayeredMorphDivider;
