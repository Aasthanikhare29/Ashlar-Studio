import { useState } from 'react';
import Icon from './Icon';
import './FAQAccordion.css';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.question}</span>
            <span className="faq-icon">{open === i ? <Icon name="minus" size={16} /> : <Icon name="plus" size={16} />}</span>
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
