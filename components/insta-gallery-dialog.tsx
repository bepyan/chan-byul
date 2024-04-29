'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '~/libs/utils';
import { createPortal } from 'react-dom';
import { useInstaGalleryStore } from '~/libs/insta-gallery-store';

export default function InstaGalleryDialog({ images }: { images: string[] }) {
  const { isOpen, sliderIndex, canScrollNext, canScrollPrev, initEmblaApi, next, prev } =
    useInstaGalleryStore();
  const closeHandler = useInstaGalleryStore((state) => state.close);

  useEffect(() => {
    const meta = document.querySelector('meta[name="viewport"]');

    if (isOpen) {
      meta?.setAttribute('content', 'width=device-width, initial-scale=1');
    } else {
      meta?.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
    }
  }, [isOpen]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    initEmblaApi(emblaApi);
  }, [emblaApi]);

  return createPortal(
    <RemoveScroll enabled={isOpen} removeScrollBar allowPinchZoom>
      <div
        className={cn(
          !isOpen ? 'hidden' : 'animate-in fade-in-0',
          'z-40 w-full h-full fixed inset-0 bg-white/90 backdrop-blur',
        )}
      />
      <div
        className={cn(
          !isOpen ? 'hidden' : 'flex flex-col',
          'container z-50 w-full h-full fixed inset-0 overflow-y-auto',
        )}
      >
        <div id='embla' className='overflow-hidden'>
          <div id='embla__viewport' ref={emblaRef}>
            <div id='embla__container' className='flex items-center gap-8'>
              {images.map((image, index) => {
                return (
                  <div id='embla__slide' className='min-w-0 flex-[0_0_100%]' key={index}>
                    <img src={image} alt='' data-animate className='pointer-events-none' />
                  </div>
                );
              })}
            </div>
          </div>
          {/* 인디케이터 */}
          <div className='mt-auto pt-2 pb-12'>
            <div className='flex justify-center py-1 text-[10px]'>
              {images.length}장 중 {sliderIndex}번
            </div>
            <div className='flex items-center justify-center gap-2 text-sm'>
              <button
                className={cn(
                  'p-1 rounded transition-opacity',
                  canScrollPrev ? 'active:opacity-60' : 'pointer-events-none disabled:opacity-40',
                )}
                onClick={prev}
              >
                이전
              </button>
              <button
                className='p-2 rounded-full transition-opacity active:opacity-60'
                onClick={closeHandler}
              >
                닫기
              </button>
              <button
                className={cn(
                  'p-1 rounded-full transition-opacity',
                  canScrollNext ? 'active:opacity-60' : 'pointer-events-none disabled:opacity-40',
                )}
                onClick={next}
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </RemoveScroll>,
    document.body,
  );
}
