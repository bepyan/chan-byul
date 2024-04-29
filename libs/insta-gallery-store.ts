import { UseEmblaCarouselType } from 'embla-carousel-react';
import { create } from 'zustand';

type EmblaCarouselType = UseEmblaCarouselType[1];

type InstaGalleryStore = {
  isOpen: boolean;
  // embla
  emblaApi?: EmblaCarouselType;
  sliderIndex: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  //
  open: (index: number) => void;
  close: () => void;
  initEmblaApi: (emblaApi: EmblaCarouselType) => void;
  next: () => void;
  prev: () => void;
};

export const useInstaGalleryStore = create<InstaGalleryStore>((set, get) => ({
  isOpen: false,
  sliderIndex: 0,
  canScrollPrev: false,
  canScrollNext: false,
  open: (index) => {
    const { emblaApi } = get();

    emblaApi?.scrollTo(index);
    console.log(index);
    set((state) => ({
      ...state,
      isOpen: true,
      sliderIndex: index,
    }));
  },
  close: () => {
    set((state) => ({
      ...state,
      isOpen: false,
    }));
  },
  initEmblaApi: (emblaApi) => {
    if (!emblaApi) return;

    emblaApi.on('select', (api) => {
      set((state) => ({
        ...state,
        sliderIndex: api.selectedScrollSnap() + 1,
        canScrollNext: api.canScrollNext(),
        canScrollPrev: api.canScrollPrev(),
      }));
    });

    set((state) => ({
      ...state,
      emblaApi,
      canScrollNext: emblaApi.canScrollNext(),
      canScrollPrev: emblaApi.canScrollPrev(),
    }));
  },
  next: () => {
    get().emblaApi?.scrollNext();
  },
  prev: () => {
    get().emblaApi?.scrollPrev();
  },
}));
