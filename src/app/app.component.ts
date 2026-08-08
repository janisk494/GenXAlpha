import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { CoreDiagramComponent } from './core-diagram/core-diagram.component';
import { FlowDiagramComponent } from './flow-diagram/flow-diagram.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

interface Capability {
  code: string;
  name: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
}

interface Stat {
  value: string;
  label: string;
  color: string;
}

interface TechRow {
  category: string;
  items: string[];
  color: string;
}

interface Stage {
  step: string;
  label: string;
  color: string;
}

interface Industry {
  code: string;
  name: string;
  color: string;
}

@Component({
  selector: 'gx-root',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, CoreDiagramComponent, FlowDiagramComponent, SlideshowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly capabilities: Capability[] = [
    {
      code: 'S/4',
      name: 'SAP digital transformation',
      description: 'End-to-end SAP S/4HANA and RISE programs — from business case to run.',
      tags: ['S/4HANA', 'Clean core'],
      color: 'var(--c-blue-dark)',
      image: 'assets/capabilities/s4.jpg'
    },
    {
      code: 'AI',
      name: 'AI solutions and automation',
      description: 'Copilots, agentic automation, and intelligent workflows built into daily operations.',
      tags: ['Agents', 'Copilots'],
      color: 'var(--c-orange-dark)',
      image: 'assets/capabilities/ai.jpg'
    },
    {
      code: 'DI',
      name: 'Data, analytics and integration',
      description: 'Trusted data, real-time integration, and analytics that decisions can run on.',
      tags: ['Data', 'Integration'],
      color: 'var(--c-aqua-dark)',
      image: 'assets/capabilities/di.jpg'
    },
    {
      code: 'DE',
      name: 'Digital engineering',
      description: 'Cloud-native platforms and modern engineering practices, built to evolve.',
      tags: ['Cloud-native', 'Platforms'],
      color: 'var(--c-yellow-dark)',
      image: 'assets/capabilities/de.jpg'
    },
    {
      code: 'CCR',
      name: 'Cloud and cyber resilience',
      description: 'Secure-by-design cloud foundations that hold up under real-world risk.',
      tags: ['Security', 'Resilience'],
      color: 'var(--c-magenta-dark)',
      image: 'assets/capabilities/ccr.jpg'
    },
    {
      code: 'SCA',
      name: 'Strategy, change and adoption',
      description: 'Operating model, governance, and change work that makes transformation stick.',
      tags: ['Change', 'Adoption'],
      color: 'var(--c-violet-dark)',
      image: 'assets/capabilities/sca.jpg'
    }
  ];

  readonly glanceStats: Stat[] = [
    { value: '6', label: 'Consulting practices', color: 'var(--c-blue)' },
    { value: '4', label: 'SAP transformation stages', color: 'var(--c-violet)' },
    { value: '4', label: 'Enterprise pillars', color: 'var(--c-orange)' },
    { value: '1', label: 'Connected architecture', color: 'var(--c-red)' }
  ];

  readonly techStack: TechRow[] = [
    { category: 'Enterprise core', items: ['SAP S/4HANA', 'RISE with SAP', 'SAP BTP', 'Port'], color: 'var(--c-blue)' },
    { category: 'AI & data', items: ['SAP Joule', 'Azure AI', 'OpenAI', 'Databricks'], color: 'var(--c-orange)' },
    { category: 'Cloud & engineering', items: ['Azure', 'AWS', 'Google Cloud', 'Kubernetes'], color: 'var(--c-aqua)' },
    { category: 'Integration & automation', items: ['SAP Integration Suite', 'APIs', 'Events', 'Process automation'], color: 'var(--c-violet)' }
  ];

  readonly deliveryStages: Stage[] = [
    { step: '01', label: 'Readiness & value case', color: 'var(--c-blue-dark)' },
    { step: '02', label: 'Target architecture', color: 'var(--c-aqua-dark)' },
    { step: '03', label: 'S/4HANA delivery', color: 'var(--c-orange-dark)' },
    { step: '04', label: 'AI-enabled enterprise', color: 'var(--c-violet-dark)' }
  ];

  readonly industries: Industry[] = [
    { code: 'fin', name: 'Financial Services', color: 'var(--c-blue)' },
    { code: 'mfg', name: 'Manufacturing', color: 'var(--c-orange)' },
    { code: 'retail', name: 'Retail & Consumer Goods', color: 'var(--c-aqua)' },
    { code: 'health', name: 'Healthcare & Life Sciences', color: 'var(--c-yellow)' },
    { code: 'energy', name: 'Energy & Utilities', color: 'var(--c-magenta)' },
    { code: 'logistics', name: 'Logistics & Transportation', color: 'var(--c-violet)' },
    { code: 'telecom', name: 'Telecommunications', color: 'var(--c-red)' },
    { code: 'public', name: 'Public Sector', color: 'var(--c-blue)' }
  ];

  year = new Date().getFullYear();

  activeDetail: Capability | null = null;

  openDetail(c: Capability): void {
    this.activeDetail = c;
  }

  closeDetail(): void {
    this.activeDetail = null;
  }
}
