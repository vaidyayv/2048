import React, { useRef, useState } from 'react';
import Container from '@material-ui/core/Container';
import Matrix from './components/matrix';
import useResize from './hooks/useResize';

const initialMatrix: Array<Array<number>> = [
  [2, 4, 8, 16],
  [32, 64, 128, 256],
  [512, 1024, 2048, 4096],
  [8192, 16384, 32768, 0]
]

function App() {
  const [matrixData, setMatrixData] = useState<Array<Array<number>>>(initialMatrix);
  const componentRef = useRef(null)
  let { width } = useResize(componentRef);
  return (
    <Container sx={{ height: '100vh', background: '#fbf8ef' }} maxWidth="sm">
      <div ref={componentRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: `${width}px`, width: `${width}px`
        }} >
          <Matrix matrixData={matrixData} />
        </div>
      </div>
    </Container>
  );
}

export default App;
