"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";
import { Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";

export default function ProjectImageSlider({ images, title }) {
  const swiperRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  const slideImages = useMemo(() => {
    if (Array.isArray(images)) {
      return images.filter(Boolean);
    }

    return images ? [images] : [];
  }, [images]);

  const slides = useMemo(
    () =>
      slideImages.map((src, index) => ({
        src,
        alt: `${title} - slide ${index + 1}`,
      })),
    [slideImages, title],
  );

  if (slideImages.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="animate-fade-in-up overflow-hidden rounded-md border border-border bg-background opacity-0">
      <div className="relative">
        <Swiper
          keyboard={{ enabled: true }}
          modules={[Pagination, Keyboard]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsSwiperReady(true);
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={0}
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={`${title}-${index}`}>
              <button
                aria-label={`Buka ${title} slide ${index + 1} full screen`}
                className="group relative block w-full cursor-zoom-in"
                onClick={() => setLightboxIndex(index)}
                type="button"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-surface">
                  <Image
                    alt={`${title} - slide ${index + 1}`}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 960px, 100vw"
                    src={image}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                    <FiMaximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Full screen
                  </span>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {slideImages.length > 1 && (
          <>
            <button
              aria-label="Sebelumnya"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-all hover:-translate-x-0.5 hover:bg-background disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!isSwiperReady}
              onClick={handlePrevious}
              type="button"
            >
              <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Berikutnya"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-all hover:translate-x-0.5 hover:bg-background disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!isSwiperReady}
              onClick={handleNext}
              type="button"
            >
              <FiChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <Lightbox
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex < 0 ? 0 : lightboxIndex}
        open={lightboxIndex >= 0}
        slides={slides}
      />
    </div>
  );
}
