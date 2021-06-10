// add this to your bookmark url prefaced with `javascript:`
(function(){
  const THREE_MINUTES = 180000;
  let current;
  function sync () {
    const track = document.getElementById('qtFeedPlayerTrack').textContent;
    const artist = document.getElementById('qtFeedPlayerAuthor').textContent;
    if (artist.toUpperCase().includes('ID/PSA')) { return };
    if (!artist || !track) { return };
    const key = artist + track;
    if (key === current) { return };
    current = key;
    fetch(`http://localhost:5050/save?artist=${artist}&track=${track}`).then(console.log);
  };
  sync();
  setInterval(() => { sync() }, THREE_MINUTES);
})();
