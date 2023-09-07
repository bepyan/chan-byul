'use client';

import { RemoveScroll } from 'react-remove-scroll';

import { cn } from '~/libs/utils';
import { createPortal } from 'react-dom';
import { useInstaGalleryStore } from '~/libs/insta-gallery-store';

export default function InstaGalleryDialog({ images }: { images: string[] }) {
  const open = useInstaGalleryStore((state) => state.open);
  const sliderIndex = useInstaGalleryStore((state) => state.sliderIndex);
  const closeHandler = useInstaGalleryStore((state) => state.closeHandler);
  const setSliderIndex = useInstaGalleryStore((state) => state.setSliderIndex);

  const moveSlide = (targetIndex: number) => {
    if (0 > targetIndex || targetIndex >= images.length) {
      return;
    }

    setSliderIndex(targetIndex);
  };

  return createPortal(
    <RemoveScroll enabled={open} removeScrollBar allowPinchZoom>
      <div
        className={cn(
          open ? 'flex flex-col' : 'hidden',
          'container z-50 w-full h-full fixed inset-0 overflow-hidden bg-white/90 backdrop-blur',
          open && 'duration-200 animate-in fade-in-0 zoom-in-95',
        )}
      >
        <div className='flex-1 flex items-center flex-shrink-0 select-none'>
          <div className='w-full'>
            <img src={images[sliderIndex]} alt='' className='pointer-events-none' />
          </div>
        </div>
        {/* 인디케이터 */}
        <div className='mt-auto pt-2 pb-12'>
          <div className='flex justify-center py-1 text-[10px]'>
            {images.length}장 중 {sliderIndex + 1}번
          </div>
          <div className='flex items-center justify-center gap-2 text-sm'>
            <button
              disabled={sliderIndex === 0}
              className={cn(
                'p-1 rounded transition-opacity',
                sliderIndex === 0 ? 'disabled:opacity-40' : 'active:opacity-60',
              )}
              onClick={() => moveSlide(sliderIndex - 1)}
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
              disabled={sliderIndex === images.length - 1}
              className={cn(
                'p-1 rounded-full transition-opacity',
                sliderIndex === images.length - 1 ? 'disabled:opacity-40' : 'active:opacity-60',
              )}
              onClick={() => moveSlide(sliderIndex + 1)}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </RemoveScroll>,
    document.body,
  );
}
