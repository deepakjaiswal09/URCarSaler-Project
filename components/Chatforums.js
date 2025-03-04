"use client"
import React, { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const Chatforums = ({ clerkuser, slug }) => {
    const apiKey = '3ugm5jy9pprf';
    const userId = clerkuser?.id;
    const userName = clerkuser?.name;
    const userToken = clerkuser?.token;

    if (!userId || !userToken) {
        return <div>Error: Missing user information.</div>;
    }

    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
    };

    const [channel, setChannel] = useState(null);
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    useEffect(() => {
        if (!client || !userId || !slug) return;

        const newChannel = client.channel('messaging', slug, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(slug) + " Discussion",
        });

        setChannel(newChannel);
    }, [client, userId, slug]);

    if (!client) return <div>Setting up client & connection...</div>;

    return (
        <Chat client={client}>
            {channel ? (
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            ) : (
                <div>Loading channel...</div>
            )}
        </Chat>
    );
};

export default Chatforums;
