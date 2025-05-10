import { ChevronUp } from 'lucide-react';
import type { ScenarioResult } from '../types';

import { MoreHorizontal } from 'lucide-react';
interface ScenarioCardProps {
  data: ScenarioResult;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ data }) => {
  return (
    <div className="bg-neutral-800/50 border border-[#C9FF3B]/40 rounded-lg p-4 my-2 hover:bg-neutral-800 transition-all duration-200">
      <div className="flex justify-between items-center">
        <p className="text-[#C9FF3B] text-sm">
          The best found configuration based on {data.basedOn} is characterized by {data.zones} zones (max) 
          with charging stations and {data.poles} total number of poles.
        </p>
        <button 
          className="text-[#C9FF3B] hover:text-neutral-300 transition-colors"
          aria-label="More options"
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};


const ScenarioResults: React.FC = () => {
  const scenarios: ScenarioResult[] = [
    {
      id: '1',
      basedOn: 'profit',
      zones: 11,
      stations: 11,
      poles: 48
    },
    {
      id: '2',
      basedOn: 'satisfied demand',
      zones: 11,
      stations: 11,
      poles: 48
    }
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center mb-7">
        <div className="mr-2">
          <span className="h-6 w-6 rounded-full flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7273 0L13.6964 2.25L11.4545 3.27273L13.6964 4.30364L14.7273 6.54545L15.75 4.30364L18 3.27273L15.75 2.25M6.54545 2.45455L4.5 6.95455L0 9L4.5 11.0455L6.54545 15.5455L8.59091 11.0455L13.0909 9L8.59091 6.95455M14.7273 11.4545L13.6964 13.6964L11.4545 14.7273L13.6964 15.75L14.7273 18L15.75 15.75L18 14.7273L15.75 13.6964" fill="#DAFD7F"/>
            </svg>

          </span>
        </div>
        <h2 className="text-2xl text-[#DCFF7FFD] font-semibold">Best Scenario Results</h2>
        <div className="ml-auto">
          <button 
            className="bg-neutral-800/50 hover:bg-neutral-700 text-neutral-300 rounded-full h-8 w-8 flex items-center justify-center transition-colors"
            aria-label="Collapse section"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {scenarios.map((scenario) => (
          <ScenarioCard key={scenario.id} data={scenario} />
        ))}
      </div>
    </section>
  );
};

export default ScenarioResults;