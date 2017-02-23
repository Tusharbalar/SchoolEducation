import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Dashboard } from '../pages/dashboard/dashboard';
import { OurServices } from '../pages/our-services/ourServices';
import { MyGoodSchool } from '../pages/my-good-school/myGoodSchool';
import { ProfessionalDevelopment } from '../pages/professional-development/professionalDevelopment';
import { SchoolAndClients } from '../pages/school-and-clients/schoolAndClients';
import { Jobs } from '../pages/jobs/jobs';
import { LearningForwardIndia } from '../pages/learning-forward-india/learningForwardIndia';
import { JoinRenew } from '../pages/join-renew/joinRenew';
import { Contact } from '../pages/contact/contact';
import { Interns } from '../pages/interns/interns';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Dashboard,
    OurServices,
    MyGoodSchool,
    ProfessionalDevelopment,
    SchoolAndClients,
    Jobs,
    LearningForwardIndia,
    JoinRenew,
    Contact,
    Interns
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Dashboard,
    OurServices,
    MyGoodSchool,
    ProfessionalDevelopment,
    SchoolAndClients,
    Jobs,
    LearningForwardIndia,
    JoinRenew,
    Contact,
    Interns
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
