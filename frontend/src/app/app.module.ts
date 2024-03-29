import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import {FormsModule} from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './experience/new-experiencia.component';
import { EditExperienciaComponent } from './experience/edit-experiencia.component';
import { NewEducacionComponent } from './education/new-educacion.component';
import { EditEducacionComponent } from './education/edit-educacion.component';
import { EditSkillsComponent } from './skills/edit-skills.component';
import { NewSkillsComponent } from './skills/new-skills.component';
import { NewProyectoComponent } from './projects/new-proyecto.component';
import { EditProyectoComponent } from './projects/edit-proyecto.component';
import { EditAboutComponent } from './about/edit-about.component'
import {DragDropModule} from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EditAboutComponent
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({ }),
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    DragDropModule
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
