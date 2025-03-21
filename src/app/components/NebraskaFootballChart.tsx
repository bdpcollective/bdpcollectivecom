'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface GameData {
  GameId: string;
  Season: number;
  Week: number;
  Team: string;
  Opponent: string;
  Offense_SuccessRate: number;
  Offense_Plays: number;
  Offense_Drives: number;
  Offense_LineYards: number;
  HomePoints: number;
  AwayPoints: number;
  FirstQuarterPoints: number;
  SecondQuarterPoints: number;
  ThirdQuarterPoints: number;
  FourthQuarterPoints: number;
  HomeTeam: string;
  AwayTeam: string;
  Attendance: number;
  TotalYards: number;
  PassingYards: number;
  PassingCompletions: number;
  PassingAttempts: number;
  YardsPerPass: number;
  RushingYards: number;
  RushingAttempts: number;
  YardsPerRush: number;
  Penalties: number;
  Turnovers: number;
  Interceptions: number;
  Fumbles: number;
  FirstDowns: number;
  ThirdDownEfficiency: number;
  FourthDownEfficiency: number;
}

type Metric = {
  key: keyof GameData;
  label: string;
  format: (value: number) => string;
  domain: [number, number];
};

const METRICS: Metric[] = [
  {
    key: 'TotalYards',
    label: 'Total Yards',
    format: (value: number) => value.toFixed(0),
    domain: [0, 800]
  },
  {
    key: 'PassingYards',
    label: 'Passing Yards',
    format: (value: number) => value.toFixed(0),
    domain: [0, 500]
  },
  {
    key: 'PassingCompletions',
    label: 'Completions to Attempts',
    format: (value: number) => value.toFixed(1),
    domain: [0, 100]
  },
  {
    key: 'YardsPerPass',
    label: 'Yards Per Pass',
    format: (value: number) => value.toFixed(2),
    domain: [0, 20]
  },
  {
    key: 'RushingYards',
    label: 'Rushing Yards',
    format: (value: number) => value.toFixed(0),
    domain: [0, 500]
  },
  {
    key: 'RushingAttempts',
    label: 'Rushing Attempts',
    format: (value: number) => value.toFixed(0),
    domain: [0, 70]
  },
  {
    key: 'YardsPerRush',
    label: 'Yards Per Rush',
    format: (value: number) => value.toFixed(2),
    domain: [0, 10]
  },
  {
    key: 'Penalties',
    label: 'Penalties',
    format: (value: number) => value.toFixed(0),
    domain: [0, 20]
  },
  {
    key: 'Turnovers',
    label: 'Turnovers',
    format: (value: number) => value.toFixed(0),
    domain: [0, 10]
  },
  {
    key: 'Interceptions',
    label: 'Interceptions',
    format: (value: number) => value.toFixed(0),
    domain: [0, 5]
  },
  {
    key: 'Fumbles',
    label: 'Fumbles',
    format: (value: number) => value.toFixed(0),
    domain: [0, 5]
  },
  {
    key: 'FirstDowns',
    label: 'First Downs',
    format: (value: number) => value.toFixed(0),
    domain: [0, 30]
  },
  {
    key: 'ThirdDownEfficiency',
    label: '3rd Down Efficiency',
    format: (value: number) => `${value.toFixed(1)}%`,
    domain: [0, 100]
  },
  {
    key: 'FourthDownEfficiency',
    label: '4th Down Efficiency',
    format: (value: number) => `${value.toFixed(1)}%`,
    domain: [0, 100]
  }
];

