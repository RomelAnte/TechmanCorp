document.getElementById("inventarioForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtener valores del formulario
    var nombre = document.getElementById("nombre").value;
    var cantidad = document.getElementById("cantidad").value;
  
    // Realizar acciones con los valores (ejemplo: guardar en una base de datos)
    console.log("Equipo agregado: " + nombre + ", Cantidad: " + cantidad);
  
    // Limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
  });
  
  document.getElementById("reclamoForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtener valores del formulario
    var equipo = document.getElementById("equipo").value;
    var motivo = document.getElementById("motivo").value;
  
    // Realizar acciones con los valores (ejemplo: enviar correo electrónico)
    console.log("Reclamo enviado: Equipo: " + equipo + ", Motivo: " + motivo);
  
    // Limpiar formulario
    document.getElementById("equipo").value = "";
    document.getElementById("motivo").value = "";
  });
  
  document.getElementById("reporteForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtener valores del formulario
    var fechaInicio = document.getElementById("fecha_inicio").value;
    var fechaFin = document.getElementById("fecha_fin").value;
  
    // Realizar acciones con los valores (ejemplo: generar reporte)
    var reporteResult = document.getElementById("reporteResult");
    reporteResult.innerHTML = "Reporte generado para el período " + fechaInicio + " - " + fechaFin;
  });
  