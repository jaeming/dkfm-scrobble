const Lastfm = require('simple-lastfm')

let lastfm;

function init () {
  return new Lastfm({
    api_key: process.env.LASTFM_KEY,
    api_secret: process.env.LASTFM_SECRET,
    username: process.env.LASTFM_USER,
    password: process.env.LASTFM_PASS
  })
}

function scroble(artist, track, timestamp) {
  if (!lastfm) lastfm = init()

  lastfm.getSessionKey(async result => {
    if(!result.success) return console.log(`Error: ${result.error}`)

    return new Promise(callback => {   
      lastfm.scrobbleTrack({ artist, track, timestamp, callback })
    })
  })
}

module.exports = { scroble }
