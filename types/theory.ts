export interface TheorySection {
  id: string;
  title: string;
  content: string;
  subsections?: TheorySection[];
}

export interface TheoryTopic {
  topicId: string;
  topicName: string;
  category: string;
  description: string;
  sections: TheorySection[];
}
