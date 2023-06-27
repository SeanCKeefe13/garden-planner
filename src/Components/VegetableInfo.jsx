import React from 'react';


 const VegetableInfo = ({currentVeg, selectedVegetable}) => {

return (
    <div className='extra-info'>
    {selectedVegetable && <div className='vegetable-info'>
        <p className='gestation'><strong>Time to gestation:</strong> {currentVeg.timeToGestation}</p>
        <p className='spacing'><strong>Spacing:</strong> {currentVeg.spacingRequirements}</p>
        <p className='harvest'><strong>Time to harvest:</strong> {currentVeg.timeToHarvest}</p>
        <p className='yield'><strong>Average yield per plant:</strong> {currentVeg.avgYieldPerPlant}</p>
        <p className='lighting'><strong>Lighting Requirements:</strong> {currentVeg.lightRequirements}</p>
        <p className='description'><strong>Description:</strong> {currentVeg.description}</p>
        <p className='notes'><strong>Notes:</strong> {currentVeg.notes}</p>
    </div>}
    <div className='photo'></div>
    {/* <img src="{currentVeg.image}" alt="" /> */}
    </div>
)
}

export default VegetableInfo;