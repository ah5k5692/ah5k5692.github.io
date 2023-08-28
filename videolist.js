const lvid = (iframe) => {
    const cid = "UCn_KjkMu4d8vwJ1UyHMccCQ";
    const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`);
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;
    fetch(reqURL).then(response => response.json()).then(result => {
        const videoNumber = iframe.getAttribute('vnum');
        const link = result.items[videoNumber].link;
        const id = link.substring(link.indexOf("=") + 1);
        iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=1&autoplay=0`);
    });
}
const iframes = document.getElementsByClassName('latestVideoEmbed');
      for (let i = 0, len = iframes.length; i < len; i++) {
        lvid(iframes[i]);
      }
