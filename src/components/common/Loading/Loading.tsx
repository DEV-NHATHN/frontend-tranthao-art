import styles from './Loading.module.scss';

type Props = {
  size?: 'sm' | 'md' | 'lg';
};

const Loading = ({ size = 'md' }: Props) => {
  return (
    <div className="flex flex-col h-screen flex-wrap justify-center content-center align-middle">
      <div className="flex flex-col justify-items-center items-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16"
          viewBox="0 0 533 800"
          fill="#F668B4"
        >
          <path d="M267 0l-267 0 0 133c0,74 60,134 133,134l72 0 10 0c28,0 51,23 52,51l0 215 0 134c0,73 60,133 133,133l133 0 0 -267 0 -266 0 -134c0,-73 -60,-133 -133,-133l-133 0z"></path>
          <path d="M0 348l138 0c29,0 52,23 52,52l0 52 -138 0c-29,0 -52,-23 -52,-52l0 -52z"></path>
        </svg>
      </div>
      <div className={styles[`container`]}>
        <span className={styles[`loading`]} id={styles[`${size}`]}></span>
      </div>
      {/* <p className="text-sm text-center text-black my-2">
        Corgiphy | Landing Page
      </p> */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center text-[#57FFFF]">
        tranthao
      </h1>
    </div>
  );
};

export default Loading;
