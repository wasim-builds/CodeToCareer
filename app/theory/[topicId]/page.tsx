'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { getTheoryForTopic } from '@/data/theory';
import TheoryViewer from '@/components/theory/TheoryViewer';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function TheoryTopicPage() {
  const params = useParams();
  const topicId = params.topicId as string;

  const theory = useMemo(() => {
    return getTheoryForTopic(topicId);
  }, [topicId]);

  if (!theory) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Theory Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Theory content for this topic is not available yet.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Back to Main Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return <TheoryViewer theory={theory} />;
}
