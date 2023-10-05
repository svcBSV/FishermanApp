

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

})

chrome.runtime.onMessage.addListener( async function(obj, sender, sendResponse) {
  const {orbreq, txid, ref} = obj;
  if(orbreq){
    encodeOrb(txid,null)
   
  }
  

})
  

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


//create context menus
chrome.runtime.onInstalled.addListener( (details) => {


  chrome.contextMenus.create({
    id: 'pullordinal',
    title: "Activate Orbinal",
    contexts:["image"]
  });

  chrome.contextMenus.create({
    id: 'createorbinal',
    title: "Create Orbinal",
    contexts:["selection"]
  })
  

      
});

//context menu click event
chrome.contextMenus.onClicked.addListener( async function ( info, tab ) {

  if ('pullordinal' === info.menuItemId) {
    decodeOrb(info.srcUrl,tab);
  } else if ('createorbinal' === info.menuItemId) {
    console.log(info)
    encodeOrb(info.selectionText,tab);
  }

} );

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}


const decodeOrb = async (post, tab, info) => {
  //canvas processing
  const _width = 550;
  const _height = 550;
  console.log('base64')
  var _canvas = new OffscreenCanvas(_width,_height)
  var _ctx = _canvas.getContext('2d', {willreadfrequently: true});
  const response = await fetch(post)
  const _blob = await response.blob()
  const img = await createImageBitmap(_blob);

  let _decodedTxid;

  _ctx.drawImage(img, 0, 0, _width, _height);
  let _combined = '';
  let _converted = 2.18; // Initial value
  let _endAngle = -2.18;
  for (let i = 0; i < 11; i++) {
  
    const x = _width / 2;
    const y = _height / 2;
    let _radius = Math.round((_width / 2.5) - (i * 18));
    let _startAngle = _endAngle;
    _endAngle = _startAngle + Math.round((_converted / (i + 1)) * Math.PI);

    if (_endAngle <= _startAngle) {
      _endAngle = Math.round(_startAngle - 10);
    }

    let _midAngle = _startAngle+(_endAngle-_startAngle)/2
    let _midx = Math.round(x + Math.cos(_midAngle) * (_radius + 10));
    let _midy = Math.round(y + Math.sin(_midAngle) * (_radius + 10));

    let _pixel = _ctx.getImageData(_midx, _midy, 1, 1).data;
    
  let _hex;  
    if( i == 10) {        

      var temp = ("000000" + rgbToHex(_pixel[0], _pixel[1], _pixel[2])).slice(-6);
      _hex =  temp.substring(2,6) 
  } 
  else {
      
      _hex = ("000000" + rgbToHex(_pixel[0], _pixel[1], _pixel[2])).slice(-6);

  }
  console.log(_startAngle,_endAngle,_radius,_midx,_midy,_hex)
    _combined += _hex;

    if (isNaN(_hex.substring(5))) {
      _converted = _hex.substring(5).charCodeAt(0) - 96;
    } else {
      _converted = parseInt(_hex.substring(5), 10);
    }
    
  }

  _decodedTxid = _combined;
  console.log(_decodedTxid)
  const message = await getContent(_decodedTxid)
  const ref = MD5(_decodedTxid.toString())

  addNewBookmarkEventHandler(ref,message,_decodedTxid)

  // return
  return chrome.runtime.sendMessage({
      type: "decode_image",
      ref: ref,
      imgData: message,
      txid: _decodedTxid,
      tab_id: tab.id
    }

  );

}

