import { sleep } from '@/utils/common';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/event-stream;charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('X-Accel-Buffering', 'no');

  await sleep(500);
  res.write(
    'data: {"id":"chatcmpl-6vgiShhhb6TL47uSOz6A0Y2qbKh4k","object":"chat.completion.chunk","created":1679206916,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"role":"assistant"},"index":0,"finish_reason":null}]}\n\n'
  );
  await sleep(500);
  res.write(
    'data: {"id":"chatcmpl-6vgiShhhb6TL47uSOz6A0Y2qbKh4k","object":"chat.completion.chunk","created":1679206916,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"Hello"},"index":0,"finish_reason":null}]}\n\n'
  );
  await sleep(500);
  res.write(
    'data: {"id":"chatcmpl-6vgiShhhb6TL47uSOz6A0Y2qbKh4k","object":"chat.completion.chunk","created":1679206916,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"!"},"index":0,"finish_reason":null}]}\n\n'
  );
  await sleep(500);
  res.write(
    'data: {"id":"chatcmpl-6vgiShhhb6TL47uSOz6A0Y2qbKh4k","object":"chat.completion.chunk","created":1679206916,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" How"},"index":0,"finish_reason":null}]}\n\n'
  );
  await sleep(500);
  res.write(
    'data: {"id":"chatcmpl-6vgiShhhb6TL47uSOz6A0Y2qbKh4k","object":"chat.completion.chunk","created":1679206916,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" can"},"index":0,"finish_reason":null}]}\n\n'
  );
  await sleep(500);
  res.write(
    'data: {"id":"chatcmpl-6vgiShhhb6TL47uSOz6A0Y2qbKh4k","object":"chat.completion.chunk","created":1679206916,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" I"},"index":0,"finish_reason":null}]}\n\n'
  );
  await sleep(500);
  res.write(
    'data: {"id":"chatcmpl-6vgiShhhb6TL47uSOz6A0Y2qbKh4k","object":"chat.completion.chunk","created":1679206916,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" assist"},"index":0,"finish_reason":null}]}\n\n'
  );
  await sleep(500);
  res.write(
    'data: {"id":"chatcmpl-6vgiShhhb6TL47uSOz6A0Y2qbKh4k","object":"chat.completion.chunk","created":1679206916,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" you"},"index":0,"finish_reason":null}]}\n\n'
  );
  await sleep(500);
  res.write(
    'data: {"id":"chatcmpl-6vgiShhhb6TL47uSOz6A0Y2qbKh4k","object":"chat.completion.chunk","created":1679206916,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" today"},"index":0,"finish_reason":null}]}\n\n'
  );

  res.end('data: [DONE]');
}
