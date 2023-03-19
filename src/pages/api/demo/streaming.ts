import type { NextApiRequest, NextApiResponse } from 'next';
import { sleep } from '@/utils/common';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/event-stream;charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('X-Accel-Buffering', 'no');

  for (let i = 0; i < 5; i++) {
    const data = { message: 'Hello, world!' };
    res.write(`${JSON.stringify(data)}\n`);
    await sleep(1000);
  }

  res.end('done\n');
}
