import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ResourceItem {
  title: string;
  content: string;
}

interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

function SimpleModal({ isOpen, onClose, title, content }: SimpleModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-x-4 top-[50%] translate-y-[-50%] max-w-lg mx-auto bg-white rounded-xl shadow-xl z-50 overflow-hidden">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
          <div className="prose prose-sm max-w-none text-gray-600 mb-6">
            {content}
          </div>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            I get it
          </button>
        </div>
      </div>
    </>
  );
}

export default function ABA() {
  const [selectedItem, setSelectedItem] = useState<ResourceItem | null>(null);

  const behavioralPrinciples: ResourceItem[] = [
    {
      title: "Reinforcement",
      content: "A process where a behavior is strengthened by the immediate consequence that follows it. Positive reinforcement adds a pleasant stimulus, while negative reinforcement removes an aversive stimulus."
    },
    {
      title: "Punishment",
      content: "A process where a behavior is weakened by the immediate consequence. Positive punishment adds an aversive stimulus, while negative punishment removes a pleasant stimulus."
    },
    {
      title: "Extinction",
      content: "The process of discontinuing reinforcement of a previously reinforced behavior, which usually leads to a decrease in the behavior's frequency."
    },
    {
      title: "Stimulus Control",
      content: "When an antecedent stimulus increases the probability of a behavior occurring due to a history of reinforcement in the presence of that stimulus."
    },
    {
      title: "Motivating Operations",
      content: "Environmental variables that alter the effectiveness of reinforcers and punishers and modify the frequency of behavior related to those consequences."
    },
    {
      title: "Response Cost",
      content: "A punishment procedure that involves the loss of a specific amount of reinforcer following a behavior."
    },
    {
      title: "Shaping",
      content: "The process of reinforcing successive approximations toward a target behavior."
    },
    {
      title: "Chaining",
      content: "Teaching a sequence of related behaviors that together complete a more complex behavior."
    },
    {
      title: "Extinction Burst",
      content: "A temporary increase in the frequency or intensity of a behavior when reinforcement is initially removed, before the behavior eventually decreases."
    }
  ];

  const assessmentTools: ResourceItem[] = [
    {
      title: "Functional Analysis",
      content: "Systematic manipulation of environmental variables to identify the function of problem behavior."
    },
    {
      title: "Preference Assessment",
      content: "Systematic methods to identify potential reinforcers for an individual."
    },
    {
      title: "ABC Data Collection",
      content: "Recording the Antecedent, Behavior, and Consequence of target behaviors."
    },
    {
      title: "VB-MAPP",
      content: "Verbal Behavior Milestones Assessment and Placement Program - A criterion-referenced assessment tool."
    }
  ];

  const interventionStrategies: ResourceItem[] = [
    {
      title: "Discrete Trial Training",
      content: "A structured teaching format involving clear instruction, prompt if needed, response opportunity, and consequence."
    },
    {
      title: "Natural Environment Teaching",
      content: "Teaching that occurs in the natural environment using naturally occurring reinforcers."
    },
    {
      title: "Token Economy",
      content: "A system where tokens are earned for target behaviors and later exchanged for backup reinforcers."
    },
    {
      title: "Differential Reinforcement",
      content: "Reinforcing one response class while withholding reinforcement for another response class."
    }
  ];

  const GridSection = ({ title, items }: { title: string; items: ResourceItem[] }) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.button
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedItem(item)}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-left"
          >
            <h3 className="font-medium text-gray-900">{item.title}</h3>
          </motion.button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">ABA Resources</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-8">
            <GridSection title="Behavioral Principles" items={behavioralPrinciples} />
            <GridSection title="Assessment Tools" items={assessmentTools} />
            <GridSection title="Intervention Strategies" items={interventionStrategies} />
          </div>
        </div>
      </main>

      <SimpleModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ''}
        content={selectedItem?.content || ''}
      />
    </div>
  );
}