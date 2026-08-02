import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CoreDiagramComponent } from './core-diagram/core-diagram.component';
import { FlowDiagramComponent } from './flow-diagram/flow-diagram.component';

interface Capability {
  code: string;
  name: string;
  description: string;
  tags: string[];
  color: string;
}

interface Insight {
  tag: string;
  title: string;
  color: string;
}

interface Stat {
  value: string;
  label: string;
  color: string;
}

interface TechRow {
  category: string;
  items: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

interface Stage {
  step: string;
  label: string;
  color: string;
}

@Component({
  selector: 'gx-root',
  standalone: true,
  imports: [NgFor, NgIf, CoreDiagramComponent, FlowDiagramComponent],
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
      color: 'var(--c-blue)'
    },
    {
      code: 'AI',
      name: 'AI solutions and automation',
      description: 'Copilots, agentic automation, and intelligent workflows built into daily operations.',
      tags: ['Agents', 'Copilots'],
      color: 'var(--c-orange)'
    },
    {
      code: 'DI',
      name: 'Data, analytics and integration',
      description: 'Trusted data, real-time integration, and analytics that decisions can run on.',
      tags: ['Data', 'Integration'],
      color: 'var(--c-aqua)'
    },
    {
      code: 'DE',
      name: 'Digital engineering',
      description: 'Cloud-native platforms and modern engineering practices, built to evolve.',
      tags: ['Cloud-native', 'Platforms'],
      color: 'var(--c-yellow)'
    },
    {
      code: 'CCR',
      name: 'Cloud and cyber resilience',
      description: 'Secure-by-design cloud foundations that hold up under real-world risk.',
      tags: ['Security', 'Resilience'],
      color: 'var(--c-magenta)'
    },
    {
      code: 'SCA',
      name: 'Strategy, change and adoption',
      description: 'Operating model, governance, and change work that makes transformation stick.',
      tags: ['Change', 'Adoption'],
      color: 'var(--c-violet)'
    }
  ];

  readonly glanceStats: Stat[] = [
    { value: '6', label: 'Consulting practices', color: 'var(--c-blue)' },
    { value: '4', label: 'SAP transformation stages', color: 'var(--c-violet)' },
    { value: '4', label: 'Enterprise pillars', color: 'var(--c-orange)' },
    { value: '1', label: 'Connected architecture', color: 'var(--c-red)' }
  ];

  readonly techStack: TechRow[] = [
    { category: 'Enterprise core', items: ['SAP S/4HANA', 'RISE with SAP', 'SAP BTP', 'Port'] },
    { category: 'AI & data', items: ['SAP Joule', 'Azure AI', 'OpenAI', 'Databricks'] },
    { category: 'Cloud & engineering', items: ['Azure', 'AWS', 'Google Cloud', 'Kubernetes'] },
    { category: 'Integration & automation', items: ['SAP Integration Suite', 'APIs', 'Events', 'Process automation'] }
  ];

  readonly deliveryStages: Stage[] = [
    { step: '01', label: 'Readiness & value case', color: 'var(--c-blue-dark)' },
    { step: '02', label: 'Target architecture', color: 'var(--c-aqua-dark)' },
    { step: '03', label: 'S/4HANA delivery', color: 'var(--c-orange-dark)' },
    { step: '04', label: 'AI-enabled enterprise', color: 'var(--c-violet-dark)' }
  ];

  readonly faqs: FaqItem[] = [
    {
      q: 'Do you work only on SAP programs?',
      a: 'No. SAP is core to our practice, but we lead AI, data, cloud engineering, and change work as standalone engagements too — most clients combine several.'
    },
    {
      q: 'Can you support both strategy and delivery?',
      a: 'Yes. The same team that shapes the roadmap stays through architecture, build, and adoption — so decisions made early stay accountable through delivery.'
    },
    {
      q: 'How do you begin an engagement?',
      a: 'With a short discovery on what matters most right now — current landscape, constraints, and the outcome you need first — before scoping the wider program.'
    }
  ];

  readonly insights: Insight[] = [
    { tag: 'Clean core', title: 'Clean core is a business discipline, not just a technical rule', color: 'var(--c-blue)' },
    { tag: 'Automation', title: 'From copilots to agents: choosing the right automation pattern', color: 'var(--c-orange)' },
    { tag: 'AI strategy', title: 'Why enterprise context is the missing layer in your AI roadmap', color: 'var(--c-aqua)' }
  ];

  year = new Date().getFullYear();
}
