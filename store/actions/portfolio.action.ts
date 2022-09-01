import { AboutDto, EducationDto, ExperienceDto, PortfolioDto } from 'dtos/portfolio';
import { PortfolioAction } from 'store/reducers/portfolio.reducer';

export const SAVE_PORTFOLIO = 'SAVE_PORTFOLIO';
export const SAVE_ABOUT = 'SAVE_ABOUT';
export const SAVE_EDUCATION = 'SAVE_EDUCATION';
export const SAVE_EXPERIENCE = 'SAVE_EXPERIENCE';

export type PortfolioActionType = 'SAVE_PORTFOLIO' | `SAVE_ABOUT` | `SAVE_EDUCATION` | `SAVE_EXPERIENCE`;

export const savePortfolio = (portfolio: PortfolioDto): PortfolioAction => ({
  type: SAVE_PORTFOLIO,
  payload: portfolio,
});

export const saveAbout = (abouts: AboutDto[]): PortfolioAction => ({
  type: SAVE_ABOUT,
  payload: { abouts },
});

export const saveEducation = (educations: EducationDto[]): PortfolioAction => ({
  type: SAVE_EDUCATION,
  payload: { educations },
});

export const saveExperience = (experiences: ExperienceDto[]): PortfolioAction => ({
  type: SAVE_EXPERIENCE,
  payload: { experiences },
});
