import React, { useState, useMemo } from 'react';
import './App.css';
import BedRows from './Components/BedRows'
import VegetableSelector from './Components/VegetableSelector';
import VegetableInfo from './Components/VegetableInfo';

const vegetables = [
  {
    id: 1,
    name: "Tomato",
    timeToGestation: "5-10 days",
    timeToHarvest: "70-85 days",
    avgYieldPerPlant: "10-15 lbs",
    spacingRequirements: 24,
    lightRequirements: "Full sun",
    description: "Beefsteak tomatoes are large, meaty tomatoes with a rich, sweet flavor. They prefer well-draining soil with plenty of organic matter and need at least 6 hours of direct sunlight per day. Beefsteak tomatoes can be staked or caged for support.",
    notes: "Prune suckers to improve yield and airflow. Water deeply and regularly, especially during hot weather. Watch for signs of disease, such as yellow leaves or spots on the fruit. To avoid cracking, avoid watering from overhead."
  },
  {
    id: 2,
    name: "Cucumber",
    timeToGestation: "7-14 days",
    timeToHarvest: "50-70 days",
    avgYieldPerPlant: "5-10 lbs",
    spacingRequirements: 36,
    lightRequirements: "Full sun to partial shade",
    description: "Cucumbers are a vining crop that prefer well-draining soil with plenty of organic matter. They need at least 6 hours of direct sunlight per day and should be watered regularly. Cucumbers can be trellised for support.",
    notes: "Watch for signs of disease, such as wilting or yellowing leaves. Harvest frequently to encourage more fruit production. To avoid bitter cucumbers, keep them well-watered and avoid allowing the soil to dry out completely."
  },
  {
    id: 3,
    name: "Romaine Lettuce",
    timeToGestation: "7-10 days",
    timeToHarvest: "55-75 days",
    avgYieldPerPlant: "1-2 lbs",
    spacingRequirements: 8,
    lightRequirements: "Full sun to partial shade",
    description: "Romaine lettuce is a leafy green that prefers well-draining soil with plenty of organic matter. It can tolerate some shade but performs best with at least 4-6 hours of direct sunlight per day. Romaine lettuce has a tall, upright growth habit and does not require support.",
    notes: "Water consistently to keep the soil evenly moist. Mulching can help retain moisture and control weeds. Harvest outer leaves as needed, or cut the entire plant at the base when it reaches the desired size. To prevent bitterness, harvest before the plant bolts (starts producing flowers)."
  },
  {
    id: 4,
    name: "Thyme",
    timeToGestation: "14-28 days",
    timeToHarvest: "90-120 days",
    avgYieldPerPlant: "Varies",
    spacingRequirements: 12,
    lightRequirements: "Full sun",
    description: "Thyme is a perennial herb with small, aromatic leaves. It thrives in well-draining soil with moderate fertility. Thyme requires full sun for at least 6 hours a day. It has a low, spreading growth habit and does not require much space.",
    notes: "Water thyme regularly, but avoid overwatering as it prefers slightly dry conditions. Mulching around the plant can help conserve moisture. Prune thyme after flowering to encourage new growth. Harvest leaves as needed, but avoid removing more than one-third of the plant at a time. Thyme leaves can be used fresh or dried for culinary purposes."
  },
  {
    id: 5,
    name: "Rosemary",
    timeToGestation: "14-28 days",
    timeToHarvest: "90-120 days",
    avgYieldPerPlant: "Varies",
    spacingRequirements: 24,
    lightRequirements: "Full sun",
    description: "Rosemary is an aromatic perennial herb with needle-like leaves. It thrives in well-draining soil and prefers a sunny location with at least 6 hours of direct sunlight per day. Rosemary has an upright growth habit and can grow into a shrub-like form if left unpruned.",
    notes: "Water rosemary sparingly, allowing the soil to dry out between waterings. Mulching around the plant can help retain moisture and suppress weeds. Prune rosemary regularly to maintain its shape and encourage bushier growth. Harvest sprigs as needed, cutting them from the outer portions of the plant. Rosemary leaves are commonly used fresh or dried in culinary dishes."
  },
  {
    id: 6,
    name: "Oregano",
    timeToGestation: "7-14 days",
    timeToHarvest: "90-120 days",
    avgYieldPerPlant: "Varies",
    spacingRequirements: 12,
    lightRequirements: "Full sun",
    description: "Oregano is a perennial herb with aromatic leaves. It thrives in well-draining soil and prefers a sunny location with at least 6 hours of direct sunlight per day. Oregano has a low, spreading growth habit and can form dense clumps over time.",
    notes: "Water oregano moderately, allowing the soil to dry out slightly between waterings. Mulching can help conserve moisture and prevent weed growth. Prune oregano regularly to maintain its shape and encourage bushier growth. Harvest leaves as needed, cutting stems just above a pair of leaves. Oregano leaves are commonly used fresh or dried in culinary dishes."
  },
  {
    id: 7,
    name: "Chives",
    timeToGestation: "7-14 days",
    timeToHarvest: "60-90 days",
    avgYieldPerPlant: "Varies",
    spacingRequirements: 6,
    lightRequirements: "Full sun to partial shade",
    description: "Chives are perennial herbs with slender, hollow leaves. They prefer well-draining soil and can tolerate a range of light conditions, from full sun to partial shade. Chives have a clumping growth habit and can form dense tufts over time.",
    notes: "Water chives regularly to keep the soil evenly moist, especially during hot and dry periods. Mulching around the plant can help retain moisture and control weeds. Divide chive clumps every few years to maintain plant health. Harvest leaves as needed, cutting them close to the base. Chives are commonly used fresh in various culinary dishes."
  },
  {
    id: 8,
    name: "Jalapeno",
    timeToGestation: "7-10 days",
    timeToHarvest: "65-85 days",
    avgYieldPerPlant: "20-35 fruits",
    spacingRequirements: 12,
    lightRequirements: "Full sun",
    description: "Jalapeno is a hot chili pepper commonly used in various cuisines. It thrives in well-draining soil and requires full sun, at least 6-8 hours per day. Jalapeno plants have a compact growth habit and can reach a height of 2-3 feet.",
    notes: "Water jalapeno plants consistently, keeping the soil evenly moist but not waterlogged. Mulching can help conserve moisture and suppress weed growth. Support the plants with stakes or cages if necessary, especially when they start bearing fruits. Harvest jalapenos when they are green and fully grown, typically around 2-3 inches in length. Use gloves when handling the peppers, as they can cause skin irritation and avoid touching your face or eyes."
  }
]


