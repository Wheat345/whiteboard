# Whiteboard

Use node js websocket library to hold server that serve multiply clients(browser) to share screen(text only).

There is only two file for this app (server.js and index.html) I use node js ws module to setup server side code and use standard javascript library to hold a client side code.

HOW TO RUN:(ubuntu 16.04) client side: suppose apache http is installed properly. stop server first: #sudo systemctl stop apache2. backup orignal index.html: goto /var/www/html/ #cp index.html index.html.bck copy index.html(inside this app) to your host replace the orignal one. run apache http server: #sudo systemctl start apache2.

server side: install node js (I use version 11) and npm. using npm to install "ws" module (note: there is another thrid party module named "websocket", do not mess up!). setup folder named: whiteboard and copy server.js into it. run node websocket server: #node server.js

log: in serverside terminal: logging entire users typing......

//////////////////////////////////////////////////////////////////////

orignal log: 0630

idea: open webpage write whatever anythong note, telephone... done? close it move to another place, open any browser to see exectily save output before.

develop log: (2018.11.11)

client side: apache http server. server side: node ws.

nodejs server/client app:

sync text message on both server/client side.

remove old version of nodejs

#sudo apt-get purge nodejs #sudo apt-get autoremove

install node js version 11 on ubuntu16.04

https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/

upgrde nodejs

#sudo npm install n -g #upgrade to latest stable version #sudo n stable

install ws (nodejs provided websocket module) #sudo npm install --save ws
