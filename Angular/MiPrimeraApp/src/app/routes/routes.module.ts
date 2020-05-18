import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {TableRandomComponent} from '../table-random/table-random.component'
import {GatosComponent} from '../gatos/gatos.component'
import { RickandmortyComponent } from '../rickandmorty/rickandmorty.component';

const routes=[
  { path:'tablerandom',component:TableRandomComponent },
  {path:'gatos',component:GatosComponent },
  {path:'rickandmorty',component:RickandmortyComponent },
  { path:'**', redirectTo: 'tableRandom', pathMatch:'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutesModule { }
