import { Routes } from '@angular/router';
import { LoginComponent } from './Page/login/login.component';
import { DashboardComponent } from './Page/dashboard/dashboard.component';
import { LayoutComponent } from './Page/layout/layout.component';
import { EmployeeComponent } from './Page/employee/employee.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'employee',
                component:EmployeeComponent
            }
        ]
    }
];
