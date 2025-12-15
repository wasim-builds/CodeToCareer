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
    <div className="h-screen flex flex-col bg-gray-900">
      <PracticePlayground problem={problem} />
    </div>
  );
}
