import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = () => {
    const chatProps = useMultiChatLogic(
        '79027d68-52f0-43db-98ca-bb6df6285b12',
        props.user.username,
        props.user.secret
    );
    return <div style={{height: '100vh'}}>
            <MultiChatSocket{...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
}


export default ChatsPage;