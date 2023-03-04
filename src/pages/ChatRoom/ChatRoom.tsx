export const ChatRoom = () => {

    const getUserMediaHandler = async (constraints: MediaStreamConstraints) => {
        try {
            const userMedia = await navigator.mediaDevices.getUserMedia(constraints);
            return userMedia;
        } catch (err) {
            console.log('Err', err);
            return null;
        }
    }
    return (
        <div>
            <video autoPlay ref={async (video) => {
                if (video) {
                    video.srcObject = await getUserMediaHandler({video: true});
                }
            }}></video>
        </div>
    )
}