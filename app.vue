<template>
  <div class="min-h-screen font-sans">
    <ion-app>
      <!-- <p id="electron-status">isElectron: {{ useElectron().isElectron }}</p> -->
      <NuxtPage />
      <ion-router-outlet />
    </ion-app>
    <!-- <NuxtLayout>
      <p id="electron-status">isElectron: {{ useElectron().isElectron }}</p>
      <NuxtPage />
    </NuxtLayout> -->
  </div>
</template>

<!-- <style>
#electron-status {
  background: #000;
  color: #fff;
  position: absolute;
  font-size: 2rem;
  font: bold;
}
</style> -->