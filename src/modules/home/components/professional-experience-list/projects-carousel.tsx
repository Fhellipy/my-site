"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

export type ImageType = {
  id: number;
  src: string;
  alt: string;
};

type ProjectsCarouselProps = {
  projects: ImageType[];
};

const OPTIONS = { loop: true };

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <div
      className="shadow-custom relative max-h-[300px] w-full min-w-[250px] overflow-hidden rounded-xl"
      ref={emblaRef}
    >
      <div className="flex touch-pan-y">
        {projects.map(project => (
          <div
            key={project.id}
            className="relative min-w-0 flex-[100%] flex-shrink-0 flex-grow-0"
          >
            <Link target="_blank" href={project.src} title={project.alt}>
              <Image
                className="block max-h-96 min-h-[10rem] w-full object-contain"
                src={project.src}
                alt={project.alt}
                title={project.alt}
                width={1920}
                height={1080}
              />
            </Link>
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-2 right-14 inline-flex h-10 w-10 cursor-pointer touch-manipulation items-center justify-center rounded-full bg-muted text-muted-foreground shadow"
        onClick={scrollPrev}
      >
        <ChevronLeftIcon
          size={30}
          className="flex-shrink-0 text-muted-foreground"
        />
      </button>

      <button
        className="absolute bottom-2 right-3 inline-flex h-10 w-10 cursor-pointer touch-manipulation items-center justify-center rounded-full bg-muted text-muted-foreground shadow"
        onClick={scrollNext}
      >
        <ChevronRightIcon
          size={30}
          className="flex-shrink-0 text-muted-foreground"
        />
      </button>
    </div>
  );
}
