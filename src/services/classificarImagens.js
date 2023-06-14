import ml5 from "ml5";

const classificarImagens = () => {
    const classifier = ml5.imageClassifier("./model/model.json", () => {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            });
    });
}

export default classificarImagens;