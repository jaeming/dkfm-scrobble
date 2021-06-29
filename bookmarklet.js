// add this to your bookmark url prefaced with `javascript:`
(function(){
  const artistClass = 'qtmplayer__artist';
  const songClass = 'qtmplayer__title';
  const THREE_MINUTES = 180000;
  let current;
  function sync () {
    const track = document.getElementsByClassName(songClass)[0].textContent;
    const artist = document.getElementsByClassName(artistClass)[0].textContent;

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
