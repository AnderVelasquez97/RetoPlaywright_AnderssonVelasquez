import { defineConfig } from '@playwright/test';

const config  = {
  use: {
    //headless: false,  // Asegúrate de que esté en false para ver el navegador
    viewport: { width: 1280, height: 720 },
  },
  testDir: './steps',
};

export default defineConfig(config)