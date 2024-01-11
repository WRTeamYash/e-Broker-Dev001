import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ({ title, description, keywords, ogImage }) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title || process.env.NEXT_PUBLIC_TITLE}</title>

      {/* Google / Search Engine Tags */}
      <meta name='name' content={title || process.env.NEXT_PUBLIC_TITLE} />
      <meta name='description' content={description || process.env.NEXT_PUBLIC_DESCRIPTION} />
      <meta name='keywords' content={keywords || process.env.NEXT_PUBLIC_KEYWORDS} />
      <meta name='image' content={ogImage} />

      {/* Facebook Meta Tags */}
      <meta property='og:title' content={title || process.env.NEXT_PUBLIC_TITLE} />
      <meta property='og:description' content={description || process.env.NEXT_PUBLIC_DESCRIPTION} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:type' content='image/jpg' />
      <meta property='og:image:width' content='1080' />
      <meta property='og:image:height' content='608' />
      <meta property='og:url' content={process.env.NEXT_PUBLIC_WEB_URL + router.asPath} />
      <meta property='og:type' content='website' />

      {/* Twitter Meta Tags */}
      <meta name='twitter:title' content={title || process.env.NEXT_PUBLIC_TITLE} />
      <meta name='twitter:description' content={description || process.env.NEXT_PUBLIC_DESCRIPTION} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:card' content='summary_large_image' />

      {/* Robot and Canonical */}
      <link rel='canonical' href={process.env.NEXT_PUBLIC_WEB_URL} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='robots' content='index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large' />
    </Head>
  );
};

export default Meta;
