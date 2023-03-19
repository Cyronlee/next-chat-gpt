import Head from 'next/head';
import { Center } from '@chakra-ui/react';
import ChatWindow from '@/components/ChatRoom/ChatWindow';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next ChatGPT</title>
        <meta name="description" content="A ChatGPT demo with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center h="100vh">
        <ChatWindow />
      </Center>
    </>
  );
}
