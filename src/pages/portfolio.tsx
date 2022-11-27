import ProcessIndicator from '@/components/common/ProcessIndicator';
import Metatags from '@/components/Metatags';
import { ABOUT_TAG, CONTACT_TAG, WORK_TAG } from '@/constants/path';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Div = (props: any) => (<div {...props}></div>) as any;

type NavLinkProps = NavBarProps & {
  page: string;
};

const NavLink = ({ page, selectedPage, setSelectedPage }: NavLinkProps) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-yellow' : ''
      } hover:text-yellow transition duration-500`}
      href={`
        #${lowerCasePage}
      `}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

type NavBarProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const NavBar = ({ selectedPage, setSelectedPage }: NavBarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(mix-width: 768px)');

  console.log(
    '%c isAboveSmallScreens: ',
    'color: green; background: yellow; font-size: 12px',
    isAboveSmallScreens,
  );
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
    >
      <NavLink
        page="landing-page"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <ProcessIndicator />
      <Div initial="hidden" animate="show">
        <nav className={`z-40 w-full fixed top-0 py-6`}>
          <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="text-3xl font-bold">TT</h4>

            {/* DESKTOP NAV */}
            {isAboveSmallScreens ? (
              <div className="flex justify-between gap-16 text-sm font-semibold">
                <NavLink
                  page="landing_page"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </nav>
        {/* <Link href={WORK_TAG}>
          <span className="nav-link">Works</span>
        </Link>
        <Link href={ABOUT_TAG}>
          <span className="nav-link">About</span>
        </Link>
        <Link href={CONTACT_TAG}>
          <span className="nav-link">Contact</span>
        </Link>
        <Link href="/">
          <a className="back-btn">More</a>
        </Link> */}
      </Div>
    </motion.div>
  );
};

const Footer = () => (
  <motion.div
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.4,
      duration: 0.75,
    }}
    className="mountains"
  >
    Footer
  </motion.div>
);

const Body = () => {
  return (
    <div className="explore-page-hero">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
        className="header-content"
      >
        <h1 className="title-text">incoming</h1>
        <p className="sub-text">incoming!</p>
        <Link href="/">
          <a className="back-btn">back</a>
        </Link>
      </motion.div>
      <Footer />
    </div>
  );
};

export default function Portfolio() {
  const [selectedPage, setSelectedPage] = useState('landing-page');

  const isAboveMediumScreens = useMediaQuery('(min-width: 960px)');

  return (
    <div className="app bg-deep-blue">
      <Metatags title="Portfolio" />
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Body />
    </div>
  );
}
