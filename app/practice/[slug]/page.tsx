import { notFound } from 'next/navigation';
import { practiceProblems } from '@/data/practice/problems';
import { PracticePlayground } from '@/components/practice/PracticePlayground';

interface PracticeDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return practiceProblems.map((problem) => ({ slug: problem.slug }));
}

export default function PracticeDetailPage({ params }: PracticeDetailPageProps) {
  const problem = practiceProblems.find((p) => p.slug === params.slug);

  if (!problem) {
    return notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-4">
      <div className="space-y-1">
        <p className="text-sm text-green-400 font-semibold">Coding Practice</p>
        <h1 className="text-3xl font-bold text-white">{problem.title}</h1>
        <p className="text-gray-400">Difficulty: {problem.difficulty.toUpperCase()}</p>
      </div>
      <PracticePlayground problem={problem} />
    </div>
  );
}
