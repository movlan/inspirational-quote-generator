import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { GradientBackground } from '@/components/QuoteGenerator/QuoteGeneratorElements';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inspiration Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackground />
    </>
  );
}
