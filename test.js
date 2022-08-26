fetch(
  "https://raw.githubusercontent.com/siddhrajcrest/chatbotnew/master/build/asset-manifest.json"
).then((res) => {
  res.text().then((d) => {
    const files = JSON.parse(d);
    const mainChunk = document.createElement("script");
    mainChunk.src = `https://cdn.jsdelivr.net/gh/siddhrajcrest/chatbotnew/build${files.files["main.js"]}`;
    document.head.appendChild(mainChunk);
    const mainChunkCss = document.createElement("link");
    mainChunkCss.href = `https://cdn.jsdelivr.net/gh/siddhrajcrest/chatbotnew/build${files.files["main.css"]}`;
    mainChunkCss.rel = "stylesheet";
    document.head.appendChild(mainChunkCss);
  });
});
const getId = document.getElementById("business_id");
console.log(getId.textContent);
