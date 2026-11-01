import { Question } from '../types/quiz';

export const dragDropQuestions: Question[] = [
  // ==========================================
  // DRAG-DROP (Ordering/Sequencing) Questions
  // ==========================================
  
  // AZ-900 Drag-Drop Questions
  {
    id: 'az900_dd_1',
    question: 'Arrange the steps to deploy an application to Azure in the correct order:',
    type: 'drag-drop',
    options: [
      'Create Azure resource group',
      'Configure application settings',
      'Deploy application code',
      'Test the deployed application'
    ],
    correct_answer: [
      'Create Azure resource group',
      'Configure application settings',
      'Deploy application code',
      'Test the deployed application'
    ],
    explanation: 'The correct deployment order ensures proper resource organization and configuration before deployment.',
    category: 'Deployment',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dd_2',
    question: 'Arrange the Azure security layers from outermost to innermost:',
    type: 'drag-drop',
    options: [
      'Physical security',
      'Identity and access',
      'Perimeter security',
      'Network security',
      'Compute security',
      'Application security',
      'Data security'
    ],
    correct_answer: [
      'Physical security',
      'Identity and access',
      'Perimeter security',
      'Network security',
      'Compute security',
      'Application security',
      'Data security'
    ],
    explanation: 'Azure security follows a defense-in-depth approach with multiple layers of protection.',
    category: 'Security',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dd_3',
    question: 'Order the steps to create a virtual machine in Azure:',
    type: 'drag-drop',
    options: [
      'Select VM size and configuration',
      'Create or select resource group',
      'Configure networking settings',
      'Choose operating system image',
      'Set administrator credentials',
      'Review and create VM'
    ],
    correct_answer: [
      'Create or select resource group',
      'Choose operating system image',
      'Select VM size and configuration',
      'Configure networking settings',
      'Set administrator credentials',
      'Review and create VM'
    ],
    explanation: 'VM creation follows a logical sequence from basic setup to final configuration.',
    category: 'Compute Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dd_4',
    question: 'Arrange the Azure cost optimization steps in priority order:',
    type: 'drag-drop',
    options: [
      'Monitor resource usage',
      'Right-size resources',
      'Implement automation',
      'Use reserved instances',
      'Remove unused resources',
      'Set up cost alerts'
    ],
    correct_answer: [
      'Monitor resource usage',
      'Set up cost alerts',
      'Remove unused resources',
      'Right-size resources',
      'Use reserved instances',
      'Implement automation'
    ],
    explanation: 'Cost optimization starts with visibility and progresses to advanced optimization techniques.',
    category: 'Cost Management',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dd_5',
    question: 'Order the steps to implement Azure DevOps CI/CD pipeline:',
    type: 'drag-drop',
    options: [
      'Connect to source repository',
      'Create Azure DevOps project',
      'Configure build pipeline',
      'Configure release pipeline',
      'Deploy to staging environment',
      'Deploy to production'
    ],
    correct_answer: [
      'Create Azure DevOps project',
      'Connect to source repository',
      'Configure build pipeline',
      'Configure release pipeline',
      'Deploy to staging environment',
      'Deploy to production'
    ],
    explanation: 'CI/CD implementation follows a structured approach from project setup to production deployment.',
    category: 'Deployment',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dd_6',
    question: 'Arrange the steps for Azure subscription governance setup:',
    type: 'drag-drop',
    options: [
      'Create management groups',
      'Define Azure policies',
      'Create subscriptions',
      'Create resource groups',
      'Apply RBAC roles',
      'Deploy resources'
    ],
    correct_answer: [
      'Create management groups',
      'Create subscriptions',
      'Define Azure policies',
      'Apply RBAC roles',
      'Create resource groups',
      'Deploy resources'
    ],
    explanation: 'Governance setup follows a top-down approach from management groups to individual resources.',
    category: 'Governance',
    difficulty: 'hard',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dd_7',
    question: 'Order the steps to set up Azure Backup for VMs:',
    type: 'drag-drop',
    options: [
      'Create Recovery Services vault',
      'Define backup policy',
      'Select VMs to back up',
      'Configure backup schedule',
      'Run initial backup'
    ],
    correct_answer: [
      'Create Recovery Services vault',
      'Define backup policy',
      'Configure backup schedule',
      'Select VMs to back up',
      'Run initial backup'
    ],
    explanation: 'Azure Backup setup requires creating infrastructure before selecting resources to protect.',
    category: 'Storage Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dd_8',
    question: 'Arrange the cloud adoption phases in order:',
    type: 'drag-drop',
    options: [
      'Strategy',
      'Plan',
      'Ready',
      'Adopt',
      'Govern',
      'Manage'
    ],
    correct_answer: [
      'Strategy',
      'Plan',
      'Ready',
      'Adopt',
      'Govern',
      'Manage'
    ],
    explanation: 'The Cloud Adoption Framework provides a structured approach to cloud migration.',
    category: 'Cloud Concepts',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  
  // AI-900 Drag-Drop Questions
  {
    id: 'ai900_dd_1',
    question: 'Arrange the machine learning workflow steps in the correct order:',
    type: 'drag-drop',
    options: [
      'Data collection',
      'Data preprocessing',
      'Model training',
      'Model evaluation',
      'Model deployment',
      'Model monitoring'
    ],
    correct_answer: [
      'Data collection',
      'Data preprocessing',
      'Model training',
      'Model evaluation',
      'Model deployment',
      'Model monitoring'
    ],
    explanation: 'The ML workflow follows a systematic approach from data to production monitoring.',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dd_2',
    question: 'Order the steps to implement a computer vision solution:',
    type: 'drag-drop',
    options: [
      'Collect and label training images',
      'Choose appropriate AI service',
      'Train the model',
      'Test model accuracy',
      'Deploy to production',
      'Monitor performance'
    ],
    correct_answer: [
      'Choose appropriate AI service',
      'Collect and label training images',
      'Train the model',
      'Test model accuracy',
      'Deploy to production',
      'Monitor performance'
    ],
    explanation: 'Computer vision implementation requires careful planning and systematic execution.',
    category: 'Computer Vision Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dd_3',
    question: 'Arrange the Natural Language Processing pipeline steps:',
    type: 'drag-drop',
    options: [
      'Text tokenization',
      'Text preprocessing',
      'Feature extraction',
      'Model application',
      'Result interpretation',
      'Raw text input'
    ],
    correct_answer: [
      'Raw text input',
      'Text preprocessing',
      'Text tokenization',
      'Feature extraction',
      'Model application',
      'Result interpretation'
    ],
    explanation: 'NLP processing follows a structured pipeline from raw text to meaningful insights.',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dd_4',
    question: 'Order the steps for implementing Responsible AI practices:',
    type: 'drag-drop',
    options: [
      'Identify potential biases',
      'Define AI ethics guidelines',
      'Implement fairness measures',
      'Test for transparency',
      'Monitor model behavior',
      'Document decisions'
    ],
    correct_answer: [
      'Define AI ethics guidelines',
      'Identify potential biases',
      'Implement fairness measures',
      'Test for transparency',
      'Document decisions',
      'Monitor model behavior'
    ],
    explanation: 'Responsible AI requires proactive planning and continuous monitoring.',
    category: 'AI Workloads and Considerations',
    difficulty: 'hard',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dd_5',
    question: 'Order the steps to create a chatbot using Azure Bot Service:',
    type: 'drag-drop',
    options: [
      'Create QnA knowledge base',
      'Create Bot Service resource',
      'Connect bot to channels',
      'Train with sample questions',
      'Test in Web Chat',
      'Deploy to production'
    ],
    correct_answer: [
      'Create QnA knowledge base',
      'Train with sample questions',
      'Create Bot Service resource',
      'Test in Web Chat',
      'Connect bot to channels',
      'Deploy to production'
    ],
    explanation: 'Bot development starts with knowledge base creation before connecting to communication channels.',
    category: 'Conversational AI Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dd_6',
    question: 'Arrange the steps for building a Custom Vision model:',
    type: 'drag-drop',
    options: [
      'Create Custom Vision project',
      'Upload training images',
      'Tag images with labels',
      'Train the model',
      'Test with new images',
      'Publish the model'
    ],
    correct_answer: [
      'Create Custom Vision project',
      'Upload training images',
      'Tag images with labels',
      'Train the model',
      'Test with new images',
      'Publish the model'
    ],
    explanation: 'Custom Vision follows a structured workflow from project creation to model publication.',
    category: 'Computer Vision Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dd_7',
    question: 'Order the Azure AI Services (previously known as "Cognitive Services") API workflow:',
    type: 'drag-drop',
    options: [
      'Obtain API key and endpoint',
      'Create Azure AI Services resource (previously known as "Cognitive Services")',
      'Send request with data',
      'Receive JSON response',
      'Process the results'
    ],
    correct_answer: [
      'Create Azure AI Services resource (previously known as "Cognitive Services")',
      'Obtain API key and endpoint',
      'Send request with data',
      'Receive JSON response',
      'Process the results'
    ],
    explanation: 'Using Azure AI Services (previously known as "Cognitive Services") APIs requires proper authentication before sending requests.',
    category: 'AI Services',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dd_8',
    question: 'Arrange the supervised learning process steps:',
    type: 'drag-drop',
    options: [
      'Collect labeled data',
      'Split into training and test sets',
      'Train the model',
      'Validate on test set',
      'Fine-tune hyperparameters',
      'Deploy model'
    ],
    correct_answer: [
      'Collect labeled data',
      'Split into training and test sets',
      'Train the model',
      'Validate on test set',
      'Fine-tune hyperparameters',
      'Deploy model'
    ],
    explanation: 'Supervised learning requires labeled data and proper validation before deployment.',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },

  // DP-700 Drag-Drop Questions
  {
    id: 'dp700_dd_1',
    question: 'Order the steps to implement a medallion architecture in Fabric:',
    type: 'drag-drop',
    options: [
      'Create lakehouse',
      'Ingest raw data to Bronze layer',
      'Transform data to Silver layer',
      'Aggregate data to Gold layer',
      'Create semantic model',
      'Build reports'
    ],
    correct_answer: [
      'Create lakehouse',
      'Ingest raw data to Bronze layer',
      'Transform data to Silver layer',
      'Aggregate data to Gold layer',
      'Create semantic model',
      'Build reports'
    ],
    explanation: 'Medallion architecture follows Bronze (raw) → Silver (transformed) → Gold (aggregated) pattern.',
    category: 'Lakehouse',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_dd_2',
    question: 'Arrange the steps for setting up Fabric deployment pipelines:',
    type: 'drag-drop',
    options: [
      'Create Development workspace',
      'Create Test workspace',
      'Create Production workspace',
      'Create deployment pipeline',
      'Assign workspaces to stages',
      'Configure deployment rules'
    ],
    correct_answer: [
      'Create Development workspace',
      'Create Test workspace',
      'Create Production workspace',
      'Create deployment pipeline',
      'Assign workspaces to stages',
      'Configure deployment rules'
    ],
    explanation: 'Deployment pipelines require workspaces for each environment before configuration.',
    category: 'Deployment',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_dd_3',
    question: 'Order the steps to optimize Delta table performance:',
    type: 'drag-drop',
    options: [
      'Analyze current file structure',
      'Run OPTIMIZE command',
      'Enable V-Order',
      'Run VACUUM command',
      'Add Z-ORDER on key columns',
      'Monitor query performance'
    ],
    correct_answer: [
      'Analyze current file structure',
      'Run OPTIMIZE command',
      'Add Z-ORDER on key columns',
      'Enable V-Order',
      'Run VACUUM command',
      'Monitor query performance'
    ],
    explanation: 'Delta optimization starts with analysis, then compaction, ordering, and cleanup.',
    category: 'Lakehouse',
    difficulty: 'hard',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_dd_4',
    question: 'Arrange the eventstream processing flow:',
    type: 'drag-drop',
    options: [
      'Connect to event source',
      'Define transformations',
      'Apply windowing functions',
      'Configure output destination',
      'Start the eventstream',
      'Monitor processing'
    ],
    correct_answer: [
      'Connect to event source',
      'Define transformations',
      'Apply windowing functions',
      'Configure output destination',
      'Start the eventstream',
      'Monitor processing'
    ],
    explanation: 'Eventstream setup follows source → transform → output → monitor pattern.',
    category: 'Real-Time Intelligence',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },

  // ==========================================
  // TRUE-FALSE-TABLE Questions
  // ==========================================
  
  // AI-900 True-False Questions
  {
    id: 'ai900_tf_1',
    question: 'Evaluate the following statements about Azure AI Services (previously known as "Azure Cognitive Services"):',
    type: 'true-false-table',
    options: [
      'Azure AI Services (previously known as "Azure Cognitive Services") provides pre-built AI models that can be used without machine learning expertise',
      'Custom Vision requires you to write code for image classification',
      'Text Analytics API can detect sentiment in text',
      'Speech Service only supports English language',
      'Azure AI Document Intelligence (previously known as "Form Recognizer") can extract data from structured documents like invoices'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": false,
      "2": true,
      "3": false,
      "4": true
    }),
    explanation: 'Azure AI Services (previously known as "Azure Cognitive Services") are designed to be easy-to-use pre-built AI capabilities. Custom Vision is a no-code solution, Text Analytics includes sentiment analysis, Speech Service supports multiple languages, and Azure AI Document Intelligence (previously known as "Form Recognizer") excels at document data extraction.',
    category: 'AI Services',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_tf_2',
    question: 'Evaluate the following statements about Machine Learning types:',
    type: 'true-false-table',
    options: [
      'Supervised learning requires labeled training data',
      'Unsupervised learning is used to find hidden patterns in data without labels',
      'Regression is used to predict categorical outcomes',
      'Classification can be used for spam detection',
      'Clustering is a type of supervised learning'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": false
    }),
    explanation: 'Supervised learning uses labeled data. Unsupervised learning finds patterns without labels. Regression predicts numeric values (not categorical). Classification handles categorical outputs like spam detection. Clustering is unsupervised, not supervised.',
    category: 'Machine Learning Fundamentals',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_tf_3',
    question: 'Evaluate the following statements about Computer Vision capabilities:',
    type: 'true-false-table',
    options: [
      'Object detection identifies objects and their locations in images',
      'Image classification assigns a single label to an entire image',
      'OCR can only read printed text, not handwritten text',
      'Face detection can identify age and emotion',
      'Semantic segmentation classifies each pixel in an image'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": true
    }),
    explanation: 'Object detection locates objects with bounding boxes. Classification assigns labels. OCR can read both printed and handwritten text. Face detection includes age and emotion analysis. Semantic segmentation classifies every pixel.',
    category: 'Computer Vision Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_tf_4',
    question: 'Evaluate the following statements about Responsible AI principles:',
    type: 'true-false-table',
    options: [
      'Fairness ensures AI systems treat all people equitably',
      'Transparency means users should understand how AI makes decisions',
      'Reliability is about making AI systems fast',
      'Privacy requires protecting user data from unauthorized access',
      'Accountability means someone is responsible for AI system outcomes'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": true
    }),
    explanation: 'Fairness is about equity. Transparency is about explainability. Reliability is about consistent and safe operation (not speed). Privacy protects data. Accountability ensures responsibility for outcomes.',
    category: 'AI Workloads and Considerations',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_tf_5',
    question: 'Evaluate the following statements about Natural Language Processing:',
    type: 'true-false-table',
    options: [
      'Sentiment analysis determines if text is positive, negative, or neutral',
      'Named Entity Recognition (NER) identifies people, places, and organizations in text',
      'Language detection can only identify one language per document',
      'Key phrase extraction identifies the main topics in text',
      'Text translation requires the source language to be specified'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": false
    }),
    explanation: 'Sentiment analysis classifies text emotion. NER extracts named entities. Language detection can identify multiple languages. Key phrase extraction finds main topics. Translation can auto-detect the source language.',
    category: 'Natural Language Processing Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_tf_6',
    question: 'Evaluate the following statements about conversational AI:',
    type: 'true-false-table',
    options: [
      'QnA Maker can create a knowledge base from FAQ documents',
      'LUIS is used for understanding user intents and entities',
      'Azure Bot Service can only connect to one messaging channel',
      'Chatbots can maintain conversation context across multiple turns',
      'Bot Framework Composer requires extensive coding knowledge'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": false
    }),
    explanation: 'QnA Maker extracts Q&A from documents. LUIS handles intent recognition. Bot Service supports multiple channels (Teams, web, etc.). Bots maintain context. Bot Framework Composer is a visual, low-code tool.',
    category: 'Conversational AI Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },

  // AZ-900 True-False Questions
  {
    id: 'az900_tf_1',
    question: 'Evaluate the following statements about Azure Storage Services:',
    type: 'true-false-table',
    options: [
      'Azure Blob Storage is optimized for storing large amounts of unstructured data',
      'Azure File Storage cannot be accessed via SMB protocol',
      'Table Storage is a NoSQL key-value store',
      'Queue Storage is used for storing relational data',
      'Disk Storage provides persistent storage for Azure Virtual Machines'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": false,
      "2": true,
      "3": false,
      "4": true
    }),
    explanation: 'Azure Blob Storage handles unstructured data like images and documents. File Storage supports SMB protocol for network file shares. Table Storage is indeed a NoSQL service. Queue Storage is for message queuing, not relational data. Disk Storage provides persistent disks for VMs.',
    category: 'Storage Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_tf_2',
    question: 'Evaluate the following statements about Azure compute services:',
    type: 'true-false-table',
    options: [
      'Azure Functions is a serverless compute service',
      'Virtual Machines require you to manage the operating system',
      'Azure Kubernetes Service is only for Docker containers',
      'App Service can host web applications without managing infrastructure',
      'Azure Batch is used for running large-scale parallel jobs'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": true
    }),
    explanation: 'Functions is serverless. VMs require OS management. AKS supports any OCI-compliant container, not just Docker. App Service is PaaS for web apps. Batch handles large-scale parallel workloads.',
    category: 'Compute Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_tf_3',
    question: 'Evaluate the following statements about Azure security:',
    type: 'true-false-table',
    options: [
      'Microsoft Entra ID (previously known as "Azure Active Directory") is used for identity and access management',
      'Network Security Groups filter traffic at the network layer',
      'Azure Key Vault stores passwords in plain text',
      'Azure DDoS Protection defends against distributed denial-of-service attacks',
      'Multi-factor authentication requires only a password'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": false
    }),
    explanation: 'Microsoft Entra ID (previously known as "Azure AD") manages identities. NSGs filter network traffic. Key Vault encrypts secrets (not plain text). DDoS Protection guards against attacks. MFA requires multiple factors, not just a password.',
    category: 'Security',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_tf_4',
    question: 'Evaluate the following statements about cloud concepts:',
    type: 'true-false-table',
    options: [
      'IaaS provides the most control over infrastructure',
      'PaaS requires you to manage the operating system',
      'SaaS is ready-to-use software accessed via the internet',
      'Public cloud resources are dedicated to a single organization',
      'Hybrid cloud combines public and private cloud environments'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": false,
      "2": true,
      "3": false,
      "4": true
    }),
    explanation: 'IaaS gives most infrastructure control. PaaS manages the OS for you. SaaS is ready-to-use. Public cloud is shared (not dedicated). Hybrid combines public and private clouds.',
    category: 'Cloud Concepts',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_tf_5',
    question: 'Evaluate the following statements about Azure governance:',
    type: 'true-false-table',
    options: [
      'Azure Policy can enforce organizational standards on resources',
      'Resource locks can prevent accidental deletion of resources',
      'Management groups can contain only subscriptions, not other management groups',
      'Azure Blueprints can include policy assignments and role assignments',
      'Tags can be used to organize and track costs by department'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": true
    }),
    explanation: 'Policy enforces standards. Locks prevent deletion. Management groups can be nested. Blueprints include policies and roles. Tags help organize and track costs.',
    category: 'Governance',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_tf_6',
    question: 'Evaluate the following statements about Azure networking:',
    type: 'true-false-table',
    options: [
      'Virtual Networks provide isolation for Azure resources',
      'VPN Gateway connects on-premises networks to Azure',
      'Azure Load Balancer only works with virtual machines',
      'ExpressRoute provides a private connection to Azure',
      'Azure DNS can host custom domain names'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": true
    }),
    explanation: 'VNets provide isolation. VPN Gateway connects on-premises to Azure. Load Balancer works with VMs, containers, and other services. ExpressRoute is private connectivity. Azure DNS hosts custom domains.',
    category: 'Networking',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },

  // DP-700 True-False Questions
  {
    id: 'dp700_tf_1',
    question: 'Evaluate the following statements about Microsoft Fabric lakehouses:',
    type: 'true-false-table',
    options: [
      'Lakehouses support both SQL and Spark queries',
      'Delta Lake format is the default for lakehouse tables',
      'Lakehouses can only store structured data',
      'SQL endpoint allows T-SQL queries on lakehouse tables',
      'Shortcuts can reference external data without copying it'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": true
    }),
    explanation: 'Lakehouses support SQL and Spark. Delta Lake is the default format. Lakehouses handle structured, semi-structured, and unstructured data. SQL endpoint enables T-SQL. Shortcuts reference external data in place.',
    category: 'Lakehouse',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_tf_2',
    question: 'Evaluate the following statements about Fabric data pipelines:',
    type: 'true-false-table',
    options: [
      'Data pipelines can orchestrate notebooks and dataflows',
      'Copy activity requires custom code for data movement',
      'Pipelines support schedule-based and event-based triggers',
      'Pipeline parameters allow dynamic configuration',
      'ForEach activity can only process items sequentially'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": false,
      "2": true,
      "3": true,
      "4": false
    }),
    explanation: 'Pipelines orchestrate various activities. Copy activity is no-code. Pipelines support multiple trigger types. Parameters enable dynamic configuration. ForEach can process items in parallel.',
    category: 'Data Pipeline',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_tf_3',
    question: 'Evaluate the following statements about Fabric security:',
    type: 'true-false-table',
    options: [
      'Row-level security requires creating a security function',
      'Workspace roles control access to all items in a workspace',
      'Object-level permissions cannot override workspace roles',
      'Service principals can access Fabric APIs',
      'Managed private endpoints provide secure connectivity to Azure services'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": true
    }),
    explanation: 'RLS uses security functions. Workspace roles apply to all items. Object permissions can provide more specific access. Service principals enable API access. Private endpoints secure connectivity.',
    category: 'Security',
    difficulty: 'hard',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_tf_4',
    question: 'Evaluate the following statements about Real-Time Intelligence:',
    type: 'true-false-table',
    options: [
      'Eventstreams can ingest data from Azure Event Hubs',
      'KQL databases use Kusto Query Language',
      'Tumbling windows can overlap',
      'CDC (Change Data Capture) enables streaming database changes',
      'Eventhouses store data in Delta format for OneLake access'
    ],
    correct_answer: JSON.stringify({
      "0": true,
      "1": true,
      "2": false,
      "3": true,
      "4": true
    }),
    explanation: 'Eventstreams support Event Hubs. KQL databases use Kusto. Tumbling windows do NOT overlap (that\'s sliding windows). CDC captures database changes. Eventhouses can sync to OneLake in Delta format.',
    category: 'Real-Time Intelligence',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },

  // ==========================================
  // DROPDOWN-FILL Questions
  // ==========================================
  
  // AI-900 Dropdown-Fill Questions
  {
    id: 'ai900_df_1',
    question: 'Complete the statement: To build a chatbot that can answer customer questions using natural language, you should use [BLANK_1]. To extract key phrases from customer feedback, you should use [BLANK_2].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Azure Bot Service', 'Azure Machine Learning', 'Azure AI Search (previously known as "Azure Cognitive Search")', 'Azure Data Factory']
      },
      {
        id: 'blank2',
        options: ['Text Analytics API', 'Computer Vision API', 'Face API', 'Speech Service']
      }
    ],
    correct_answer: {
      'blank1': 'Azure Bot Service',
      'blank2': 'Text Analytics API'
    },
    explanation: 'Azure Bot Service is used to build conversational AI chatbots, while Text Analytics API provides key phrase extraction from text.',
    category: 'AI Services',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_df_2',
    question: 'In machine learning, [BLANK_1] is used when the training data includes both input features and known output labels. [BLANK_2] is used when the model must find patterns in data without predefined labels.',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Supervised learning', 'Unsupervised learning', 'Reinforcement learning', 'Deep learning']
      },
      {
        id: 'blank2',
        options: ['Unsupervised learning', 'Supervised learning', 'Transfer learning', 'Active learning']
      }
    ],
    correct_answer: {
      'blank1': 'Supervised learning',
      'blank2': 'Unsupervised learning'
    },
    explanation: 'Supervised learning uses labeled data to train models, while unsupervised learning discovers patterns in unlabeled data.',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_df_3',
    question: 'To detect objects in images including their location and bounding boxes, use [BLANK_1]. To simply categorize an image into predefined classes, use [BLANK_2]. To read text from images, use [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Object Detection', 'Image Classification', 'OCR', 'Semantic Segmentation']
      },
      {
        id: 'blank2',
        options: ['Image Classification', 'Object Detection', 'Face Detection', 'Image Segmentation']
      },
      {
        id: 'blank3',
        options: ['OCR', 'Object Detection', 'Image Classification', 'Content Moderation']
      }
    ],
    correct_answer: {
      'blank1': 'Object Detection',
      'blank2': 'Image Classification',
      'blank3': 'OCR'
    },
    explanation: 'Object Detection identifies objects with bounding boxes, Image Classification assigns categories to images, and OCR (Optical Character Recognition) reads text from images.',
    category: 'Computer Vision Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_df_4',
    question: 'When building a conversational AI, [BLANK_1] is used to understand user intent. [BLANK_2] creates a knowledge base from FAQ documents. [BLANK_3] provides the framework to build and deploy the bot.',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['LUIS', 'QnA Maker', 'Bot Framework', 'Text Analytics']
      },
      {
        id: 'blank2',
        options: ['QnA Maker', 'LUIS', 'Custom Vision', 'Azure AI Document Intelligence (previously known as "Form Recognizer")']
      },
      {
        id: 'blank3',
        options: ['Azure Bot Service', 'LUIS', 'QnA Maker', 'Azure AI Search (previously known as "Cognitive Search")']
      }
    ],
    correct_answer: {
      'blank1': 'LUIS',
      'blank2': 'QnA Maker',
      'blank3': 'Azure Bot Service'
    },
    explanation: 'LUIS understands natural language intents, QnA Maker creates FAQ knowledge bases, and Azure Bot Service provides the infrastructure to build and deploy bots.',
    category: 'Conversational AI Workloads',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_df_5',
    question: '[BLANK_1] is the principle ensuring AI treats all users equitably. [BLANK_2] requires AI decisions to be explainable. [BLANK_3] means the AI system performs consistently and safely.',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Fairness', 'Transparency', 'Reliability', 'Privacy']
      },
      {
        id: 'blank2',
        options: ['Transparency', 'Fairness', 'Accountability', 'Inclusiveness']
      },
      {
        id: 'blank3',
        options: ['Reliability and Safety', 'Transparency', 'Fairness', 'Privacy']
      }
    ],
    correct_answer: {
      'blank1': 'Fairness',
      'blank2': 'Transparency',
      'blank3': 'Reliability and Safety'
    },
    explanation: 'Fairness treats users equally, Transparency makes AI explainable, and Reliability ensures consistent and safe operation.',
    category: 'AI Workloads and Considerations',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_df_6',
    question: 'To convert speech to text in real-time, use [BLANK_1]. To synthesize natural-sounding speech from text, use [BLANK_2]. To translate spoken language in real-time, use [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Speech-to-Text', 'Text-to-Speech', 'Speech Translation', 'Speaker Recognition']
      },
      {
        id: 'blank2',
        options: ['Text-to-Speech', 'Speech-to-Text', 'Speech Translation', 'Intent Recognition']
      },
      {
        id: 'blank3',
        options: ['Speech Translation', 'Speech-to-Text', 'Text-to-Speech', 'Language Detection']
      }
    ],
    correct_answer: {
      'blank1': 'Speech-to-Text',
      'blank2': 'Text-to-Speech',
      'blank3': 'Speech Translation'
    },
    explanation: 'Speech-to-Text transcribes audio, Text-to-Speech generates audio from text, and Speech Translation converts spoken language between languages.',
    category: 'Speech Services',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_df_7',
    question: 'Predicting a numeric value like house price uses [BLANK_1]. Predicting a category like spam/not spam uses [BLANK_2]. Grouping similar customers together uses [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Regression', 'Classification', 'Clustering', 'Anomaly Detection']
      },
      {
        id: 'blank2',
        options: ['Classification', 'Regression', 'Clustering', 'Time Series']
      },
      {
        id: 'blank3',
        options: ['Clustering', 'Classification', 'Regression', 'Reinforcement Learning']
      }
    ],
    correct_answer: {
      'blank1': 'Regression',
      'blank2': 'Classification',
      'blank3': 'Clustering'
    },
    explanation: 'Regression predicts continuous numeric values. Classification predicts discrete categories. Clustering groups similar data points without labels.',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },

  // AZ-900 Dropdown-Fill Questions
  {
    id: 'az900_df_1',
    question: 'In Azure, [BLANK_1] provides identity and access management, while [BLANK_2] helps protect against DDoS attacks. For encrypting data at rest, Azure uses [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Microsoft Entra ID (previously known as "Azure Active Directory")', 'Azure Firewall', 'Microsoft Defender for Cloud (previously known as "Azure Security Center")', 'Azure Key Vault']
      },
      {
        id: 'blank2',
        options: ['Azure DDoS Protection', 'Microsoft Entra ID (previously known as "Azure Active Directory")', 'Microsoft Sentinel (previously known as "Azure Sentinel")', 'Azure Bastion']
      },
      {
        id: 'blank3',
        options: ['Storage Service Encryption', 'Azure Firewall', 'Network Security Groups', 'Azure Front Door']
      }
    ],
    correct_answer: {
      'blank1': 'Microsoft Entra ID (previously known as "Azure Active Directory")',
      'blank2': 'Azure DDoS Protection',
      'blank3': 'Storage Service Encryption'
    },
    explanation: 'Microsoft Entra ID (previously known as "Azure AD") manages identities, DDoS Protection guards against distributed attacks, and Storage Service Encryption automatically encrypts data at rest.',
    category: 'Security',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_df_2',
    question: 'To deploy containerized applications without managing infrastructure, use [BLANK_1]. For running serverless code triggered by events, use [BLANK_2]. To host web applications with automatic scaling, use [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Azure Container Instances', 'Azure Virtual Machines', 'Azure App Service', 'Azure Batch']
      },
      {
        id: 'blank2',
        options: ['Azure Functions', 'Azure Logic Apps', 'Azure Container Instances', 'Azure Virtual Machines']
      },
      {
        id: 'blank3',
        options: ['Azure App Service', 'Azure Functions', 'Azure Virtual Machines', 'Azure Kubernetes Service']
      }
    ],
    correct_answer: {
      'blank1': 'Azure Container Instances',
      'blank2': 'Azure Functions',
      'blank3': 'Azure App Service'
    },
    explanation: 'Azure Container Instances runs containers without VM management, Azure Functions provides serverless event-driven compute, and App Service offers managed web hosting with auto-scaling.',
    category: 'Compute Services',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_df_3',
    question: 'For storing unstructured data like images and videos, use [BLANK_1]. For file shares accessible via SMB, use [BLANK_2]. For NoSQL key-value data, use [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Blob Storage', 'File Storage', 'Table Storage', 'Queue Storage']
      },
      {
        id: 'blank2',
        options: ['File Storage', 'Blob Storage', 'Disk Storage', 'Queue Storage']
      },
      {
        id: 'blank3',
        options: ['Table Storage', 'Blob Storage', 'File Storage', 'Queue Storage']
      }
    ],
    correct_answer: {
      'blank1': 'Blob Storage',
      'blank2': 'File Storage',
      'blank3': 'Table Storage'
    },
    explanation: 'Blob Storage handles unstructured data. File Storage provides SMB file shares. Table Storage offers NoSQL key-value storage.',
    category: 'Storage Services',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_df_4',
    question: '[BLANK_1] is the service model where you manage everything from OS to applications. [BLANK_2] manages the infrastructure but you manage the application. [BLANK_3] provides ready-to-use software.',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['IaaS', 'PaaS', 'SaaS', 'FaaS']
      },
      {
        id: 'blank2',
        options: ['PaaS', 'IaaS', 'SaaS', 'DBaaS']
      },
      {
        id: 'blank3',
        options: ['SaaS', 'PaaS', 'IaaS', 'CaaS']
      }
    ],
    correct_answer: {
      'blank1': 'IaaS',
      'blank2': 'PaaS',
      'blank3': 'SaaS'
    },
    explanation: 'IaaS (Infrastructure as a Service) requires managing OS and above. PaaS (Platform as a Service) manages infrastructure for you. SaaS (Software as a Service) is fully managed software.',
    category: 'Cloud Concepts',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_df_5',
    question: 'To enforce organizational standards, use [BLANK_1]. To prevent accidental resource deletion, use [BLANK_2]. To organize subscriptions hierarchically, use [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Azure Policy', 'Resource Locks', 'Management Groups', 'Azure Blueprints']
      },
      {
        id: 'blank2',
        options: ['Resource Locks', 'Azure Policy', 'Management Groups', 'Tags']
      },
      {
        id: 'blank3',
        options: ['Management Groups', 'Resource Locks', 'Azure Policy', 'Resource Groups']
      }
    ],
    correct_answer: {
      'blank1': 'Azure Policy',
      'blank2': 'Resource Locks',
      'blank3': 'Management Groups'
    },
    explanation: 'Azure Policy enforces rules and effects. Resource Locks prevent deletion or modification. Management Groups organize subscriptions into a hierarchy.',
    category: 'Governance',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_df_6',
    question: 'To analyze and visualize Azure spending, use [BLANK_1]. To set spending limits and alerts, use [BLANK_2]. To get discounted rates for long-term commitment, use [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Cost Management', 'Azure Advisor', 'Azure Monitor', 'Pricing Calculator']
      },
      {
        id: 'blank2',
        options: ['Budgets and Alerts', 'Cost Management', 'Azure Policy', 'Tags']
      },
      {
        id: 'blank3',
        options: ['Reserved Instances', 'Spot VMs', 'Budgets', 'Azure Hybrid Benefit']
      }
    ],
    correct_answer: {
      'blank1': 'Cost Management',
      'blank2': 'Budgets and Alerts',
      'blank3': 'Reserved Instances'
    },
    explanation: 'Cost Management analyzes spending. Budgets and Alerts notify about spending thresholds. Reserved Instances provide discounts for 1-3 year commitments.',
    category: 'Cost Management',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },

  // DP-700 Dropdown-Fill Questions
  {
    id: 'dp700_df_1',
    question: 'In Fabric, to store and query data using both T-SQL and Spark, use a [BLANK_1]. For real-time streaming analytics, use an [BLANK_2]. For traditional data warehousing with T-SQL only, use a [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Lakehouse', 'Warehouse', 'Eventhouse', 'Datamart']
      },
      {
        id: 'blank2',
        options: ['Eventhouse', 'Lakehouse', 'Warehouse', 'Database']
      },
      {
        id: 'blank3',
        options: ['Warehouse', 'Lakehouse', 'Eventhouse', 'Data Pipeline']
      }
    ],
    correct_answer: {
      'blank1': 'Lakehouse',
      'blank2': 'Eventhouse',
      'blank3': 'Warehouse'
    },
    explanation: 'Lakehouses support both T-SQL and Spark. Eventhouses are for real-time analytics with KQL. Warehouses are traditional T-SQL data warehouses.',
    category: 'Lakehouse',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_df_2',
    question: 'To compact small files in a Delta table, run [BLANK_1]. To remove old files no longer referenced, run [BLANK_2]. To improve read performance with columnar sorting, enable [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['OPTIMIZE', 'VACUUM', 'V-Order', 'Z-ORDER']
      },
      {
        id: 'blank2',
        options: ['VACUUM', 'OPTIMIZE', 'DELETE', 'DROP']
      },
      {
        id: 'blank3',
        options: ['V-Order', 'OPTIMIZE', 'VACUUM', 'Parquet']
      }
    ],
    correct_answer: {
      'blank1': 'OPTIMIZE',
      'blank2': 'VACUUM',
      'blank3': 'V-Order'
    },
    explanation: 'OPTIMIZE compacts small files. VACUUM removes unreferenced files. V-Order optimizes columnar storage for read performance.',
    category: 'Lakehouse',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_df_3',
    question: 'To implement row-level security in a Fabric warehouse, create a [BLANK_1]. To view active user sessions, query [BLANK_2]. To see historical query patterns, use [BLANK_3] schema.',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Security function and policy', 'View', 'Stored procedure', 'Trigger']
      },
      {
        id: 'blank2',
        options: ['sys.dm_exec_sessions', 'sys.dm_exec_requests', 'queryinsights.exec_requests_history', 'sys.dm_exec_connections']
      },
      {
        id: 'blank3',
        options: ['queryinsights', 'sys', 'dbo', 'information_schema']
      }
    ],
    correct_answer: {
      'blank1': 'Security function and policy',
      'blank2': 'sys.dm_exec_sessions',
      'blank3': 'queryinsights'
    },
    explanation: 'RLS requires a security function and policy. dm_exec_sessions shows active sessions. queryinsights schema contains historical query data.',
    category: 'Security',
    difficulty: 'hard',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_df_4',
    question: 'For non-overlapping time windows in streaming, use [BLANK_1]. For windows that can overlap, use [BLANK_2]. For windows based on inactivity, use [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Tumbling window', 'Sliding window', 'Hopping window', 'Session window']
      },
      {
        id: 'blank2',
        options: ['Sliding window', 'Tumbling window', 'Session window', 'Snapshot window']
      },
      {
        id: 'blank3',
        options: ['Session window', 'Tumbling window', 'Sliding window', 'Hopping window']
      }
    ],
    correct_answer: {
      'blank1': 'Tumbling window',
      'blank2': 'Sliding window',
      'blank3': 'Session window'
    },
    explanation: 'Tumbling windows are non-overlapping fixed intervals. Sliding windows overlap. Session windows are based on periods of activity/inactivity.',
    category: 'Real-Time Intelligence',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_df_5',
    question: 'For orchestrating multiple Fabric items sequentially, use a [BLANK_1]. For low-code data transformation, use [BLANK_2]. For custom Spark code, use a [BLANK_3].',
    type: 'dropdown-fill',
    blanks: [
      {
        id: 'blank1',
        options: ['Data pipeline', 'Dataflow Gen2', 'Notebook', 'Eventstream']
      },
      {
        id: 'blank2',
        options: ['Dataflow Gen2', 'Data pipeline', 'Notebook', 'SQL script']
      },
      {
        id: 'blank3',
        options: ['Notebook', 'Dataflow Gen2', 'Data pipeline', 'KQL queryset']
      }
    ],
    correct_answer: {
      'blank1': 'Data pipeline',
      'blank2': 'Dataflow Gen2',
      'blank3': 'Notebook'
    },
    explanation: 'Data pipelines orchestrate activities. Dataflow Gen2 provides Power Query-based transformation. Notebooks run custom Spark code.',
    category: 'Data Pipeline',
    difficulty: 'easy',
    exam_type: 'DP-700'
  },

  // ==========================================
  // DRAG-DROP-MATCHING Questions
  // ==========================================
  
  // AI-900 Matching Questions
  {
    id: 'ai900_dm_1',
    question: 'Match each Azure AI service with its primary function:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Computer Vision', 'Language Service', 'Speech Service', 'Azure Bot Service'],
      right: ['Analyze images and extract information', 'Understand and generate text', 'Convert speech to text and text to speech', 'Build conversational AI experiences']
    },
    correct_answer: {
      'Computer Vision': 'Analyze images and extract information',
      'Language Service': 'Understand and generate text',
      'Speech Service': 'Convert speech to text and text to speech',
      'Azure Bot Service': 'Build conversational AI experiences'
    },
    explanation: 'Each Azure AI service is specialized for specific tasks: Computer Vision for image analysis, Language for NLP, Speech for audio processing, and Bot Service for chatbots.',
    category: 'AI Services',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dm_2',
    question: 'Match each machine learning concept with its description:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Classification', 'Regression', 'Clustering', 'Anomaly Detection'],
      right: ['Predicting categorical labels', 'Predicting numeric values', 'Grouping similar items', 'Identifying unusual patterns']
    },
    correct_answer: {
      'Classification': 'Predicting categorical labels',
      'Regression': 'Predicting numeric values',
      'Clustering': 'Grouping similar items',
      'Anomaly Detection': 'Identifying unusual patterns'
    },
    explanation: 'Classification predicts categories, Regression predicts numbers, Clustering groups similar data points, and Anomaly Detection finds outliers.',
    category: 'Machine Learning Fundamentals',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dm_3',
    question: 'Match each Responsible AI principle with its focus area:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Fairness', 'Reliability & Safety', 'Privacy & Security', 'Inclusiveness', 'Transparency', 'Accountability'],
      right: ['Treating all people equitably', 'Performing reliably and safely', 'Protecting user data', 'Empowering everyone', 'Being understandable', 'Ensuring responsibility for AI systems']
    },
    correct_answer: {
      'Fairness': 'Treating all people equitably',
      'Reliability & Safety': 'Performing reliably and safely',
      'Privacy & Security': 'Protecting user data',
      'Inclusiveness': 'Empowering everyone',
      'Transparency': 'Being understandable',
      'Accountability': 'Ensuring responsibility for AI systems'
    },
    explanation: 'Microsoft\'s Responsible AI principles guide ethical AI development: Fairness, Reliability, Privacy, Inclusiveness, Transparency, and Accountability.',
    category: 'AI Workloads and Considerations',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dm_4',
    question: 'Match each NLP task with its example:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Sentiment Analysis', 'Named Entity Recognition', 'Language Detection', 'Key Phrase Extraction'],
      right: ['Determining positive/negative tone', 'Identifying people and places', 'Identifying which language text is in', 'Finding main topics in text']
    },
    correct_answer: {
      'Sentiment Analysis': 'Determining positive/negative tone',
      'Named Entity Recognition': 'Identifying people and places',
      'Language Detection': 'Identifying which language text is in',
      'Key Phrase Extraction': 'Finding main topics in text'
    },
    explanation: 'Sentiment Analysis detects emotion tone. NER finds named entities. Language Detection identifies languages. Key Phrase Extraction finds main topics.',
    category: 'Natural Language Processing Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dm_5',
    question: 'Match each Computer Vision capability with its use case:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Image Classification', 'Object Detection', 'OCR', 'Face Detection'],
      right: ['Categorizing photos by content', 'Finding items in images with locations', 'Reading text from scanned documents', 'Identifying faces in photographs']
    },
    correct_answer: {
      'Image Classification': 'Categorizing photos by content',
      'Object Detection': 'Finding items in images with locations',
      'OCR': 'Reading text from scanned documents',
      'Face Detection': 'Identifying faces in photographs'
    },
    explanation: 'Classification categorizes entire images. Object Detection locates items. OCR reads text. Face Detection finds faces.',
    category: 'Computer Vision Workloads',
    difficulty: 'easy',
    exam_type: 'AI-900'
  },
  {
    id: 'ai900_dm_6',
    question: 'Match each Azure AI service (previously known as "Cognitive Service") with its capability:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Azure AI Document Intelligence (previously known as "Form Recognizer")', 'Custom Vision', 'LUIS', 'QnA Maker'],
      right: ['Extract data from documents', 'Train custom image models', 'Understand natural language intent', 'Create FAQ chatbots']
    },
    correct_answer: {
      'Azure AI Document Intelligence (previously known as "Form Recognizer")': 'Extract data from documents',
      'Custom Vision': 'Train custom image models',
      'LUIS': 'Understand natural language intent',
      'QnA Maker': 'Create FAQ chatbots'
    },
    explanation: 'Azure AI Document Intelligence (previously known as "Form Recognizer") extracts document data. Custom Vision trains image models. LUIS handles intent recognition. QnA Maker creates knowledge bases.',
    category: 'AI Services',
    difficulty: 'medium',
    exam_type: 'AI-900'
  },

  // AZ-900 Matching Questions
  {
    id: 'az900_dm_1',
    question: 'Match each Azure service category with an example service:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Compute', 'Storage', 'Networking', 'Database'],
      right: ['Virtual Machines', 'Blob Storage', 'Virtual Network', 'Cosmos DB']
    },
    correct_answer: {
      'Compute': 'Virtual Machines',
      'Storage': 'Blob Storage',
      'Networking': 'Virtual Network',
      'Database': 'Cosmos DB'
    },
    explanation: 'Azure services are categorized by function: Compute (VMs), Storage (Blob), Networking (VNet), and Database (Cosmos DB).',
    category: 'Core Azure Services',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dm_2',
    question: 'Match each cloud deployment model with its description:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Multi-Cloud'],
      right: ['Resources owned by cloud provider, shared among tenants', 'Dedicated resources for a single organization', 'Combination of public and private clouds', 'Using services from multiple cloud providers']
    },
    correct_answer: {
      'Public Cloud': 'Resources owned by cloud provider, shared among tenants',
      'Private Cloud': 'Dedicated resources for a single organization',
      'Hybrid Cloud': 'Combination of public and private clouds',
      'Multi-Cloud': 'Using services from multiple cloud providers'
    },
    explanation: 'Cloud deployment models offer different levels of control and flexibility: Public (shared), Private (dedicated), Hybrid (mixed), and Multi-Cloud (multiple providers).',
    category: 'Cloud Concepts',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dm_3',
    question: 'Match each Azure governance tool with its purpose:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Azure Policy', 'Azure Blueprints', 'Resource Locks', 'Management Groups'],
      right: ['Enforce organizational standards', 'Deploy compliant environments', 'Prevent accidental deletion', 'Organize subscriptions hierarchically']
    },
    correct_answer: {
      'Azure Policy': 'Enforce organizational standards',
      'Azure Blueprints': 'Deploy compliant environments',
      'Resource Locks': 'Prevent accidental deletion',
      'Management Groups': 'Organize subscriptions hierarchically'
    },
    explanation: 'Azure governance tools help manage resources: Policy enforces rules, Blueprints deploys templates, Locks prevent changes, and Management Groups organize subscriptions.',
    category: 'Governance',
    difficulty: 'medium',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dm_4',
    question: 'Match each Azure storage type with its best use case:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Blob Storage', 'File Storage', 'Table Storage', 'Queue Storage'],
      right: ['Images and videos', 'Lift-and-shift file shares', 'NoSQL key-value data', 'Asynchronous messaging']
    },
    correct_answer: {
      'Blob Storage': 'Images and videos',
      'File Storage': 'Lift-and-shift file shares',
      'Table Storage': 'NoSQL key-value data',
      'Queue Storage': 'Asynchronous messaging'
    },
    explanation: 'Blob handles media files. File Storage replaces on-premises shares. Table is NoSQL. Queue enables messaging between components.',
    category: 'Storage Services',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dm_5',
    question: 'Match each Azure compute option with its characteristic:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Virtual Machines', 'Azure Functions', 'App Service', 'Container Instances'],
      right: ['Full OS control', 'Event-driven serverless', 'Managed web hosting', 'Quick container deployment']
    },
    correct_answer: {
      'Virtual Machines': 'Full OS control',
      'Azure Functions': 'Event-driven serverless',
      'App Service': 'Managed web hosting',
      'Container Instances': 'Quick container deployment'
    },
    explanation: 'VMs provide full control. Functions are serverless. App Service is PaaS for web apps. Container Instances run containers without orchestration.',
    category: 'Compute Services',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },
  {
    id: 'az900_dm_6',
    question: 'Match each Azure security service with its function:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Microsoft Entra ID (previously known as "Azure AD")', 'Key Vault', 'DDoS Protection', 'Microsoft Defender for Cloud (previously known as "Security Center")'],
      right: ['Identity management', 'Secret management', 'Network attack protection', 'Security posture management']
    },
    correct_answer: {
      'Microsoft Entra ID (previously known as "Azure AD")': 'Identity management',
      'Key Vault': 'Secret management',
      'DDoS Protection': 'Network attack protection',
      'Microsoft Defender for Cloud (previously known as "Security Center")': 'Security posture management'
    },
    explanation: 'Microsoft Entra ID (previously known as "Azure AD") manages identities. Key Vault stores secrets. DDoS Protection guards networks. Microsoft Defender for Cloud (previously known as "Security Center") assesses security posture.',
    category: 'Security',
    difficulty: 'easy',
    exam_type: 'AZ-900'
  },

  // DP-700 Matching Questions
  {
    id: 'dp700_dm_1',
    question: 'Match each Fabric item type with its primary use:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Lakehouse', 'Warehouse', 'Eventhouse', 'Data Pipeline'],
      right: ['Unified data storage with SQL and Spark', 'Traditional T-SQL analytics', 'Real-time streaming analytics', 'Data orchestration and ETL']
    },
    correct_answer: {
      'Lakehouse': 'Unified data storage with SQL and Spark',
      'Warehouse': 'Traditional T-SQL analytics',
      'Eventhouse': 'Real-time streaming analytics',
      'Data Pipeline': 'Data orchestration and ETL'
    },
    explanation: 'Lakehouses combine data lake and warehouse. Warehouses are for T-SQL workloads. Eventhouses handle streaming. Pipelines orchestrate data movement.',
    category: 'Lakehouse',
    difficulty: 'easy',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_dm_2',
    question: 'Match each Delta Lake command with its purpose:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['OPTIMIZE', 'VACUUM', 'Z-ORDER', 'DESCRIBE HISTORY'],
      right: ['Compact small files', 'Remove old files', 'Sort data for query performance', 'View table version history']
    },
    correct_answer: {
      'OPTIMIZE': 'Compact small files',
      'VACUUM': 'Remove old files',
      'Z-ORDER': 'Sort data for query performance',
      'DESCRIBE HISTORY': 'View table version history'
    },
    explanation: 'OPTIMIZE compacts files. VACUUM cleans up. Z-ORDER improves query performance. DESCRIBE HISTORY shows versions.',
    category: 'Lakehouse',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_dm_3',
    question: 'Match each Fabric workspace role with its permission level:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Admin', 'Member', 'Contributor', 'Viewer'],
      right: ['Full control including user management', 'Create and edit all items', 'Create and edit most items', 'Read-only access to items']
    },
    correct_answer: {
      'Admin': 'Full control including user management',
      'Member': 'Create and edit all items',
      'Contributor': 'Create and edit most items',
      'Viewer': 'Read-only access to items'
    },
    explanation: 'Admin has full control. Member can create all items. Contributor can create most items. Viewer has read-only access.',
    category: 'Security',
    difficulty: 'easy',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_dm_4',
    question: 'Match each medallion architecture layer with its purpose:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Bronze', 'Silver', 'Gold'],
      right: ['Raw data ingestion', 'Cleaned and validated data', 'Aggregated business-level data']
    },
    correct_answer: {
      'Bronze': 'Raw data ingestion',
      'Silver': 'Cleaned and validated data',
      'Gold': 'Aggregated business-level data'
    },
    explanation: 'Bronze stores raw data. Silver contains cleaned data. Gold has business-ready aggregations.',
    category: 'Lakehouse',
    difficulty: 'easy',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_dm_5',
    question: 'Match each windowing function with its behavior:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Tumbling', 'Sliding', 'Session', 'Hopping'],
      right: ['Fixed non-overlapping intervals', 'Continuous overlapping windows', 'Activity-based dynamic windows', 'Fixed intervals with overlap']
    },
    correct_answer: {
      'Tumbling': 'Fixed non-overlapping intervals',
      'Sliding': 'Continuous overlapping windows',
      'Session': 'Activity-based dynamic windows',
      'Hopping': 'Fixed intervals with overlap'
    },
    explanation: 'Tumbling windows don\'t overlap. Sliding windows continuously overlap. Session windows are based on activity. Hopping windows have fixed size with configurable overlap.',
    category: 'Real-Time Intelligence',
    difficulty: 'medium',
    exam_type: 'DP-700'
  },
  {
    id: 'dp700_dm_6',
    question: 'Match each SCD type with its behavior:',
    type: 'drag-drop-matching',
    matchingPairs: {
      left: ['Type 0', 'Type 1', 'Type 2', 'Type 3'],
      right: ['Never update (retain original)', 'Overwrite with new value', 'Add new row with history', 'Track limited history in columns']
    },
    correct_answer: {
      'Type 0': 'Never update (retain original)',
      'Type 1': 'Overwrite with new value',
      'Type 2': 'Add new row with history',
      'Type 3': 'Track limited history in columns'
    },
    explanation: 'Type 0 never changes. Type 1 overwrites. Type 2 keeps full history with new rows. Type 3 stores limited history in additional columns.',
    category: 'Data Warehouse',
    difficulty: 'medium',
    exam_type: 'DP-700'
  }
];
