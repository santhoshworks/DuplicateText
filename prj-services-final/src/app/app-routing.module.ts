import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from 'src/app/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from 'src/app/recipes/recipes-edit/recipes-edit.component';

const appRoutes: Routes = [
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent, pathMatch: 'full' },
        {path: 'new', component: RecipesEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipesEditComponent}
    ]},
    {path: '', redirectTo: '/recipes', pathMatch: 'full' },
];
@NgModule({
imports: [ RouterModule.forRoot(appRoutes) ],
exports: [RouterModule]
})
export class AppRoutingModule {

}
