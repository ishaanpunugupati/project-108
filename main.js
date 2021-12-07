function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KC3vENEyU/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotresults);
}

var dog = 0;
var cat = 0;
    
    function gotresults(error, results) {
    if (error) {
        console.error(error);

 }  else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    //document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img1 = document.getElementById('animal_image');

    if (results[0].label == "barking") {
        img1.src = 'giphy.gif';
        dog = dog+1;
    }
    else if (results[0].label == "meowing") {
        img1.src = 'giphy (1).gif';
        cat = cat+1;
        
    }

    else {
        img1.src = 'giphy (1).gif';
    }
    }
}