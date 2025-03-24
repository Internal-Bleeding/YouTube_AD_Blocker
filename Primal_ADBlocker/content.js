
function observeDivChange()
{
    //const container = document.getElementById('container');

    const video = document.getElementsByClassName("video-stream html5-main-video");

    if (!video || video.length > 1) {console.error(`${video[0]} not found or ${video.length}`); return;}

    console.log('Angel Dust is so hot!!!');
    
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            console.log(`big horse cock in my ass: ${mutation.type}`);

            const ytpAdModule = document.getElementsByClassName("video-ads ytp-ad-module");

            if (!ytpAdModule) {
                console.error(`Error ${video[0]} no ad module found`); return;
            }
            else if (ytpAdModule.length > 1) {
                console.error(`Error ${video.length} is more than one ad module found`); return;
            }

            if (ytpAdModule[0].children.length > 0) {
                console.log(`video ad found`);
                document.getElementsByTagName("video")[0].muted = true;
                document.getElementsByTagName('video')[0].playbackRate = 16;
            }

        }
    });

    const config = {
        childList: true, 
        subtree: true,        
        characterData: true,
        attributes: true 
    };

    observer.observe(video[0], config);
}

observeDivChange();
  