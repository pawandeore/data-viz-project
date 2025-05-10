
import { Plus, Info } from 'lucide-react';

export interface KPIData {
  title: string;
  value: string | number;
  description: string;
  icon?: string;
}


interface KPICardProps {
  data: KPIData;
}

const Card: React.FC<KPICardProps> = ({ data }) => {
  return (
    <div className="bg-card border border-neutral-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/50 h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-white text-lg font-medium">{data.title}</h3>
        <button 
          className="text-neutral-400 hover:text-neutral-200 transition-colors"
          aria-label="More information"
        >
          <Info className="h-5 w-5" />
        </button>
      </div>
      
      <div className="mb-3">
        <p className="text-neutral-400 text-sm">{data.description}</p>
      </div>
      
      <div className="mt-8 text-right">
        <p className="text-4xl font-bold text-white">{data.value}</p>
      </div>
    </div>
  );
};


const StatsCard: React.FC = () => {
  const kpiData: KPIData[] = [
    {
      title: 'Infrastructure Units',
      value: '€421.07',
      description: 'This describes variable two and what the shown data means.'
    },
    {
      title: 'Charging Growth',
      value: '33.07',
      description: 'This describes variable two and what the shown data means.'
    },
    {
      title: 'Localization change',
      value: '21.9%',
      description: 'This describes variable two and what the shown data means.'
    },
    {
      title: 'Fleet growth',
      value: '7.03%',
      description: 'This describes variable two and what the shown data means.'
    }
  ];

  return (
    <div className='space-y-5 mb-8'>
      <div className="flex justify-between items-center mb-4">
        <h2 className='text-2xl font-semibold'>Key Performance Indicators</h2>
        <div className="flex items-center bg-neutral-800 border border-neutral-600 hover:bg-neutral-700 rounded-md py-2 px-4">
          <span className="text-sm text-neutral-300 mr-2">Variables</span>
          <button 
            aria-label="Add variable"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[27rem]">
        {kpiData.map((kpi, index) => (
          <Card key={index} data={kpi} />
        ))}
      </div>
    </div>
  );
};

export default StatsCard;