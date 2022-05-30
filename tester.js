const express = require('express');
const server = express()

server.get('/', (req, res)=>{
    res.send('<a href = "https://accounts.spotify.com/authorize?client_id=21e76ac40a1d4df99a0a3c6f1ed6d7f3&scopes=playlist-read-private&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3535%2Fauth%2Fspotify%2Fcallback">Login to Spotify</a>')

  })

server.get('/auth/spotify/callback', (req, res)=>{
  res.send('Successfully Logged In');
})



  server.listen(3535);
 
const clientId = '21e76ac40a1d4df99a0a3c6f1ed6d7f3';
const clientSecret = '8e5f3dfa06f54928bb36c2f55dc4e75e';




//


/*const getPlaylists = async () => await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`,{
  method: 'GET',
  
})
  
 











/*const {readFileSync, writeFileSync} = require('fs');



const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
  './content/result-sync.txt', 
  `HI IM GAY ${first} ${second}`, 
  {flag: 'a'})

console.log()








/*const path = require('path');

//console.log(path.sep)

const filePath = path.join('/content/', 'subf', 'text.txt')

//console.log(filePath);

const base = path.basename(filePath)
//console.log(base);

const pathResolve = path.resolve(__dirname, 'content', 'subf','text.txt');
console.log(pathResolve)



/*const os = require('os');

//info about user
const user = os.userInfo();
console.log(user);

//system uptime

const upTime= os.uptime();
console.log(`System uptime is: ${ upTime.toFixed(2) / 60} minutes` );


const currentOs = {
  name:os.type()
  release:os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
}



//require('./dickcheese');


/*const { Twilio } = require("twilio");

const just = 'Justin';

const penisHi = (name) => {
  console.log(`Yo whats up ${name}`);
}

penisHi(just);



/*const twilio = new Twilio("ACaa70a28d117a84d2fc1dd9d275afe1fc",
  "d41320a401363caacabc00d839bc5010");

twilio.messages.create({
  from: "+19207443617",
  to: "+14086200908",
  body: "Hello",
}).then(message => console.log(message)); */