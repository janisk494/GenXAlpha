import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

interface OrbitNode {
  code: string;
  angle: number;
  color: string;
}

@Component({
  selector: 'gx-core-diagram',
  standalone: true,
  imports: [NgFor],
  templateUrl: './core-diagram.component.html',
  styleUrl: './core-diagram.component.css'
})
export class CoreDiagramComponent {
  @Input() animated = true;

  readonly nodes: OrbitNode[] = [
    { code: 'SAP', angle: 0, color: 'var(--c-blue-dark)' },
    { code: 'AI', angle: 60, color: 'var(--c-orange-dark)' },
    { code: 'DAI', angle: 120, color: 'var(--c-aqua-dark)' },
    { code: 'DE', angle: 180, color: 'var(--c-yellow-dark)' },
    { code: 'CCR', angle: 240, color: 'var(--c-magenta-dark)' },
    { code: 'SCA', angle: 300, color: 'var(--c-violet-dark)' }
  ];

  readonly radius = 130;
  readonly center = 160;

  x(angle: number): number {
    return this.center + this.radius * Math.cos((angle * Math.PI) / 180);
  }

  y(angle: number): number {
    return this.center + this.radius * Math.sin((angle * Math.PI) / 180);
  }
}
