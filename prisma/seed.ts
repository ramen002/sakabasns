import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // ユーザーの作成
  const users = [
    { 
      id: 1,
      auth_id: '81dcd7c9-41bc-e625-68e4-a7807aac6bbd',
      name: '太郎',
      age: 30,
      location: '東京',
      bio: 'サンプルユーザー'
    },
    {
      id: 2,
      auth_id: '3d886f88-5e06-3e03-62f1-a97617beb342',
      name: '次郎',
      age: 25,
      location: '大阪',
      bio: '別のサンプルユーザー'
    },
    { 
      id: 3,
      auth_id: 'd1001150-e64b-2c64-9726-25f2bb4cc229',
      name: '三郎',
      age: 28,
      location: '名古屋',
      bio: 'もう一人のサンプルユーザー'
    }
  ];

  for (let user of users) {
    await prisma.user.create({ data: user });
  }

  // 投稿の作成
  const posts = [
    {
      text: '初めての投稿',
      user: {
        connect: { id: 1 },
      },
    },
    {
      text: '第二の投稿',
      user: {
        connect: { id: 2 },
      },
    },
    {
      text: '最後の投稿',
      user: {
        connect: { id: 3 },
      },
    },
  ];

  for (let post of posts) {
    await prisma.post.create({ data: post });
  }

  // 返信の作成
  const replies = [
    {
      text: '良い投稿ですね！',
      user: {
        connect: { id: 1 },
      },
      post: {
        connect: { id: 1 },
      },
    },
    {
      text: '面白い！',
      user: {
        connect: { id: 1 },
      },
      post: {
        connect: { id: 1 },
      },
    },
    {
      text: 'ためになります！',
      user: {
        connect: { id: 2 },
      },
      post: {
        connect: { id: 2 },
      },
    },
  ];

  for (let reply of replies) {
    await prisma.reply.create({ data: reply });
  }

  // タグの作成
  const tags = [
    {
      name: '初めての投稿タグ',
      posts: {
        connect: [{ id: 1 }],
      },
    },
    {
      name: '第二の投稿タグ',
      posts: {
        connect: [{ id: 2 }],
      },
    }
  ];

  for (let tag of tags) {
    await prisma.tag.create({ data: tag });
  }
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
