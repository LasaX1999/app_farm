'use client';
import { useState } from 'react';

interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(prevState => !prevState);

  return (
    <div className="hs-accordion font-oswald rounded-xl p-6 border-b last:border-none">
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`hs-basic-collapse-${id}`}
        onClick={toggleAccordion}
      >
        {title}
        <svg
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } w-5 h-5 text-gray-600 group-hover:text-gray-500`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        id={`hs-basic-collapse-${id}`}
        className={`hs-accordion-content overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="region"
        aria-labelledby={`hs-basic-heading-${id}`}
      >
        <p className="text-gray-800 mt-2">{content}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      id: 'one',
      title: 'What is Farmers Market Direct?',
      content:
        'We are a specialty online food, grocery store. Our concept is to source products as locally as possible to provide a platform for local farmers and artisans to sell their goods year-round.',
    },
    {
      id: 'two',
      title: 'Why did you start this store?',
      content:
        'Our families love to buy local, fresh ingredients, but with our busy schedules, we could never make it out to the Saturday morning farmers markets... so we thought- what if we could provide the same farmers market type products and make them more readily available for families like ours.',
    },
    {
      id: 'three',
      title: 'Can I sell my products through your shop?',
      content:
        'We are proud that our vendors receive 100% of the retail sales price. We hope that providing this platform and helping out with the business side of things, it will allow farmers and artisans more time to focus on their craft and more opportunity to sell their products.',
    },
  ];

  return (
    <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Your questions, answered
        </h2>
        <p className="mt-1 text-gray-600">
          Answers to the most frequently asked questions.
        </p>
      </div>
      <div className="max-w-2xl mx-auto border-gray-100 shadow-lg border-2 rounded-lg">
        <div className="hs-accordion-group">
          {faqs.map(faq => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              title={faq.title}
              content={faq.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
