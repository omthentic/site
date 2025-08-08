export type Question = { id: string; prompt: string; category: 'MMI' | 'Behavioral' | 'Panel' };

export const questions: Question[] = [
  { id: 'q1', prompt: 'Tell me about a time you turned a challenge into an opportunity.', category: 'Behavioral' },
  { id: 'q2', prompt: 'Why medicine? Why now?', category: 'Panel' },
  { id: 'q3', prompt: 'Describe a situation where you had to deliver difficult feedback.', category: 'Behavioral' },
  { id: 'q4', prompt: 'How would you respond if a colleague made a clinical error?', category: 'MMI' },
  { id: 'q5', prompt: 'What does empathy mean to you in clinical settings?', category: 'Panel' },
];


