import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  const posts = await prisma.post.findMany();
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}