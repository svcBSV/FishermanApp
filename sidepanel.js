

const show_all = document.getElementById("show_all")
show_all.addEventListener('click', function(e) {
  toggle_tabs('All')
})

const tab_list = ['tab_1','tab_2','tab_3','tab_4','tab_5','tab_6','tab_7']

tab_list.forEach(tab => {
  tab_btn = document.getElementById('show_'+tab)
  tab_btn.addEventListener('click', function(e) {
    toggle_tabs(tab)
  })
})


chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, ref, imgData, txid, tab_id} = obj;
  console.log(type,ref,imgData,txid)
  if (type === 'decode_image') {
    
    data = {
      ref: ref,
      imgData: imgData,
      txid: txid,
      desc: "User supplied",
    };
    console.log(data)
    const check = document.getElementById(ref)
    if(check) {

    }
    else {
      addbookmark(data)
    }
    
  }
  else if (type === 'generate') {
    console.log(type)
    // const orb = response
    const orbimg = document.createElement("img")
    orbimg.src = imgData
    orbimg.id = ref+'_orbimg'
    orbimg.addEventListener("click", function(e) {
      const btn = document.getElementById(ref+'_orb_btn')
      btn.style.display = 'block';
      const orbimg = document.getElementById(ref+'_orbimg')
      orbimg.remove()
    })
    const targetdiv = document.getElementById(ref)
    targetdiv.appendChild(orbimg)
    const btn = document.getElementById(ref+'_orb_btn')
    btn.style.display = 'none';
  } else if (type === 'encode') {
    data = {
      ref: ref,
      imgData: imgData,
      txid: txid,
      desc: "User supplied",
    };
    console.log(data)
    const check = document.getElementById(ref)
    if(check) {
      check.remove()
      addbookmark(data)

    }
    else {
      addbookmark(data)
    }
  }

})


function addbookmark(data) {
  let refdiv_p;
  const ordinal_list = document.body.querySelector('#orb_container')
  ordinal_list.classList.add('ordlist')
  const refdiv = document.createElement("div");
  const sitediv = document.createElement("div")
  const txid_p = document.createElement("a")
  const site_p = document.createElement("a")
  const btn_div = document.createElement("div")
  const btn_remove = document.createElement("img")
  const btn_orbinal = document.createElement("img")
  btn_remove.src = '/images/bin.png'
  btn_orbinal.src = '/images/logo_button.png'
  
  refdiv.classList.add('refdiv')
  txid_p.classList.add('txidlink')
  site_p.classList.add('sitelink')
  btn_remove.classList.add('buttonsizes')
  btn_orbinal.classList.add('buttonsizes')
  if(data.imgData.txtContent.substring(0,13)==='https://ordfs') {
    refdiv_p = document.createElement("iframe")
    refdiv_p.src = data.imgData.txtContent
    refdiv_p.classList.add('iframe')
  } else {
    refdiv_p = document.createElement("p");
    refdiv_p.innerHTML = 'message: <br>' + data.imgData.txtContent
  }
  refdiv_p.classList.add('messagetxt')
  refdiv_p.id = data.ref+'_p'
  

  txid_p.innerHTML = 'txid: ' + data.txid
  txid_p.href = 'https://whatsonchain.com/tx/'+data.txid
  txid_p.target = '_blank'
  if(data.imgData.site) {
    site_p.innerHTML = (data.imgData.site).replace('https://','')
    site_p.href = data.imgData.site
    site_p.target = '_blank'
  }

  btn_remove.innerText = 'Remove'
  btn_orbinal.innerText = 'Orb txid'
  btn_orbinal.id = data.ref+'_orb_btn'
  btn_remove.addEventListener('click', function(e) {
    removeBookmarkEventHandler(data.ref)
  })
  btn_orbinal.addEventListener('click', function(e) {
    generate_orb(data.txid,data.ref)})
  refdiv.id = data.ref
  refdiv.appendChild(txid_p)
  sitediv.appendChild(site_p)
  refdiv.appendChild(sitediv)
  refdiv.appendChild(refdiv_p)
  if(data.imgData.mediaContent) {
    const refimg = document.createElement("img")
    refimg.src = data.imgData.mediaContent
    refdiv.appendChild(refimg)
  }
  if(data.imgData.txtContent != 'orb txid'){
    btn_div.appendChild(btn_orbinal)
  }
  btn_div.appendChild(btn_remove)
  refdiv.appendChild(btn_div)
  
  ordinal_list.appendChild(refdiv)
  

};


async function fetchBookmarks () {
  return new Promise((resolve) => {
    chrome.storage.local.get(['orbBookmarks'], (obj) => {
      resolve(obj['orbBookmarks'] ? JSON.parse(obj['orbBookmarks']): [])
    });
  });
}

buildpage()

async function buildpage() {
  console.log('build page triggered')

  var bookmarks = [];
  try { //check to see if this has already been added

    bookmarks = await fetchBookmarks()
    

    bookmarks.forEach(item => {
      addbookmark(item)
    } )


  }
  catch (err) {
    console.log('cant access local storage')
    console.log(err)
  }
  

}

async function refresh() {
  document.getElementById()
}

  async function removeBookmarkEventHandler(ref) {
    var bookmarks = [];
    divref = document.getElementById(ref)
    divref.remove()
    try { //find item to remove
  
      let load = await fetchBookmarks()
      
      if(await load.length>0) {
        console.log('bookmark object found')
        bookmarks = load
        console.log(bookmarks)
  
          let index = bookmarks.findIndex((entry => entry.ref == ref))
          console.log(index)

          let data = bookmarks[index]
  
          if(data) { // if found, remove
            bookmarks.splice(index,1)
          }
        chrome.storage.local.set({'orbBookmarks': JSON.stringify(bookmarks)})
        
          
        const refdiv = document.getElementById(ref)
        refdiv.remove() 
  
      }
      else {

     
      }
  
  
    }
    catch (err) {
      console.log(err)
    }
    
  
  
  };

  async function generate_orb(txid,ref) {
    
    const orb = chrome.runtime.sendMessage({
      orbreq: true,
      txid: txid,
      ref: ref
      })

  } 

  function toggle_tabs(id) {
    const tab_list = ['tab_1','tab_2','tab_3','tab_4','tab_5','tab_6','tab_7']
    const show_all = document.getElementById("show_all")
    if(id === 'All') {
        
        show_all.classList.add('selected')
        tab_list.forEach( tab => {
          tab_btn = document.getElementById('show_'+tab)
          tab_el = document.getElementById(tab)
          tab_btn.classList.remove('selected')
          tab_el.style.display = 'block'
        })

    } else {
      tab_list.forEach( tab => {
        show_all.classList.remove('selected')
        if(tab === id) {
          tab_btn = document.getElementById('show_'+tab)
          tab_btn.classList.add('selected')
          selected_tab = document.getElementById(tab)
          selected_tab.style.display = 'block'

        } else {
          tab_btn = document.getElementById('show_'+tab)
          tab_btn.classList.remove('selected')
          other_tab = document.getElementById(tab)
          other_tab.style.display = 'none'
        }
      })
    }
    



  }



