import { DemoComponent } from './demo.component';

export const routes = [
  { path: '', children: [
    { path: '', component: DemoComponent },
    { path: 'indexeddb', loadChildren: './+indexeddb#IndexedDBModule' },
    { path: 'location', loadChildren: './+location#LocationModule' },
    { path: 'webrtc', loadChildren: './+webrtc#WebrtcModule' }
  ]}
];
