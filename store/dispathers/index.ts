import { AnyAction, Dispatch } from 'redux';
import { UserDto } from 'dtos/auth/user.dto';
import { MenuType } from 'store/reducers/menu.reducer';
import { EndpointDto } from 'dtos/request/endpoint.dto';
import { ThemeColor } from 'store/reducers/theme.reducer';
import { themeColorChange } from 'store/actions/theme.action';
import { menuHoverChange, menuSelectedChange } from 'store/actions/menu.action';
import { saveEndpoints, SaveParamValue, saveParamValue } from 'store/actions/request-api.action';
import { closeDrawer, currentUserChange, currentUserExit, openDrawer } from 'store/actions/user.action';
import { saveAbout, saveEducation, saveExperience, savePortfolio } from 'store/actions/portfolio.action';
import { AboutDto, EducationDto, ExperienceDto, PortfolioDto } from 'dtos/portfolio';

export class Dispatcher {
  constructor(private readonly dispatch: Dispatch<AnyAction>) {}

  public menu = {
    hoverChange: (hover: MenuType) => this.dispatch(menuHoverChange(hover)),
    selectedChange: (selected: MenuType) => this.dispatch(menuSelectedChange(selected)),
  };

  public theme = {
    colorChange: (color: ThemeColor) => this.dispatch(themeColorChange(color)),
  };

  public user = {
    currentUserChange: (user: UserDto) => this.dispatch(currentUserChange(user)),
    currentUserExit: () => this.dispatch(currentUserExit()),
    openDrawer: () => this.dispatch(openDrawer()),
    closeDrawer: () => this.dispatch(closeDrawer()),
  };

  public request = {
    saveEndpoints: (endpoints: EndpointDto[]) => this.dispatch(saveEndpoints(endpoints)),
    saveParamValue: (payload: SaveParamValue) => this.dispatch(saveParamValue(payload)),
  };

  public portfolio = {
    savePortfolio: (portfolio: PortfolioDto) => this.dispatch(savePortfolio(portfolio)),
    saveAbout: (abouts: AboutDto[]) => this.dispatch(saveAbout(abouts)),
    saveEducation: (educations: EducationDto[]) => this.dispatch(saveEducation(educations)),
    saveExperience: (experiences: ExperienceDto[]) => this.dispatch(saveExperience(experiences)),
  };
}
