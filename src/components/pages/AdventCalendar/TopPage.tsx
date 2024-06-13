import AdventImage from 'src/assets/advent-image.png';
import AdventLogo from 'src/assets/advent-logo.svg';
import AdventSample from 'src/assets/advent-sample.png';
import SiosLogo from 'src/assets/sios-logo.svg';

import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';

export const AdventCalendarTopPage = () => {
  return (
    <section className=" flex h-full min-h-screen w-full flex-col items-center font-zen">
      <header className="flex w-full flex-row justify-center border-b-4 border-b-ad-sub px-20 py-9 md:justify-start">
        <img src={AdventLogo} className="overflow-hidden" alt="" />
      </header>
      <main className="flex w-full grow flex-col items-center">
        <ErrorBoundaryComponent>
          <div className="w-full bg-ad-main py-8">
            <figure className="">
              <img src={AdventImage} className="m-auto block w-full max-w-4xl rounded" alt="" />
            </figure>
          </div>
          <div className="flex w-full max-w-4xl flex-col items-center gap-3 bg-white py-8">
            <h1 className=" w-full rounded bg-ad-main p-3 text-center text-2xl text-white">
              6月 仕事が捗るガジェット紹介
            </h1>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_cd3c7b537dac7b5394276ed5edbb7a545c2e83a0b7a38e51c2b774182a026172%40group.calendar.google.com&ctz=Asia%2FTokyo"
              className="w-full"
              height={450}
            />
          </div>
          <div className="flex w-full max-w-4xl flex-col items-center gap-3 bg-white py-8">
            <h1 className=" w-full rounded bg-ad-main p-3 text-center text-2xl text-white">
              登録方法
            </h1>
            <iframe
              className="w-full"
              height={450}
              src="https://www.youtube.com/embed/GXLFZpBjxOw?si=GQRmVOdjaOsWtEoB"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <ul className="flex w-full flex-col gap-2 text-base text-ad-main">
              <li>1. Tech Lab:アドベントカレンダーを登録してください</li>
              <li>2. 投稿したい日付に予定を追加してください</li>
              <li>3. 頑張って執筆してください</li>
              <figure className="border">
                <img src={AdventSample} alt="入力例" />
              </figure>
            </ul>
          </div>
          <div className="flex w-full flex-col items-center gap-3 bg-ad-main py-8">
            <h1 className=" text-2xl font-bold text-white">ネタ募集中です</h1>
            <a
              className=" flex w-full max-w-4xl flex-col items-center gap-2 rounded bg-ad-sub py-5 hover:cursor-pointer"
              href="https://forms.gle/7PXUuXGLqZtyXHdP7"
              target="_blank"
            >
              <img src={SiosLogo} alt="" />
              <span className="flex flex-row items-center text-white">
                ネタを投稿する
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </ErrorBoundaryComponent>
      </main>
    </section>
  );
};
