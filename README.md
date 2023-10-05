# FishermanApp
Alpha Chrome Extension for creating bookmarks from txids (also supports hodlocker messages).
To use the extension as it currently is:
1. Click on the "<> Code" button and select download as zip.
2. Unzip to a folder and put `chrome://extensions` into your chrome or firefox address bar
3. In the top right, enable dev mode, then on the left select "Load unpacked", navigate into the unzipped FAI folder and select OK.\
![image info](./images/load1.PNG?raw=true)
4. You can now manage and pin the extension just like you would any other Chrome extension you have.\
![image info](./images/load2.PNG?raw=true)
5. In the top right of your browser, click on the puzzle piece, pin the new extension icon and enable the sidebar.\
![image info](./images/load4.PNG?raw=true)\
6. There are two context menus (right-click) added to the browser, you can highlight a transaction ID text within the browser and produce a reference image.\
![image info](./images/load5.PNG?raw=true)
7. Another context menu allows you to right click on TXID image, this will retrieve the content associated with the txid.\
![image info](./images/load6.PNG?raw=true)
8. If activating a TXID image within the side panel you need to refresh the side panel by click on the side panel button again, but this would be automatic if you click on a TXID on X.com for example.\
![image info](./images/load7.PNG?raw=true)


Currently supported apps are: 
- 1satordinals, 
- Aym.world, 
- Ordpost, 
- Hodlocker.com (messages only)

You can create a TXID image for any transaction ID the app just won't be able to retrieve the content if it doesn't recognise the structure of the transaction outputs.


