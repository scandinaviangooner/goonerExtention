chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === "image"){
    console.log("in img");
    let localImgUrl;
    try {
      localImgUrl = chrome.runtime.getUrl("images/evelynn.jpg")
      senderResponse(localImgUrl, message.index);
    } catch {
      console.log("wrong img url")
    }
      return true;  // Will respond asynchronously.
  }
});
