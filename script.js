// Função para abrir a slidebar
function openSlidebar() {
    document.getElementById("slidebar").style.width = "250px";
  }
  
  // Função para fechar a slidebar
  function closeSlidebar() {
    document.getElementById("slidebar").style.width = "0";
  }
  
  function goToProductDetails(productId) {
    // Redireciona para a página `produto.html` com o parâmetro do produto na URL
    window.location.href = `produto.html?id=${productId}`;
  }
  