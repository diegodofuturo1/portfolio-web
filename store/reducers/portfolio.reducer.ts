import { PortfolioDto } from 'dtos/portfolio/portfolio.dto';
import { SAVE_PORTFOLIO, PortfolioActionType, SAVE_ABOUT, SAVE_EDUCATION, SAVE_EXPERIENCE } from 'store/actions/portfolio.action';

export interface PortfolioState extends Partial<PortfolioDto> {}

export interface PortfolioAction {
  payload: Partial<PortfolioState>;
  type: PortfolioActionType;
}

const initialState: PortfolioState = {};

const reducer = (state: PortfolioState = initialState, action: PortfolioAction): PortfolioState => {
  switch (action.type) {
    case SAVE_PORTFOLIO:
      return { ...state, ...action.payload };

    case SAVE_ABOUT:
      return { ...state, abouts: action.payload.abouts };

    case SAVE_EDUCATION:
      return { ...state, educations: action.payload.educations };

    case SAVE_EXPERIENCE:
      return { ...state, experiences: action.payload.experiences };

    default:
      return state;
  }
};

export default reducer;
