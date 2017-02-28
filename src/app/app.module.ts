import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { PageAffluence } from '../pages/page-affluence/page-affluence';
import { PageAide } from '../pages/page-aide/page-aide';
import { PageMesAdmin } from '../pages/page-mes-admin/page-mes-admin';
import { PageMesDemandes } from '../pages/page-mes-demandes/page-mes-demandes';
import { PageMesInfos } from '../pages/page-mes-infos/page-mes-infos';
import { PageMonCompte } from '../pages/page-mon-compte/page-mon-compte';
import { PageAddAdmin} from '../pages/page-add-admin/page-add-admin';
import { PageHelpMesAdmin} from '../pages/page-help-mes-admin/page-help-mes-admin';

import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  declarations: [
    MyApp,
    PageAffluence,
    PageAide,
    PageMesAdmin,
    PageMesDemandes,
    PageMesInfos,
    PageMonCompte,
    PageAddAdmin,
    PageHelpMesAdmin
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PageAffluence,
    PageAide,
    PageMesAdmin,
    PageMesDemandes,
    PageMesInfos,
    PageMonCompte,
    PageAddAdmin,
    PageHelpMesAdmin
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
