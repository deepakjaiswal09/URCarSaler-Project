import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

const api_key = "3ugm5jy9pprf";
const api_secret = "9zzz2wbsnfzepawem3nhfkzedw7tpsqa3xbugtxx5dmedxsu7zzxetn4vu6snwu9";
// const user_id = "user_2tYzE0vtTtO8wmcSdec7WoNedej";

export async function POST(request) {
const serverClient = StreamChat.getInstance(api_key, api_secret);
// console.log(token)
const user = await request.json()

function capitalize(str) {
    return str.charAt(0).toUpperCase()+str.slice(1);
}

const token = serverClient.createToken(user.data.id);
    console.log("A new user has been created",token)
  const client = await clerkClient()

await serverClient.upsertUser({id : user.data.id})

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token:token
    },
  })
  // give access to this user for all chats
  const slugs = ["Python-chat-new","JavaScript-chat-new","React-chat-new","Node-chat-new","DS-chat-new","Cloud-chat-new"]
  slugs.forEach(async (item)=>{
    const channel = serverClient.channel('messaging', item, {
        image: 'https://getstream.io/random_png/?name=react',
        name: capitalize(item)+"Discussion",
        created_by_id : user.data.id  
        // members: [userId],
      });
      await channel.create()
      channel.addMembers([user.data.id])

  })
    return Response.json({ message: 'Hello World' })
  }