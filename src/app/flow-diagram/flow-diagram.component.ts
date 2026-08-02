import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface FlowNode {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  color: string;
}

interface FlowLink {
  from: string;
  to: string;
  color: string;
  width: number;
}

@Component({
  selector: 'gx-flow-diagram',
  standalone: true,
  imports: [NgFor],
  templateUrl: './flow-diagram.component.html',
  styleUrl: './flow-diagram.component.css'
})
export class FlowDiagramComponent {
  readonly nodes: FlowNode[] = [
    { id: 'sap', x: 20, y: 30, w: 190, h: 46, label: 'SAP / ERP core', color: 'var(--c-blue-dark)' },
    { id: 'data', x: 20, y: 158, w: 190, h: 46, label: 'Data & platforms', color: 'var(--c-aqua-dark)' },
    { id: 'ops', x: 20, y: 286, w: 190, h: 46, label: 'Ops & CRM systems', color: 'var(--c-magenta-dark)' },

    { id: 'core', x: 425, y: 88, w: 210, h: 56, label: 'Clean, composable core', color: 'var(--signal)' },
    { id: 'ai', x: 425, y: 230, w: 210, h: 56, label: 'AI & automation layer', color: 'var(--activate)' },

    { id: 'decisions', x: 850, y: 30, w: 190, h: 46, label: 'Faster decisions', color: 'var(--c-yellow-dark)' },
    { id: 'cost', x: 850, y: 158, w: 190, h: 46, label: 'Lower cost to serve', color: 'var(--c-violet-dark)' },
    { id: 'revenue', x: 850, y: 286, w: 190, h: 46, label: 'New revenue plays', color: 'var(--c-orange-dark)' }
  ];

  readonly links: FlowLink[] = [
    { from: 'sap', to: 'core', color: 'var(--c-blue-dark)', width: 5 },
    { from: 'data', to: 'core', color: 'var(--c-aqua-dark)', width: 4 },
    { from: 'data', to: 'ai', color: 'var(--c-aqua-dark)', width: 3 },
    { from: 'ops', to: 'ai', color: 'var(--c-magenta-dark)', width: 5 },

    { from: 'core', to: 'decisions', color: 'var(--signal)', width: 4 },
    { from: 'core', to: 'cost', color: 'var(--signal)', width: 4 },
    { from: 'ai', to: 'decisions', color: 'var(--activate)', width: 3 },
    { from: 'ai', to: 'revenue', color: 'var(--activate)', width: 5 },
    { from: 'ai', to: 'cost', color: 'var(--activate)', width: 3 }
  ];

  node(id: string): FlowNode {
    return this.nodes.find((n) => n.id === id)!;
  }

  path(link: FlowLink): string {
    const from = this.node(link.from);
    const to = this.node(link.to);
    const x1 = from.x + from.w;
    const y1 = from.y + from.h / 2;
    const x2 = to.x;
    const y2 = to.y + to.h / 2;
    const midX = (x1 + x2) / 2;
    return `M ${x1},${y1} C ${midX},${y1} ${midX},${y2} ${x2},${y2}`;
  }
}
