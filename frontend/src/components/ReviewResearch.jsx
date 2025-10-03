import React from 'react';
import '../styles/ReviewResearch.css';

const ReviewResearch = () => {
  const researches = [
    {
      studentIndex: '20234567',
      name: 'Emma Johnson',
      topic: 'Applications of Artificial Intelligence'
    },
    {
      studentIndex: '20234568',
      name: 'Michael Smith',
      topic: 'Biodiversity Conservation Strategies'
    },
    {
      studentIndex: '20234569',
      name: 'Olivia Brown',
      topic: 'Robotics in Healthcare'
    },
    {
      studentIndex: '20234570',
      name: 'William Davis',
      topic: 'Quantum Computing Algorithms'
    },
    {
      studentIndex: '20234571',
      name: 'Sophia Miller',
      topic: 'Renewable Energy Solutions'
    }
  ];

  return (
    <div className="submitted-container">
      <div className="submitted-card">
        <h1 className="submitted-title">Submitted Researches</h1>
        
        <div className="table-wrapper">
          <table className="research-table">
            <thead>
              <tr>
                <th>Student Index</th>
                <th>Name</th>
                <th>Research Topic</th>
              </tr>
            </thead>
            <tbody>
              {researches.map((research, index) => (
                <tr key={index}>
                  <td>{research.studentIndex}</td>
                  <td>{research.name}</td>
                  <td>{research.topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewResearch;