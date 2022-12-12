import Loading from '@/components/common/Loading/Loading';
import OptimizedImage from '@/components/common/OptimizedImage';
import Metatags from '@/components/Metatags';
import { PORTFOLIO_PATH } from '@/constants/path';
// import useDarkMode from '@/hooks/useDarkMode';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import styles from '../styles/scss/LandingPage.module.scss';

import Button from '@/components/common/Button/Button';

export default function LandingPage() {
  // const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [isLoading, setIsLoading] = useState(false);

  const tags = [`3D Artist`, `Game Designer`, `Animator`];

  const name = `tranthao`;

  const links = [
    {
      name: `Instagram`,
      background_image: `https://res.cloudinary.com/dcjxcptdt/image/upload/v1663592612/tranthao/ffaf7sptlur1cryxia0r.png`,
      src: `https://www.instagram.com/${name}.art/`,
      blurhash: 'LcL5OtNesVV]~mR*R+oyIGV[Rjof',
    },
    {
      name: `Twitter`,
      background_image: `https://res.cloudinary.com/dcjxcptdt/image/upload/v1663592655/tranthao/m7unmioe0gdfu8cz36vj.png`,
      src: `https://twitter.com/${name}art`,
      blurhash: 'LNRBkRaf~otR~Bof9HV@J-kBxbWY',
    },
    {
      name: `Dribble`,
      background_image: `https://res.cloudinary.com/dcjxcptdt/image/upload/v1663592701/tranthao/lto7j5jn3baiu2dfspgz.jpg`,
      src: `https://dribbble.com/${name}`,
      blurhash: 'LLE}yMoxxzo$WKj]M]WBawjbofbE',
    },
    {
      name: `Behance`,
      background_image: `https://res.cloudinary.com/dcjxcptdt/image/upload/v1663592740/tranthao/wn5ntmpoyvnabzajclxi.png`,
      src: `https://www.behance.net/${name}art`,
      blurhash: 'L4C6jN4|0Gox00xctPos0Ix[=qV$',
    },
    {
      name: `Foundation`,
      background_image: `https://res.cloudinary.com/dcjxcptdt/image/upload/v1663592774/tranthao/mtw8r2umtwlzhw3siuck.png`,
      src: `https://foundation.app/@${name}`,
      blurhash: 'LJGmfet7G^XSJCt6a1juKPWXvzjF',
    },
  ];

  let lastItem;
  if (links.length % 2 === 1) {
    lastItem = links[links.length - 1];
  }

  const profileScreenRef = useRef(null);

  useEffect(() => {
    const profileScreen = profileScreenRef.current as any;
    let timer: any;
    if (profileScreen) {
      timer = setTimeout(() => {
        profileScreen.classList.remove(`hidden`);
        profileScreen.classList.add(`fade-in-animation`);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      setIsLoading(false);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Metatags
        title={`Landing Page`}
        description={`Public artworks profile`}
      />
      {isLoading && <Loading size="sm" />}
      <div
        className="min-h-screen bg-fixed bg-no-repeat bg-cover bg-top lg:w-[1903px] 2xl:w-[3000px]"
        id={styles[`landing-page-background`]}
        style={{ fontSize: `20px` }}
      >
        <div ref={profileScreenRef} className="hidden">
          <div className="sticky top-0 px-4 py-2 mb-10"></div>
          {/* toggle mode start */}
          <div className="card-container">
            <div className="h-[60px] flex flex-row relative p-2 sm:p-0">
              <div className="absolute top-0 z-[2] flex flex-col rounded-full gap-6 px-3 py-3 bg-skin-baseProfilePrimary"></div>
            </div>
          </div>
          {/* toggle mode end */}

          {/* desc start */}
          <div className="card-container">
            <div className="rounded-xl overflow-hidden">
              {/* bg start */}
              <div className="grid grid-cols-4">
                <div className="grid row-span-1 col-span-4 bg-skin-baseProfilePrimary">
                  <div className="aspect-w-4 aspect-h-1">
                    <Image
                      className="object-cover"
                      src="https://res.cloudinary.com/dcjxcptdt/image/upload/v1663565698/tranthao/txnpxdgfm6cbdvz0gfhp.png"
                      placeholder="blur"
                      blurDataURL="true"
                      alt="background cover"
                      width="900px"
                      height="300px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full text-skin-baseProfilePrimary bg-skin-baseProfilePrimary">
                <div className="relative">
                  <div className="flex justify-between  items-center w-full h-[110px]  absolute -top-[55px] px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] bg-skin-baseProfilePrimary rounded-full flex justify-center items-center p-2">
                        <Image
                          className="rounded-full"
                          src="https://res.cloudinary.com/dcjxcptdt/image/upload/v1663565697/tranthao/udbfxehjbqacrtauxblz.jpg"
                          alt="avatar"
                          width="300px"
                          height="300px"
                        />
                      </div>
                      <div className="hidden sm:flex  px-4 h-[40px] rounded-full items-center bg-skin-baseProfilePrimary text-skin-baseProfilePrimary shadow-md">
                        <span className="text-lg sm:text-2lg undefined">
                          3d Visual Designer at{` `}
                          <a
                            href="https://ui8.net/"
                            target="_blank"
                            rel="noreferrer"
                            className="txt-hover"
                          >
                            @ui8.net
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pt-[60px] sm:pt-[80px] pb-8">
                  <h3 className="text-xl sm:text-2xl md:text-6xl mb-4 font-normal">
                    <b>Tran Thao</b>
                  </h3>
                  <p className="text-lg sm:text-2lg md:text-2xl mb-4">
                    I love to create graphics and cute things full of joy and
                    bring them to life with animation!
                  </p>
                  <div className="flex flex-wrap gap-2 items-center w-full">
                    {tags.map((tag, index) => (
                      <div
                        key={index}
                        className="px-4 h-[40px] rounded-full flex items-center bg-skin-baseProfileSecondary text-skin-baseProfileSecondary cursor-pointer glow-on-hover
                        "
                      >
                        <span className="text-md sm:text-2lg">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* desc end */}

          {/* work start */}
          <div className="card-container">
            <div className="p-2 sm:px-0 sm:py-4">
              <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
                {links.slice(0, -1).map((link, index) => (
                  <Link key={index} href={link.src}>
                    <a target="_blank" rel="noreferrer">
                      <div
                        className="grid row-span-1 col-span-2 transform transition duration-300 hover:scale-[102%] hover:animate-none cursor-pointer overflow-hidden rounded-xl animate-none txt-hover"
                        style={{ backgroundColor: `rgb(255, 255, 255)` }}
                      >
                        <div className="aspect-w-2 aspect-h-1 relative">
                          <Image
                            className="object-cover"
                            src={link.background_image}
                            alt="background cover"
                            layout="fill"
                          />
                          {/* <OptimizedImage key={link.name} image={link} /> */}
                          <div className="flex w-full items-end absolute txt-hover">
                            <div className="p-2 sm:p-4">
                              <p className="text-2xl">
                                <b className="hidden sm:block">{link.name}</b>
                                <small className="block sm:hidden">
                                  <b>{link.name}</b>
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>

              {lastItem && (
                <div className="grid grid-cols-1 mt-2">
                  <Link href={lastItem.src}>
                    <a target="_blank" rel="noreferrer">
                      <div
                        className="grid row-span-1 col-span-4 transform transition duration-300 hover:scale-[102%] hover:animate-none cursor-pointer overflow-hidden rounded-xl animate-none txt-hover"
                        style={{ backgroundColor: `rgb(255, 255, 255)` }}
                      >
                        <div className="aspect-w-4 aspect-h-1 last-item">
                          <Image
                            // className="object-cover"
                            src={lastItem.background_image}
                            alt="background cover"
                            width={800}
                            height={200}
                          />
                          <div className="flex w-full items-end absolute top-0 txt-hover">
                            <div className="p-2 sm:p-4">
                              <p className="text-2xl">
                                <b className="hidden sm:block">
                                  {lastItem.name}
                                </b>
                                <small className="block sm:hidden">
                                  <b>{lastItem.name}</b>
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* work end */}
          <div className="portfolio">
            <Link href={PORTFOLIO_PATH}>
              <a className="explore-btn">Visit My Portfolio!</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
