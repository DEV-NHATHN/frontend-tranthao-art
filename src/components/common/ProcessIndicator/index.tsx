import React from 'react';
import styles from './ProcessIndicator.module.scss';

type Props = {
  color?: string;
};

const ProcessIndicator: React.FC<Props> = () => {
  const [progress, setProgress] = React.useState<number>(0);

  function updateProgressIndicator() {
    const windowHeight: number = window.innerHeight;
    const documentFullHeight: number = document.body.clientHeight;

    const scrolled: number = window.scrollY;

    const percentageScrolled: number =
      (scrolled / (documentFullHeight - windowHeight)) * 100;

    setProgress(percentageScrolled);
  }

  React.useEffect(() => {
    updateProgressIndicator();

    window.addEventListener('scroll', updateProgressIndicator);

    return () => {
      window.removeEventListener('scroll', updateProgressIndicator);
    };
  }, []);

  return (
    <div
      className={styles[`navbar_scroll`]}
      style={{
        width: `${progress}%`,
      }}
    ></div>
  );
};

export default ProcessIndicator;
