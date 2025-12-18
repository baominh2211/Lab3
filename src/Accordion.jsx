import { useState } from 'react';
import Panel from './Panel';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion">
      <h2>Accordion - Lifted State Example</h2>
      <Panel
        title="About React"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
      >
        <p>
          React is a JavaScript library for building user interfaces. 
          It was developed by Facebook and is maintained by Facebook and 
          a community of individual developers and companies.
        </p>
      </Panel>
      <Panel
        title="Component-Based Architecture"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(activeIndex === 1 ? -1 : 1)}
      >
        <p>
          React applications are built using components - reusable, 
          self-contained pieces of code that define how a section of 
          the UI should appear and behave.
        </p>
      </Panel>
      <Panel
        title="Virtual DOM"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(activeIndex === 2 ? -1 : 2)}
      >
        <p>
          React uses a Virtual DOM to optimize rendering performance. 
          Instead of updating the entire DOM when changes occur, React 
          updates only the parts that have changed.
        </p>
      </Panel>
    </div>
  );
}

export default Accordion;
