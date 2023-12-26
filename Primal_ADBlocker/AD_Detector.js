console.log("AD_Detector ACTIVE!");
document.addEventListener('keydown', ManualSkip);
document.addEventListener('loadeddata', setTimeout(AutoSkip, 1000));



/*function InjectJQuery() 
{
    var jqry = document.createElement('script');
    jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
    document.getElementsByTagName('head')[0].appendChild(jqry);   
    jQuery.noConflict();
}
function jQueryInjector() 
{
    InjectJQuery();
    InjectJQuery();
} */
function ManualSkip (event)
{
    if (event.key == "d" || event.keyCode == '39') 
    {           
        let progressBar = document.getElementsByClassName('ytp-ad-persistent-progress-bar-container')[0];
        let progressBarCSS = window.getComputedStyle(progressBar, null).getPropertyValue('display');
        if (progressBarCSS != "none") 
        {   
            console.log("ManualSkip");
            document.getElementsByTagName("video")[0].muted = true;
            //document.getElementsByTagName("video")[0].style.display="none";
            document.getElementsByTagName('video')[0].playbackRate = 16;
            DetectButton();             
        } 
    }
    
}
function Automata () 
{
    var Detected = false;
    for (var n = 0; n < 4; n++) 
    {
        if (Detected == false) 
        {
            Detected = AutoSkip(Detected);
        }      
    } 
}
function AutoSkip (Detected)
{
    console.log("Searching for Ad");
    let progressBar = document.getElementsByClassName('ytp-ad-persistent-progress-bar-container')[0];
    let progressBarCSS = window.getComputedStyle(progressBar, null).getPropertyValue('display');
    if (progressBarCSS != "none") 
    {   
        console.log("Ad Detected");
        document.getElementsByTagName("video")[0].muted = true;
        //document.getElementsByTagName("video")[0].style.display="none";
        document.getElementsByTagName('video')[0].playbackRate = 16;
        document.getElementsByTagName("video")[1].muted = true;
        document.getElementsByTagName('video')[1].playbackRate = 16;
        DetectButton(); 
        return true;
    } 
}

function DetectButton() 
{
    console.log("Skipped");
    let ButtonSlot = document.getElementsByClassName('ytp-ad-skip-button-slot')[0];
    let SlotCSS =  window.getComputedStyle(ButtonSlot, null).getPropertyValue('display');
    /*let ButtonContainer = document.getElementsByClassName('ytp-ad-skip-button-container')[0];
    let ContainerCSS = window.getComputedStyle(ButtonContainer, null).getPropertyValue('display');
    while (SlotCSS == "none") 
    {
        
    } */
    let SkipButton = document.getElementsByClassName('ytp-ad-skip-button-modern ytp-button')[0];
    SkipButton.click(); 
    
}




