
import React, { useState } from 'react';
//import ml5 from "ml5";
import { Box, Center, Text } from '@chakra-ui/react'
// import { useEffect, use } from 'react';

const videoRef = React.createRef<HTMLVideoElement>();
//const [loaded, setLoaded] = useState(false);

var classifier;

// useEffect(() => {
//   classifier = ml5.imageClassifier("./model/model.json", () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: false })
//       .then((stream) => {
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//         setLoaded(true);
//       });
//   });
// }, []);

export default function Home() {
  return (
    <Box minH={'500px'}>
      <Center>
        <Text>Hello World</Text>
        {/* <video
          //ref={videoRef}
          style={{ transform: "scale(-1, 1)" }}
          width="200"
          height="150" /> */}
      </Center>
    </Box>
  )
}
