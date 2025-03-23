import * as d3 from 'd3';

export default function NebraskaFootballChart(container: HTMLElement) {
  // Set up the chart dimensions
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = container.clientWidth - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Create SVG container
  const svg = d3.select(container)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Add title
  svg.append('text')
    .attr('x', width / 2)
    .attr('y', -5)
    .attr('text-anchor', 'middle')
    .style('font-size', '16px')
    .style('font-weight', 'bold')
    .text('Points Scored by Week');

  // Create scales
  const x = d3.scaleLinear()
    .domain([1, 13]) // 13 weeks in a season
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, 70]) // Adjust based on your data
    .range([height, 0]);

  // Add axes
  svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(13))
    .selectAll('text')
    .style('font-size', '12px');

  svg.append('g')
    .call(d3.axisLeft(y).ticks(7))
    .selectAll('text')
    .style('font-size', '12px');

  // Add grid lines
  svg.append('g')
    .attr('class', 'grid')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x)
      .ticks(13)
      .tickSize(-height)
      .tickFormat('')
    )
    .style('stroke-dasharray', '3,3')
    .style('opacity', 0.2);

  svg.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(y)
      .ticks(7)
      .tickSize(-width)
      .tickFormat('')
    )
    .style('stroke-dasharray', '3,3')
    .style('opacity', 0.2);

  // Add line generator
  const line = d3.line<number>()
    .x((d: number, i: number) => x(i + 1))
    .y((d: number) => y(d))
    .curve(d3.curveMonotoneX);

  // Sample data - replace with your actual data
  const data = [35, 42, 28, 45, 31, 38, 42, 35, 28, 45, 38, 42];

  // Add the line
  svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#E41E3F')
    .attr('stroke-width', 2)
    .attr('d', line);

  // Add data points
  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', (d: number, i: number) => x(i + 1))
    .attr('cy', (d: number) => y(d))
    .attr('r', 4)
    .attr('fill', '#E41E3F')
    .attr('stroke', 'white')
    .attr('stroke-width', 2);

  // Add hover effects
  const tooltip = d3.select(container)
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0)
    .style('position', 'absolute')
    .style('background-color', 'white')
    .style('border', '1px solid #ddd')
    .style('border-radius', '4px')
    .style('padding', '8px')
    .style('pointer-events', 'none');

  svg.selectAll('circle')
    .on('mouseover', function(this: Element, event: MouseEvent, d: number) {
      d3.select(this)
        .attr('r', 6)
        .attr('fill', '#E41E3F');
      
      tooltip.transition()
        .duration(200)
        .style('opacity', .9);
      tooltip.html(`Points: ${d}`)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px');
    })
    .on('mouseout', function(this: Element) {
      d3.select(this)
        .attr('r', 4)
        .attr('fill', '#E41E3F');
      
      tooltip.transition()
        .duration(500)
        .style('opacity', 0);
    });
} 