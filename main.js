var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult = function(event) {

    console.log(event); 
   
   var Content = event.results[0][0].transcript;
   
   
       console.log(Content);
         if(Content =="selfie")
         {
           console.log("taking selfie --- ");
           speak();
         }
   }


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
    img_id="selfie1";
    take_snapshoot();
    speak_data="Taking your next selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
},5000)

setTimeout(function(){
    img_id="selfie2";
    take_snapshoot();
    speak_data="Taking your next selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
},10000)

setTimeout(function(){
    img_id="selfie3";
    take_snapshoot();

    
},15000)

}


function take_snapshoot(){
console.log(img_id);

Webcam.snap(function(data_url){
    if(img_id=="selfie1"){
       document.getElementById("img1").src=data_url;
    }
    if(img_id=="selfie2"){
        document.getElementById("img2").src=data_url;
    }
    if(img_id=="selfie3"){
        document.getElementById("img3").src=data_url;
    }
})
}