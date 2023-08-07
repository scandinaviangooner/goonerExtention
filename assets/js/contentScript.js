let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
  chrome.runtime.sendMessage({msg: 'image', index: i}, function(link, index){
    images[index].src = link;
  });
}
