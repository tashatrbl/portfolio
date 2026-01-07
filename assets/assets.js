import menu_icon from './menu.svg';
import github_icon from './github.svg';
import linkedin_icon from './linkedin.svg';
import resume_icon from './resume.svg';
import c_icon from './c.svg';
import colab_icon from './colab.svg';
import figma_icon from './figma.svg';
import firebase_icon from './firebase.svg';
import flutter_icon from './flutter.svg';
import git_icon from './git.svg';
import java_icon from './java.svg';
import nextjs_icon from './nextjs.svg';
import python_icon from './python.svg';
import pytorch_icon from './pytorch.svg';
import react_icon from './react.svg';
import tailwind_icon from './tailwind.svg';
import tensorflow_icon from './tensorflow.svg';
import transfromer_icon from './transformer.svg';
import vercel_icon from './vercel.svg';
import lexiquest_preview from './lexiquest_preview.png'
import dwill_preview from './dwill_preview.png'
import tcce_preview from './tcce_preview.png'
import tradingbot_preview from './tradingbot_preview.png'

export const assets = {
    menu_icon,
    github_icon,
    linkedin_icon,
    resume_icon,
    c_icon,
    colab_icon,
    figma_icon,
    firebase_icon,
    flutter_icon,
    git_icon,
    java_icon,
    nextjs_icon,
    python_icon,
    pytorch_icon,
    react_icon,
    tailwind_icon,
    tensorflow_icon,
    transfromer_icon,
    vercel_icon,
    lexiquest_preview,
    dwill_preview,
    tcce_preview,
    tradingbot_preview
}

export const infoList = [
  { icon: python_icon, description: 'Python' },
  { icon: java_icon, description: 'Java' },
  { icon: c_icon, description: 'C' },
  { icon: transfromer_icon, description: 'Transformer Models' },
  { icon: pytorch_icon, description: 'PyTorch' },
  { icon: tensorflow_icon, description: 'TensorFlow' },
  { icon: figma_icon, description: 'Figma' },
  { icon: git_icon, description: 'Git' },
  { icon: github_icon, description: 'GitHub' },
  { icon: vercel_icon, description: 'Vercel' },
  { icon: colab_icon, description: 'Colab' },
  { icon: flutter_icon, description: 'Flutter' },
  { icon: firebase_icon, description: 'Firebase' },
  { icon: nextjs_icon, description: 'NextJS' },
  { icon: react_icon, description: 'React' },
  { icon: tailwind_icon, description: 'TailwindCSS' },
];

export const workexp = [
    {
        company: 'Sarawak Energy Berhad', location: 'Sarawak, Malaysia', length: 'Sept 2025 - Present',
        jobtitle: 'IT Executive', 
        desc1:
        'Assessed business requirements and assist in project management tasks to ensure alignment with strategic objectives.',
        desc2: 
        'Assist in process documentation for better transparency between businesses and developers.'
    },
    {
        company: 'Sarawak Energy Berhad', location: 'Sarawak, Malaysia', length: 'Aug 2024 - Oct 2024',
        jobtitle: 'ICT Intern', 
        desc1:
        'Developed, tested and enhanced applications using OutSystems, contributing to a range of projects under GenesysX.',
        desc2: 
        'Collaborated with clients to understand and apply application features, gather feedback and refine decisions.'
    },
    {
        company: 'University of Nottingham Malaysia', location: 'Selangor, Malaysia', length: 'Jun 2023 - Sept 2023',
        jobtitle: 'Research Intern', 
        desc1:
        'Led a team of 3 to research the fundamentals of Transformer models and its attention mechanism, with a particular focus on Google\'s BERT model and its current infrastructure.',
        desc2: 
        'Presented research to a panel of experienced researchers.'
    }
]

export const projects = [
    {
        name: "dWill",
        desc: "A decentralized storage system equipped with a benefactor-beneficiary system. Deploys inheritor assignment per asset uploaded and a dead man's switch, which when triggered allows beneficiaries to begin a countdown. ",
        link: "https://github.com/AnshanaM/dwill",
        tech: ["Solidity", "Pinata", "React.js"],
        snippet: dwill_preview
    },
    {
        name: "LexiQuest",
        desc: "An application dedicated to enhancing learning for children with dyslexia, through interactive games such as drawing the abcs, where they learn to trace letters, and memory card game, where they match the letter to the sound.",
        link: "https://github.com/tashatrbl/LexiQuest",
        tech: ["Kotlin", "Firebase", "Firestore", "Computer Vision"],
        snippet: lexiquest_preview
    },
    {
        name: "S&P500 Stock Price Prediction",
        desc: "Predicting Top 10 S&P500 Stocks using technical indicators, social media posts and audio driven data. Published in the 7th International Conference on Trends in Computational and Cognitive Engineering.",
        link: "coming soon",
        tech: ["Python", "FinBERT", "pandas", "scikit-learn"],
        snippet: tcce_preview
    },
    {
        name: "Trading Bot",
        desc: "Deployed three trading agents (Greedy Buyer, Cautious Investor, Contrarian Trader) to investigate trading patterns of S&P500. Utilized Random Forest for predictions and FinBERT for sentiment scoring.",
        link: "https://github.com/tashatrbl/COMP3071-Designing-Intelligent-Agent-Coursework",
        tech: ["Python", "FinBERT", "pandas", "scikit-learn"],
        snippet: tradingbot_preview
    }
]