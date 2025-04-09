import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { ListeComponent } from './pages/liste/liste.component';
import { ResponsableVisiteursComponent } from './pages/responsable-visiteurs/responsable-visiteurs.component';

// ✅ Chemins corrigés pour les composants Admin
import { AdminDashboardComponent } from './pages/admin-dashboard.component';
import { AdminAjouterAgentComponent } from './pages/admin-ajouter-agent.component';
import { AdminAjouterResponsableComponent } from './pages/admin-ajouter-responsable.component';
import { AdminListeAgentsComponent } from './pages/admin-liste-agents.component';
import { AdminListeResponsablesComponent } from './pages/admin-liste-responsables.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'ajouter', component: FormulaireComponent },
      { path: 'visiteurs', component: ListeComponent },
      { path: '', redirectTo: 'ajouter', pathMatch: 'full' }
    ]
  },

  {
    path: 'responsable',
    component: ResponsableVisiteursComponent
  },

  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'ajouter-agent', component: AdminAjouterAgentComponent },
      { path: 'ajouter-responsable', component: AdminAjouterResponsableComponent },
      { path: 'liste-agents', component: AdminListeAgentsComponent },
      { path: 'liste-responsables', component: AdminListeResponsablesComponent },
      { path: '', redirectTo: 'ajouter-agent', pathMatch: 'full' }
    ]
  }
];
