var typed = new Typed('#typed-code', {
  strings: [
    // Usamos ^500 para una pausa de medio segundo en cada salto de línea importante
    `<span class="kwd">let</span> <span class="var">url</span> = <span class="str">"https://ezequieltombazzi.github.io/"</span><span class="punc">;</span><br><br>^500` +
    
    `<span class="kwd">const</span> <span class="var">experiencia</span> = <span class="punc">{</span><br>^300` +
    `  <span class="var">rol</span>: <span class="str">"Web Developer"</span><span class="punc">,</span><br>^300` +
    `  <span class="var">pagina</span>: <span class="str">"https://left4dead2players.netlify.app/"</span><span class="punc">,</span><br>^300` +
    `  <span class="var">tecnologias</span>: <span class="punc">[</span><span class="str">"JavaScript"</span><span class="punc">,</span> <span class="str">"CSS"</span><span class="punc">,</span> <span class="str">"Git"</span><span class="punc">]</span><br>^300` +
    `<span class="punc">};</span><br><br>^500`+

    `<span class="kwd">const</span> <span class="var">programador</span> = <span class="punc">{</span><br>^300` +
    `  <span class="var">nombre</span>: <span class="str">"Ezequiel Tombazzi Colman"</span><span class="punc">,</span><br>^300` +
    `  <span class="var">edad</span>: <span class="num">26</span><span class="punc">,</span><br>^300` +
    `  <span class="var">profesion</span>: <span class="str">"Analista de Sistemas"</span><span class="punc">,</span><br>^300` +
    `  <span class="var">tel</span>: <span class="num">11 3926-6961</span><span class="punc">,</span><br>^300` +
    `  <span class="var">correo</span>: <span class="str">"tombazziezequiel@gmail.com"</span><span class="punc">,</span><br><br>^500` +
    
    `  <span class="var">saludar</span>: <span class="kwd">function</span><span class="punc">() {</span><br>^300` +
    `    <span class="kwd">return</span> <span class="str">"Hola, soy "</span> + <span class="kwd">this</span>.<span class="var">nombre</span><span class="punc">;</span><br>^300` +
    `  <span class="punc">}<br>};</span><br><br>^500`+

    `<span class="kwd">// Gracias por visitar mi portfolio web.</span>`
  ],
  typeSpeed: 35,       
  
  // CONFIGURACIÓN PARA EL BORRADO LETRA POR LETRA:
  backSpeed: 20,       // Velocidad de borrado. 20 es una velocidad natural.
  smartBackspace: false, // FUERZA a que borre todo letra por letra
  
  backDelay: 4000,     // Espera 4 seg antes de empezar a borrar
  startDelay: 2500,    // Espera 2.5 seg antes de volver a escribir
  
  loop: true,          
  contentType: 'html', 
  showCursor: true,
  cursorChar: '|'
});