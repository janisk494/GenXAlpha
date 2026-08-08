import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Slide {
  image: string;
  tag: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'gx-slideshow',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit, OnDestroy {
  readonly slides: Slide[] = [
    {
      image: 'assets/slideshow/slide-city.jpg',
      tag: 'Future world',
      title: 'Enterprises built for the future world',
      desc: 'AI-optimized operations, smart infrastructure, and sustainable growth — designed into the core, not bolted on.'
    },
    {
      image: 'assets/slideshow/slide-collab.jpg',
      tag: 'AI innovation',
      title: 'AI innovation across the whole stack',
      desc: 'From developer workflows to the data center, intelligence is embedded at every layer of delivery.'
    },
    {
      image: 'assets/slideshow/slide-precision.jpg',
      tag: 'Intelligent automation',
      title: 'Precision, powered by AI',
      desc: 'Real-time monitoring, predictive quality, and autonomous optimization applied to enterprise operations.'
    },
    {
      image: 'assets/slideshow/slide-teamwork.jpg',
      tag: 'People + AI',
      title: 'People and AI, building together',
      desc: 'Human expertise amplified by AI insight — stronger decisions, faster delivery, better outcomes.'
    },
    {
      image: 'assets/slideshow/slide-sap.jpg',
      tag: 'ERP AI integration',
      title: 'ERP, reimagined with AI',
      desc: 'SAP S/4HANA and RISE, connected to generative and agentic AI — a digital core that keeps evolving.'
    },
    {
      image: 'assets/slideshow/slide-possibilities.jpg',
      tag: "What's next",
      title: 'More intelligence. More possibilities.',
      desc: 'GenXAlpha unlocks new potential across the enterprise — happier teams, brighter outcomes, greener operations.'
    }
  ];

  active = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  start(): void {
    this.stop();
    this.timer = setInterval(() => this.next(), 5500);
  }

  stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  next(): void {
    this.active = (this.active + 1) % this.slides.length;
  }

  prev(): void {
    this.active = (this.active - 1 + this.slides.length) % this.slides.length;
  }

  goTo(i: number): void {
    this.active = i;
    this.start();
  }
}
