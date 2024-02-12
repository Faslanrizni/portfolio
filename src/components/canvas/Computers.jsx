import React from 'react';
import { Suspense,useEffect,useState } from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'


const Computers = ({isMobile}) => {
    const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor={'black' }/>
      <pointLight intensity={1}/>

      <primitive
        object={computer.scene}
        scale={isMobile? 0.7 : 0.75}
        position={isMobile? [0, -3, -2.2]:[0, -3.25, -1.35]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  )
}
const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{ /*  listner for changes to the  screen sizes*/
    const mediaQuary = window.matchMedia('(max-width: 500px)');


    setIsMobile(mediaQuary.matches);

    /* callback function for changes to media query */
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches)
    }

    /* add the call back function as a listner for changes to the media query */
    mediaQuary.addEventListener('change',handleMediaQueryChange)

    /* remove the Listner when the component is unmounted */
    return () =>{
      mediaQuary.removeEventListener('change',handleMediaQueryChange)
    }

  },[])
  return(
    <Canvas
      frameloop='demand'
      shadows camera={{position: [20, 3, 5], fov:25 }}
      gl={{preserveDrawingBuffer: true}}
      >


      <Suspense fallback={<CanvasLoader />}>
        {/*<OrbitControls
          enableZoom ={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}

        />
        <Computers isMobile={isMobile} />*/}

          <Preload all>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers isMobile={isMobile} />
        </Preload>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