const encodeOrb = async (post, tab, info) => {
  const ref = MD5(post)

  const txid_arry = post.match(/.{1,6}/g) || [];

    const _width = 550;
    const _height = 550;

    // instantiate the canvas object
    const canvas = new OffscreenCanvas(_width,_height)
    const context = canvas.getContext("2d")

    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }

    let converted;
    let colour;
    let endAngle;
    let startAngle;
    for(var i =0; i < 11; i++) {

        let x = (_width/2)
        let y = (_height/2)
        if( i == 10) {
            colour = txid_arry[i-1].substring(4,6) + txid_arry[i] 
            
        } else {
            colour = txid_arry[i]
        }
        
        if( i == 0 ) {
            converted = 2.18
            endAngle = -2.18
        }


        context.fillStyle = "#"+colour;
        context.strokeStyle = "#"+colour;
        context.beginPath();

        startAngle = endAngle
        endAngle = startAngle+Math.round((converted/(i+1))*Math.PI)

        if(endAngle <= startAngle) {
            endAngle = Math.round(startAngle - 10)
        }

        let drawWidth = 40
        let radius = Math.round((_width/2.5)-(i*18))

        context.arc(x,y,radius,startAngle,endAngle,false);
        context.lineWidth = drawWidth;
        context.stroke();


        if(isLetter(colour.substring(5))) {

            converted = colour.substring(5).charCodeAt(0) -96 //Adding a user supplied intenger here could allow for custom encoding, only shared with intended audience

        } else {
            converted = parseInt(colour.substring(5))
        } 

    }
    
    // resize and send as base64
    const output = new OffscreenCanvas(120,120)
    const ouputctx = output.getContext("2d")
    ouputctx.drawImage(canvas,0,0,120,120)
    


    const base64Img = blobToBase64(output).then(res => {
      return res
    })


  if(tab) {
    return chrome.runtime.sendMessage({
      type: "encode",
      ref: ref,
      imgData: {txtContent: 'orb txid', mediaContent: await base64Img, site: null},
      txid: post
      }) 
  } else {
    return chrome.runtime.sendMessage({
      type: "generate",
      ref: ref,
      imgData: await base64Img,
      txid: post
    })
  }

}

function blobToBase64(canvas) {
  return canvas.convertToBlob().then(blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  })

};


function getTabId() {
  return new Promise((resolve, reject) => {
      try {
          chrome.tabs.query({
              active: true,
          }, function (tabs) {
              resolve(tabs[0].id);
          })
      } catch (e) {
          reject(e);
      }
  })
}

function rgbToHex(r, g, b) {
  if (r > 255 || g > 255 || b > 255) {
    throw new Error('Invalid color component');
  }
  return ((r << 16) | (g << 8) | b).toString(16);
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i); 
}

