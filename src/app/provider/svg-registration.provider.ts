import { APP_INITIALIZER } from '@angular/core';
import { SvgRegisterService } from '../service/svg-register.service';

export const svgRegistrationProvider = {
  provide: APP_INITIALIZER,
  useFactory: (service: SvgRegisterService) =>
    function () {
      return service.registerSvg();
    },
  multi: true,
  deps: [SvgRegisterService],
};
