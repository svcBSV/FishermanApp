

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



  function findDiv(el, tagName) {
    tagName = tagName.toLowerCase();

    while (el && el.parentNode) {
    el = el.parentNode
    if (el.tagName && el.tagName.toLowerCase() == tagName) {
      console.log(el)
      return el;
    }
      
    }
    return null;
    
  }



 

  






