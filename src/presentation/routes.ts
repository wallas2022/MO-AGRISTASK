import { Router } from 'express';
import { CompanyRoutes } from './company/routers';
import { WorkcenterRoutes } from './workcenter/routers';
import { PayrollRoutes } from './payroll/routers';
import { JobpositionRoutes } from './jobposition/routers';
import { EmployeeRoutes } from './employees/routers';
import { GroupRoutes } from './group/routers';
import { PlaceRoutes } from './place/routers';
import { ActivityRoutes } from './activity/routers';
import { OrderController } from './productionorder/controller';
import { OrderRoutes } from './productionorder/routers';
import { CostecenterController } from './costecenter/controller';
import { CostecenterRoutes } from './costecenter/routers';
import { PlanningRoutes } from './planning/routers';
import { Authroutes } from './auth/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // rutas de apis 
    router.use('/api/companies', CompanyRoutes.routes );
    router.use('/api/workcenters',WorkcenterRoutes.routes );
    router.use('/api/payrolls', PayrollRoutes.routes);
    router.use('/api/jobpositions', JobpositionRoutes.routes);
    router.use('/api/employees', EmployeeRoutes.routes);
    router.use('/api/groups', GroupRoutes.routes);
    router.use('/api/places', PlaceRoutes.routes);
    router.use('/api/activities', ActivityRoutes.routes);
    router.use('/api/orders',OrderRoutes.routes);
    router.use('/api/costecenters', CostecenterRoutes.routes);
    router.use('/api/plannings',PlanningRoutes.routes);

    // rutas autenticacion 
   router.use('/api/auth', Authroutes.routes);


    

  

    return router;
  }


}



