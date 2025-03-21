'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface TeamData {
  name: string;
  conference?: string;
  division?: string;
  children?: TeamData[];
  _children?: TeamData[];
}

interface ExtendedNode extends d3.HierarchyNode<TeamData> {
  x0?: number;
  y0?: number;
}

// Creates a curved (diagonal) path from parent to the child nodes
const diagonal = (s: { x: number; y: number }, d: { x: number; y: number }) => {
  return `M ${s.y} ${s.x}
          C ${(s.y + d.y) / 2} ${s.x},
            ${(s.y + d.y) / 2} ${d.x},
            ${d.y} ${d.x}`;
};

// Function to update the visualization
const updateTree = (source: ExtendedNode, svg: d3.Selection<SVGGElement, unknown, null, undefined>, treeLayout: d3.TreeLayout<TeamData>, root: ExtendedNode, i: number) => {
  // Compute the new tree layout.
  const nodes = treeLayout(root);

  // Normalize for fixed-depth.
  nodes.descendants().forEach((d: any) => { 
    d.y = d.depth * 220; // Increase horizontal spacing between levels
  });

  // Update the nodes...
  const node = svg.selectAll('g.node')
    .data(nodes.descendants(), (d: any) => d.id || (d.id = ++i));

  // Enter any new nodes at the parent's previous position.
  const nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    .attr('transform', `translate(${source.y0 || 0},${source.x0 || 0})`)
    .on('click', (event: any, d: any) => {
      // Toggle children on click.
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      updateTree(d, svg, treeLayout, root, i);
    });

  // Add Circle for the nodes
  nodeEnter.append('circle')
    .attr('r', 1e-6)
    .style('fill', (d: any) => d._children ? '#555' : '#fff')
    .style('stroke', '#555')
    .style('stroke-width', 1.5);

  // Add labels for the nodes
  nodeEnter.append('text')
    .attr('dy', '.35em')
    .attr('x', (d: any) => d.depth === 0 ? -13 : d.depth === 1 ? -13 : 13)
    .attr('text-anchor', (d: any) => d.depth === 0 ? 'end' : d.depth === 1 ? 'end' : 'start')
    .text((d: any) => d.data.name)
    .style('font-size', '12px')
    .style('fill', '#333');

  // UPDATE
  const nodeUpdate = nodeEnter.merge(node as any);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(750)
    .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

  // Update the node attributes and style
  nodeUpdate.select('circle')
    .attr('r', (d: any) => d.depth === 0 ? 6 : d.depth === 1 ? 4 : 3)
    .style('fill', (d: any) => d._children ? '#555' : '#fff')
    .style('stroke', '#555')
    .style('stroke-width', 1.5)
    .attr('cursor', 'pointer');

  // Remove any exiting nodes
  const nodeExit = node.exit().transition()
    .duration(750)
    .attr('transform', `translate(${source.y},${source.x})`)
    .remove();

  nodeExit.select('circle')
    .attr('r', 1e-6);

  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // Update the links...
  const link = svg.selectAll('path.link')
    .data(nodes.links(), (d: any) => d.target.id);

  // Enter any new links at the parent's previous position.
  const linkEnter = link.enter().insert('path', 'g')
    .attr('class', 'link')
    .attr('d', (d: any) => {
      const o = {
        x: source.x0 !== undefined ? source.x0 : 0,
        y: source.y0 !== undefined ? source.y0 : 0
      };
      return diagonal(o, o);
    })
    .style('fill', 'none')
    .style('stroke', '#ccc')
    .style('stroke-width', 1.5);

  // UPDATE
  link.merge(linkEnter as any)
    .transition()
    .duration(750)
    .attr('d', (d: any) => diagonal(d.source, d.target));

  // Remove any exiting links
  link.exit().transition()
    .duration(750)
    .attr('d', (d: any) => {
      const o = {
        x: typeof source.x === 'number' ? source.x : 0,
        y: typeof source.y === 'number' ? source.y : 0
      };
      return diagonal(o, o);
    })
    .remove();

  // Store the old positions for transition.
  nodes.descendants().forEach((d: any) => {
    d.x0 = d.x;
    d.y0 = d.y;
  });
};

// Function to collapse node
const collapse = (d: any) => {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
};

export default function BasketballClusterTree() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch team data
        const response = await fetch('/data/Sports/Sports - BasketballNCAA.csv');
        if (!response.ok) {
          throw new Error(`Failed to fetch team data: ${response.statusText}`);
        }
        const csvText = await response.text();
        const data = d3.csvParse(csvText);

        // Group all schools by conference
        const conferences = d3.group(data, d => d.Conference);
        const root: TeamData = {
          name: 'NCAA Basketball',
          children: Array.from(conferences).map(([conference, teams]) => ({
            name: conference,
            conference: conference,
            division: teams[0].Division,
            children: teams.map(team => ({
              name: team.School,
              conference: conference,
              division: team.Division
            }))
          }))
        };

        if (!svgRef.current) {
          console.error('SVG ref not available');
          return;
        }

        // Clear any existing content
        d3.select(svgRef.current).selectAll('*').remove();

        // Get container width
        const containerWidth = svgRef.current.parentElement?.clientWidth || 900;

        // Set dimensions
        const margin = { top: 10, right: 120, bottom: 10, left: 120 };
        const width = containerWidth - margin.left - margin.right;
        const height = 1200 - margin.top - margin.bottom;

        // Create SVG
        const svg = d3.select(svgRef.current)
          .attr('width', '100%')
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

        // Create tree layout
        const treeLayout = d3.tree<TeamData>()
          .size([height, width - 160])
          .separation((a: any, b: any) => (a.parent === b.parent ? 2 : 3));

        // Create root node
        const root_node = d3.hierarchy(root) as ExtendedNode;
        root_node.x0 = height / 2;
        root_node.y0 = 0;

        // Collapse all nodes except root
        root_node.children?.forEach(collapse);

        let i = 0; // Used to generate unique IDs
        updateTree(root_node, svg, treeLayout, root_node, i);

      } catch (error) {
        console.error('Error creating visualization:', error);
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