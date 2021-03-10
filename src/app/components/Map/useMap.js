import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature } from 'topojson-client';

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';

export const useMap = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then(topology => {
      const { countries } = topology.objects;
      setData( feature(topology,countries));
    });
  }, []);

  return data;
};
