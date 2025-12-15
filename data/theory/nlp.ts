import { TheoryTopic } from '@/types/theory';

export const nlpTheory: TheoryTopic = {
  topicId: 'nlp',
  topicName: 'NLP',
  category: 'Data & AI',
  description: 'Natural Language Processing techniques',
  sections: [
    {
      id: 'basics',
      title: 'NLP Basics',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is NLP?', content: 'NLP (Natural Language Processing) enables computers to understand human language. Tasks: text classification, sentiment analysis, translation, chatbots, information extraction. AI field. Language understanding.' },
        { id: 'q2', title: 'What is text preprocessing?', content: 'Text preprocessing: tokenization, lowercasing, stop word removal, stemming, lemmatization, punctuation removal. Clean text. Prepare for analysis. Essential step.' },
        { id: 'q3', title: 'What is tokenization?', content: 'Tokenization: split text into tokens (words, subwords). Basic NLP step. Text segmentation. Foundation operation. Language-dependent.' },
        { id: 'q4', title: 'What is stop words?', content: 'Stop words: common words (the, is, a). Often removed. Language-specific. Reduce noise. Focus on content. Preprocessing step.' },
        { id: 'q5', title: 'What is stemming?', content: 'Stemming: reduce words to root. Porter, Snowball stemmers. Aggressive. May not be valid words. Fast. Text normalization.' },
        { id: 'q6', title: 'What is lemmatization?', content: 'Lemmatization: reduce to dictionary form. Valid words. More accurate than stemming. Slower. Context-aware. Better normalization.' },
        { id: 'q7', title: 'What is n-grams?', content: 'N-grams: sequences of n words. Unigrams (1), bigrams (2), trigrams (3). Capture context. Feature extraction. Language modeling.' },
        { id: 'q8', title: 'What is bag of words?', content: 'Bag of words: word frequency vectors. Ignore order. Simple representation. Document vectors. Basic model. Text representation.' },
        { id: 'q9', title: 'What is TF-IDF?', content: 'TF-IDF (Term Frequency-Inverse Document Frequency): word importance. TF (frequency in document), IDF (rarity across corpus). Weighted representation. Better than BoW. Feature extraction.' },
        { id: 'q10', title: 'What is word embeddings?', content: 'Word embeddings: dense vector representations. Word2Vec, GloVe, FastText. Semantic similarity. Dense vectors. Modern NLP. Foundation for deep learning.' }
      ]
    },
    {
      id: 'models',
      title: 'NLP Models',
      content: '',
      subsections: [
        { id: 'q11', title: 'What is Word2Vec?', content: 'Word2Vec: word embeddings. Skip-gram or CBOW. Neural network. Semantic relationships. Pre-trained models. Popular embeddings.' },
        { id: 'q12', title: 'What is RNN?', content: 'RNN (Recurrent Neural Network): sequences. LSTM, GRU variants. Temporal patterns. Text generation, classification. Sequence modeling.' },
        { id: 'q13', title: 'What is LSTM?', content: 'LSTM (Long Short-Term Memory): RNN variant. Handles long sequences. Memory cells. Gradient flow. Better than vanilla RNN. Sequence modeling.' },
        { id: 'q14', title: 'What is Transformer?', content: 'Transformer: attention mechanism. No recurrence. Parallel processing. BERT, GPT foundation. Modern NLP. State-of-the-art.' },
        { id: 'q15', title: 'What is BERT?', content: 'BERT (Bidirectional Encoder Representations): pre-trained transformer. Bidirectional context. Fine-tune for tasks. Powerful. Modern standard.' },
        { id: 'q16', title: 'What is GPT?', content: 'GPT (Generative Pre-trained Transformer): language model. Text generation. Autoregressive. Large models. Generative AI. Modern NLP.' },
        { id: 'q17', title: 'What is attention mechanism?', content: 'Attention mechanism: focus on relevant parts. Weighted connections. Long-range dependencies. Transformer core. Important innovation.' },
        { id: 'q18', title: 'What is transfer learning?', content: 'Transfer learning: pre-trained models, fine-tune for tasks. BERT, GPT. Less data needed. Faster training. Modern approach. Common practice.' },
        { id: 'q19', title: 'What is fine-tuning?', content: 'Fine-tuning: adapt pre-trained model. Task-specific training. Update weights. Transfer learning. Efficient training. Modern practice.' },
        { id: 'q20', title: 'What is language model?', content: 'Language model: predict next word. Probability distribution. GPT, BERT. Text generation. Foundation models. Modern NLP.' }
      ]
    },
    {
      id: 'tasks',
      title: 'NLP Tasks',
      content: '',
      subsections: [
        { id: 'q21', title: 'What is text classification?', content: 'Text classification: categorize text. Sentiment, topic, spam detection. Supervised learning. Common task. Business applications.' },
        { id: 'q22', title: 'What is sentiment analysis?', content: 'Sentiment analysis: positive, negative, neutral. Opinion mining. Business intelligence. Social media. Common application. Text classification.' },
        { id: 'q23', title: 'What is named entity recognition?', content: 'NER: identify entities. Persons, organizations, locations, dates. Information extraction. Structured data. NLP task.' },
        { id: 'q24', title: 'What is machine translation?', content: 'Machine translation: translate between languages. Neural MT. Sequence-to-sequence. Google Translate. Complex task. Language pairs.' },
        { id: 'q25', title: 'What is text summarization?', content: 'Text summarization: extractive or abstractive. Condense text. Key points. Information retrieval. NLP task. Content reduction.' },
        { id: 'q26', title: 'What is question answering?', content: 'Question answering: answer questions from text. Reading comprehension. BERT-based. Information extraction. NLP task. Chatbots.' },
        { id: 'q27', title: 'What is text generation?', content: 'Text generation: create new text. GPT models. Autoregressive. Creative writing, chatbots. Generative task. Modern capability.' },
        { id: 'q28', title: 'What is chatbots?', content: 'Chatbots: conversational agents. Rule-based or ML-based. Customer service, assistants. NLP application. Interactive systems.' },
        { id: 'q29', title: 'What is topic modeling?', content: 'Topic modeling: discover topics. LDA, NMF. Unsupervised. Document clustering. Content analysis. Text mining.' },
        { id: 'q30', title: 'What is information extraction?', content: 'Information extraction: structured data from text. Entities, relationships, events. Knowledge graphs. NLP task. Data extraction.' }
      ]
    },
    {
      id: 'techniques',
      title: 'NLP Techniques',
      content: '',
      subsections: [
        { id: 'q31', title: 'What is part-of-speech tagging?', content: 'POS tagging: label word types. Noun, verb, adjective, etc. Grammar analysis. NLP preprocessing. Linguistic analysis. Text understanding.' },
        { id: 'q32', title: 'What is parsing?', content: 'Parsing: syntactic structure. Dependency parsing, constituency parsing. Sentence structure. Grammar analysis. NLP technique.' },
        { id: 'q33', title: 'What is coreference resolution?', content: 'Coreference resolution: link pronouns to entities. "He" refers to who? Text understanding. Advanced NLP. Discourse analysis.' },
        { id: 'q34', title: 'What is word sense disambiguation?', content: 'Word sense disambiguation: determine word meaning in context. "Bank" (financial vs river). Context understanding. NLP challenge. Semantic analysis.' },
        { id: 'q35', title: 'What is text similarity?', content: 'Text similarity: cosine similarity, Jaccard, edit distance. Compare texts. Semantic similarity. Information retrieval. NLP task.' },
        { id: 'q36', title: 'What is text clustering?', content: 'Text clustering: group similar documents. K-means, hierarchical. Unsupervised. Topic discovery. Text mining. Document organization.' },
        { id: 'q37', title: 'What is keyword extraction?', content: 'Keyword extraction: identify important words. TF-IDF, RAKE, TextRank. Summarize content. Information retrieval. Text analysis.' },
        { id: 'q38', title: 'What is text normalization?', content: 'Text normalization: standardize text. Lowercase, remove accents, expand abbreviations. Consistent format. Preprocessing. Data quality.' },
        { id: 'q39', title: 'What is language detection?', content: 'Language detection: identify text language. Statistical methods, ML models. Multi-language systems. Preprocessing step. Text analysis.' },
        { id: 'q40', title: 'What is spell correction?', content: 'Spell correction: fix spelling errors. Edit distance, language models. Text quality. Preprocessing. Error correction.' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced NLP',
      content: '',
      subsections: [
        { id: 'q41', title: 'What is transformer architecture?', content: 'Transformer architecture: encoder-decoder, self-attention, multi-head attention. No recurrence. Parallel. Modern standard. State-of-the-art.' },
        { id: 'q42', title: 'What is BERT variants?', content: 'BERT variants: RoBERTa, DistilBERT, ALBERT. Improvements and optimizations. Different sizes. Task-specific. Model ecosystem.' },
        { id: 'q43', title: 'What is GPT variants?', content: 'GPT variants: GPT-2, GPT-3, GPT-4, ChatGPT. Increasing size and capability. Text generation. Large language models. Modern AI.' },
        { id: 'q44', title: 'What is fine-tuning strategies?', content: 'Fine-tuning strategies: full fine-tuning, parameter-efficient (LoRA), prompt tuning. Adapt models. Efficient training. Modern techniques.' },
        { id: 'q45', title: 'What is prompt engineering?', content: 'Prompt engineering: craft prompts for LLMs. Few-shot learning, chain-of-thought. Guide model behavior. Modern technique. LLM interaction.' },
        { id: 'q46', title: 'What is multilingual NLP?', content: 'Multilingual NLP: handle multiple languages. mBERT, XLM-R. Cross-lingual transfer. Global applications. Language diversity.' },
        { id: 'q47', title: 'What is NLP evaluation?', content: 'NLP evaluation: BLEU (translation), ROUGE (summarization), F1 (classification), perplexity (language models). Task-specific metrics. Model assessment.' },
        { id: 'q48', title: 'What is NLP challenges?', content: 'NLP challenges: ambiguity, context, sarcasm, languages, bias, data quality, computational cost, interpretability. Complex problems. Ongoing research.' },
        { id: 'q49', title: 'What is NLP applications?', content: 'NLP applications: search engines, virtual assistants, translation, sentiment analysis, chatbots, content moderation, information extraction. Wide applications. Industry impact.' },
        { id: 'q50', title: 'What are NLP best practices?', content: 'Best practices: preprocess properly, use pre-trained models, fine-tune appropriately, evaluate thoroughly, handle bias, consider context, test on diverse data, document, iterate, stay updated with research.' }
      ]
    }
  ]
};
