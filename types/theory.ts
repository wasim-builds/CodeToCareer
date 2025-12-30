export interface CodeExample {
  code: string;
  language: string;
  output?: string;
  explanation?: string;
  runnable?: boolean;
}

export interface TheorySubsection {
  id: string;
  title: string;
  content: string;
  codeExample?: CodeExample;
  tryItLink?: string;
}

export interface TheorySection {
  id: string;
  title: string;
  category?: string; // Group sections by category (e.g., "Basics", "Control Flow")
  content: string;
  subsections?: TheorySubsection[];
  order?: number; // Explicit ordering within category
  relatedTopics?: string[]; // IDs of related sections
}

export interface TheoryTopic {
  topicId: string;
  topicName: string;
  category: string;
  description: string;
  sections: TheorySection[];
}

