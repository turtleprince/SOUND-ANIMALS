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

function got_result(error, result){
console.log("got_result");
}