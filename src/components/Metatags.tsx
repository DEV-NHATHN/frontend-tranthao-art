import Head from 'next/head';

export default function Metatags({
  title = `Leo`,
  description = `3D Visual Designs and Art Portfolio`,
  image = `https://res.cloudinary.com/dcjxcptdt/image/upload/v1663565697/tranthao/udbfxehjbqacrtauxblz.jpg`,
}) {
  return (
    <Head>
      <title>Corgiphy | {title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tranthaoart" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta http-equiv="Content-Type" content="text / html; charset = utf-8" />
      {/* <meta
        http-equiv="refresh"
        content="5;url=https://www.instagram.com/tranthao.art/"
      /> */}
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width = device-width, initial-scale = 1" />
    </Head>
  );
}
