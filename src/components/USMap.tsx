'use client';
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// Use the local JSON file we downloaded to the public folder
const geoUrl = '/data/us-states.json';

const USMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  // Expanded dummy data to test scrolling and multiple entries per state
  const chaptersData = {
    'Texas': [
      { name: 'North Texas Chapter', lead: 'John Doe', email: 'ntx@upa.org' },
      { name: 'Houston Coastal Chapter', lead: 'Jane Smith', email: 'houston@upa.org' },
      { name: 'Austin Central Chapter', lead: 'Mike Ross', email: 'austin@upa.org' },
      { name: 'Dallas Metro Chapter', lead: 'Sarah Jenkins', email: 'dallas@upa.org' },
      { name: 'San Antonio Chapter', lead: 'Robert Miller', email: 'sa@upa.org' },
    ],
    'Florida': [
      { name: 'Panhandle Chapter', lead: 'Sarah Connor', email: 'panhandle@upa.org' },
      { name: 'Miami South Chapter', lead: 'Bob Builder', email: 'miami@upa.org' },
      { name: 'Orlando Central Chapter', lead: 'Linda Vista', email: 'orlando@upa.org' },
      { name: 'Tampa Bay Chapter', lead: 'George Costanza', email: 'tampa@upa.org' },
    ],
    'California': [
      { name: 'NorCal Chapter', lead: 'Alice Springs', email: 'norcal@upa.org' },
      { name: 'SoCal Chapter', lead: 'Chris P. Bacon', email: 'socal@upa.org' },
      { name: 'Sacramento Valley Chapter', lead: 'Kevin Hart', email: 'sac@upa.org' },
      { name: 'Central Valley Chapter', lead: 'Pam Beesly', email: 'central@upa.org' },
      { name: 'San Diego Coast Chapter', lead: 'Walter White', email: 'sd@upa.org' },
    ],
    'New York': [
      { name: 'Upstate NY Chapter', lead: 'Tony Stark', email: 'upstate@upa.org' },
      { name: 'Long Island Chapter', lead: 'Pepper Potts', email: 'li@upa.org' },
      { name: 'NYC Metro Chapter', lead: 'Happy Hogan', email: 'nyc@upa.org' },
    ],
    'Illinois': [
      { name: 'Chicago Metro Chapter', lead: 'Bruce Wayne', email: 'chicago@upa.org' },
      { name: 'Springfield Chapter', lead: 'Clark Kent', email: 'springfield@upa.org' },
      { name: 'Rockford Chapter', lead: 'Lois Lane', email: 'rockford@upa.org' },
    ],
    'Georgia': [
      { name: 'Atlanta Metro Chapter', lead: 'Diana Prince', email: 'atlanta@upa.org' },
      { name: 'Savannah Coast Chapter', lead: 'Barry Allen', email: 'savannah@upa.org' },
      { name: 'Augusta Chapter', lead: 'Hal Jordan', email: 'augusta@upa.org' },
    ],
    'Ohio': [
      { name: 'Cleveland Chapter', lead: 'Arthur Curry', email: 'cleveland@upa.org' },
      { name: 'Columbus Chapter', lead: 'Victor Stone', email: 'columbus@upa.org' },
    ],
    'Pennsylvania': [
      { name: 'Philadelphia Chapter', lead: 'Billy Batson', email: 'philly@upa.org' },
      { name: 'Pittsburgh Chapter', lead: 'Steve Rogers', email: 'pittsburgh@upa.org' },
    ],
  };

  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: 'white', 
      borderRadius: '20px', 
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
      textAlign: 'center', 
      fontFamily: 'sans-serif' 
    }}>
      <h2 style={{ color: '#000080', fontSize: '2rem', marginBottom: '10px' }}>Find Your Local Chapter</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>Click on a state to discover professional pool networks in your area.</p>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '40px', 
        alignItems: 'flex-start', 
        flexWrap: 'wrap' 
      }}>
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '800px', 
          height: '500px', 
          backgroundColor: '#f0f4f8', 
          borderRadius: '10px', 
          border: '1px solid #ddd', 
          overflow: 'visible' 
        }}>
          <ComposableMap 
            projection="geoAlbersUsa" 
            projectionConfig={{ scale: 1000, center: [-102, 37.5] }}
            width={800} 
            height={500}
            style={{ width: '100%', height: 'auto' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateName = geo.properties.name;
                  return (
                    <Geography
                      key={geo.rsmId}
                      geography={geo}
                      onClick={() => setSelectedState(stateName)}
                      style={{
                        default: {
                          fill: selectedState === stateName ? '#B22234' : '#000080',
                          outline: 'none',
                          stroke: '#fff',
                          strokeWidth: 0.5,
                          transition: 'all 250ms'
                        },
                        hover: {
                          fill: '#B22234',
                          outline: 'none',
                          cursor: 'pointer'
                        },
                        pressed: {
                          fill: '#B22234',
                          outline: 'none'
                        }
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>

        <div style={{ 
          width: '350px', 
          padding: '20px', 
          backgroundColor: '#f9f9f9', 
          borderRadius: '15px', 
          borderLeft: '5px solid #B22234',
          minHeight: '200px',
          textAlign: 'left',
          maxHeight: '600px',
          overflowY: 'auto'
        }}>
          {selectedState ? (
            <div>
              <h3 style={{ color: '#000080', margin: '0 0 20px 0', fontSize: '1.5rem', borderBottom: '2px solid #B22234', paddingBottom: '10px' }}>
                {selectedState} Chapters
              </h3>
              
              {chaptersData[selectedState] && chaptersData[selectedState].length > 0 ? (
                chaptersData[selectedState].map((chapter, idx) => (
                  <div key={idx} style={{ 
                    backgroundColor: 'white', 
                    padding: '15px', 
                    borderRadius: '10px', 
                    marginBottom: '15px', 
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                    border: '1px solid #eee'
                  }}>
                    <h4 style={{ color: '#B22234', margin: '0 0 5px 0', fontSize: '1.1rem' }}>
                      {chapter.name}
                    </h4>
                    <p style={{ color: '#444', margin: '0 0 5px 0', fontSize: '0.9rem' }}>
                      <strong style={{color: '#666'}}>Lead:</strong> {chapter.lead}
                    </p>
                    <p style={{ color: '#444', margin: '0 0 15px 0', fontSize: '0.9rem' }}>
                      <strong style={{color: '#666'}}>Email:</strong> {chapter.email}
                    </p>
                    <button style={{ 
                      backgroundColor: '#000080', 
                      color: 'white', 
                      border: 'none', 
                      padding: '8px 16px', 
                      borderRadius: '4px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      width: '100%'
                    }}>
                      Visit Chapter Page
                    </button>
                  </div>
                ))
              ) : (
                <div style={{ color: '#888', textAlign: 'center', marginTop: '20px' }}>
                  No specific chapters listed for {selectedState} yet.
                </div>
              )}
            </div>
          ) : (
            <div style={{ color: '#888', textAlign: 'center', marginTop: '60px' }}>
              Select a state to view chapter details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default USMap;
