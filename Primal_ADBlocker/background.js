chrome.tabs.onActivated.addListener(tab => {
    setTimeout(() => {
        chrome.tabs.get(tab.tabId, current_tab_info => {
            
            if (/^https:\/\/www\.youtube/.test(current_tab_info.url))
            {
                console.log(current_tab_info.url);
                chrome.tabs.executeScript(null, {file: "./AD_Detector.js"});
            }
        });
    }, 100);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    
    if (changeInfo.status === 'complete' && /^https:\/\/www\.youtube/.test(tab.url)) 
    {
        console.log(tab);
        console.log(tabId);
        console.log(changeInfo);
        chrome.tabs.executeScript(null, {file: "./AD_Detector.js"});
    }     
   

    
});
