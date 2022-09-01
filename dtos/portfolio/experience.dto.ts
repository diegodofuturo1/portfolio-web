import { SkillDto } from './skill.dto';

export type ExperienceDto = {
  id: string;
  userId: string;
  portfolioId: string;
  company: string;
  role: string;
  image: string;
  duration: string;
  from: string;
  to: string;
  details: string;
  skills: SkillDto[];
};
