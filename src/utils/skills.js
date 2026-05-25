import { FaChartLine, FaCode, FaTools } from 'react-icons/fa';

export const skillsData = [
  {
    id: 'strategy',
    title: 'Consulting & Business Analysis',
    icon: FaChartLine,
    skills: [
      { name: 'Market Sizing & Scenario Modelling (Excel)', percent: 90 },
      { name: 'Secondary Research & Evidence Mapping', percent: 88 },
      { name: 'Expert Interview Synthesis', percent: 86 },
      { name: 'Competitive Analysis & Market Positioning', percent: 86 },
      { name: 'Healthcare Industry Research', percent: 85 },
      { name: 'Decision-Oriented Presentation (PowerPoint/Think-cell)', percent: 88 },
    ],
  },
  {
    id: 'data-ai',
    title: 'Data & Technical Skills',
    icon: FaCode,
    skills: [
      { name: 'Python Data Analysis (NumPy/Pandas)', percent: 86 },
      { name: 'SQL Querying & Data Cleaning', percent: 80 },
      { name: 'Tableau Data Visualization', percent: 75 },
      { name: 'Data Cleaning & Structuring', percent: 88 },
      { name: 'Time Series Analysis & Evaluation Design (CGM)', percent: 82 },
      { name: 'Medical Image Processing (OpenCV/Fiji)', percent: 84 },
    ],
  },
  {
    id: 'product-dev',
    title: 'Product Prototyping & Workflow Automation',
    icon: FaTools,
    skills: [
      { name: 'AI-Assisted Development & Prompt Design', percent: 82 },
      { name: 'Requirement Breakdown & Feature Prioritization', percent: 84 },
      { name: '0-to-1 Prototype Development', percent: 80 },
      { name: 'Git/GitHub Collaboration & Version Control', percent: 78 },
      { name: 'Workflow Design & Visualization', percent: 80 },
      { name: 'Cross-Tool Delivery (AI/Office/Web)', percent: 82 },
    ],
  },
];