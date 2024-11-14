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
            Wow! Thank You!
          </button>
        </div>
      </div>
    </>
  );
}

export default function TPFBA() {
  const [selectedItem, setSelectedItem] = useState<ResourceItem | null>(null);

  const treatmentPlanning: ResourceItem[] = [
    {
      title: "Target Behavior Section",
      content: "Essential high-risk behaviors impeding overall quality of life. General broad terms will not assist with getting the client services such as Poor impulse control, poor social skills, or inattention. Generally there are 3 targets in this section. 2 may put approval in danger and is often difficult to justify when requesting BC-20 per month and RBT-120 per month"
    },
    {
      title: "Reduction Goals",
      content: "These goals are designated specifically for the reducing of the high-risk or targeted behaviors. For example, tracking the frequency of physical aggression, elopement, self-injurious with reduction in mind."
    },
    {
      title: "Replacement Goals",
      content: "Goals that are Specific, Measurable, Achievable, Relevant, Time-bound for each target behavior, including short-term and long-term objectives. What are you going to replace the target behavior with?"
    },
    {
      title: "Skill Aquisition goals",
      content: "Goals that are Specific, Measurable, Achievable, Relevant, Time-bound for each target behavior, including short-term and long-term objectives. What are you going to replace the target behavior with?."
    },
    {
      title: "Assessment Goals",
      content: "Goals that are Specific, Measurable, Achievable, Relevant, Time-bound based off the assessment you used. VB-MAPP has domains that require demonstration, Socially Savvy has domains of socially related skills that can also be achievable as well as AFLS - Assessment fo Functional Living Skills. In this section don't forget to score and paste the relevant scoring sheets onto the treatment plan in the assessment section. "
    },
    {
      title: "Group Goals",
      content: "Group Social Goals that are Specific, Measurable, Achievable, Relevant, Time-bound for areas of social deficits, including short-term and long-term objectives. What are you going to work on while the client is in a group social setting?"
    },
    {
      title: "Measurable & Acheivable STOs & LTOs for Graphing",
      content: "Objectives need a met date. They cannot be tracked for 6 months and not have any indication that the client has met or exceeded the expectations. The best practice is using the graphs to determine when the objectives have been met and indicating those dates in the required fields"
    },
    {
      title: "Interventions",
      content: "These set of interventions go right below the STOS and LTOS of each goal. It is outlined in a 2x2 grid that lists interventions and who will be responsible for the interventions - BC & RBT. Refer to Interventions page"
    },
    {
      title: "Family Training Goals",
      content: "Strategies for skills transfer & generalization in the home environment. Remeber that 2 sessions per month with family to facilitate. These goals can be simple for caregivers such as - Caregiver will use reinforcement techniques 3x per day - ."
    },
    {
      title: "STO and LTO Format for Measurability",
      content: "STO1 - Client will do something 3xs per day across 3 consecutive sessions. STO2 - Client will do something 3xs per day across 5 consecutive sessions. STO 3 - Client will do something 5xs per day across 3 consecutive sessions. LTO - Client will do something 5xs per day across 5 consecutive sessions."
    }
  ];

  const fbaItems: ResourceItem[] = [
    {
      title: "Indirect Assessment",
      content: "Interviews with caregivers, teachers, and other relevant parties. Review of records, previous assessments, and historical data."
    },
    {
      title: "Direct Observation",
      content: "Systematic observation procedures, including ABC data collection, scatter plots, and duration recording."
    },
    {
      title: "Functional Analysis",
      content: "Controlled manipulation of variables to identify behavior function, including procedures for attention, escape, tangible, and automatic conditions."
    },
    {
      title: "Environmental Analysis",
      content: "Assessment of physical environment, daily routines, and ecological factors that may influence behavior."
    },
    {
      title: "Skill Assessment",
      content: "Evaluation of current skills, including communication, social, adaptive, and academic abilities."
    },
    {
      title: "Preference Assessment",
      content: "Systematic evaluation of potential reinforcers, including procedures for identifying and maintaining motivation."
    },
    {
      title: "Data Analysis",
      content: "Methods for analyzing and interpreting assessment data, including visual analysis and statistical procedures."
    },
    {
      title: "Hypothesis Development",
      content: "Process for developing and testing hypotheses about behavior function based on assessment data."
    },
    {
      title: "Recommendations",
      content: "Development of function-based intervention recommendations, including environmental modifications and teaching strategies."
    },
    {
      title: "Report Writing",
      content: "Guidelines for writing comprehensive FBA reports, including all essential components and recommendations."
    }
  ];

  const typographyLibrary: ResourceItem[] = [
    {
      title: "Aggression",
      content: "Physical actions directed towards others that may cause harm, including hitting, kicking, biting, scratching, or pushing."
    },
    {
      title: "Self-Injury",
      content: "Behaviors that cause physical harm to oneself, such as head-banging, self-biting, or skin-picking."
    },
    {
      title: "Property Destruction",
      content: "Actions that damage or destroy objects in the environment, including throwing items, breaking objects, or tearing materials."
    },
    {
      title: "Elopement",
      content: "Leaving designated areas without permission or supervision, potentially placing oneself in danger. Also, running to nearby exits to leave the area/vicinity or gradually decreasing proximity within the designated area/group/table and some instances of crawling under tables or standing behind walls to decrease visibility ."
    },
    {
      title: "Stereotypy",
      content: "Repetitive movements or vocalizations that appear to serve no functional purpose in the current context."
    },
    {
      title: "Non-Compliance",
      content: "Failure to follow instructions or complete tasks within a reasonable timeframe after being asked."
    },
    {
      title: "Tantrums",
      content: "Emotional outbursts characterized by crying, screaming, falling to the ground, or other disruptive behaviors."
    },
    {
      title: "Food Refusal",
      content: "Consistent rejection of food items, including spitting out food, turning head away, or refusing to eat certain textures."
    },
    {
      title: "Verbal Aggression",
      content: "Use of threatening, hostile, or inappropriate language towards others, including yelling, cursing, or name-calling."
    },
    {
      title: "Social Withdrawal",
      content: "Avoiding social interactions, refusing to participate in group activities, or isolating oneself from others."
    },
    {
      title: "Task Refusal",
      content: "Instances of verbalizing “no” when given tasks or instructions, pushing away or physically blocking materials/items necessary for the completion of tasks, engaging in off-task behaviors (e.g., staring at the wall, commenting on the environment), or seeking access to restricted items, or refusing to move or moving in an opposite direction."
    },
    {
      title: "Add New Typography Here 2",
      content: "Add info here."
    },
    {
      title: "Add New Typography Here 3",
      content: "Add info here."
    },
    {
      title: "Add New Typography Here 4",
      content: "Add info here."
    },
    {
      title: "Add New Typography Here 5",
      content: "Add info here."
    },
    {
      title: "Add New Typography Here 6",
      content: "Add info here."
    },
    {
      title: "Add New Typography Here 7",
      content: "Add info here."
    },
    
  ];

  const Section = ({ title, subtitle, items }: { title: string; subtitle: string; items: ResourceItem[] }) => (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mt-1 text-gray-600">{subtitle}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.button
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
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
          <h1 className="text-3xl font-bold text-gray-900">Treatment Plans & FBA</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Section
            title="Treatment Planning"
            subtitle="Guidelines and Templates for creating effective treatment plans"
            items={treatmentPlanning}
          />
          <Section
            title="Functional Behavior Assessment"
            subtitle="Tools and procedures for conducting comprehensive FBAs"
            items={fbaItems}
          />
          <Section
            title="Typography Library"
            subtitle="Common types of maladaptive behaviors in ABA"
            items={typographyLibrary}
          />
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