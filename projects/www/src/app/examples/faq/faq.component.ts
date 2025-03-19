import { Component } from '@angular/core';
import {PROSE_CLASS} from "../../utils/utils";

@Component({
  selector: 'app-faq-example',
  standalone: false,
  templateUrl: './faq.component.html',
  styles: ``
})
export class FaqComponent {

  faqs: {
    question: string;
    answer: string;
  }[] = [
    {
      question: 'What is Dorvak-UI?',
      answer: 'Dorvak-UI is a collection of Angular components that are designed to be easy to use and customizable.'
    },
    {
      question: 'How do I install Dorvak-UI?',
      answer: 'You can install Dorvak-UI by running `npm install dorvak-ui` in your project.'
    },
    {
      question: 'Is Dorvak-UI free to use?',
      answer: 'Yes, Dorvak-UI is open source and free to use.'
    },
    {
      question: 'Can I customize Dorvak-UI components?',
      answer: 'Yes, Dorvak-UI components are designed to be easily customizable using Tailwind CSS.'
    }
  ];

    protected readonly PROSE_CLASS = PROSE_CLASS;
}
