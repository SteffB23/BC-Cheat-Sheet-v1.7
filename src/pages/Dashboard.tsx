import { motion } from 'framer-motion';
import { Brain, ClipboardList, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const cards = [
    {
      title: 'ABA Resources',
      description: 'Access behavioral analysis tools and guidelines',
      icon: Brain,
      to: '/aba',
      color: 'bg-blue-500',
    },
    {
      title: 'TP/FBA Tools',
      description: 'Treatment plans and functional behavior assessments',
      icon: ClipboardList,
      to: '/tpfba',
      color: 'bg-purple-500',
    },
    {
      title: 'Resources',
      description: 'Additional materials and references',
      icon: BookOpen,
      to: '/resources',
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={card.to}
                  className="block h-full"
                >
                  <div className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                    <div className={`inline-flex p-3 rounded-lg ${card.color}`}>
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-gray-900">{card.title}</h2>
                    <p className="mt-2 text-gray-600">{card.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}