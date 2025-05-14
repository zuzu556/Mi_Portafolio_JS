function mostrarModal(img) {
    var modal = document.getElementById("miModal");
    var imgGrande = document.getElementById("imgGrande");
    modal.style.display = "flex";
    imgGrande.src = img.src;
  }
  
  function cerrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
  }
  