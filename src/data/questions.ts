import { Question } from '../types/quiz';

export const predefinedQuestions: Question[] = [
  {
    id: 'ai900_basic_1',
    question: 'Which of the following best defines Artificial Intelligence (AI)?',
    type: 'mcq',
    options: [
      'A. A software that automates hardware installation',
      'B. A system that mimics human intelligence to solve problems',
      'C. A database for storing large datasets',
      'D. A tool to increase internet speed'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_2',
    question: 'Which AI workload involves predicting future outcomes based on historical data?',
    type: 'mcq',
    options: [
      'A. Computer Vision',
      'B. Natural Language Processing',
      'C. Machine Learning',
      'D. Knowledge Mining'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_3',
    question: 'Which scenario is an example of Natural Language Processing (NLP)?',
    type: 'mcq',
    options: [
      'A. Detecting objects in an image',
      'B. Translating a sentence from English to Spanish',
      'C. Predicting stock prices',
      'D. Recognizing a persons face'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_4',
    question: 'Which of the following is NOT an example of Computer Vision?',
    type: 'mcq',
    options: [
      'A. Optical Character Recognition (OCR)',
      'B. Image classification',
      'C. Speech-to-text conversion',
      'D. Face detection'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Computer Vision Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_5',
    question: 'Which Azure service is designed to analyze large amounts of unstructured text?',
    type: 'mcq',
    options: [
      'A. Azure Machine Learning',
      'B. Azure AI Search (previously known as "Azure Cognitive Search")',
      'C. Azure Bot Service',
      'D. Azure AI Services - Text Analytics (previously known as "Azure Cognitive Services - Text Analytics")'
    ],
    correct_answer: 'D',
    explanation: '',
    category: 'Computer Vision Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_6',
    question: 'Which service provides prebuilt AI models that can be used without extensive coding?',
    type: 'mcq',
    options: [
      'A. Azure Virtual Machines',
      'B. Azure AI Services (previously known as "Azure Cognitive Services")',
      'C. Azure Synapse Analytics',
      'D. Azure Data Factory'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_7',
    question: 'Which Azure service is used to build, train, and deploy machine learning models?',
    type: 'mcq',
    options: [
      'A. Azure Machine Learning',
      'B. Azure Data Lake',
      'C. Azure AI Search (previously known as "Azure Cognitive Search")',
      'D. Azure Key Vault'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_8',
    question: 'Which service enables developers to create conversational AI agents?',
    type: 'mcq',
    options: [
      'A. Azure Bot Service',
      'B. Azure Virtual Network',
      'C. Azure Machine Learning',
      'D. Azure SQL Database'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Conversational AI Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_9',
    question: 'Which Azure AI service (previously known as "Cognitive Service") would you use to detect the sentiment of a customer review?',
    type: 'mcq',
    options: [
      'A. Translator Text API',
      'B. Computer Vision API',
      'C. Text Analytics API',
      'D. QnA Maker'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Computer Vision Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_10',
    question: 'Which service is used for image classification and object detection without writing code?',
    type: 'mcq',
    options: [
      'A. Custom Vision',
      'B. Translator Service',
      'C. Azure Data Factory',
      'D. Azure Synapse'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Computer Vision Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_11',
    question: 'In Machine Learning, what is a label?',
    type: 'mcq',
    options: [
      'A. Input data provided to the model',
      'B. The output the model is trying to predict',
      'C. A description of dataset features',
      'D. The training algorithm used'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_12',
    question: 'Which type of ML is used when labeled training data is available?',
    type: 'mcq',
    options: [
      'A. Supervised Learning',
      'B. Unsupervised Learning',
      'C. Reinforcement Learning',
      'D. Deep Learning'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_13',
    question: 'Which type of ML groups data based on similarities without predefined labels?',
    type: 'mcq',
    options: [
      'A. Supervised Learning',
      'B. Reinforcement Learning',
      'C. Unsupervised Learning',
      'D. Regression'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_14',
    question: 'Predicting house prices based on size and location is an example of:',
    type: 'mcq',
    options: [
      'A. Classification',
      'B. Clustering',
      'C. Regression',
      'D. Translation'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Computer Vision Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_15',
    question: 'Identifying whether an email is spam or not spam is an example of:',
    type: 'mcq',
    options: [
      'A. Regression',
      'B. Classification',
      'C. Clustering',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_16',
    question: 'Which Azure AI service (previously known as "Cognitive Service") is used for extracting text from images?',
    type: 'mcq',
    options: [
      'A. Custom Vision',
      'B. Translator Text',
      'C. Computer Vision OCR',
      'D. QnA Maker'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_17',
    question: 'A self-driving car identifying pedestrians on the road uses which AI workload?',
    type: 'mcq',
    options: [
      'A. Speech Recognition',
      'B. Computer Vision',
      'C. Knowledge Mining',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_18',
    question: 'Which service allows training a custom object detection model?',
    type: 'mcq',
    options: [
      'A. Azure Machine Learning Designer',
      'B. Custom Vision',
      'C. Text Analytics',
      'D. Azure Bot Service'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Conversational AI Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_19',
    question: 'Face verification (checking if two images are of the same person) uses:',
    type: 'mcq',
    options: [
      'A. Face API',
      'B. Custom Vision',
      'C. QnA Maker',
      'D. Translator API'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_20',
    question: 'An application that reads a scanned invoice and extracts text uses:',
    type: 'mcq',
    options: [
      'A. Speech Services',
      'B. Translator Service',
      'C. Azure AI Document Intelligence (previously known as "Form Recognizer")',
      'D. LUIS'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Speech Services',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_21',
    question: 'Which service provides real-time speech-to-text conversion?',
    type: 'mcq',
    options: [
      'A. Text Analytics',
      'B. Translator Text',
      'C. Speech Service',
      'D. Azure AI Document Intelligence (previously known as "Form Recognizer")'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Speech Services',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_22',
    question: 'Which NLP service is best for creating a language-understanding model for a chatbot?',
    type: 'mcq',
    options: [
      'A. Translator Service',
      'B. LUIS (Language Understanding)',
      'C. Computer Vision API',
      'D. Azure ML Designer'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_23',
    question: 'Which service detects the key phrases in a customer feedback comment?',
    type: 'mcq',
    options: [
      'A. Computer Vision API',
      'B. Text Analytics API',
      'C. Azure AI Document Intelligence (previously known as "Form Recognizer")',
      'D. Custom Vision'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Conversational AI Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_24',
    question: 'Which service translates text from one language to another?',
    type: 'mcq',
    options: [
      'A. Azure Bot Service',
      'B. Translator Text API',
      'C. Face API',
      'D. Speech Service'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_25',
    question: 'A virtual assistant that answers FAQs using predefined documents can be built using:',
    type: 'mcq',
    options: [
      'A. Azure Bot Service + QnA Maker',
      'B. Custom Vision',
      'C. Computer Vision OCR',
      'D. Azure Machine Learning'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_26',
    question: 'Which of the following is a principle of Responsible AI?',
    type: 'mcq',
    options: [
      'A. Bias and fairness',
      'B. Overfitting and underfitting',
      'C. High availability',
      'D. Cost efficiency'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Conversational AI Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_27',
    question: 'Which practice ensures AI models make consistent and reliable predictions?',
    type: 'mcq',
    options: [
      'A. Transparency',
      'B. Reliability and Safety',
      'C. Accountability',
      'D. Interpretability'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_28',
    question: 'Avoiding gender or race bias in AI hiring tools relates to which Responsible AI principle?',
    type: 'mcq',
    options: [
      'A. Privacy',
      'B. Fairness',
      'C. Transparency',
      'D. Reliability'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_29',
    question: 'Protecting personal data when building AI solutions ensures:',
    type: 'mcq',
    options: [
      'A. Fairness',
      'B. Reliability',
      'C. Privacy and Security',
      'D. Accountability'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Knowledge Mining',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_30',
    question: 'Which Microsoft framework provides guidelines for building Responsible AI solutions?',
    type: 'mcq',
    options: [
      'A. AI Trust Framework',
      'B. Responsible AI Standard',
      'C. Azure AI Fairness Guide',
      'D. Cognitive AI Guidelines'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_31',
    question: 'Which service enables extracting structured information from unstructured data sources?',
    type: 'mcq',
    options: [
      'A. Azure AI Search (previously known as "Azure Cognitive Search")',
      'B. Custom Vision',
      'C. Text Analytics',
      'D. Translator API'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_32',
    question: 'Which AI workload powers an enterprise search engine over company documents?',
    type: 'mcq',
    options: [
      'A. Computer Vision',
      'B. Knowledge Mining',
      'C. Natural Language Processing',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_33',
    question: 'Azure AI Search (previously known as "Azure Cognitive Search") can integrate with which Azure AI service (previously known as "Cognitive Service") to enrich documents?',
    type: 'mcq',
    options: [
      'A. Face API',
      'B. Text Analytics',
      'C. Speech Services',
      'D. All of the above'
    ],
    correct_answer: 'D',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_34',
    question: 'Which scenario best fits Knowledge Mining?',
    type: 'mcq',
    options: [
      'A. Predicting future sales',
      'B. Summarizing thousands of legal contracts',
      'C. Translating text between languages',
      'D. Detecting fraud in bank transactions'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_35',
    question: 'Knowledge Mining typically uses:',
    type: 'mcq',
    options: [
      'A. Data lakes and warehouses',
      'B. Indexers, Cognitive Skills, and Search indexes',
      'C. Neural networks',
      'D. Regression models'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Knowledge Mining',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_36',
    question: 'Azure ML Designer is:',
    type: 'mcq',
    options: [
      'A. A drag-and-drop interface for building ML models',
      'B. A tool for editing Python notebooks',
      'C. A data storage service',
      'D. A chatbot framework'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_37',
    question: 'Which environment supports Jupyter notebooks for ML experiments in Azure?',
    type: 'mcq',
    options: [
      'A. Azure Synapse',
      'B. Azure Databricks',
      'C. Azure Machine Learning Studio',
      'D. Azure SQL'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_38',
    question: 'Which service helps monitor and manage deployed ML models in production?',
    type: 'mcq',
    options: [
      'A. Azure Monitor',
      'B. Azure AI Search (previously known as "Azure Cognitive Search")',
      'C. Azure ML MLOps',
      'D. QnA Maker'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_39',
    question: 'Which environment is best suited for developers coding ML models from scratch?',
    type: 'mcq',
    options: [
      'A. Azure Notebooks',
      'B. Azure ML SDK (Python/R)',
      'C. Power BI',
      'D. Azure Key Vault'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_40',
    question: 'Which deployment option allows real-time ML model predictions?',
    type: 'mcq',
    options: [
      'A. Batch inference',
      'B. REST API endpoint',
      'C. Data Pipeline',
      'D. Synapse SQL Pool'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_41',
    question: 'Predicting customer churn is an example of:',
    type: 'mcq',
    options: [
      'A. Classification',
      'B. Clustering',
      'C. Regression',
      'D. Computer Vision'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_42',
    question: 'Grouping customers by buying patterns is an example of:',
    type: 'mcq',
    options: [
      'A. Regression',
      'B. Clustering',
      'C. NLP',
      'D. Forecasting'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_43',
    question: 'Forecasting next months electricity demand is an example of:',
    type: 'mcq',
    options: [
      'A. Regression',
      'B. Classification',
      'C. Computer Vision',
      'D. Translation'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_44',
    question: 'Detecting fraudulent credit card transactions is an example of:',
    type: 'mcq',
    options: [
      'A. NLP',
      'B. Clustering',
      'C. Anomaly Detection',
      'D. Computer Vision'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_45',
    question: 'Reading handwritten notes from an image is an example of:',
    type: 'mcq',
    options: [
      'A. Speech Service',
      'B. Computer Vision OCR',
      'C. Translator API',
      'D. LUIS'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_46',
    question: 'Which Azure service allows automated ML model selection and tuning?',
    type: 'mcq',
    options: [
      'A. Azure AutoML',
      'B. Azure Bot Service',
      'C. Azure AI Search (previously known as "Cognitive Search")',
      'D. Translator Text'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_47',
    question: 'Which AI service would you combine with Power BI for AI-driven insights?',
    type: 'mcq',
    options: [
      'A. Azure Synapse Analytics',
      'B. Azure AI Services (previously known as "Azure Cognitive Services")',
      'C. Azure Data Lake',
      'D. Azure Key Vault'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_48',
    question: 'Which AI technique rewards an agent for taking correct actions?',
    type: 'mcq',
    options: [
      'A. Supervised Learning',
      'B. Unsupervised Learning',
      'C. Reinforcement Learning',
      'D. Deep Learning'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Conversational AI Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_49',
    question: 'Which Azure service would be best for a company wanting to process voice commands in their app?',
    type: 'mcq',
    options: [
      'A. Speech Service',
      'B. Text Analytics',
      'C. Translator API',
      'D. Custom Vision'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Speech Services',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_basic_50',
    question: 'Which AI concept ensures models provide explanations for their predictions?',
    type: 'mcq',
    options: [
      'A. Reliability',
      'B. Interpretability',
      'C. Fairness',
      'D. Transparency'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_1',
    question: 'A retail company wants to analyze thousands of customer reviews posted online. They want to automatically determine whether the feedback is positive, neutral, or negative. Which Azure AI service should they use?',
    type: 'mcq',
    options: [
      'A. Custom Vision',
      'B. Text Analytics API',
      'C. Translator Text API',
      'D. Azure AI Search (previously known as "Azure Cognitive Search")'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_2',
    question: 'A bank wants to identify unusual credit card transactions that may indicate fraud. The historical dataset has transaction details but no labels indicating fraud or not fraud. Which ML approach is most suitable?',
    type: 'mcq',
    options: [
      'A. Supervised Learning',
      'B. Unsupervised Learning',
      'C. Reinforcement Learning',
      'D. Computer Vision'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_3',
    question: 'An insurance company receives thousands of claim forms every day. They want to automatically extract details like customer name, policy number, and claim amount from scanned forms. Which Azure AI service should they use?',
    type: 'mcq',
    options: [
      'A. Azure AI Document Intelligence (previously known as "Form Recognizer")',
      'B. Custom Vision',
      'C. Translator Service',
      'D. Speech Service'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_4',
    question: 'A travel company wants to build a chatbot that communicates with international travelers in their native languages. The chatbot should be able to translate queries and respond in real-time. Which combination of services is most appropriate?',
    type: 'mcq',
    options: [
      'A. Azure Bot Service + Translator Service',
      'B. Computer Vision + Text Analytics',
      'C. Speech Service + Face API',
      'D. Azure AI Search (previously known as "Azure Cognitive Search") + AutoML'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_5',
    question: 'A manufacturing company wants to reduce downtime by predicting when machines might fail based on sensor data. Which ML workload is most appropriate?',
    type: 'mcq',
    options: [
      'A. Classification',
      'B. Regression',
      'C. Clustering',
      'D. Knowledge Mining'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_6',
    question: 'A hospital wants to use AI to identify whether X-ray images show signs of pneumonia. They already have a labeled dataset of X-rays classified as pneumonia or normal. Which AI technique should they apply?',
    type: 'mcq',
    options: [
      'A. Unsupervised Learning',
      'B. Reinforcement Learning',
      'C. Supervised Learning',
      'D. Knowledge Mining'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Conversational AI Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_7',
    question: 'A bank wants to provide customers with a virtual assistant that can answer frequently asked questions such as Whats my account balance? or How do I apply for a loan? Which Azure service is the best choice?',
    type: 'mcq',
    options: [
      'A. QnA Maker + Azure Bot Service',
      'B. Custom Vision + Computer Vision OCR',
      'C. Speech Service + Translator API',
      'D. Azure AI Document Intelligence (previously known as "Form Recognizer") + Azure Data Factory'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Conversational AI Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_8',
    question: 'A company develops an AI system for screening resumes. They want to ensure the system does not unfairly disadvantage candidates based on gender or race. Which Responsible AI principle directly applies here?',
    type: 'mcq',
    options: [
      'A. Transparency',
      'B. Fairness',
      'C. Reliability and Safety',
      'D. Accountability'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_9',
    question: 'A city government installs cameras to detect traffic violations, such as vehicles crossing red lights. The system must detect vehicles in real-time and record evidence. Which Azure AI service is most suitable?',
    type: 'mcq',
    options: [
      'A. Face API',
      'B. Custom Vision',
      'C. Speech Service',
      'D. Text Analytics'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_10',
    question: 'A law firm has millions of legal documents and wants to quickly search and summarize key clauses across them using AI. Which Azure AI workload is most appropriate?',
    type: 'mcq',
    options: [
      'A. Natural Language Processing',
      'B. Knowledge Mining',
      'C. Computer Vision',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_11',
    question: 'A university wants to provide automated transcriptions for online classes, so students can get lecture notes in text format. Which Azure service should they use?',
    type: 'mcq',
    options: [
      'A. Translator API',
      'B. Speech-to-Text',
      'C. Text Analytics',
      'D. QnA Maker'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_12',
    question: 'A car rental service wants to predict the daily rental price of cars based on type, mileage, and demand. Which ML approach is most appropriate?',
    type: 'mcq',
    options: [
      'A. Clustering',
      'B. Regression',
      'C. Classification',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_13',
    question: 'A healthcare startup wants to identify tumors in MRI scans using a pre-trained AI service. Which service is best suited?',
    type: 'mcq',
    options: [
      'A. Custom Vision',
      'B. Speech-to-Text',
      'C. Translator Service',
      'D. Face API'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Speech Services',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_14',
    question: 'A food delivery company wants to recommend dishes to users based on their past orders. Which ML workload applies here?',
    type: 'mcq',
    options: [
      'A. Recommendation Systems',
      'B. Clustering',
      'C. Regression',
      'D. Classification'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_15',
    question: 'A recruitment agency wants to quickly filter through thousands of CVs to extract skills and job titles. Which AI service should they choose?',
    type: 'mcq',
    options: [
      'A. Text Analytics',
      'B. Speech Service',
      'C. Computer Vision',
      'D. Azure AI Document Intelligence (previously known as "Form Recognizer")'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_16',
    question: 'A logistics company wants to group delivery routes into clusters to optimize operations without predefined labels. Which ML method should they apply?',
    type: 'mcq',
    options: [
      'A. Regression',
      'B. Classification',
      'C. Clustering',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_17',
    question: 'A financial firm wants an AI solution that explains why a loan application was rejected. Which Responsible AI principle applies?',
    type: 'mcq',
    options: [
      'A. Transparency',
      'B. Privacy and Security',
      'C. Inclusiveness',
      'D. Fairness'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_18',
    question: 'An airline wants to predict customer demand for flights during holiday seasons. Which ML workload is most appropriate?',
    type: 'mcq',
    options: [
      'A. Clustering',
      'B. Regression',
      'C. Recommendation',
      'D. Classification'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_19',
    question: 'A call center wants to analyze recorded conversations to detect customer sentiment and topics discussed. Which Azure services should be combined?',
    type: 'mcq',
    options: [
      'A. Speech-to-Text + Text Analytics',
      'B. Azure AI Document Intelligence (previously known as "Form Recognizer") + Custom Vision',
      'C. Translator API + Bot Service',
      'D. Face API + Speech Service'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_20',
    question: 'A fashion retailer wants to allow customers to upload a photo of clothing and find similar items in stock. Which service should they use?',
    type: 'mcq',
    options: [
      'A. Custom Vision',
      'B. Face API',
      'C. Translator Service',
      'D. Text Analytics'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Conversational AI Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_21',
    question: 'A hospital wants to build an AI model that predicts the probability of patients developing diabetes based on medical records. Which type of ML workload applies?',
    type: 'mcq',
    options: [
      'A. Classification',
      'B. Regression',
      'C. Clustering',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_22',
    question: 'A multinational company wants to build an AI system that follows regional data privacy rules when training ML models. Which principle of Responsible AI does this focus on?',
    type: 'mcq',
    options: [
      'A. Privacy and Security',
      'B. Transparency',
      'C. Accountability',
      'D. Reliability and Safety'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_23',
    question: 'A telecom company wants to classify incoming support tickets into categories such as billing, technical, or network issues. Which AI service is most suitable?',
    type: 'mcq',
    options: [
      'A. Computer Vision',
      'B. Text Analytics',
      'C. Translator Service',
      'D. Speech-to-Text'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_24',
    question: 'A music app wants to automatically generate playlists based on listening patterns. Which ML approach should they use?',
    type: 'mcq',
    options: [
      'A. Clustering',
      'B. Regression',
      'C. Recommendation',
      'D. Classification'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_25',
    question: 'A retail store wants an AI camera system to detect customer demographics like age and gender for analytics. Which service should they choose?',
    type: 'mcq',
    options: [
      'A. Custom Vision',
      'B. Face API',
      'C. Translator Service',
      'D. Text Analytics'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Knowledge Mining',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_26',
    question: 'An online store wants to personalize product suggestions for each customer based on browsing history. Which ML workload applies?',
    type: 'mcq',
    options: [
      'A. Clustering',
      'B. Regression',
      'C. Recommendation',
      'D. Classification'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_27',
    question: 'A transportation authority wants to detect license plate numbers from car images for toll payments. Which AI service is best?',
    type: 'mcq',
    options: [
      'A. Speech Service',
      'B. Translator API',
      'C. Computer Vision OCR',
      'D. Text Analytics'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_28',
    question: 'A bank wants to analyze customer complaints emails to detect topics like \'account issues\' or \'loan delays.\' Which AI workload fits best?',
    type: 'mcq',
    options: [
      'A. Computer Vision',
      'B. Natural Language Processing',
      'C. Clustering',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Computer Vision Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_29',
    question: 'A factory wants to deploy AI cameras to detect safety gear compliance (helmets, gloves). Which AI service should they apply?',
    type: 'mcq',
    options: [
      'A. Custom Vision',
      'B. Face API',
      'C. Speech-to-Text',
      'D. QnA Maker'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Computer Vision Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_30',
    question: 'A school wants to translate study material from English to Spanish for international students. Which Azure AI service should they use?',
    type: 'mcq',
    options: [
      'A. Speech-to-Text',
      'B. Translator Text API',
      'C. Text Analytics',
      'D. Computer Vision'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_31',
    question: 'A hospital wants to ensure their AI system is reliable and consistently provides accurate diagnostic results. Which Responsible AI principle applies?',
    type: 'mcq',
    options: [
      'A. Fairness',
      'B. Reliability and Safety',
      'C. Transparency',
      'D. Accountability'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_32',
    question: 'An e-commerce website wants to allow customers to search products by uploading an image. Which Azure AI service applies?',
    type: 'mcq',
    options: [
      'A. Translator',
      'B. Custom Vision',
      'C. QnA Maker',
      'D. Speech Service'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Computer Vision Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_33',
    question: 'A government agency wants to redact personal identifiers like names and phone numbers from documents before publishing. Which service is best?',
    type: 'mcq',
    options: [
      'A. Computer Vision',
      'B. Text Analytics (PII detection)',
      'C. Translator Service',
      'D. Face API'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_34',
    question: 'A hotel chain wants to use AI to optimize room pricing daily depending on demand. Which ML workload applies?',
    type: 'mcq',
    options: [
      'A. Regression',
      'B. Clustering',
      'C. Recommendation',
      'D. Classification'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_35',
    question: 'A car manufacturer wants AI to automatically identify scratches or damages on cars before delivery. Which service is most suitable?',
    type: 'mcq',
    options: [
      'A. Face API',
      'B. Custom Vision',
      'C. Translator API',
      'D. Text Analytics'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_36',
    question: 'A publishing company wants to summarize long research papers into short abstracts. Which AI service is best?',
    type: 'mcq',
    options: [
      'A. Speech-to-Text',
      'B. Text Analytics (Summarization)',
      'C. Translator Service',
      'D. Azure AI Document Intelligence (previously known as "Form Recognizer")'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Knowledge Mining',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_37',
    question: 'A school wants to identify students who are at risk of failing based on grades and attendance. Which ML workload applies?',
    type: 'mcq',
    options: [
      'A. Classification',
      'B. Regression',
      'C. Clustering',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_38',
    question: 'A fitness app wants to convert spoken workout instructions into text for subtitles. Which Azure AI service should they use?',
    type: 'mcq',
    options: [
      'A. Speech-to-Text',
      'B. Translator API',
      'C. Text Analytics',
      'D. Face API'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_39',
    question: 'A social media platform wants to detect offensive or harmful posts automatically. Which service is most suitable?',
    type: 'mcq',
    options: [
      'A. Translator API',
      'B. Text Analytics (Content Moderation)',
      'C. Computer Vision',
      'D. QnA Maker'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Computer Vision Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_40',
    question: 'A smart home company wants to enable users to control devices using voice commands. Which Azure service applies?',
    type: 'mcq',
    options: [
      'A. Translator API',
      'B. Speech-to-Text + Speech Recognition',
      'C. Azure AI Document Intelligence (previously known as "Form Recognizer")',
      'D. Computer Vision'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Speech Services',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_41',
    question: 'A delivery app wants to group customers by ordering patterns to send personalized offers. Which ML approach applies?',
    type: 'mcq',
    options: [
      'A. Regression',
      'B. Classification',
      'C. Clustering',
      'D. Recommendation'
    ],
    correct_answer: 'C',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_42',
    question: 'A transport company wants to forecast fuel consumption for its fleet next month. Which ML workload applies?',
    type: 'mcq',
    options: [
      'A. Clustering',
      'B. Regression',
      'C. Classification',
      'D. Recommendation'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_43',
    question: 'An AI-powered hiring tool is accused of preferring male candidates over equally qualified female candidates. Which Responsible AI principle is violated?',
    type: 'mcq',
    options: [
      'A. Accountability',
      'B. Fairness',
      'C. Transparency',
      'D. Inclusiveness'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_44',
    question: 'A video platform wants to automatically generate subtitles in multiple languages. Which service should they combine?',
    type: 'mcq',
    options: [
      'A. Speech-to-Text + Translator API',
      'B. Azure AI Document Intelligence (previously known as "Form Recognizer") + Custom Vision',
      'C. Face API + Bot Service',
      'D. Text Analytics + Speech Recognition'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_45',
    question: 'A hospital wants to use AI to protect sensitive patient health data while training ML models. Which principle applies?',
    type: 'mcq',
    options: [
      'A. Transparency',
      'B. Privacy and Security',
      'C. Reliability',
      'D. Inclusiveness'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_46',
    question: 'A retail company wants an AI chatbot that explains the reasoning behind its product recommendations. Which Responsible AI principle applies?',
    type: 'mcq',
    options: [
      'A. Transparency',
      'B. Reliability',
      'C. Fairness',
      'D. Inclusiveness'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_47',
    question: 'A startup wants to train an ML model but does not have labeled data. They decide to group similar items first to discover patterns. Which ML method applies?',
    type: 'mcq',
    options: [
      'A. Clustering',
      'B. Regression',
      'C. Classification',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'A',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_48',
    question: 'A developer wants to deploy a custom-trained ML model as a REST API in Azure. Which service should they use?',
    type: 'mcq',
    options: [
      'A. Azure AI Services (previously known as "Azure Cognitive Services")',
      'B. Azure Machine Learning',
      'C. QnA Maker',
      'D. Translator Service'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_49',
    question: 'An online education platform wants to automatically grade short descriptive answers using AI. Which ML workload applies?',
    type: 'mcq',
    options: [
      'A. Clustering',
      'B. Natural Language Processing',
      'C. Regression',
      'D. Reinforcement Learning'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_intermediate_50',
    question: 'A bank wants its AI credit scoring model to be monitored continuously for accuracy drift. Which Azure service supports this?',
    type: 'mcq',
    options: [
      'A. Azure AI Search (previously known as "Azure Cognitive Search")',
      'B. Azure ML Model Monitoring',
      'C. Text Analytics',
      'D. Translator Service'
    ],
    correct_answer: 'B',
    explanation: '',
    category: 'Conversational AI Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
,
// AZ-900 Azure Fundamentals Questions - 50 Questions to balance with AI-900

  {
    id: 'az900_basic_1',
    question: 'What is Microsoft Azure?',
    type: 'mcq',
    options: [
      'A. A cloud computing platform',
      'B. A database management system',
      'C. An operating system',
      'D. A programming language'
    ],
    correct_answer: 'A',
    explanation: 'Microsoft Azure is a comprehensive cloud computing platform that provides various services including computing, analytics, storage, and networking.',
    category: 'Cloud Concepts',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_2',
    question: 'Which Azure service is used for hosting web applications?',
    type: 'mcq',
    options: [
      'A. Azure Virtual Machines',
      'B. Azure App Service',
      'C. Azure Storage',
      'D. Azure SQL Database'
    ],
    correct_answer: 'B',
    explanation: 'Azure App Service is a fully managed platform for building, deploying, and scaling web apps.',
    category: 'Azure Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_3',
    question: 'Which Azure service provides Infrastructure as a Service (IaaS)?',
    type: 'mcq',
    options: [
      'A. Azure Functions',
      'B. Azure App Service',
      'C. Azure Virtual Machines',
      'D. Azure SQL Database'
    ],
    correct_answer: 'C',
    explanation: 'Azure Virtual Machines provide Infrastructure as a Service (IaaS) by offering virtualized computing resources.',
    category: 'Cloud Service Types',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_4',
    question: 'What is the benefit of using Azure Resource Groups?',
    type: 'mcq',
    options: [
      'A. They provide backup services',
      'B. They organize and manage related Azure resources',
      'C. They increase application performance',
      'D. They reduce costs automatically'
    ],
    correct_answer: 'B',
    explanation: 'Resource Groups are logical containers that help organize and manage related Azure resources together.',
    category: 'Resource Management',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_5',
    question: 'Which Azure service provides Platform as a Service (PaaS)?',
    type: 'mcq',
    options: [
      'A. Azure Virtual Machines',
      'B. Azure Storage',
      'C. Azure App Service',
      'D. Azure Virtual Network'
    ],
    correct_answer: 'C',
    explanation: 'Azure App Service is a Platform as a Service (PaaS) offering that provides a managed environment for hosting applications.',
    category: 'Cloud Service Types',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_6',
    question: 'What is Microsoft Entra ID (previously known as "Azure Active Directory") used for?',
    type: 'mcq',
    options: [
      'A. File storage',
      'B. Identity and access management',
      'C. Virtual machine hosting',
      'D. Database management'
    ],
    correct_answer: 'B',
    explanation: 'Microsoft Entra ID (previously known as "Azure Active Directory") is a cloud-based identity and access management service.',
    category: 'Security',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_7',
    question: 'Which Azure storage type is best for storing unstructured data like images and videos?',
    type: 'mcq',
    options: [
      'A. Azure SQL Database',
      'B. Azure Table Storage',
      'C. Azure Blob Storage',
      'D. Azure File Storage'
    ],
    correct_answer: 'C',
    explanation: 'Azure Blob Storage is optimized for storing large amounts of unstructured data such as images, videos, and documents.',
    category: 'Storage Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_8',
    question: 'What is the Azure Service Level Agreement (SLA)?',
    type: 'mcq',
    options: [
      'A. A pricing model for Azure services',
      'B. A commitment to service availability and performance',
      'C. A security protocol for Azure',
      'D. A backup strategy for Azure resources'
    ],
    correct_answer: 'B',
    explanation: 'An SLA is a commitment between Microsoft and customers regarding service availability and performance levels.',
    category: 'Azure SLA',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_9',
    question: 'Which Azure service provides serverless computing?',
    type: 'mcq',
    options: [
      'A. Azure Virtual Machines',
      'B. Azure Functions',
      'C. Azure App Service',
      'D. Azure Container Instances'
    ],
    correct_answer: 'B',
    explanation: 'Azure Functions provides serverless computing, allowing you to run code without managing infrastructure.',
    category: 'Compute Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_10',
    question: 'What is the purpose of Azure Virtual Network?',
    type: 'mcq',
    options: [
      'A. To store data',
      'B. To provide secure network connectivity',
      'C. To manage user identities',
      'D. To monitor applications'
    ],
    correct_answer: 'B',
    explanation: 'Azure Virtual Network provides secure network connectivity between Azure resources and on-premises networks.',
    category: 'Networking',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_11',
    question: 'Which Azure service is used for relational database hosting?',
    type: 'mcq',
    options: [
      'A. Azure Cosmos DB',
      'B. Azure Blob Storage',
      'C. Azure SQL Database',
      'D. Azure Table Storage'
    ],
    correct_answer: 'C',
    explanation: 'Azure SQL Database is a managed relational database service based on Microsoft SQL Server.',
    category: 'Database Services',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_12',
    question: 'What is the Azure pricing calculator used for?',
    type: 'mcq',
    options: [
      'A. To calculate server performance',
      'B. To estimate Azure service costs',
      'C. To measure network bandwidth',
      'D. To assess security risks'
    ],
    correct_answer: 'B',
    explanation: 'The Azure pricing calculator helps estimate the cost of Azure services before deployment.',
    category: 'Cost Management',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_13',
    question: 'Which cloud deployment model allows organizations to keep sensitive data on-premises while using cloud services?',
    type: 'mcq',
    options: [
      'A. Public cloud',
      'B. Private cloud',
      'C. Hybrid cloud',
      'D. Community cloud'
    ],
    correct_answer: 'C',
    explanation: 'Hybrid cloud combines on-premises infrastructure with cloud services, allowing sensitive data to remain on-premises.',
    category: 'Cloud Concepts',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_14',
    question: 'What is Azure Monitor used for?',
    type: 'mcq',
    options: [
      'A. Managing user permissions',
      'B. Monitoring and analyzing Azure resources',
      'C. Storing application data',
      'D. Creating virtual networks'
    ],
    correct_answer: 'B',
    explanation: 'Azure Monitor provides comprehensive monitoring and analytics for Azure resources and applications.',
    category: 'Monitoring',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_15',
    question: 'Which Azure service provides NoSQL database capabilities?',
    type: 'mcq',
    options: [
      'A. Azure SQL Database',
      'B. Azure Cosmos DB',
      'C. Azure MySQL',
      'D. Azure PostgreSQL'
    ],
    correct_answer: 'B',
    explanation: 'Azure Cosmos DB is a globally distributed NoSQL database service.',
    category: 'Database Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_16',
    question: 'What is the difference between CapEx and OpEx in cloud computing?',
    type: 'mcq',
    options: [
      'A. CapEx is ongoing operational costs, OpEx is upfront capital investment',
      'B. CapEx is upfront capital investment, OpEx is ongoing operational costs',
      'C. Both are the same type of costs',
      'D. CapEx applies only to hardware, OpEx only to software'
    ],
    correct_answer: 'B',
    explanation: 'CapEx (Capital Expenditure) is upfront investment in physical infrastructure, while OpEx (Operational Expenditure) refers to ongoing operational costs.',
    category: 'Cloud Economics',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_17',
    question: 'Which Azure service provides content delivery network (CDN) capabilities?',
    type: 'mcq',
    options: [
      'A. Azure Traffic Manager',
      'B. Azure CDN',
      'C. Azure Load Balancer',
      'D. Azure Application Gateway'
    ],
    correct_answer: 'B',
    explanation: 'Azure CDN provides content delivery network capabilities to cache content closer to users globally.',
    category: 'Networking',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_18',
    question: 'What is Azure Key Vault used for?',
    type: 'mcq',
    options: [
      'A. Storing virtual machines',
      'B. Managing secrets, keys, and certificates',
      'C. Monitoring applications',
      'D. Creating resource groups'
    ],
    correct_answer: 'B',
    explanation: 'Azure Key Vault securely stores and manages secrets, encryption keys, and certificates.',
    category: 'Security',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_19',
    question: 'Which Azure service provides distributed denial-of-service (DDoS) protection?',
    type: 'mcq',
    options: [
      'A. Azure Firewall',
      'B. Microsoft Defender for Cloud (previously known as "Azure Security Center")',
      'C. Azure DDoS Protection',
      'D. Azure Application Gateway'
    ],
    correct_answer: 'C',
    explanation: 'Azure DDoS Protection provides protection against distributed denial-of-service attacks.',
    category: 'Security',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_20',
    question: 'What is the Azure Resource Manager (ARM)?',
    type: 'mcq',
    options: [
      'A. A storage service',
      'B. A deployment and management service',
      'C. A monitoring tool',
      'D. A database service'
    ],
    correct_answer: 'B',
    explanation: 'Azure Resource Manager is the deployment and management service for Azure resources.',
    category: 'Resource Management',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_21',
    question: 'Which Azure service provides load balancing for web applications?',
    type: 'mcq',
    options: [
      'A. Azure Traffic Manager',
      'B. Azure Load Balancer',
      'C. Azure Application Gateway',
      'D. All of the above'
    ],
    correct_answer: 'D',
    explanation: 'All these services provide different types of load balancing: Traffic Manager for DNS-based routing, Load Balancer for network-level distribution, and Application Gateway for application-level load balancing.',
    category: 'Networking',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_22',
    question: 'What is Azure Backup used for?',
    type: 'mcq',
    options: [
      'A. Creating virtual machines',
      'B. Protecting and recovering data',
      'C. Managing user access',
      'D. Monitoring performance'
    ],
    correct_answer: 'B',
    explanation: 'Azure Backup provides secure backup and recovery services for Azure and on-premises data.',
    category: 'Backup and Recovery',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_23',
    question: 'Which Azure service provides container orchestration?',
    type: 'mcq',
    options: [
      'A. Azure Container Instances',
      'B. Azure Kubernetes Service (AKS)',
      'C. Azure App Service',
      'D. Azure Functions'
    ],
    correct_answer: 'B',
    explanation: 'Azure Kubernetes Service (AKS) provides managed Kubernetes container orchestration.',
    category: 'Compute Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_24',
    question: 'What is the Azure Trust Center?',
    type: 'mcq',
    options: [
      'A. A billing portal',
      'B. A resource for security, privacy, and compliance information',
      'C. A monitoring dashboard',
      'D. A development tool'
    ],
    correct_answer: 'B',
    explanation: 'The Azure Trust Center provides information about security, privacy, compliance, and transparency.',
    category: 'Compliance',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_basic_25',
    question: 'Which Azure service provides big data analytics?',
    type: 'mcq',
    options: [
      'A. Azure Synapse Analytics',
      'B. Azure SQL Database',
      'C. Azure Storage',
      'D. Azure Monitor'
    ],
    correct_answer: 'A',
    explanation: 'Azure Synapse Analytics provides big data and data warehousing analytics capabilities.',
    category: 'Analytics',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_1',
    question: 'Which Azure service should you use to correlate events from multiple resources into a centralized repository?',
    type: 'mcq',
    options: [
      'A. Azure Monitor',
      'B. Azure Event Hubs',
      'C. Azure Log Analytics',
      'D. Azure Service Bus'
    ],
    correct_answer: 'C',
    explanation: 'Azure Log Analytics collects and analyzes data from multiple sources in a centralized repository.',
    category: 'Monitoring',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_2',
    question: 'What is the maximum number of Azure subscriptions that can be associated with a single Microsoft Entra ID (previously known as "Azure AD") tenant?',
    type: 'mcq',
    options: [
      'A. 10',
      'B. 100',
      'C. 1000',
      'D. Unlimited'
    ],
    correct_answer: 'D',
    explanation: 'There is no limit to the number of Azure subscriptions that can be associated with a single Microsoft Entra ID (previously known as "Azure AD") tenant.',
    category: 'Identity Management',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_3',
    question: 'Which Azure service provides a managed Redis cache?',
    type: 'mcq',
    options: [
      'A. Azure Cache for Redis',
      'B. Azure Table Storage',
      'C. Azure Cosmos DB',
      'D. Azure SQL Database'
    ],
    correct_answer: 'A',
    explanation: 'Azure Cache for Redis provides a managed Redis cache service for faster data access.',
    category: 'Database Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_4',
    question: 'What is the purpose of Azure Policy?',
    type: 'mcq',
    options: [
      'A. To manage user permissions',
      'B. To enforce organizational standards and compliance',
      'C. To monitor resource performance',
      'D. To backup data'
    ],
    correct_answer: 'B',
    explanation: 'Azure Policy helps enforce organizational standards and assess compliance at scale.',
    category: 'Governance',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_5',
    question: 'Which Azure service provides workflow automation?',
    type: 'mcq',
    options: [
      'A. Azure Functions',
      'B. Azure Logic Apps',
      'C. Azure Automation',
      'D. All of the above'
    ],
    correct_answer: 'D',
    explanation: 'Azure Functions, Logic Apps, and Automation all provide different types of workflow automation capabilities.',
    category: 'Integration',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_6',
    question: 'What is the Azure Well-Architected Framework?',
    type: 'mcq',
    options: [
      'A. A deployment tool',
      'B. A set of guiding tenets for building high-quality solutions',
      'C. A monitoring service',
      'D. A pricing model'
    ],
    correct_answer: 'B',
    explanation: 'The Azure Well-Architected Framework provides principles and practices for building reliable, secure, efficient, and cost-effective solutions.',
    category: 'Architecture',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_7',
    question: 'Which Azure service provides API management capabilities?',
    type: 'mcq',
    options: [
      'A. Azure API Management',
      'B. Azure Application Gateway',
      'C. Azure Front Door',
      'D. Azure Traffic Manager'
    ],
    correct_answer: 'A',
    explanation: 'Azure API Management provides a platform for publishing, securing, transforming, maintaining, and monitoring APIs.',
    category: 'Integration',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_8',
    question: 'What is the difference between Azure Availability Sets and Availability Zones?',
    type: 'mcq',
    options: [
      'A. Availability Sets protect against rack failures, Availability Zones protect against datacenter failures',
      'B. Availability Zones protect against rack failures, Availability Sets protect against datacenter failures',
      'C. They provide the same level of protection',
      'D. Availability Sets are newer than Availability Zones'
    ],
    correct_answer: 'A',
    explanation: 'Availability Sets protect against hardware failures within a datacenter, while Availability Zones protect against datacenter-level failures.',
    category: 'High Availability',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_9',
    question: 'Which Azure service provides messaging between applications and services?',
    type: 'mcq',
    options: [
      'A. Azure Service Bus',
      'B. Azure Event Grid',
      'C. Azure Event Hubs',
      'D. All of the above'
    ],
    correct_answer: 'D',
    explanation: 'Service Bus provides reliable messaging, Event Grid provides event routing, and Event Hubs provides big data streaming - all facilitate messaging between applications.',
    category: 'Integration',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_10',
    question: 'What is Azure Site Recovery used for?',
    type: 'mcq',
    options: [
      'A. Website hosting',
      'B. Disaster recovery and business continuity',
      'C. DNS management',
      'D. SSL certificate management'
    ],
    correct_answer: 'B',
    explanation: 'Azure Site Recovery provides disaster recovery services by replicating workloads to Azure or a secondary site.',
    category: 'Backup and Recovery',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_11',
    question: 'Which Azure service provides Internet of Things (IoT) capabilities?',
    type: 'mcq',
    options: [
      'A. Azure IoT Hub',
      'B. Azure IoT Central',
      'C. Azure IoT Edge',
      'D. All of the above'
    ],
    correct_answer: 'D',
    explanation: 'Azure provides multiple IoT services: IoT Hub for device connectivity, IoT Central for IoT applications, and IoT Edge for edge computing.',
    category: 'IoT',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_12',
    question: 'What is the purpose of Azure Blueprints?',
    type: 'mcq',
    options: [
      'A. To create network diagrams',
      'B. To define repeatable sets of Azure resources',
      'C. To monitor costs',
      'D. To manage user permissions'
    ],
    correct_answer: 'B',
    explanation: 'Azure Blueprints enables cloud architects to define a repeatable set of Azure resources that implements organizational standards.',
    category: 'Governance',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_13',
    question: 'Which Azure service provides serverless event-driven architecture?',
    type: 'mcq',
    options: [
      'A. Azure Functions',
      'B. Azure Event Grid',
      'C. Azure Logic Apps',
      'D. All of the above'
    ],
    correct_answer: 'D',
    explanation: 'Azure Functions, Event Grid, and Logic Apps all support serverless, event-driven architectures in different ways.',
    category: 'Serverless',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_14',
    question: 'What is Azure DevOps used for?',
    type: 'mcq',
    options: [
      'A. Application development and deployment lifecycle management',
      'B. Virtual machine management',
      'C. Database administration',
      'D. Network monitoring'
    ],
    correct_answer: 'A',
    explanation: 'Azure DevOps provides tools for the entire application development and deployment lifecycle.',
    category: 'DevOps',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_15',
    question: 'Which Azure service provides distributed tracing for microservices?',
    type: 'mcq',
    options: [
      'A. Azure Monitor',
      'B. Azure Application Insights',
      'C. Azure Log Analytics',
      'D. Azure Service Map'
    ],
    correct_answer: 'B',
    explanation: 'Azure Application Insights provides distributed tracing capabilities for microservices architectures.',
    category: 'Monitoring',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_16',
    question: 'What is the difference between Microsoft Defender for Cloud (previously known as "Azure Security Center") and Microsoft Sentinel (previously known as "Azure Sentinel")?',
    type: 'mcq',
    options: [
      'A. Defender for Cloud focuses on prevention, Sentinel focuses on detection and response',
      'B. Defender for Cloud focuses on detection, Sentinel focuses on prevention',
      'C. They provide identical capabilities',
      'D. Defender for Cloud is for Azure only, Sentinel is for on-premises only'
    ],
    correct_answer: 'A',
    explanation: 'Microsoft Defender for Cloud (previously known as "Azure Security Center") focuses on security posture management and threat prevention, while Microsoft Sentinel (previously known as "Azure Sentinel") provides SIEM and SOAR capabilities for detection and response.',
    category: 'Security',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_17',
    question: 'Which Azure service provides global DNS traffic routing?',
    type: 'mcq',
    options: [
      'A. Azure DNS',
      'B. Azure Traffic Manager',
      'C. Azure Load Balancer',
      'D. Azure Application Gateway'
    ],
    correct_answer: 'B',
    explanation: 'Azure Traffic Manager provides DNS-based traffic routing to distribute traffic globally across multiple regions.',
    category: 'Networking',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_18',
    question: 'What is Azure Arc used for?',
    type: 'mcq',
    options: [
      'A. Creating virtual networks',
      'B. Extending Azure management to hybrid and multi-cloud environments',
      'C. Managing storage accounts',
      'D. Monitoring applications'
    ],
    correct_answer: 'B',
    explanation: 'Azure Arc extends Azure management and services to any infrastructure, including on-premises and other clouds.',
    category: 'Hybrid Cloud',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_19',
    question: 'Which Azure service provides managed PostgreSQL database?',
    type: 'mcq',
    options: [
      'A. Azure Database for PostgreSQL',
      'B. Azure SQL Database',
      'C. Azure Cosmos DB',
      'D. Azure MySQL'
    ],
    correct_answer: 'A',
    explanation: 'Azure Database for PostgreSQL provides a fully managed PostgreSQL database service.',
    category: 'Database Services',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_20',
    question: 'What is the purpose of Azure Cost Management and Billing?',
    type: 'mcq',
    options: [
      'A. To create virtual machines',
      'B. To monitor and control Azure spending',
      'C. To manage user access',
      'D. To backup data'
    ],
    correct_answer: 'B',
    explanation: 'Azure Cost Management and Billing helps monitor, analyze, and optimize Azure costs.',
    category: 'Cost Management',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_21',
    question: 'Which Azure service provides real-time analytics on streaming data?',
    type: 'mcq',
    options: [
      'A. Azure Stream Analytics',
      'B. Azure Data Factory',
      'C. Azure Synapse Analytics',
      'D. Azure Data Lake'
    ],
    correct_answer: 'A',
    explanation: 'Azure Stream Analytics provides real-time analytics on streaming data from various sources.',
    category: 'Analytics',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_22',
    question: 'What is Azure Private Link used for?',
    type: 'mcq',
    options: [
      'A. Creating public websites',
      'B. Providing private connectivity to Azure services',
      'C. Managing DNS records',
      'D. Load balancing traffic'
    ],
    correct_answer: 'B',
    explanation: 'Azure Private Link provides private connectivity to Azure services over the Microsoft backbone network.',
    category: 'Networking',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_23',
    question: 'Which Azure service provides managed Apache Spark analytics?',
    type: 'mcq',
    options: [
      'A. Azure HDInsight',
      'B. Azure Databricks',
      'C. Azure Synapse Analytics',
      'D. All of the above'
    ],
    correct_answer: 'D',
    explanation: 'HDInsight, Databricks, and Synapse Analytics all provide managed Apache Spark capabilities with different focuses.',
    category: 'Analytics',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_24',
    question: 'What is the Azure Shared Responsibility Model?',
    type: 'mcq',
    options: [
      'A. A pricing model where costs are shared',
      'B. A security model defining responsibilities between Microsoft and customers',
      'C. A support model for technical issues',
      'D. A deployment model for applications'
    ],
    correct_answer: 'B',
    explanation: 'The Shared Responsibility Model defines which security responsibilities belong to Microsoft versus the customer.',
    category: 'Security',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_intermediate_25',
    question: 'Which Azure service provides managed Kubernetes without needing to manage the control plane?',
    type: 'mcq',
    options: [
      'A. Azure Container Instances',
      'B. Azure Kubernetes Service (AKS)',
      'C. Azure Service Fabric',
      'D. Azure Batch'
    ],
    correct_answer: 'B',
    explanation: 'Azure Kubernetes Service (AKS) provides managed Kubernetes where Microsoft handles the control plane management.',
    category: 'Compute Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  }
];





