function Sound_Recon(){
    navigator.mediaDevices.getUserMedia({
    audio: true
    });
    my_classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KxGJbKsBh/model.json", my_model_loaded);
    
}

function my_model_loaded(){
    console.log("my_model_loaded");
    my_classifier.classify(got_result);

}

function got_result(error, result)
    console.log("got_result");
    if (error){
        console.error(error);
    }
    else {
        console.log(result);
       document.getElementById("result_label").innerHTML = "I can hear " + result[0].label;
       document.getElementById("result_confidence").innerHTML = "Accuracy is " + (result[0].confidence*100).toFixed(2)  + "%";

       random_red = Math.floor(Math.random()*255) + 1 ;
       random_green = Math.floor(Math.random()*255) + 1 ;
       random_blue = Math.floor(Math.random()*255) + 1 ;

       document.getElementById("result_label").style.color = "rgb(" + random_red + "," + random_green + "," + random_blue+")";
       document.getElementById("result_confidence").style.color =  "rgb(" +random_red + "," + random_green + "," + random_blue+")";
    }