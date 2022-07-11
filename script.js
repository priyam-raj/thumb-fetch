function fetchThumbnail(videoURL) {
  let finalVideoURL =
    /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  let match = videoURL.match(finalVideoURL);

  if (match && match[1].length == 11) {
    let vidurl = match[1];

    thumbnailpreview = "http://img.youtube.com/vi/" + vidurl + "/mqdefault.jpg";
    maxres = "http://img.youtube.com/vi/" + vidurl + "/maxresdefault.jpg";
    midres = "http://img.youtube.com/vi/" + vidurl + "/hqdefault.jpg";
    lowres = "http://img.youtube.com/vi/" + vidurl + "/mqdefault.jpg";
  } else {
    alert("Please enter a correct 'YouTube video' URL");
    location.reload();
  }

  document.getElementById("preview").src = lowres;
  document.getElementById("maxres").href = maxres;
  document.getElementById("midres").href = midres;
  document.getElementById("lowres").href = lowres;
}

$("#fetchButton").click(function () {
  $("#downloadButtons").fadeIn(250);
  $("#fetchButton").text("Fetch Again");
});

document.getElementById("downloadButtons").style.display = "none";
