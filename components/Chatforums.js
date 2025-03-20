"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';
function capitalize(str) {
    return str.charAt(0).toUpperCase()+str.slice(1);
}

const Chatforums = ({clerkuser,slug}) => {
    const apiKey = '3ugm5jy9pprf';
    const userId = clerkuser.id;
    const userName = clerkuser.name;
    const userToken = clerkuser.token;

    const user= {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
      };
          
      const [channel, setChannel] = useState();
      const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
      });
    
      useEffect(() => {
        console.log(userId, clerkuser)
        if (!client) return;
    
        const channel = client.channel('messaging',slug, {
          image: 'https://getstream.io/random_png/?name=react',
          name: capitalize(slug)+"Discussion",
        //   members: [userId],
        });
    
        setChannel(channel);
        // channel.addMembers([userId])
      }, [client]);
    
      if (!client) return <div>Setting up client & connection...</div>;
    
      return (
        <Chat client={client}>
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      );
}

export default Chatforums