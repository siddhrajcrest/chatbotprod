fetch(
  "https://cdn.jsdelivr.net/gh/siddhrajcrest/chatbotnew/build/asset-manifest.json"
).then((res) => {
  res.text().then((d) => {
    const files = JSON.parse(d);
    console.log(files)
    const mainChunk = document.createElement("script");
    mainChunk.src = `https://cdn.jsdelivr.net/gh/siddhrajcrest/chatbotnew/build${files.files["main.js"]}`;
    document.body.appendChild(mainChunk);
    const mainChunkCss = document.createElement("link");
    mainChunkCss.href = `https://cdn.jsdelivr.net/gh/siddhrajcrest/chatbotnew/build${files.files["main.css"]}`;
    mainChunkCss.rel = "stylesheet";
    document.head.appendChild(mainChunkCss);
  });
});
const getId = document.getElementById("business_id");
console.log(getId.textContent);
