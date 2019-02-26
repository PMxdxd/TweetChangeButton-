window.onload = function () {
    //ファボとかあるとこ取得
    var element = document.getElementsByClassName('ProfileTweet-actionList js-actions');
    //ツイート取得
    var tweets = document.getElementsByClassName('js-tweet-text-container');
    
    //div作成
    var div = document.createElement('div');
    div.className = 'ProfileTweet-action';
    
    //ボタン作成
    var buttonElement = document.createElement('button');
    buttonElement.textContent = "オ";
    buttonElement.className = 'ProfileTweet-actionButton';
   
    //divにボタン追加
    div.appendChild(buttonElement);
    
    for (let i = 0; i < element.length; i++) {
        divCopy = div.cloneNode(true);
        divCopy.setAttribute("id",i);
        divCopy.onclick = function(){
            tweets[i].textContent = "test";
        };
        element[i].appendChild(divCopy);
       }
  
  };
