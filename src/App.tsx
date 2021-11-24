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
import Restart from './components/restart';
import Menu from './components/menu';
import HighestScore from './components/highestScore';
import GameOver from './components/gameOver';

const initialMatrix: Array<Array<number>> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

function App() {
  // eslint-disable-next-line
  const [matrixData, setMatrixData] = useState<Array<Array<number>>>(initialMatrix);

  const savedCurrentScore = +(localStorage.getItem('currentScore') || '0')
  const [currentScore, setCurrentScore] = useState<number>(savedCurrentScore);

  const savedHighestScore = +(localStorage.getItem('highestScore') || '0')
  const [highestScore, setHighestScore] = useState<number>(savedHighestScore);

  const [gameOver, setGameOver] = useState<boolean>(false);

  const componentRef = useRef(null)
  let { width } = useResize(componentRef);

  const [touchStartX, setTouchStartX] = React.useState(0);
  const [touchEndX, setTouchEndX] = React.useState(0);

  const [touchStartY, setTouchStartY] = React.useState(0);
  const [touchEndY, setTouchEndY] = React.useState(0);

  useEffect(() => {
    let matrix: Array<Array<number>> = JSON.parse(localStorage.getItem('matrix') || '[]');
    if (matrix.length === 0) {
      let matrixDataCopy: Array<Array<number>> = insertRandom(matrixData);
      setMatrixData(insertRandom(matrixDataCopy));
    } else {
      setMatrixData(matrix);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentScore(matrixData.flat().reduce((el, total) => total += el, 0));
    localStorage.setItem('matrix', JSON.stringify(matrixData));
  }, [matrixData]);

  useEffect(() => {
    if (currentScore > highestScore) {
      setHighestScore(currentScore);
    }
    localStorage.setItem('currentScore', '' + currentScore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScore]);

  useEffect(() => {
    localStorage.setItem('highestScore', '' + highestScore);
  }, [highestScore]);

  const restart = () => {
    let matrixDataCopy: Array<Array<number>> = insertRandom(initialMatrix);
    setCurrentScore(2);
    setMatrixData(insertRandom(matrixDataCopy));
    setGameOver(false);
  }

  function handleTouchStart(targetTouches: React.Touch) {
    setTouchStartX(targetTouches.clientX);
    setTouchStartY(targetTouches.clientY);
    setTouchEndX(targetTouches.clientX);
    setTouchEndY(targetTouches.clientY);
  }

  function handleTouchMove(targetTouches: React.Touch) {
    setTouchEndX(targetTouches.clientX);
    setTouchEndY(targetTouches.clientY);
  }

  function handleTouchEnd() {
    let horizontalOffset = Math.abs(touchStartX - touchEndX);
    let verticalOffset = Math.abs(touchStartY - touchEndY);
    if (horizontalOffset > verticalOffset) {
      if (touchStartX - touchEndX > 50) {
        // do your stuff here for left swipe
        let matrixDataCopy: Array<Array<number>> = leftSwipe(matrixData)
        if (isArrayChanged(matrixDataCopy, matrixData)) {
          const matrixDataCopy2: Array<Array<number>> = insertRandom(matrixDataCopy)
          setMatrixData(matrixDataCopy2);
          if (isGameOver(matrixDataCopy2)) {
            setGameOver(true);
          }
        } else if (isGameOver(matrixData)) {
          setGameOver(true);
        }
      }

      if (touchStartX - touchEndX < -50) {
        // do your stuff here for right swipe
        let matrixDataCopy: Array<Array<number>> = rightSwipe(matrixData)
        if (isArrayChanged(matrixDataCopy, matrixData)) {
          const matrixDataCopy2: Array<Array<number>> = insertRandom(matrixDataCopy)
          setMatrixData(matrixDataCopy2);
          if (isGameOver(matrixDataCopy2)) {
            setGameOver(true);
          }
        } else if (isGameOver(matrixData)) {
          setGameOver(true);
        }
      }
    } else {
      if (touchStartY - touchEndY > 50) {
        // do your stuff here for up swipe
        let matrixDataCopy: Array<Array<number>> = upSwipe(matrixData)
        if (isArrayChanged(matrixDataCopy, matrixData)) {
          const matrixDataCopy2: Array<Array<number>> = insertRandom(matrixDataCopy)
          setMatrixData(matrixDataCopy2);
          if (isGameOver(matrixDataCopy2)) {
            setGameOver(true);
          }
        } else if (isGameOver(matrixData)) {
          setGameOver(true);
        }

      }

      if (touchStartY - touchEndY < -50) {
        // do your stuff here for down swipe
        let matrixDataCopy: Array<Array<number>> = downSwipe(matrixData)
        if (isArrayChanged(matrixDataCopy, matrixData)) {
          const matrixDataCopy2: Array<Array<number>> = insertRandom(matrixDataCopy)
          setMatrixData(matrixDataCopy2);
          if (isGameOver(matrixDataCopy2)) {
            setGameOver(true);
          }
        } else if (isGameOver(matrixData)) {
          setGameOver(true);
        }
      }
    }
  }


  return (
    <Container onTouchStart={e => handleTouchStart(e.targetTouches[0])}
      onTouchMove={e => handleTouchMove(e.targetTouches[0])}
      onTouchEnd={_ => handleTouchEnd()} sx={{ height: '100vh', background: '#fbf8ef', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '16px', paddingBottom: '16px' }} maxWidth="sm">
      <div>
        <Menu />
        <HighestScore currentScore={currentScore} highestScore={highestScore} />
      </div>
      <div
        ref={componentRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: `${width}px`, width: `${width}px`
          }} >
          <Matrix matrixData={matrixData} />
        </div>
      </div>
      <div style={{
        height: '40px',
      }}>
        {gameOver && <GameOver />}
      </div>
      <Restart restart={restart} />
    </Container>
  );
}

export default App;
