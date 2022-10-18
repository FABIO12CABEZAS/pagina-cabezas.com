const app = document.getElementById('typewriter')

const typewriter = new typewriter (app, {
    loop: true,
    delay: 75
  });

  typewriter
  .pauseFor(2500)
  .typeString('Ubicado en Santa Rosa de Osos, Antioquia')
  .pauseFor(200)
  .deleteChars(10)
  .start(); 