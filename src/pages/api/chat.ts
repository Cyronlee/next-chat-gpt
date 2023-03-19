import { NextApiHandler } from 'next';
import { generateRequestBody, parseContent } from '@/utils/chatgpt';
import { ChatMessage } from '@/types';
import { ProxyAgent, fetch } from 'undici';

const chat: NextApiHandler = async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream;charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('X-Accel-Buffering', 'no');

  const apiKey = process.env.OPENAI_API_KEY;
  const messages = req.body as ChatMessage[];
  const httpsProxy = process.env.HTTPS_PROXY;

  const requestBody = generateRequestBody(apiKey, messages);
  if (httpsProxy) requestBody.dispatcher = new ProxyAgent(httpsProxy);

  let response;
  try {
    response = await fetch(
      `https://api.openai.com/v1/chat/completions`,
      requestBody
    );
  } catch (e) {
    console.error(e);
  }

  if (!response?.ok) {
    console.error(
      `Status: ${response?.status}, body: ${JSON.stringify(response?.body)}`
    );
    return res.status(500).json({ message: 'Error occurred.' });
  }

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
