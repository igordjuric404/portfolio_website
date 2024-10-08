'use client';
import React, { useState, useRef, useEffect } from 'react';
import '../CollapsibleTimeline.css'; 
import { IconPlus, IconMinus } from '@tabler/icons-react';


const CollapsibleTimeline: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const timelineItems = [
    {
      id: 1,
      date: '2021-10-01',
      displayDate: '2021 - 2024',
      title: 'Računarski fakultet',
      content: (
        <p className="timeline__item-p">
          Completed my studies of information technologies with a focus on software development and web technologies.
        </p>
      ),
    },
    {
      id: 2,
      date: '2023-8-15',
      displayDate: 'Aug. 2023 ‑ Jan. 2024',
      title: 'Serbian Judicial Academy',
      content: (
        <p className="timeline__item-p">
          Collaborated on a web application for managing a database of judicial practices from the European Court of Human Rights, enabling judges to efficiently search, filter, add, and edit court sentences relevant to Serbian law.
        </p>
      ),
    },
    {
      id: 3,
      date: '2023-11-15',
      displayDate: 'Oct. 2023 ‑ Mar. 2024',
      title: 'Serbian Judicial Academy',
      content: (
        <p className="timeline__item-p">
          Created responsive web interfaces using HTML and CSS based on design mockups, ensuring a smooth user experience across various devices, while implementing small features and fixing JavaScript bugs.
        </p>
      ),
    },
    {
      id: 4,
      date: '2023-12-13',
      displayDate: 'Dec. 2023 ‑ May 2024',
      title: 'Register of National Internet Domains of Serbia',
      content: (
        <p className="timeline__item-p">
          Collaborated with two colleagues to develop a web application that was accepted as the official solution and later implemented. Led the research to identify project requirements, allocated tasks to the team, helped with database modeling and backend issues.
        </p>
      ),
    },
    {
      id: 5,
      date: '2023-10-18',
      displayDate: 'Oct. 2023 - Jan. 2024',
      title: 'Coinsnap',
      content: (
        <p className="timeline__item-p">
          As a freelance UI developer, I focused on creating responsive web interfaces that adhered to design mockups, utilizing HTML and CSS to ensure a seamless user experience across various devices and screen sizes. My work aimed to align closely with client specifications while prioritizing usability and aesthetic appeal.
        </p>
      ),
    }
    
  ];

  const handleItemClick = (id: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setExpandedItems((prev) => {
      const isCurrentlyExpanded = prev[id];
      return { ...prev, [id]: !isCurrentlyExpanded };
    });

    // Allow transition before finishing
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const expandAll = () => {
    const newExpanded = timelineItems.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as { [key: number]: boolean });

    setExpandedItems(newExpanded);
  };

  const collapseAll = () => {
    const newExpanded = timelineItems.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {} as { [key: number]: boolean });

    setExpandedItems(newExpanded);
  };

  useEffect(() => {
    timelineItems.forEach((item) => {
      const contentEl = contentRefs.current[item.id];
      if (contentEl) {
        if (expandedItems[item.id]) {
          contentEl.style.height = `${contentEl.scrollHeight}px`;
          contentEl.style.opacity = '1';
          contentEl.style.visibility = 'visible';
        } else {
          // Collapse
          contentEl.style.height = '0px';
          contentEl.style.opacity = '0';
          contentEl.style.visibility = 'hidden';
        }
      }
    });
  }, [expandedItems, timelineItems]);
  
  

  return (
    <>
      {/* SVG and Header */}
      <svg style={{ display: 'none' }}>
        <symbol id="arrow">
          <polyline
            points="7 10,12 15,17 10"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </symbol>
      </svg>
      <div id="timeline" className="timeline">
        <div className="btn-group">
          <button className="btn" type="button" onClick={expandAll}>
            <IconPlus/>
          </button>
          <button className="btn" type="button" onClick={collapseAll}>
            <IconMinus/>
          </button>
        </div>
        {timelineItems.map((item) => (
          <div className="timeline__item monument" key={item.id}>
            <div className="timeline__item-header">
              <button
                className="timeline__arrow"
                type="button"
                id={`item${item.id}`}
                aria-labelledby={`item${item.id}-name`}
                aria-expanded={expandedItems[item.id] ? 'true' : 'false'}
                aria-controls={`item${item.id}-ctrld`}
                aria-haspopup="true"
                data-item={item.id}
                onClick={() => handleItemClick(item.id)}
              >
                <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                  <use href="#arrow" />
                </svg>
              </button>
              <span className="timeline__dot"></span>
              <span id={`item${item.id}-name`} className="timeline__meta">
                <time className="timeline__date" dateTime={item.date}>
                  {item.displayDate}
                </time>
                <br />
                <strong className="timeline__title">{item.title}</strong>
              </span>
            </div>
            <div
              className={`timeline__item-body ${expandedItems[item.id] ? 'timeline__item-body--expanded' : ''}`}
              id={`item${item.id}-ctrld`}
              role="region"
              aria-labelledby={`item${item.id}`}
              aria-hidden={!expandedItems[item.id]}
              ref={(el) => (contentRefs.current[item.id] = el)}
            >
              <div className="timeline__item-body-content dark:bg-neutral-800">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollapsibleTimeline;
