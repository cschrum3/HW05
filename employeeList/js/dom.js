const $ = function (sel) {
    // creates a nodelist of all the "sel" objects in html
    const nodeList = document.querySelectorAll(sel);
    //function that changes every individual item in the nodelist to "content"
    const text = function (content) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].textContent = content;
      }
    }
    //function that 
    const toggleClass = function (className) {
        const nodeList = document.querySelectorAll(sel);
        for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.toggle(className);
      }
    }
  
    //function that takes in a css selctor class, action, and a callback function.  listens for the action, and executes the cbf.
    const on = function (sel, action, cb){
        const nodeList = document.querySelectorAll(sel);
        for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener(action, cb);
        }
      }
  
    const val = function(){
      return nodeList[0].value;
    }
    //publicAPI to specify the function names within the library
    const publicAPI = {
      text: text,
      toggleClass: toggleClass,
      on: on
    }
    //for function "$", show API
    return publicAPI;
  }