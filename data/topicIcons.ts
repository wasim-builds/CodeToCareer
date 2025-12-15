import { IconType } from 'react-icons';
import { 
  FiCode, FiDatabase, FiServer, FiGlobe, FiCpu, FiLayers, 
  FiGitBranch, FiTerminal, FiBox, FiCloud, FiBarChart2,
  FiLayout, FiTool, FiBookOpen, FiActivity, FiHardDrive,
  FiPenTool, FiImage, FiCheckCircle, FiWifi
} from 'react-icons/fi';
import {
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb,
  SiDocker, SiGit, SiLinux, SiTensorflow, SiPandas,
  SiNumpy, SiFlask, SiJupyter, SiPowerbi, SiPhp, SiMysql,
  SiFirebase, SiNextdotjs, SiFastapi, SiDotnet, SiWordpress,
  SiGitlab, SiMicrosoftazure, SiGooglecloud, SiOracle,
  SiFigma, SiAdobe, SiCanva, SiArduino, SiRaspberrypi,
  SiAnaconda, SiMeta, SiTestinglibrary, SiTypescript,
  SiKotlin, SiSwift, SiGo, SiRust, SiRuby, SiAngular,
  SiVuedotjs, SiDjango, SiSpringboot, SiKubernetes,
  SiJenkins, SiTerraform, SiPytorch, SiOpencv,
  SiFlutter, SiAndroid
} from 'react-icons/si';
import { DiJava, DiDatabase } from 'react-icons/di';
import { TbBrandCpp, TbApi, TbBinaryTree, TbLetterC, TbChartLine } from 'react-icons/tb';
import { BiNetworkChart } from 'react-icons/bi';
import { BsFiletypeHtml } from 'react-icons/bs';

interface TopicIconConfig {
  icon: IconType;
  color: string;
  bgColor: string;
}

