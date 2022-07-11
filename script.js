
$("#fetchButton").click(function () {
  $("#downloadButtons").fadeIn(250);
  $("#fetchButton").text("Fetch Again");
});

function fetchThumbnail(videoURL) {
  let finalVideoURL =
    /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;

  const thumbnailURL = "http://img.youtube.com/vi/";
  let match = videoURL.match(finalVideoURL);

  if (match && match[1].length == 11) {
    let vidurl = match[1];
    thumbnailpreview = thumbnailURL + vidurl + "/mqdefault.jpg";
    maxres = thumbnailURL + vidurl + "/maxresdefault.jpg";
    midres = thumbnailURL + vidurl + "/hqdefault.jpg";
    lowres = thumbnailURL + vidurl + "/mqdefault.jpg";
  } 
  
  else {
    alert("Please enter a correct 'YouTube video' URL");
    location.reload();
  }

  document.getElementById("preview").src = lowres;
  document.getElementById("maxres").href = maxres;
  document.getElementById("midres").href = midres;
  document.getElementById("lowres").href = lowres;
}


document.getElementById("downloadButtons").style.display = "none";
