import ProcessIndicator from '@/components/common/ProcessIndicator';
import Metatags from '@/components/Metatags';
import { ABOUT_TAG, CONTACT_TAG, WORK_TAG } from '@/constants/path';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Div = (props: any) => (<div {...props}></div>) as any;

const NavBar = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="nav-bar"
    >
      <ProcessIndicator />
      <Div initial="hidden" animate="show">
        <Link href={WORK_TAG}>
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
        </Link>
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
  return (
    <>
      <Metatags title="Portfolio" />
      <NavBar />
      <Body />
    </>
  );
}
