import React from 'react';

const Row = ({plantSpacing, plantsPerRow}) => {
  const plants = [];
  let plantId = 0;

  for(let row = 0; row < plantsPerRow; row++){
    plants.push(<div className='plant' key={plantId} style={{height:plantSpacing, width: plantSpacing}}></div>)
    plantId ++
  }
return <div className='row'>
        {plants}
      </div>
};

const Beds = ({rowsPerBed, plantSpacing, plantsPerRow}) => {
  const rows = []
  for(let rowsCount = 0; rowsCount < rowsPerBed; rowsCount ++){
    
    let rowId = 0

      rows.push(<Row 
        plantSpacing={plantSpacing}
        plantsPerRow={plantsPerRow}
      />)
      rowId ++
  }
  return <div className='bed'>
        {rows}
        </div>
}

const BedRows = (props) => {
  const { length, width, plantSpacing } = props
  // Calculate the number of pants in each row and how many rows per bed.
  const plantsPerRow = Math.floor(width / plantSpacing);
  const rowsPerBed = Math.floor(length / plantSpacing);
console.log(plantsPerRow, rowsPerBed)

  return (
    <div className='garden-bed'>
      <span className='bed-length'>{length}"</span>
      <div className='bed-width-container'>
      <div className='beds-container'>
        <Beds 
          plantSpacing={plantSpacing}
          plantsPerRow={plantsPerRow}
          rowsPerBed={rowsPerBed}
        />
      </div>
      <span className='bed-width'>{width}"</span>
      </div>
    </div>
  );
};

export default BedRows;