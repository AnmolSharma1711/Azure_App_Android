import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.anmolsharma.azurecertification',
  appName: 'Azure Certification Quiz',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: true,
    adjustMarginsForEdgeToEdge: 'force'
  }
};

export default config;
