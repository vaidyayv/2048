import React, { useEffect, useRef, useState } from 'react';
import Container from '@material-ui/core/Container';
import Matrix from './components/matrix';
import useResize from './hooks/useResize';
import leftSwipe from './logic/leftSwipe';
import rightSwipe from './logic/rightSwipe';
import upSwipe from './logic/upSwipe';
import downSwipe from './logic/downSwipe';
import isGameOver from './logic/isGameOver';
import insertRandom from './logic/insertRandom';
import isArrayChanged from './logic/isArrayChanged';

const initialMatrix: Array<Array<number>> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

function App() {
  // eslint-disable-next-line
  const [matrixData, setMatrixData] = useState<Array<Array<number>>>(initialMatrix);
  const componentRef = useRef(null)
  let { width } = useResize(componentRef);

  const [touchStartX, setTouchStartX] = React.useState(0);
  const [touchEndX, setTouchEndX] = React.useState(0);

  const [touchStartY, setTouchStartY] = React.useState(0);
  const [touchEndY, setTouchEndY] = React.useState(0);

  useEffect(() => {
    let matrixDataCopy: Array<Array<number>> = insertRandom(matrixData);
    setMatrixData(insertRandom(matrixDataCopy));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleTouchStart(targetTouches: React.Touch) {
    setTouchStartX(targetTouches.clientX);
    setTouchStartY(targetTouches.clientY);
  }

  function handleTouchMove(targetTouches: React.Touch) {
    setTouchEndX(targetTouches.clientX);
    setTouchEndY(targetTouches.clientY);
  }

  function handleTouchEnd() {
    let horizontalOffset = Math.abs(touchStartX - touchEndX);
    let verticalOffset = Math.abs(touchStartY - touchEndY);
    if (horizontalOffset > verticalOffset) {
      if (touchStartX - touchEndX > 150) {
        // do your stuff here for left swipe
        let matrixDataCopy: Array<Array<number>> = leftSwipe(matrixData)
        if (isGameOver(matrixDataCopy)) {
          window.alert("Game Over!");
        } else if (isArrayChanged(matrixDataCopy, matrixData)) {
          setMatrixData(insertRandom(matrixDataCopy));
        }
      }

      if (touchStartX - touchEndX < -150) {
        // do your stuff here for right swipe
        let matrixDataCopy: Array<Array<number>> = rightSwipe(matrixData)
        if (isGameOver(matrixDataCopy)) {
          window.alert("Game Over!");
        } else if (isArrayChanged(matrixDataCopy, matrixData)) {
          setMatrixData(insertRandom(matrixDataCopy));
        }
      }
    } else {
      if (touchStartY - touchEndY > 25) {
        // do your stuff here for up swipe
        let matrixDataCopy: Array<Array<number>> = upSwipe(matrixData)
        if (isGameOver(matrixDataCopy)) {
        } else if (isArrayChanged(matrixDataCopy, matrixData)) {
          setMatrixData(insertRandom(matrixDataCopy));
        }
        console.log("up swipe");
      }

      if (touchStartY - touchEndY < -25) {
        // do your stuff here for down swipe
        let matrixDataCopy: Array<Array<number>> = downSwipe(matrixData)
        if (isGameOver(matrixDataCopy)) {
          window.alert("Game Over!");
        } else if (isArrayChanged(matrixDataCopy, matrixData)) {
          setMatrixData(insertRandom(matrixDataCopy));
        }
      }
    }
  }


  return (
    <Container sx={{ height: '100vh', background: '#fbf8ef' }} maxWidth="sm">
      <div ref={componentRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div
          onTouchStart={e => handleTouchStart(e.targetTouches[0])}
          onTouchMove={e => handleTouchMove(e.targetTouches[0])}
          onTouchEnd={_ => handleTouchEnd()}
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: `${width}px`, width: `${width}px`
          }} >
          <Matrix matrixData={matrixData} />
        </div>
      </div>
    </Container>
  );
}

export default App;
