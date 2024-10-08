import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TrailItem from './TrailItem';

export default function TrailList() {
  const [trailData, setTrailData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/trails')
      .then(response => response.json())
      .then(data => {
        console.log('Received trail data:', data);
        setTrailData(data);
      })
      .catch(error => console.error('Error fetching trail data:', error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Trail List</h2>
      {trailData.length > 0 ? (
        <div className="flex overflow-x-auto gap-2">
          {trailData.map((trail) => (
            <TrailItem key={trail._id} trail={trail} />
          ))}
        </div>
      ) : (
        <p>No trails found.</p>
      )}
    </div>
  );
}