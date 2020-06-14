import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailBandsComponent } from '../detail-bands/detail-bands.component';

const routes: Routes = [{ path: 'detailBands', component: DetailBandsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [DetailBandsComponent];
