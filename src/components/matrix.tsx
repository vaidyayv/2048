import React from 'react';
import Button from '@material-ui/core/Button';
import { ColorPalette } from './colorPalette';
import { OpacityPallete } from './opacityPalette';
interface MatrixProps {
    matrixData: Array<Array<number>>;
}

const Matrix: React.FC<MatrixProps> = (props) => {
    const { matrixData } = props;
    return (
        <React.Fragment>
            {
                matrixData.map((rowData, rowIndex) => {
                    return (
                        <div key={rowIndex} style={{ width: '100%', height: '24%', display: 'flex', justifyContent: 'space-evenly' }}>
                            {
                                rowData.map((data, columnIndex) => {
                                    return (
                                        <div style={{ width: '24%' }} key={`${rowIndex}${columnIndex}`}>
                                            <Button sx={{ width: '100%', height: '100%', opacity: `${OpacityPallete[data]}` }} variant="contained"
                                                color={ColorPalette[`${data}`]}
                                                disableElevation >
                                                <p style={{ fontSize: 'large', color: "white" }}>{data === 0 ? '' : data}</p>
                                            </Button >
                                        </div >
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </React.Fragment>
    );
}

export default Matrix;