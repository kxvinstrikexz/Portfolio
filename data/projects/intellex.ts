import type { Project } from './types';

export const intellex: Project = {
  id: 'intellex',
  title: 'INTELLEX',
  slug: 'intellex',
  number: '06',
  tagline: 'Real-Time AI-Powered Analytics & Explainable Prediction Platform',
  shortDescription:
    'A real-time AI-powered analytics platform focused on early prediction, risk identification, and explainable insights for proactive decision-making.',
  fullDescription:
    'INTELLEX is a real-time AI-powered analytics platform designed to solve real-world problems using Machine Learning and Full-Stack Development. By combining multi-model predictive inference with transparent SHAP-based explainability, secure FastAPI services, and reactive Next.js dashboards, INTELLEX enables teams to transition from reactive responses to proactive decision-making.',
  category: 'AI / Machine Learning',
  technologies: [
    'Machine Learning',
    'Random Forest',
    'XGBoost',
    'Neural Networks',
    'SHAP',
    'Next.js',
    'FastAPI',
    'JWT Authentication',
    'Python',
    'TypeScript',
    'Tailwind CSS'
  ],
  github: 'https://github.com/kxvinstrikexz',
  featured: false,
  status: 'Completed',
  year: '2026',
  accentColor: '#fabb02',
  problem:
    'Traditional analytical systems are often reactive, identifying anomalies only after failures occur. This delay makes early prediction, risk identification, and proactive decision-making difficult without transparent, explainable model insights.',
  solution:
    'INTELLEX combines machine learning prediction with confidence scoring, explainable AI using SHAP for model transparency, secure FastAPI backend architecture with JWT authentication, and a modern Next.js analytics dashboard to deliver actionable, real-time intelligence.',
  features: [
    'Machine Learning-based prediction system with confidence scoring',
    'Multiple ML models: Random Forest, XGBoost, and Neural Networks',
    'Explainable AI using SHAP for transparent model interpretation',
    'Modern real-time analytics dashboard built with Next.js',
    'Secure backend architecture engineered with FastAPI',
    'JWT authentication for protected endpoints and verified user sessions',
    'Real-time analytics and monitoring modules'
  ],
  architecture: {
    title: 'End-to-End ML Prediction & Explainability Pipeline',
    description:
      'Structured flow connecting feature processing and multi-model inference to SHAP explainability scoring and real-time dashboard presentation.',
    flow: [
      'Data Ingestion & Feature Engineering',
      'Multi-Model Inference (Random Forest, XGBoost, NN)',
      'Confidence Scoring & SHAP Interpretation',
      'FastAPI Backend & JWT Security',
      'Next.js Real-Time Analytics Dashboard'
    ]
  },
  challenges:
    'Balancing model inference latency with deep SHAP explainability calculations in real-time, while ensuring stateless JWT security across asynchronous FastAPI endpoints and responsive Next.js dashboard updates.',
  outcome:
    'Successfully engineered an end-to-end full-stack machine learning pipeline that shifts analytical workflows from reactive monitoring to proactive, explainable prediction with transparent confidence metrics.'
};
