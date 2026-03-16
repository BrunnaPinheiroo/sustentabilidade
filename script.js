// Inicializa o AOS (Animação ao rolar a página)
AOS.init({
    duration: 1000, // Duração da animação em milisegundos
    once: true      // Anima apenas uma vez ao descer a página
});

// Função para o botão de interação (Balão de fala)
function interagir() {
    const balao = document.getElementById('balao-interacao');
    // Faz o balão aparecer ou sumir
    if (balao.classList.contains('hidden')) {
        balao.classList.remove('hidden');
    } else {
        balao.classList.add('hidden');
    }
}

// Efeito GSAP no símbolo de reciclagem
// Quando o mouse passa por cima (hover), o símbolo gira e aumenta
const reciclar = document.getElementById('reciclar');

reciclar.addEventListener('mouseenter', () => {
    gsap.to("#reciclar", {
        rotation: 360, 
        scale: 1.5, 
        duration: 0.8,
        ease: "back.out(1.7)"
    });
});

reciclar.addEventListener('mouseleave', () => {
    gsap.to("#reciclar", {
        rotation