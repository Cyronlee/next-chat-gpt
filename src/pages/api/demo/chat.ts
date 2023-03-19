import { NextApiHandler } from 'next';
import { parseContent } from '@/utils/chatgpt';
import { fetch } from 'undici';

const chat: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream;charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('X-Accel-Buffering', 'no');

  const response = await fetch(`http://localhost:3000/api/demo/completion`);

  let reader = response.body?.getReader();
  while (true) {
    const { done, value } = await reader?.read();
    if (done) break;
    const text = new TextDecoder().decode(value);
    res.write(parseContent(text));
  }

  res.end();
};

export default chat;
