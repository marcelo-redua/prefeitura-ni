import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';
import { AccessibilityComponent } from './pages/accessibility/accessibility.component';
import { OuvidoriaComponent } from './pages/ouvidoria/ouvidoria.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { DiarioComponent } from './pages/diario/diario.component';
import { SecretariasComponent } from './pages/secretarias/secretarias.component';
import { SematComponent } from './pages/semat/semat.component';
import { SemasComponent } from './pages/semas/semas.component';
import { SemamComponent } from './pages/semam/semam.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { TelefonesComponent } from './pages/telefones/telefones.component';
import { SeiComponent } from './pages/sei/sei.component';
import { SemcongerComponent } from './pages/semconger/semconger.component';
import { SemcultComponent } from './pages/semcult/semcult.component';
import { SmdcComponent } from './pages/smdc/smdc.component';
import { SemdetturComponent } from './pages/semdettur/semdettur.component';
import { SemdurComponent } from './pages/semdur/semdur.component';
import { SemefComponent } from './pages/semef/semef.component';
import { SemedComponent } from './pages/semed/semed.component';
import { SemelComponent } from './pages/semel/semel.component';
import { SemugComponent } from './pages/semug/semug.component';
import { SemifComponent } from './pages/semif/semif.component';
import { SemusComponent } from './pages/semus/semus.component';
import { SemsegComponent } from './pages/semseg/semseg.component';
import { SemserpComponent } from './pages/semserp/semserp.component';
import { SemtmuComponent } from './pages/semtmu/semtmu.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'acessibilidade',
    component: AccessibilityComponent,
    data: { breadcrumb: 'Acessibilidade' },
  },
  {
    path: 'sitemap',
    component: SiteMapComponent,
    data: { breadcrumb: 'Mapa do site' },
  },
  {
    path: 'ouvidoria',
    component: OuvidoriaComponent,
    data: { breadcrumb: 'Ouvidoria' },
  },
  {
    path: 'fale-conosco',
    component: FaleConoscoComponent,
    data: { breadcrumb: 'Fale Conosco' },
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
    data: { breadcrumb: 'Notícias' },
  },
  {
    path: 'diario',
    component: DiarioComponent,
    data: { breadcrumb: 'Diário Oficial' },
  },
  {
    path: 'secretarias',
    component: SecretariasComponent,
    data: { breadcrumb: 'Secretarias' },
    children: [
      {
        path: 'semat',
        component: SematComponent,
        data: {
          breadcrumb: 'Secretaria Municipal de Administração e Tecnologia',
        },
      },
      {
        path: 'semas',
        component: SemasComponent,
        data: { breadcrumb: 'Secretaria Municipal de Assistência Social' },
      },
      {
        path: 'semam',
        component: SemamComponent,
        data: {
          breadcrumb: 'Secretaria Municipal de Agricultura e Meio Ambiente',
        },
      },
      {
        path: 'semconger',
        component: SemcongerComponent,
        data: { breadcrumb: 'Secretaria Municipal de Controle Geral' },
      },
      {
        path: 'semcult',
        component: SemcultComponent,
        data: { breadcrumb: 'Secretaria Municipal de Cultura' },
      },
      {
        path: 'smdc',
        component: SmdcComponent,
        data: { breadcrumb: 'Secretaria Municipal de Defesa Civil' },
      },
      {
        path: 'semdettur',
        component: SemdetturComponent,
        data: {
          breadcrumb:
            'Secretaria Municipal de Defesa Civil Secretaria Municipal de Desenvolvimento Econômico, Trabalho e Turismo',
        },
      },
      {
        path: 'semdur',
        component: SemdurComponent,
        data: { breadcrumb: 'Secretaria Municipal de Desenvolvimento Urbano' },
      },
      {
        path: 'semef',
        component: SemefComponent,
        data: {
          breadcrumb:
            'Secretaria Municipal de Economia, Planejamento e Finanças',
        },
      },
      {
        path: 'semed',
        component: SemedComponent,
        data: { breadcrumb: 'Secretaria Municipal de Educação' },
      },
      {
        path: 'semel',
        component: SemelComponent,
        data: { breadcrumb: 'Secretaria Municipal de Esporte e Lazer' },
      },
      {
        path: 'semug',
        component: SemugComponent,
        data: { breadcrumb: 'Secretaria Municipal de Governo' },
      },
      {
        path: 'semif',
        component: SemifComponent,
        data: { breadcrumb: 'Secretaria Municipal de Infraestrutura' },
      },
      {
        path: 'semus',
        component: SemusComponent,
        data: { breadcrumb: 'Secretaria Municipal de Saúde' },
      },
      {
        path: 'semseg',
        component: SemsegComponent,
        data: { breadcrumb: 'Secretaria Municipal de Segurança Pública' },
      },
      {
        path: 'semserp',
        component: SemserpComponent,
        data: { breadcrumb: 'Secretaria Municipal de Serviços Públicos' },
      },
      {
        path: 'semtmu',
        component: SemtmuComponent,
        data: {
          breadcrumb:
            'Secretaria Municipal de Transporte, Trânsito e Mobilidade Urbana',
        },
      },
    ],
  },
  {
    path: 'servicos',
    component: ServicosComponent,
    data: { breadcrumb: 'Serviços' },
  },
  {
    path: 'telefones',
    component: TelefonesComponent,
    data: { breadcrumb: 'Telefones Úteis' },
  },
  {
    path: 'sei',
    component: SeiComponent,
    data: { breadcrumb: 'Sistema Eletrônico de Informações' },
  },
  { path: 'resultados',
    component: SearchComponent,
    data: { breadcrumb: 'Pesquisa' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { breadcrumb: 'Página Não Encontrada' },
  },
];