async function getContent(txid) {
  let content;
  // const content = await fetch('https://ordinals.gorillapool.io/api/files/inscriptions/'+txid+'_0').then((res) => { return res.text()})
  const woc = await fetch('https://api.whatsonchain.com/v1/bsv/main/tx/hash/'+txid).then((res) => {return res.json()})
  const array = woc.vout
  let oindex;
  let decoded_hex
  let hex_message
  
  Object.entries(array).forEach(([key, value]) => {
    console.log(key);
    
    try {
      if(value.scriptPubKey.tag.type === '1SatOrdinals') {
        oindex = key;
        hex_message = value.scriptPubKey.hex;
        

      } 

    }
    catch {

    }
    try {
      console.log(value.scriptPubKey.opReturn.type)
      if(value.scriptPubKey.opReturn.type === 'bitcom') { //check for hodllocker
        console.log(value.scriptPubKey.isTruncated)
        if(value.scriptPubKey.isTruncated === true) {
          console.log('truncated')
          hex_message = 'https://api.whatsonchain.com/v1/bsv/<network>/tx/'+txid+'/out/'+key+'/hex'
          
        } 
        else if (value.scriptPubKey.isTruncated === false) {
          console.log('not truncated')
          hex_message = '0'
          console.log(value.scriptPubKey.opReturn.parts[0])
          console.log(value.scriptPubKey.opReturn.parts[1])
          value.scriptPubKey.opReturn.parts[11]
          content = {txtContent: value.scriptPubKey.opReturn.parts[0], mediaContent: null, site: 'https://www.hodlocker.com/'}
          console.log('bitcom',' ',content)
        }
        
      }
    }
    catch {

    }

  });
  // console.log(hex_message)
  if(hex_message != '0') {
    decoded_hex = hex2a(hex_message);
    // console.log(decoded_hex);
  
    if(decoded_hex.search('ordpost.com')>0) {
      var txtContent = await fetch('https://ordinals.gorillapool.io/api/files/inscriptions/'+txid+'_'+oindex).then((res) => { return res.text()});
      content = {txtContent: txtContent, mediaContent: null, site: 'https://www.ordpost.com/'}
    } else if (decoded_hex.search('op-ns')>0) {
      var txtContent = await fetch('https://ordinals.gorillapool.io/api/files/inscriptions/'+txid+'_'+oindex).then((res) => { return res.text()});
      content = {txtContent: txtContent, mediaContent: null, site: 'https://aym.world/'}
    }     
    else if (decoded_hex.search('image/png')>0 || decoded_hex.search('image/jpeg')>0) {
      console.log('media type')
      var _blob = await fetch('https://ordinals.gorillapool.io/api/files/inscriptions/'+txid+'_'+oindex).then((res) => { return res.blob()});
      
      const bitmap = await createImageBitmap(_blob);
      const new_width = Math.min(bitmap.width,250)
      const new_height = (new_width/bitmap.width)*bitmap.height
      var _canvas = new OffscreenCanvas(new_width,new_height)
      var _ctx = _canvas.getContext('2d');
      _ctx.drawImage(bitmap, 0, 0, new_width,new_height);
      const b64 = blobToBase64(_canvas).then(res => {
        return res
      })

      
      content = {txtContent: 'media', mediaContent: await b64, site:'https://1satordinals.com/'}
    }
     else if (decoded_hex.search('ordQ	text/html')>0 || decoded_hex.search('cordQ')>0) {
      
      var txtContent= 'https://ordfs.network/'+txid+'_'+oindex
      content = {txtContent: txtContent, mediaContent: null, site: 'https://1satordinals.com/'}
    }
 else {
      console.log('no app match')
    }
  }

  return content
}

function hex2a(hexx) {
  var hex = hexx.toString();//force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}


function a2hex(str)   {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

const fetchBookmarks = () => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['orbBookmarks'], (obj) => {
      resolve(obj['orbBookmarks'] ? JSON.parse(obj['orbBookmarks']): [])
    });
  });
} 

async function addNewBookmarkEventHandler(ref,message,dtxid) {
  var bookmarks = [];
  let data;
  const newBookmark = {
    ref: ref,
    imgData: message,
    txid: dtxid,
    desc: "User supplied",
  };



  try { //check to see if this has already been added

    let load = await fetchBookmarks()
    
    if(await load.length>0) {
      console.log('bookmark object found')
      bookmarks = load
      

        let index = bookmarks.findIndex((entry => entry.ref == ref))
        // console.log(index)
        let data = bookmarks[index]

        if(!data) { // if this hasn't been added, then add it
          console.log('no match found, new entry')
          bookmarks.push(newBookmark)
          chrome.storage.local.set({'orbBookmarks': JSON.stringify(bookmarks)})
          // const event = new Event('itemInserted',{ref: ref});
          chrome.storage.local.get(['orbBookmarks'], function(results) {
            // console.log(results)
          })
        }



    }
    else {
      console.log('New bookmarks object')
      bookmarks.push(newBookmark)
      
      chrome.storage.local.set({'orbBookmarks': JSON.stringify(bookmarks)})
      
      
      
      chrome.storage.local.get(['orbBookmarks'], function(results) {
        console.log(results)
      })
      

      
    }


  }
  catch (err) {
    console.log(err)
  }
  


};


// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);
  // Enables the side panel on all pages

  if (url.origin) {
    await chrome.sidePanel.setOptions({
      tabId,
      path: 'sidepanel.html',
      enabled: true
    });
  } else {
    // Disables the side panel on all other sites
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false
    });
  }
});

function markdownParser(text) {
	const toHTML = text
		.replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
		.replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
		.replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
		.replace(/\*(.*)\*/gim, '<i>$1</i>'); // italic text
	return toHTML.trim(); // using trim method to remove whitespace
}




