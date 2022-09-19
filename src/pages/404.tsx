import Image from 'next/image';
import Link from 'next/link';
import img from '@/public/Dead_pool.jpg';

export default function Custom404() {
  return (
    <main className="notfound-container">
      <div className="center">
        <h1 style={{ color: `white` }}>
          404 - That page does not seem to exist...
        </h1>
        <div style={{ display: `flex`, justifyContent: `center` }}>
          <Link href="/">
            <button className="btn-blue">Go home</button>
          </Link>
        </div>
      </div>
      <Image
        src={img}
        placeholder="blur"
        blurDataURL="true"
        alt="dead pool"
        layout="fill"
      ></Image>
    </main>
  );
}
