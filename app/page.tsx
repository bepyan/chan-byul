import BankAccordion from '~/components/bank-accordion';
import CommentFormDialog from '~/components/comment-form-dialog';
import CommentList from '~/components/comment-list';
import ContactDialog from '~/components/contact-dialog';
import { DividerIcon, LinkIcon, PearlIcon } from '~/components/icons';
import InstaGallery from '~/components/insta-gallery';
import NaverMap from '~/components/naver-map';
import VideoPlayer from '~/components/video-player';

export default function Home() {
  return (
    <main className='container'>
      {/* 동영상 */}
      <section className='relative w-full aspect-4/5 my-20'>
        <div className='absolute top-0 inset-x-0 -z-10'>
          <div className='relative overflow-hidden'>
            <VideoPlayer />
          </div>
        </div>
      </section>
      {/* */}
      <section className='bg-white mt-20'>
        <h2 className='font-serif_en text-center text-xl'>wedding invitation</h2>
        <div className='flex justify-center my-4'>
          <PearlIcon />
        </div>
        <div className='text-center'>
          <div className='flex justify-center items-center gap-1'>
            <span>김경찬</span>
            <DividerIcon />
            <span>김샛별</span>
          </div>
          <div className='mt-4 text-sm text-gy-6 leading-7'>
            2023년 11월 4일 토요일 낮 12:30
            <br />
            라비돌웨딩강남 2F 오뗄홀
          </div>
        </div>
        <div className='mt-10'>
          <img
            className='w-full h-full aspect-4/3'
            src='https://github.com/bepyan/charlan-byul/assets/65283190/bc216e75-9b2f-42e5-90aa-af2473195c24'
            alt=''
          />
        </div>
      </section>
      {/* */}
      <section className='text-sm mt-10'>
        <p className='text-center leading-7'>
          모든 겸손과 온유로 하고 오래 참음으로
          <br />
          사랑 가운데서 서로 용납하고 평안의 매는 줄로
          <br />
          성령이 하나 되게 하신 것을 힘써 지키라
          <br />
          에베소서 4:2-3
        </p>
        <div className='flex justify-center my-10'>
          <PearlIcon />
        </div>
        <p className='text-center leading-7'>
          하나님의 섬세하신 계획 아래
          <br />
          사랑과 순종함으로 만나
          <br />
          이제 연합하여 새로운 가정을 이루려 합니다.
          <br />
          서로를 사랑함으로 하나님을 기쁘시게 하고
          <br />
          이웃을 섬기는 선한 가정을 이룰 수 있게
          <br />
          오셔서 축복해 주시면 감사하겠습니다.
        </p>
        <div className='mt-10 flex items-center justify-center gap-3'>
          <div>
            <div>김인환</div>
            <div>김옥현</div>
          </div>
          <span>의</span>
          <span>차남</span>
          <strong>경찬</strong>
        </div>
        <div className='mt-10 flex items-center justify-center gap-3'>
          <div>
            <div>김경복</div>
            <div>김유정</div>
          </div>
          <span>의</span>
          <span>장녀</span>
          <strong>샛별</strong>
        </div>
        <div className='mt-10 text-center'>
          <ContactDialog
            groomList={[
              { designation: '신랑', name: '김경찬', phone: '010-5483-4475' },
              { designation: '신랑 父', name: '김인환', phone: '010-3766-4475' },
              { designation: '신랑 母', name: '김옥현', phone: '010-5390-8473' },
            ]}
            priestList={[
              { designation: '신부', name: '김샛별', phone: '010-8411-8385' },
              { designation: '신부 父', name: '김경복', phone: '010-5112-5683' },
              { designation: '신부 母', name: '김유정', phone: '010-2995-5683' },
            ]}
          />
        </div>
      </section>
      {/* 달력 */}
      <section className='mt-20'>
        <div className='relative'>
          <img
            className='w-full h-full aspect-4/5'
            src='https://github.com/bepyan/charlan-byul/assets/65283190/ceab1daf-4f02-4d4e-b0ee-0275e5fb9650'
            alt=''
          />
        </div>
      </section>
      {/* 갤러리 */}
      <section className='mt-1'>
        <h2 className='hidden font-serif_en text-center text-xl'>gallery</h2>
        <InstaGallery
          images={[
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/0e37f601-a833-4c96-a42a-b8a55c7679ec',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/7c1a58aa-1769-4b2f-b988-5d6741b63897',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/5aefff1c-7664-4e08-b411-198c390e71c5',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/4a7e594f-36ce-4abe-8d66-1b3900fd7e85',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/2aa8b270-f79e-4934-8d0d-e5e9ff25f8fa',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/c8fd6261-e079-47b0-adf2-444d4f1d5b87',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/76754460-1d5d-48fe-a2a1-ca47cff6318c',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/7136d231-5e52-41c2-9a25-726bf61915b6',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/8f3e4466-e1ad-43a7-97be-cc192367fd4a',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/c59217a4-37ed-41c3-acc8-2e2dc7608cc5',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/03b93aa4-9289-429d-90e5-3938eeb0193a',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/2154a53e-cc1e-4e61-aa7e-9c66c7b86d2c',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/15c43444-d054-42e2-bf5c-c315104ece59',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/df0dfb44-0f4c-44a4-9c01-deb244bd81fc',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/d9d13e46-8cd2-4c43-b860-07427dfd5f0b',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/eb0ac18d-e0ae-4683-915d-ec2d158113e3',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/9e2e2760-39e7-4f66-aac1-8558b0c90579',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/38f4b8e4-928f-44ed-876c-40a5cffcfbba',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/263822aa-911a-4d1d-9c0e-df8bfc873061',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/0c9d18a9-5ef6-4e53-b6e1-b140126e6eab',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/9a83adb6-f8a0-4b99-ac37-e3f9f3102f8f',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/5ca574ef-b0cb-4863-a49c-3848538e3533',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/d5ba7879-b465-4334-8a5d-c5fe099ccc8d',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/e49fa83a-53cf-47db-8b0b-bc97a2762a99',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/492c4728-5f34-48eb-b886-62d1fd0592aa',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/0e556e52-a042-4aac-b957-24ae286c8347',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/a4bc1ff7-b2d0-45ad-9268-6475da7af7de',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/35a46671-b8c1-4726-a9e0-8e4ca4c8ef17',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/a8b6c009-09c6-42e8-8a8b-40758a663ac9',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/9cc24dcb-c0a5-44b3-bf90-8874572b22e5',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/4f8e067f-fcdc-4da4-b3dd-859f1b569dce',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/6938b2c5-1387-4d19-b73c-b27784b99233',
            },
            {
              src: 'https://github.com/bepyan/charlan-byul/assets/65283190/dc3c5dad-4ea0-4061-b564-370c98c7561d',
            },
          ]}
        />
      </section>
      {/* 오시는 길 */}
      <section className='my-20'>
        <h2 className='text-center'>오시는 길</h2>
        <NaverMap className='my-10 h-60 w-full' />
        <div className='mx-8 mt-4'>
          <div className='relative'>
            <p className=''>
              서울 강남구 논현로79길 72
              <br />
              라비돌웨딩강남 2F 오뗄홀
            </p>
          </div>
          <p className='mt-2 text-xs text-gy-8'>02-538-3300</p>
        </div>
        <div className='mt-10 mx-8 space-y-3'>
          <div className='flex'>
            <span className='w-14'>지하철</span>
            <DividerIcon className='text-gy-8 mt-[2.5px] mr-2' />
            <span className='text-sm text-gy-6 mt-[1px]'>[2호선 강남역] 2번 출구 도보 3분</span>
          </div>
          <div className='flex'>
            <span className='w-14'>버스</span>
            <DividerIcon className='text-gy-8 mt-[2.5px] mr-2' />
            <div className='text-sm text-gy-6 mt-[1px]'>
              <p>간선: 112.224. 4455. 667</p>
              <p>간선: 112.224. 4455. 667</p>
            </div>
          </div>
          <div className='flex'>
            <span className='w-14'>주차</span>
            <DividerIcon className='text-gy-8 mt-[2.5px] mr-2' />
            <span className='text-sm text-gy-6 mt-[1px]'>건물 내 주차장 500대 가능</span>
          </div>
        </div>
      </section>
      {/* 계좌번호 */}
      <section className='my-20'>
        <h2 className='text-center'>마음 전하실 곳</h2>
        <div className='mt-8 mx-8'>
          <BankAccordion
            title='신랑측 계좌번호'
            bankList={[
              { holder: '김경찬', bank: '우리', number: '1002-563-763111' },
              { holder: '김인환', bank: '국민', number: '034-21-0812-232' },
              { holder: '김옥현', bank: '국민', number: '404601-01-077682' },
            ]}
          />
          <BankAccordion
            className='mt-2'
            title='신부측 계좌번호'
            bankList={[
              { holder: '김샛별', bank: '국민', number: '605102-04-117338' },
              { holder: '김경복', bank: '국민', number: '043-24-0643-400' },
              { holder: '김유정', bank: '농협', number: '356-0942-7634-43' },
            ]}
          />
        </div>
      </section>
      <section>
        <h2 className='text-center'>축하 메시지</h2>
        <div className='flex justify-center my-6'>
          <CommentFormDialog />
        </div>
        <CommentList />
      </section>
      <footer className='relative mt-20 pb-10 px-8'>
        {/* <div className='flex items-center gap-1 text-xs'>
          <LinkIcon className='text-gy-8' />
          청첩장 링크 복사하기
        </div> */}
        <p className='mt-8 text-xs text-gy-6'>
          © 2023{' '}
          <a href='https://bepyan.me/' target='_blank' className='font-bold'>
            bepyan
          </a>
          . All rights reserved.
        </p>
      </footer>
    </main>
  );
}
