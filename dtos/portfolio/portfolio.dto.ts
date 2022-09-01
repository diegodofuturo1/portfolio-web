import { AboutDto } from './about.dto';
import { EducationDto } from './education.dto';
import { ExperienceDto } from './experience.dto';

export type PortfolioDto = {
  id: string;
  userId: string;
  owner: string;
  avatar: string;
  abouts: AboutDto[];
  educations: EducationDto[];
  experiences: ExperienceDto[];
};
