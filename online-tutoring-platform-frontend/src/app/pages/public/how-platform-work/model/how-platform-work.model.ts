export interface Step {
    number: number;
    title: string;
    description: string;
    image: string;
    features?: {
      icon: string;
      text: string;
    }[];
    cards?: {
      title: string;
      description: string;
    }[];
  }
  
  export interface Feature {
    icon: string;
    title: string;
    description: string;
  }