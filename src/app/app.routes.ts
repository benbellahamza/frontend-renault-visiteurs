import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { ListeComponent } from './pages/liste/liste.component';
import { ResponsableVisiteursComponent } from './pages/responsable-visiteurs/responsable-visiteurs.component';
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

  // ✅ Responsable indépendant
  { path: 'responsable', component: ResponsableVisiteursComponent },

  // ✅ Admin routes séparées
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/ajouter-agent', component: AdminAjouterAgentComponent },
  { path: 'admin/ajouter-responsable', component: AdminAjouterResponsableComponent },
  { path: 'admin/liste-agents', component: AdminListeAgentsComponent },
  { path: 'admin/liste-responsables', component: AdminListeResponsablesComponent }
];
