import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
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
import { BoardOfAdvisor } from '../pages/board-of-advisor/boardOfAdvisor';
import { OurAssociation } from '../pages/our-association/ourAssociation';
import { MyPartners } from '../pages/my-partners/myPartners';

import { Account } from '../pages/dashboard/account/account';
import { AllRequest } from '../pages/dashboard/allRequest/allRequest';
import { NewRequest } from '../pages/dashboard/newRequest/newRequest';

import { ModalNavbarComponent } from '../custom-component/modal.navabar.component';
import { CustomNavbar } from '../custom-component/navbar.component';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../custom-component/firebase.config.ts';

import { AppService } from '../service/app.service';

@NgModule({
  declarations: [
    MyApp,
    Home,
    OurServices,
    MyGoodSchool,
    ProfessionalDevelopment,
    SchoolAndClients,
    Jobs,
    LearningForwardIndia,
    JoinRenew,
    Contact,
    Interns,
    CustomNavbar,
    Dashboard,
    Account,
    AllRequest,
    NewRequest,
    ModalNavbarComponent,
    BoardOfAdvisor,
    OurAssociation,
    MyPartners
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    OurServices,
    MyGoodSchool,
    ProfessionalDevelopment,
    SchoolAndClients,
    Jobs,
    LearningForwardIndia,
    JoinRenew,
    Contact,
    Interns,
    CustomNavbar,
    Dashboard,
    Account,
    AllRequest,
    NewRequest,
    ModalNavbarComponent,
    BoardOfAdvisor,
    OurAssociation,
    MyPartners
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AppService]
})
export class AppModule {}
