'use client'
import { useState } from 'react';

interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hs-accordion ${isOpen ? 'hs-accordion-active:bg-gray-100' : ''} font-oswald rounded-xl p-6`}>
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
        aria-expanded={isOpen}
        aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${id}`}
        onClick={toggleAccordion}
      >
        {title}
        <svg
          className={`hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 ${isOpen ? 'hidden' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className={`hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 ${isOpen ? '' : 'hidden'}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div
        id={`hs-basic-with-title-and-arrow-stretched-collapse-${id}`}
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen ? '' : 'hidden'}`}
        role="region"
        aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${id}`}
      >
        <p className="text-gray-800">{content}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      id: 'one',
      title: 'What is Farmers Market Direct?',
      content: 'We are a specialty online food,grocery store.Our concept is to source products as locally as possible to provide a platform for local farmers and artisans to sell their goods year-round.',
    },
    {
      id: 'two',
      title: 'Why did you start this store?',
      content: 'Our families love to buy local, fresh ingredients, but with our busy schedules, we could never make it out to the Saturday morning farmers markets... so we thought- what if we could provide the same farmers market type products and make them more readily available for families like ours.',
    },
    {
      id: 'three',
      title: 'Can I sell my products through your shop?',
      content: 'We are proud that our vendors receive 66.7% of the retail sales price. We hope that providing this platform and helping out with the business side of things, it will allow farmers and artisans more time to focus on their craft and more opportunity to sell their products.',
    },
  
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Your questions, answered</h2>
        <p className="mt-1 text-gray-600">Answers to the most frequently asked questions.</p>
      </div>
     

      <div className="max-w-2xl mx-auto  border-gray-100 shadow-lg shadow-gray-200 border-2 rounded-lg">
        {/* Accordion */}
        <div className="hs-accordion-group">
          {faqs.map(faq => (
            <AccordionItem key={faq.id} id={faq.id} title={faq.title}  content={faq.content} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default FAQ;