export default function NebraskaFootballChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedMetric, setSelectedMetric] = useState<Metric>(METRICS[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/NUStatsByGame.csv');
        const csvText = await response.text();
        const rawData = d3.csvParse(csvText);
        console.log('CSV Headers:', Object.keys(rawData[0])); // Debug log
        console.log('First row:', rawData[0]); // Debug log
        
        const data = rawData.map(row => {
          const mappedRow = {
            GameId: row.GameId || '',
            Season: parseInt(row.Season || '0'),
            Week: parseInt(row.Week || '0'),
            Team: row.Team || '',
            Opponent: row.Opponent || '',
            Offense_SuccessRate: parseFloat(row['Offense SuccessRate'] || '0') * 100,
            Offense_Plays: parseInt(row['Offense Plays'] || '0'),
            Offense_Drives: parseInt(row['Offense Drives'] || '0'),
            Offense_LineYards: parseFloat(row['Offense LineYards'] || '0'),
            HomePoints: parseInt(row['HomePoints'] || '0'),
            AwayPoints: parseInt(row['AwayPoints'] || '0'),
            FirstQuarterPoints: parseInt(row['1stQuarterPoints'] || '0'),
            SecondQuarterPoints: parseInt(row['2ndQuarterPoints'] || '0'),
            ThirdQuarterPoints: parseInt(row['3rdQuarterPoints'] || '0'),
            FourthQuarterPoints: parseInt(row['4thQuarterPoints'] || '0'),
            HomeTeam: row.HomeTeam || '',
            AwayTeam: row.AwayTeam || '',
            Attendance: parseInt(row['Attendance'] || '0'),
            TotalYards: parseInt(row['TotalYards'] || '0'),
            PassingYards: parseInt(row['Passing'] || '0'),
            PassingCompletions: parseInt(row['CompAtt']?.split('/')[0] || '0'),
            PassingAttempts: parseInt(row['CompAtt']?.split('/')[1] || '0'),
            YardsPerPass: parseFloat(row['YardsPerPass'] || '0'),
            RushingYards: parseInt(row['Rushing'] || '0'),
            RushingAttempts: parseInt(row['RushingAtt'] || '0'),
            YardsPerRush: parseFloat(row['YardsPerRush'] || '0'),
            Penalties: parseInt(row['Penalties'] || '0'),
            Turnovers: parseInt(row['Turnovers Total'] || '0'),
            Interceptions: parseInt(row['Interceptions'] || '0'),
            Fumbles: parseInt(row['Fumbles'] || '0'),
            FirstDowns: parseInt(row['FirstDowns'] || '0'),
            ThirdDownEfficiency: parseFloat(row['3rdDownEfficiency']?.split('-')[0] || '0'),
            FourthDownEfficiency: parseFloat(row['4thDownEfficiency']?.split('-')[0] || '0')
          };
          if (mappedRow.Season === 2005) {
            console.log('2005 Game Data:', {
              raw: row,
              mapped: mappedRow,
              selectedMetric: selectedMetric.key,
              metricValue: mappedRow[selectedMetric.key]
            });
          }
          return mappedRow;
        });

        if (!svgRef.current) return;

        // Clear any existing content
        d3.select(svgRef.current).selectAll('*').remove();

        // Get container width
        const containerWidth = svgRef.current.parentElement?.clientWidth || 900;

        // Set dimensions
        const margin = { top: 25, right: 50, bottom: 35, left: 70 };
        const width = containerWidth - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        // Create SVG
        const svg = d3.select(svgRef.current)
          .attr('width', '100%')
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

        // Create tooltip div
        const tooltip = d3.select('body').append('div')
          .attr('class', 'absolute hidden bg-black text-white p-2 rounded shadow-lg text-sm')
          .style('pointer-events', 'none');

        // Group data by season
        const groupedData = d3.group(data, d => d.Season);

        // Filter out seasons that don't have data for the selected metric
        const filteredGroupedData = new Map(
          Array.from(groupedData.entries()).filter(([_, values]) => 
            values.some(d => !isNaN(d[selectedMetric.key as keyof GameData] as number) && (d[selectedMetric.key as keyof GameData] as number) !== 0)
          )
        );

        // Create scales
        const xScale = d3.scaleLinear()
          .domain([0.5, 17])  // Changed from 16 to 17
          .range([0, width]);

        const yScale = d3.scaleLinear()
          .domain(selectedMetric.domain)
          .nice()
          .range([height, 0]);

        // Add X axis with grid
        svg.append('g')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(xScale)
            .ticks(17)
            .tickFormat(d => d === 17 ? 'Bowl Game' : d.toString()))
          .call(g => g.append('text')
            .attr('x', width / 2)
            .attr('y', 30)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'middle')
            .text('Week'));

        // Add Y axis with grid
        svg.append('g')
          .call(d3.axisLeft(yScale).ticks(10))
          .call(g => g.append('text')
            .attr('x', -height / 2)
            .attr('y', -56)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(-90)')
            .text(selectedMetric.label));

        // Add grid lines
        svg.append('g')
          .attr('stroke', 'currentColor')
          .attr('stroke-opacity', 0.1)
          .call(g => g.append('g')
            .selectAll('line')
            .data(xScale.ticks(17))  // Changed from 16 to 17
            .join('line')
            .attr('x1', d => 0.5 + xScale(d))
            .attr('x2', d => 0.5 + xScale(d))
            .attr('y1', 0)
            .attr('y2', height))
          .call(g => g.append('g')
            .selectAll('line')
            .data(yScale.ticks())
            .join('line')
            .attr('y1', d => 0.5 + yScale(d))
            .attr('y2', d => 0.5 + yScale(d))
            .attr('x1', 0)
            .attr('x2', width));

        // Create line generator
        const line = d3.line<GameData>()
          .x(d => xScale(d.Week))
          .y(d => yScale(d[selectedMetric.key as keyof GameData] as number))
          .defined(d => !isNaN(d[selectedMetric.key as keyof GameData] as number))
          .curve(d3.curveMonotoneX);

        // Add lines and dots
        filteredGroupedData.forEach((values, season) => {
          const sortedValues = values.sort((a, b) => a.Week - b.Week);
          
          try {
            // Add line
            const path = svg.append('path')
              .datum(sortedValues)
              .attr('fill', 'none')
              .attr('stroke', '#666666') // Default gray color
              .attr('stroke-width', 3)
              .attr('stroke-linejoin', 'round')
              .attr('stroke-linecap', 'round')
              .attr('d', line)
              .style('opacity', 0.2);

            // Add dots with tooltips
            const dots = svg.selectAll(`circle-${season}`)
              .data(sortedValues)
              .join('circle')
              .attr('cx', d => xScale(d.Week))
              .attr('cy', d => yScale(d[selectedMetric.key as keyof GameData] as number))
              .attr('r', 7)
              .attr('fill', d => d.HomeTeam === 'Nebraska' ? '#666666' : '#333333')
              .attr('stroke', 'white')
              .attr('stroke-width', 1.5)
              .style('opacity', 0.2);

            // Add hover effects
            const highlightLine = () => {
              // Dim all paths and dots
              svg.selectAll('path')
                .style('opacity', 0.2)
                .attr('stroke', '#666666');
              svg.selectAll('circle')
                .style('opacity', 0.2)
                .attr('fill', function(d) {
                  const data = d3.select(this).datum() as GameData;
                  return data.HomeTeam === 'Nebraska' ? '#666666' : '#333333';
                });
              // Highlight this line and its dots
              path
                .style('opacity', 1)
                .attr('stroke', '#E41E3F'); // Husker red
              dots
                .style('opacity', 1)
                .attr('fill', '#E41E3F'); // Husker red
            };

            // Add hover handlers to both line and dots
            path
              .on('mouseover', (event) => {
                highlightLine();
                tooltip
                  .html(`
                    <div class="font-semibold">${season} Season</div>
                  `)
                  .style('left', (event.pageX + 10) + 'px')
                  .style('top', (event.pageY - 10) + 'px')
                  .classed('hidden', false);
              })
              .on('mousemove', (event) => {
                tooltip
                  .style('left', (event.pageX + 10) + 'px')
                  .style('top', (event.pageY - 10) + 'px');
              })
              .on('mouseout', () => {
                tooltip.classed('hidden', true);
              });

            dots
              .on('mouseover', (event, d) => {
                highlightLine();
                console.log('Game data:', d); // Debug log
                
                tooltip
                  .html(`
                    <div class="font-semibold">${selectedMetric.label}: ${selectedMetric.format(d[selectedMetric.key as keyof GameData] as number)}</div>
                    <div class="font-semibold">${d.Season} Week ${d.Week}</div>
                    <div>${d.HomeTeam} ${d.HomePoints} - ${d.AwayPoints} ${d.AwayTeam}</div>
                    <div class="text-xs text-gray-300 mt-1">${d.HomeTeam} (Home) vs ${d.AwayTeam} (Away)</div>
                  `)
                  .style('left', (event.pageX + 10) + 'px')
                  .style('top', (event.pageY - 10) + 'px')
                  .classed('hidden', false);
              })
              .on('mousemove', (event) => {
                tooltip
                  .style('left', (event.pageX + 10) + 'px')
                  .style('top', (event.pageY - 10) + 'px');
              })
              .on('mouseout', () => {
                tooltip.classed('hidden', true);
              });

          } catch (error) {
            console.error(`Error rendering season ${season}:`, error);
          }
        });

        // Add mouseout handler to the entire chart area to reset all lines
        svg.on('mouseout', () => {
          svg.selectAll('path').style('opacity', 0.2);
          svg.selectAll('circle').style('opacity', 0.2);
        });

        // Cleanup function
        return () => {
          tooltip.remove();
        };
      } catch (error) {
        console.error('Error creating chart:', error);
      }
    };

    fetchData();
  }, [selectedMetric]); // Re-run when metric changes

  return (
    <div className="w-full">
      <div className="mb-4">
        <select 
          value={selectedMetric.key} 
          onChange={(e) => setSelectedMetric(METRICS.find(m => m.key === e.target.value) || METRICS[0])}
          className="block w-full max-w-xs px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          {METRICS.map((metric) => (
            <option key={metric.key} value={metric.key}>
              {metric.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <svg ref={svgRef} className="w-full" style={{ minHeight: '500px' }}></svg>
      </div>
    </div>
  );
} 