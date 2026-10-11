"use client";

import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";
import Image from "next/image";

export default function Book() {
  const bookRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bookRef.current || !containerRef.current) return;

    const pageFlip = new PageFlip(bookRef.current, {
      width: 660,          // Poori book ki width (330 + 330)
      height: 550,         // Book ki height
      autoSize: false,
      showCover: true,
      drawShadow: true,
      maxShadowOpacity: 0.5,
      usePortrait: false,
      startPage: 0,
      clickEventForward: false,
      clickEventBackward: false,
    } as any);

    pageFlip.loadFromHTML(bookRef.current.querySelectorAll(".book-page"));

    let isFlipping = false;

    // Scroll lock logic
    pageFlip.on("changeState", (e: any) => {
      if (e.data === "read") {
        isFlipping = false; 
      }
    });

    const handleWheel = (e: WheelEvent) => {
      if (isFlipping) {
        e.preventDefault();
        return;
      }

      const currentPage = pageFlip.getCurrentPageIndex();
      const pageCount = pageFlip.getPageCount();

      if (e.deltaY > 0) {
        if (currentPage < pageCount - 1) {
          e.preventDefault();
          isFlipping = true; 
          pageFlip.flipNext();
        }
      } else if (e.deltaY < 0) {
        if (currentPage > 0) {
          e.preventDefault();
          isFlipping = true; 
          pageFlip.flipPrev();
        }
      }
    };

    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      pageFlip.destroy();
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center py-20 bg-transparent">
      
      <div ref={bookRef}>
        {/* Front Cover */}
        <div
          className="book-page bg-transparent text-white"
          data-density="hard"
          style={{ width: 330, height: 550 }} 
        >
          <Image
            src="/pages/front.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain pointer-events-none select-none"
          />
        </div>

        {/* Page 1 */}
        <div
          className="book-page bg-transparent text-black"
          style={{ width: 330, height: 550 }}
        >
          <Image
            src="/pages/left.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain pointer-events-none select-none"
          />
          {/* ... (Aapki Page 1 ki baaki saari Images) ... */}
        </div>

        {/* Page 2 */}
        <div
          className="relative overflow-hidden book-page bg-transparent text-black"
          style={{ width: 330, height: 550 }}
        >
          {/* ... (Aapki Page 2 ki baaki saari Images) ... */}
        </div>

        {/* Page 3 */}
        <div
          className="relative overflow-hidden book-page bg-transparent text-black"
          style={{ width: 330, height: 550 }}
        >
          {/* ... (Aapki Page 3 ki baaki saari Images) ... */}
        </div>

        {/* Page 4 */}
        <div
          className="relative overflow-hidden book-page bg-transparent text-black"
          style={{ width: 330, height: 550 }}
        >
           {/* ... (Aapki Page 4 ki baaki saari Images) ... */}
        </div>

        {/* Page 5 */}
        <div
          className="relative overflow-hidden book-page bg-transparent text-black"
          style={{ width: 330, height: 550 }}
        >
           {/* ... (Aapki Page 5 ki baaki saari Images) ... */}
        </div>

        {/* Page 6 */}
        <div
          className="relative overflow-hidden book-page bg-transparent text-black"
          style={{ width: 330, height: 550 }}
        >
           {/* ... (Aapki Page 6 ki baaki saari Images) ... */}
        </div>

        {/* Back Cover */}
        <div
          className="relative overflow-hidden book-page bg-transparent text-white"
          data-density="hard"
          style={{ width: 330, height: 550 }}
        >
          <Image
            src="/pages/back.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
}
