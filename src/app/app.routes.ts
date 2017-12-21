export const routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(module => module.LazyModule)
  }
];
