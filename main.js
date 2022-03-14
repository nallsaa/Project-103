Webcam.set({
    width: 500,
    height: 350,
    image_format: 'png',
    png_quality: 90,
}
)
camera = document.getElementById("camera")
Webcam.attach('#camera')

function take_snapshot(){
    take_snapshot(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
})
}

console.log("ml5 version:", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HkLMtDa7u/model.json", modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")

}
