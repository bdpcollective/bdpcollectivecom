'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { Feature, FeatureCollection } from 'geojson';
import { Topology } from 'topojson-specification';

interface PovertyData {
  FIPS_Code: string;
  Stabr: string;
  Area_Name: string;
  Attribute: string;
  Value: string;
}

interface CountyData {
  id: string;
  name: string;
  value: number;
}

export default function PovertyMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        
        // Fetch US counties GeoJSON
        const usResponse = await fetch('/data/counties-10m.json');
        if (!usResponse.ok) {
          throw new Error(`Failed to fetch GeoJSON: ${usResponse.statusText}`);
        }
        const topology = await usResponse.json() as Topology;
        
        // Convert TopoJSON to GeoJSON
        const us = topojson.feature(topology, topology.objects.counties as any) as unknown as FeatureCollection;

        // Create state abbreviation mapping
        const stateAbbreviations = new Map([
          ['Alabama', 'AL'], ['Alaska', 'AK'], ['Arizona', 'AZ'], ['Arkansas', 'AR'], ['California', 'CA'],
          ['Colorado', 'CO'], ['Connecticut', 'CT'], ['Delaware', 'DE'], ['Florida', 'FL'], ['Georgia', 'GA'],
          ['Hawaii', 'HI'], ['Idaho', 'ID'], ['Illinois', 'IL'], ['Indiana', 'IN'], ['Iowa', 'IA'],
          ['Kansas', 'KS'], ['Kentucky', 'KY'], ['Louisiana', 'LA'], ['Maine', 'ME'], ['Maryland', 'MD'],
          ['Massachusetts', 'MA'], ['Michigan', 'MI'], ['Minnesota', 'MN'], ['Mississippi', 'MS'], ['Missouri', 'MO'],
          ['Montana', 'MT'], ['Nebraska', 'NE'], ['Nevada', 'NV'], ['New Hampshire', 'NH'], ['New Jersey', 'NJ'],
          ['New Mexico', 'NM'], ['New York', 'NY'], ['North Carolina', 'NC'], ['North Dakota', 'ND'], ['Ohio', 'OH'],
          ['Oklahoma', 'OK'], ['Oregon', 'OR'], ['Pennsylvania', 'PA'], ['Rhode Island', 'RI'], ['South Carolina', 'SC'],
          ['South Dakota', 'SD'], ['Tennessee', 'TN'], ['Texas', 'TX'], ['Utah', 'UT'], ['Vermont', 'VT'],
          ['Virginia', 'VA'], ['Washington', 'WA'], ['West Virginia', 'WV'], ['Wisconsin', 'WI'], ['Wyoming', 'WY']
        ]);

        // Create reverse state abbreviation mapping
        const stateNames = new Map(Array.from(stateAbbreviations.entries()).map(([name, abbr]) => [abbr, name]));

        // Fetch poverty data
        const povertyResponse = await fetch('/data/Poverty2023.csv');
        if (!povertyResponse.ok) {
          throw new Error(`Failed to fetch poverty data: ${povertyResponse.statusText}`);
        }
        const povertyText = await povertyResponse.text();
        const povertyData = d3.csvParse(povertyText) as d3.DSVRowArray<keyof PovertyData>;

        // Process poverty data to count by county
        const countyData: CountyData[] = [];
        const missingStates = new Set<string>();
        
        us.features.forEach(feature => {
          const properties = feature.properties;
          if (!properties) return;
          
          const fipsCode = feature.id as string;
          const stateCode = fipsCode.substring(0, 2);
          const stateName = stateNames.get(stateCode) || '';
          const countyName = properties.name || '';
          
          // Find matching poverty data for this county
          const povertyCounty = povertyData.find(d => {
            // Pad the FIPS code with a leading zero if needed
            const paddedFipsCode = d.FIPS_Code.padStart(5, '0');
            return paddedFipsCode === fipsCode && d.Attribute === 'PCTPOVALL_2023';
          });
          
          // Parse and validate the poverty rate
          const value = povertyCounty ? parseFloat(povertyCounty.Value) : 0;
          
          if (!povertyCounty) {
            missingStates.add(stateCode);
          }
          
          countyData.push({
            id: fipsCode,
            name: `${countyName}, ${stateName}`,
            value: isNaN(value) ? 0 : value
          });
        });

        // Log missing states
        console.log('Missing states:', Array.from(missingStates));
        console.log('Sample of poverty data:', povertyData.slice(0, 5));

        // Create data map for quick lookup
        const dataMap = new Map(countyData.map(d => [d.id, d.value]));

        if (!svgRef.current) {
          console.error('SVG ref not available');
          return;
        }

        // Clear any existing content
        d3.select(svgRef.current).selectAll('*').remove();

        // Get container width
        const containerWidth = svgRef.current.parentElement?.clientWidth || 900;

        // Set dimensions
        const margin = { top: 40, right: 40, bottom: 40, left: 40 };
        const width = containerWidth - margin.left - margin.right;
        const height = 800 - margin.top - margin.bottom;

        // Create SVG
        const svg = d3.select(svgRef.current)
          .attr('width', '100%')
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

        // Create projection
        const projection = d3.geoAlbersUsa()
          .fitSize([width, height], us);

        // Create path generator
        const path = d3.geoPath().projection(projection);

        // Create color scale
        const values = countyData.map(d => d.value).filter(v => v > 0 && !isNaN(v));
        const colorScale = d3.scaleQuantile<string>()
          .domain(values)
          .range(['#f7fbff', '#c6dbef', '#6baed6', '#2171b5', '#08306b']);

        // Draw map with explicit fill and stroke
        const mapGroup = svg.append('g')
          .selectAll('path')
          .data(us.features)
          .join('path')
          .attr('d', path)
          .attr('fill', d => {
            const feature = d as Feature;
            const value = dataMap.get(feature.id as string);
            return value ? colorScale(value) : 'none';
          })
          .attr('stroke', '#9E9E9E')
          .attr('stroke-width', 0.5)
          .attr('opacity', 0.8)
          .style('vector-effect', 'non-scaling-stroke');

        // Add tooltip
        const tooltip = d3.select('body')
          .append('div')
          .attr('class', 'tooltip')
          .style('opacity', 0)
          .style('position', 'absolute')
          .style('background-color', 'white')
          .style('border', '1px solid #ddd')
          .style('border-radius', '4px')
          .style('padding', '10px')
          .style('pointer-events', 'none')
          .style('box-shadow', '0 2px 4px rgba(0,0,0,0.1)')
          .style('font-family', 'sans-serif')
          .style('font-size', '12px')
          .style('line-height', '1.4');

        // Add hover effects
        mapGroup
          .on('mouseover', function(event: MouseEvent, d: unknown) {
            const feature = d as Feature;
            const value = dataMap.get(feature.id as string);
            const properties = feature.properties;
            
            d3.select(this)
              .attr('opacity', 1)
              .attr('stroke-width', 1);

            tooltip.transition()
              .duration(200)
              .style('opacity', .9);

            const countyName = properties?.name || 'Unknown County';
            const stateCode = (feature.id as string).substring(0, 2);
            const stateName = stateNames.get(stateCode) || 'Unknown State';
            
            // Find the state abbreviation from the poverty data
            const stateData = povertyData.find(d => {
              const paddedFipsCode = d.FIPS_Code.padStart(5, '0');
              return paddedFipsCode === feature.id as string;
            });
            
            tooltip.html(`
              <div style="font-weight: bold;">${countyName}</div>
              <div style="color: #666; margin-bottom: 4px;">${stateNames.get(stateData?.Stabr || '') || stateCode}</div>
              <div style="color: #666;">
                ${value ? `Poverty Rate: ${value.toFixed(1)}%` : 'No data'}
              </div>
            `)
              .style('left', (event.pageX + 10) + 'px')
              .style('top', (event.pageY - 28) + 'px');
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('opacity', 0.8)
              .attr('stroke-width', 0.5);
            tooltip.transition()
              .duration(500)
              .style('opacity', 0);
          });

      } catch (error) {
        console.error('Error creating chart:', error);
        if (svgRef.current) {
          d3.select(svgRef.current)
            .append('text')
            .attr('x', '50%')
            .attr('y', '50%')
            .attr('text-anchor', 'middle')
            .attr('fill', 'red')
            .text(`Error loading data: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full">
        <svg ref={svgRef} className="w-full" style={{ minHeight: '800px' }}></svg>
      </div>
    </div>
  );
} 