import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



const routes: Routes = [];


// const appRoutes: Routes = [
//   { path: 'places',  component: AppComponent },
//   { path: 'products/view/:productId', component: SingleProductComponent },
//   { path: 'cart', component: CartComponent },
//   { path: '', redirectTo: 'products', pathMatch: 'full' },
//   { path: '**', redirectTo: 'products' }
// ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