function App() {

  const [length, setLength] = useState(96);
  const [width, setWidth] = useState(36);

  const [selectedVegetable, setSelectedVegetable] = useState('Tomato');

  const handleVegetableChange = (event) => {
    setSelectedVegetable(event.target.value);
  };
  // This is done incorrectly, cant figure out how to control state properly in main app component
  const currentVeg = vegetables.find(x => x.name === selectedVegetable)

  let area = useMemo(() => length * width, [length, width]);

  // console.log(vegetables.find(x => x.name === selectedVegetable))
  return (

    <div className="App">
      {/*can this be its own component? */}

      <div className='inputs-container'>
        <h1>Garden Bed Calculator</h1>
        <div className='user-inputs'>
          <div className='measurement-inputs'>
            <div>
              <label>Length:</label>
              <input
                className='measurement'
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <span>inches</span>
            </div>
            <div>
              <label>Width:</label>
              <input
                className='measurement'
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
              <span>inches</span>
            </div>
            <div className='area'>
              <label>Area:</label>
              <span>{area}</span>
            </div>
          </div>
          <VegetableSelector
            selectedVegetable={selectedVegetable}
            handleVegetableChange={handleVegetableChange}
            veggies={vegetables}
          />
        </div>
      </div>


      <BedRows
        length={length}
        width={width}
        plantSpacing={currentVeg.spacingRequirements}
      />
      <VegetableInfo
        selectedVegetable={selectedVegetable}
        currentVeg={currentVeg}
      />

    </div>
  );
}
export default App;
