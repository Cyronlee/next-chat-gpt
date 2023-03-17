import Head from 'next/head';
import { Center } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next ChatGPT</title>
        <meta name="description" content="A ChatGPT demo with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center bg="tomato" h="100vh" color="white">
        Hello
      </Center>
    </>
  );
}