export const topicIcons: Record<string, TopicIconConfig> = {
  // Languages
  'c': {
    icon: TbLetterC,
    color: '#A8B9CC',
    bgColor: '#A8B9CC20'
  },
  'python': {
    icon: SiPython,
    color: '#3776AB',
    bgColor: '#3776AB20'
  },
  'java': {
    icon: DiJava,
    color: '#ED8B00',
    bgColor: '#ED8B0020'
  },
  'cpp': {
    icon: TbBrandCpp,
    color: '#00599C',
    bgColor: '#00599C20'
  },
  'javascript': {
    icon: SiJavascript,
    color: '#F7DF1E',
    bgColor: '#F7DF1E20'
  },
  'php': {
    icon: SiPhp,
    color: '#777BB4',
    bgColor: '#777BB420'
  },
  'sql': {
    icon: DiDatabase,
    color: '#4479A1',
    bgColor: '#4479A120'
  },
  'nosql': {
    icon: FiDatabase,
    color: '#10B981',
    bgColor: '#10B98120'
  },
  'html-css': {
    icon: BsFiletypeHtml,
    color: '#E34F26',
    bgColor: '#E34F2620'
  },
  'bash': {
    icon: FiTerminal,
    color: '#4EAA25',
    bgColor: '#4EAA2520'
  },

  // Full Stack
  'react': {
    icon: SiReact,
    color: '#61DAFB',
    bgColor: '#61DAFB20'
  },
  'nextjs': {
    icon: SiNextdotjs,
    color: '#FFFFFF',
    bgColor: '#FFFFFF20'
  },
  'nodejs': {
    icon: SiNodedotjs,
    color: '#339933',
    bgColor: '#33993320'
  },
  'express': {
    icon: FiServer,
    color: '#9CA3AF',
    bgColor: '#9CA3AF20'
  },
  'flask': {
    icon: SiFlask,
    color: '#FFFFFF',
    bgColor: '#FFFFFF20'
  },
  'fastapi': {
    icon: SiFastapi,
    color: '#009688',
    bgColor: '#00968820'
  },
  'dotnet': {
    icon: SiDotnet,
    color: '#512BD4',
    bgColor: '#512BD420'
  },
  'wordpress': {
    icon: SiWordpress,
    color: '#21759B',
    bgColor: '#21759B20'
  },
  'mongodb': {
    icon: SiMongodb,
    color: '#47A248',
    bgColor: '#47A24820'
  },
  'mysql': {
    icon: SiMysql,
    color: '#4479A1',
    bgColor: '#4479A120'
  },
  'firebase': {
    icon: SiFirebase,
    color: '#FFCA28',
    bgColor: '#FFCA2820'
  },
  'rest-api': {
    icon: TbApi,
    color: '#A855F7',
    bgColor: '#A855F720'
  },
  'jwt': {
    icon: FiLayers,
    color: '#EC4899',
    bgColor: '#EC489920'
  },

  // Data & AI
  'dsa': {
    icon: TbBinaryTree,
    color: '#F97316',
    bgColor: '#F9731620'
  },
  'pandas': {
    icon: SiPandas,
    color: '#150458',
    bgColor: '#15045820'
  },
  'numpy': {
    icon: SiNumpy,
    color: '#013243',
    bgColor: '#01324320'
  },
  'matplotlib': {
    icon: TbChartLine,
    color: '#11557C',
    bgColor: '#11557C20'
  },
  'tensorflow': {
    icon: SiTensorflow,
    color: '#FF6F00',
    bgColor: '#FF6F0020'
  },
  'scikit-learn': {
    icon: FiActivity,
    color: '#F7931E',
    bgColor: '#F7931E20'
  },
  'anaconda': {
    icon: SiAnaconda,
    color: '#44A833',
    bgColor: '#44A83320'
  },
  'nlp': {
    icon: FiBookOpen,
    color: '#8B5CF6',
    bgColor: '#8B5CF620'
  },
  'eda': {
    icon: FiBarChart2,
    color: '#10B981',
    bgColor: '#10B98120'
  },
  'data-viz': {
    icon: FiBarChart2,
    color: '#3B82F6',
    bgColor: '#3B82F620'
  },
  'jupyter': {
    icon: SiJupyter,
    color: '#F37626',
    bgColor: '#F3762620'
  },
  'powerbi': {
    icon: SiPowerbi,
    color: '#F2C811',
    bgColor: '#F2C81120'
  },

  // Tools & Cloud
  'git': {
    icon: SiGit,
    color: '#F05032',
    bgColor: '#F0503220'
  },
  'github': {
    icon: FiGitBranch,
    color: '#FFFFFF',
    bgColor: '#FFFFFF20'
  },
  'gitlab': {
    icon: SiGitlab,
    color: '#FC6D26',
    bgColor: '#FC6D2620'
  },
  'gitlab-ci': {
    icon: SiGitlab,
    color: '#FC6D26',
    bgColor: '#FC6D2620'
  },
  'docker': {
    icon: SiDocker,
    color: '#2496ED',
    bgColor: '#2496ED20'
  },
  'linux': {
    icon: SiLinux,
    color: '#FCC624',
    bgColor: '#FCC62420'
  },
  'aws': {
    icon: FiCloud,
    color: '#FF9900',
    bgColor: '#FF990020'
  },
  'azure': {
    icon: SiMicrosoftazure,
    color: '#0078D4',
    bgColor: '#0078D420'
  },
  'gcloud': {
    icon: SiGooglecloud,
    color: '#4285F4',
    bgColor: '#4285F420'
  },
  'oracle': {
    icon: SiOracle,
    color: '#F80000',
    bgColor: '#F8000020'
  },

  // Design Tools
  'figma': {
    icon: SiFigma,
    color: '#F24E1E',
    bgColor: '#F24E1E20'
  },
  'adobe': {
    icon: SiAdobe,
    color: '#FF0000',
    bgColor: '#FF000020'
  },
  'canva': {
    icon: SiCanva,
    color: '#00C4CC',
    bgColor: '#00C4CC20'
  },

  // Testing
  'testing-library': {
    icon: SiTestinglibrary,
    color: '#E33332',
    bgColor: '#E3333220'
  },

  // Hardware & IoT
  'arduino': {
    icon: SiArduino,
    color: '#00979D',
    bgColor: '#00979D20'
  },
  'raspberry-pi': {
    icon: SiRaspberrypi,
    color: '#A22846',
    bgColor: '#A2284620'
  },

  // Core Concepts
  'oop': {
    icon: FiBox,
    color: '#A855F7',
    bgColor: '#A855F720'
  },
  'dbms': {
    icon: FiHardDrive,
    color: '#3B82F6',
    bgColor: '#3B82F620'
  },
  'system-design': {
    icon: BiNetworkChart,
    color: '#6366F1',
    bgColor: '#6366F120'
  },
  'sdlc': {
    icon: FiTool,
    color: '#10B981',
    bgColor: '#10B98120'
  },

  // Tech Companies
  'meta': {
    icon: SiMeta,
    color: '#0081FB',
    bgColor: '#0081FB20'
  },

  // Additional Languages
  'typescript': {
    icon: SiTypescript,
    color: '#3178C6',
    bgColor: '#3178C620'
  },
  'kotlin': {
    icon: SiKotlin,
    color: '#7F52FF',
    bgColor: '#7F52FF20'
  },
  'swift': {
    icon: SiSwift,
    color: '#F05138',
    bgColor: '#F0513820'
  },
  'go': {
    icon: SiGo,
    color: '#00ADD8',
    bgColor: '#00ADD820'
  },
  'rust': {
    icon: SiRust,
    color: '#000000',
    bgColor: '#00000020'
  },
  'ruby': {
    icon: SiRuby,
    color: '#CC342D',
    bgColor: '#CC342D20'
  },

  // Additional Frameworks
  'angular': {
    icon: SiAngular,
    color: '#DD0031',
    bgColor: '#DD003120'
  },
  'vuejs': {
    icon: SiVuedotjs,
    color: '#4FC08D',
    bgColor: '#4FC08D20'
  },
  'django': {
    icon: SiDjango,
    color: '#092E20',
    bgColor: '#092E2020'
  },
  'spring-boot': {
    icon: SiSpringboot,
    color: '#6DB33F',
    bgColor: '#6DB33F20'
  },

  // DevOps & Cloud
  'kubernetes': {
    icon: SiKubernetes,
    color: '#326CE5',
    bgColor: '#326CE520'
  },
  'jenkins': {
    icon: SiJenkins,
    color: '#D24939',
    bgColor: '#D2493920'
  },
  'terraform': {
    icon: SiTerraform,
    color: '#7B42BC',
    bgColor: '#7B42BC20'
  },

  // Data & AI
  'pytorch': {
    icon: SiPytorch,
    color: '#EE4C2C',
    bgColor: '#EE4C2C20'
  },
  'opencv': {
    icon: SiOpencv,
    color: '#5C3EE8',
    bgColor: '#5C3EE820'
  },

  // Mobile Development
  'react-native': {
    icon: SiReact,
    color: '#61DAFB',
    bgColor: '#61DAFB20'
  },
  'flutter': {
    icon: SiFlutter,
    color: '#02569B',
    bgColor: '#02569B20'
  },
  'android': {
    icon: SiAndroid,
    color: '#3DDC84',
    bgColor: '#3DDC8420'
  },

  // Default fallback
  'default': {
    icon: FiCode,
    color: '#9CA3AF',
    bgColor: '#9CA3AF20'
  }
};

export function getTopicIcon(topicId: string): TopicIconConfig {
  return topicIcons[topicId] || topicIcons['default'];
}
