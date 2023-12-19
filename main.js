

<script>
 let soundClassifier;

    function loadModel() {
        const modelURL = "your_model_link_here"; 
        soundClassifier = ml5.soundClassifier(modelURL, modelLoaded);
    }

    // Callback function when the model is loaded
    function modelLoaded() {
        console.log('Model Loaded!');
    }

    // Function to start the detection
    function startDetection() {
        if (!soundClassifier) {
            loadModel()
        }

        soundClassifier.classify(gotResult);
    }


    function gotResult(error, results) {
        if   (error) {
            console.error(error);
            return;
        }

        const animalCountElement = document.getElementById('animalCount');
        const animalClassElement = document.getElementById('animalClass');
        const animalImageElement = document.getElementById('animalImage');

        const count 
