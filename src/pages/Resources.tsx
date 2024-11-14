import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import { FileText, Book, GraduationCap, ClipboardCheck, Users, Target, LineChart, Calendar, BookOpen, FileSpreadsheet, Video, MessageSquare, Lightbulb, Award, Briefcase, HelpCircle } from 'lucide-react';

interface ResourceItem {
  title: string;
  content: string;
  icon: React.ElementType;
  color: string;
  url: string;
}

export default function Resources() {
  const [selectedItem, setSelectedItem] = useState<ResourceItem | null>(null);

  const resources: ResourceItem[] = [
    {
      title: "Assessment Templates",
      content: "Comprehensive collection of assessment templates including FBA forms, preference assessments, and skill tracking sheets. These templates are designed to streamline your documentation process while ensuring thorough data collection.",
      icon: FileText,
      color: "from-blue-400 to-blue-600",
      url: "https://example.com/assessment-templates"
    },
    {
      title: "Best Practices Guide",
      content: "Up-to-date compilation of evidence-based practices in behavioral consultation, including intervention strategies, ethical considerations, and professional guidelines.",
      icon: Book,
      color: "from-purple-400 to-purple-600",
      url: "https://example.com/best-practices"
    },
    {
      title: "CEU Opportunities",
      content: "Curated list of continuing education opportunities, including online courses, workshops, and conferences. Stay current with your professional development requirements.",
      icon: GraduationCap,
      color: "from-green-400 to-green-600",
      url: "https://example.com/ceu"
    },
    {
      title: "Data Collection Tools",
      content: "Digital and printable tools for behavior tracking, including frequency counts, duration recording, and interval recording sheets.",
      icon: ClipboardCheck,
      color: "from-yellow-400 to-yellow-600",
      url: "https://example.com/data-tools"
    },
    {
      title: "Parent Resources",
      content: "Educational materials and guides designed for parents and caregivers, helping them understand and implement behavior intervention strategies at home.",
      icon: Users,
      color: "from-pink-400 to-pink-600",
      url: "https://example.com/parent-resources"
    },
    {
      title: "Goal Setting Guide",
      content: "Framework for developing SMART goals and objectives for behavior intervention plans, including examples and templates.",
      icon: Target,
      color: "from-indigo-400 to-indigo-600",
      url: "https://example.com/goal-setting"
    },
    {
      title: "Progress Monitoring",
      content: "Tools and strategies for tracking intervention effectiveness, including visual analysis templates and decision-making protocols.",
      icon: LineChart,
      color: "from-red-400 to-red-600",
      url: "https://example.com/progress-monitoring"
    },
    {
      title: "Session Planning",
      content: "Templates and guidelines for structuring consultation sessions, including agenda templates and time management strategies.",
      icon: Calendar,
      color: "from-teal-400 to-teal-600",
      url: "https://example.com/session-planning"
    },
    {
      title: "Research Database",
      content: "Access to current research articles and literature reviews relevant to behavioral consultation and intervention.",
      icon: BookOpen,
      color: "from-orange-400 to-orange-600",
      url: "https://example.com/research"
    },
    {
      title: "Report Templates",
      content: "Professional report templates for various assessment types, progress reports, and intervention summaries.",
      icon: FileSpreadsheet,
      color: "from-cyan-400 to-cyan-600",
      url: "https://example.com/report-templates"
    },
    {
      title: "Training Videos",
      content: "Educational videos covering various aspects of behavioral consultation, including demonstration of techniques and case studies.",
      icon: Video,
      color: "from-emerald-400 to-emerald-600",
      url: "https://example.com/training-videos"
    },
    {
      title: "Communication Tools",
      content: "Resources for effective communication with clients, including consultation frameworks and feedback templates.",
      icon: MessageSquare,
      color: "from-violet-400 to-violet-600",
      url: "https://example.com/communication-tools"
    },
    {
      title: "Innovation Hub",
      content: "Latest trends and innovative approaches in behavioral consultation, including technology integration and remote service delivery methods.",
      icon: Lightbulb,
      color: "from-fuchsia-400 to-fuchsia-600",
      url: "https://example.com/innovation"
    },
    {
      title: "Certification Prep",
      content: "Study materials and practice questions for various certification exams in behavioral analysis and consultation.",
      icon: Award,
      color: "from-rose-400 to-rose-600",
      url: "https://example.com/certification"
    },
    {
      title: "Professional Tools",
      content: "Business resources including contract templates, service agreements, and professional practice guidelines.",
      icon: Briefcase,
      color: "from-sky-400 to-sky-600",
      url: "https://example.com/professional-tools"
    },
    {
      title: "FAQ Database",
      content: "Comprehensive database of frequently asked questions and answers about behavioral consultation practices and procedures.",
      icon: HelpCircle,
      color: "from-lime-400 to-lime-600",
      url: "https://example.com/faq"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resources.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 text-left overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-gray-800">
                    {item.title}
                  </h3>
                </motion.button>
              );
            })}
          </div>
        </div>
      </main>

      <Modal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ''}
        content={selectedItem?.content || ''}
        url={selectedItem?.url || ''}
      />
    </div>
  );
}