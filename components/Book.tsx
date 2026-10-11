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
      width: 660,
      height: 550,
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

    // Library ke event se pata chalega ke page palat raha hai ya nahi
    pageFlip.on("changeState", (e: any) => {
      if (e.data === "read") {
        isFlipping = false; // Page palat chuka hai, ab scroll khol do
      }
    });

    const handleWheel = (e: WheelEvent) => {
      // Agar page palat raha hai, to scroll ko bilkul rok do
      if (isFlipping) {
        e.preventDefault();
        return;
      }

      const currentPage = pageFlip.getCurrentPageIndex();
      const pageCount = pageFlip.getPageCount();

      if (e.deltaY > 0) {
        // Neeche scroll (Scroll Down)
        if (currentPage < pageCount - 1) {
          e.preventDefault();
          isFlipping = true; // Lock laga do foran
          pageFlip.flipNext();
        }
        // Agar last page hai, to preventDefault nahi karenge, section neeche chala jayega
      } else if (e.deltaY < 0) {
        // Upar scroll (Scroll Up)
        if (currentPage > 0) {
          e.preventDefault();
          isFlipping = true; // Lock laga do foran
          pageFlip.flipPrev();
        }
        // Agar pehla page hai, to preventDefault nahi karenge, section upar chala jayega
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
    // "py-20" se top aur bottom par space bani hui hai
    <div ref={containerRef} className="w-full h-full flex items-center justify-center py-20">
      
      <div ref={bookRef}>
        {/* Front Cover */}
        <div
          className="book-page bg-blue-700 text-white"
          data-density="hard"
          style={{ width: 330, height: 550 }}
        >
          <Image
            src="/pages/front.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain scale-130 translate-x-3 pointer-events-none select-none"
          />
          <div className="flex h-full items-center justify-center text-5xl font-bold"></div>
        </div>

        {/* Page 1 */}
        <div
          className="book-page bg-amber-50 text-black"
          style={{ width: 660, height: 550 }}
        >
          <Image
            src="/pages/left.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain pointer-events-none select-none"
          />
          <Image
            src="/elements/fwine.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain -rotate-12 -translate-x-34 -translate-y-33 scale-35"
          />
          <Image
            src="/elements/side3.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain -translate-x-23 -translate-y-14 scale-78"
          />
          <Image
            src="/elements/mouse.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain z-50 translate-x-20 translate-y-46 scale-55"
          />
          <Image
            src="/elements/butter.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain scale-45 rotate-30 -translate-x-28 translate-y-32"
          />
          <Image
            src="/ref/girl.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain scale-33 rotate-10 translate-x-14 -translate-y-23"
          />
          <Image
            src="/elements/frame10.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain scale-65 rotate-10 translate-x-14 -translate-y-20"
          />
          <Image
            src="/elements/text1.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain scale-45 translate-x-10 translate-y-15"
          />
        </div>

        {/* Page 2 */}
        <div
          className="relative overflow-hidden book-page bg-amber-50 text-black"
          style={{ width: 660, height: 550 }}
        >
          <Image
            src="/pages/right.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain pointer-events-none select-none"
          />
          <Image
            src="/elements/paper.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain rotate-90 shadow-black translate-x-18 translate-y-38 scale-50"
          />
          <Image
            src="/elements/starB.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain shadow-black -rotate-50 -translate-x-17 translate-y-30 scale-50"
          />
          <Image
            src="/ref/girl.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain shadow-black rotate-20 translate-x-19 -translate-y-22 scale-22"
          />
          <Image
            src="/ref/girl2.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain shadow-black rotate-20 translate-x-26 -translate-y-43 scale-22"
          />
          <Image
            src="/ref/girl3.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain shadow-black rotate-20 translate-x-11 translate-y-1 scale-22"
          />
          <Image
            src="/elements/frame9.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain shadow-black rotate-12 translate-x-18 -translate-y-20 scale-80"
          />
          <Image
            src="/elements/text2.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain shadow-black rotate-0 -translate-x-13 -translate-y-40 scale-60"
          />
          <Image
            src="/elements/kit.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain shadow-black rotate-0 -translate-x-13 -translate-y-16 scale-60"
          />
        </div>

        {/* Page 3 */}
        <div
          className="relative overflow-hidden book-page bg-amber-50 text-black"
          style={{ width: 660, height: 550 }}
        >
          <Image
            src="/pages/left.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain pointer-events-none select-none"
          />
          <Image
            src="/elements/billa6.png"
            alt="Lyrics"
            fill
            priority
            draggable={false}
            className="object-contain scale-55 rotate-1 -translate-x-30 -translate-y-10"
          />
          <Image
            src="/elements/side1.png"
            alt="Wine"
            fill
            priority
            draggable={false}
            className="object-contain scale-50 rotate-180 -translate-x-26 translate-y-31"
          />
          <Image
            src="/elements/starem.png"
            alt="Tape"
            fill
            priority
            draggable={false}
            className="object-contain scale-16 -rotate-18 translate-x-18 -translate-y-56 z-20"
          />
          <Image
            src="/ref/girl4.jpg"
            alt="Frame"
            fill
            priority
            draggable={false}
            className="object-contain scale-33 rotate-17 translate-x-13 -translate-y-21 z-30"
          />
          <Image
            src="/elements/frame11.png"
            alt="Frame"
            fill
            priority
            draggable={false}
            className="object-contain scale-75 rotate-18 translate-x-10 -translate-y-11 z-30"
          />
          <Image
            src="/elements/moon.png"
            alt="Recorder"
            fill
            priority
            draggable={false}
            className="object-contain scale-34 -rotate-14 -translate-x-20 translate-y-30 z-40"
          />
          <Image
            src="/elements/fits.png"
            alt="Recorder"
            fill
            priority
            draggable={false}
            className="object-contain scale-44 -rotate-14 -translate-x-30 -translate-y-50 z-40"
          />
          <Image
            src="/elements/note1.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 -rotate-7 z-50 translate-x-14 translate-y-38"
          />
          <Image
            src="/elements/lovetape.png"
            alt="Old Paper"
            fill
            priority
            draggable={false}
            className="object-contain scale-19 rotate-0 z-50 translate-x-10 translate-y-24"
          />
        </div>

        {/* Page 4 */}
        <div
          className="relative overflow-hidden book-page bg-amber-50 text-black"
          style={{ width: 660, height: 550 }}
        >
          <Image
            src="/pages/right.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain pointer-events-none select-none"
          />
          <Image
            src="/elements/side2.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 rotate-0 z-50 translate-x-16 translate-y-23"
          />
          <Image
            src="/elements/billa.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-38 rotate-0 z-50 -translate-x-14 -translate-y-28"
          />
          <Image
            src="/elements/boqey.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-48 rotate-0 z-50 -translate-x-14 translate-y-28"
          />
          <Image
            src="/ref/girl5.jpg"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-32 rotate-0 z-50 translate-x-19 -translate-y-32"
          />
          <Image
            src="/ref/girl1.jpg"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 rotate-0 z-50 translate-x-18 -translate-y-28"
          />
          <Image
            src="/frames/frame5.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 rotate-0 z-50 translate-x-18 -translate-y-28"
          />
          <Image
            src="/elements/miss.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-48 rotate-18 z-50 translate-x-28 translate-y-4"
          />
        </div>

        {/* Page 5 */}
        <div
          className="relative overflow-hidden book-page bg-amber-50 text-black"
          style={{ width: 660, height: 550 }}
        >
          <Image
            src="/pages/left.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain pointer-events-none select-none"
          />
          <Image
            src="/elements/side4.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 rotate-0 z-50 -translate-x-22 translate-y-23"
          />
          <Image
            src="/elements/disk.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 rotate-0 z-50 -translate-x-50 -translate-y-15"
          />
          <Image
            src="/elements/disk.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 rotate-0 z-50 -translate-x-50 -translate-y-15"
          />
          <Image
            src="/elements/billa5.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 rotate-0 z-50 translate-x-19 translate-y-33"
          />
          <Image
            src="/ref/girl11.jpg"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-26 -rotate-11 z-50 translate-x-4 -translate-y-12"
          />
          <Image
            src="/ref/girl10.jpg"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-26 rotate-11 z-50 translate-x-16 -translate-y-40"
          />
          <Image
            src="/elements/frame8.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 rotate-0 z-50 translate-x-10 -translate-y-25"
          />
          <Image
            src="/elements/twoStar.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-38 rotate-0 z-50 -translate-x-14 translate-y-20"
          />
          <Image
            src="/elements/text3.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-48 rotate-0 z-50 -translate-x-22 -translate-y-48"
          />
        </div>

        {/* Page 6 */}
        <div
          className="relative overflow-hidden book-page bg-amber-50 text-black"
          style={{ width: 660, height: 550 }}
        >
          <Image
            src="/pages/right.jpg"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain pointer-events-none select-none"
          />
          <Image
            src="/elements/side5.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-78 rotate-0 z-50 translate-x-22 translate-y-14"
          />
          <Image
            src="/elements/text4.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-58 rotate-0 z-50 -translate-x-6 -translate-y-40"
          />
          <Image
            src="/ref/girl9.jpg"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-28 -rotate-4 z-50 -translate-x-18 -translate-y-16"
          />
          <Image
            src="/ref/girl8.jpg"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-27 rotate-10 z-50 -translate-x-11 translate-y-13"
          />
          <Image
            src="/elements/frame7.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-68 rotate-0 z-50 -translate-x-14 translate-y-1"
          />
          <Image
            src="/elements/billa4.png"
            alt="Disk"
            fill
            priority
            draggable={false}
            className="object-contain scale-58 rotate-0 z-50 -translate-x-17 translate-y-40"
          />
        </div>

        {/* Back Cover */}
        <div
          className="relative overflow-hidden book-page bg-blue-700 text-white"
          data-density="hard"
          style={{ width: 330, height: 550 }}
        >
          <Image
            src="/pages/back.png"
            alt="Front Cover"
            fill
            priority
            draggable={false}
            className="object-contain scale-130 translate-x-3 pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
}
