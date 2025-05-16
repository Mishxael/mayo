 const botonAgregar = document.getElementById("agregar");
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    const totalTareas = document.getElementById("totalTareas");

    var contador = 0;

    botonAgregar.addEventListener("click", () => {
      var nombres = document.getElementById("nombres").value.trim();
      var apellidos = document.getElementById("apellidos").value;
      var cedula = document.getElementById("cedula").value;
      var edad = document.getElementById("edad").value;
      var tarea = document.getElementById("tarea").value;
     

      contador++;

      var fila = document.createElement("tr");

      

      fila.innerHTML = `
        <td>${contador}</td>
        <td>${nombres}</td>
        <td>${apellidos}</td>
        <td>${cedula}</td>
        <td>${edad}</td>
        <td>${tarea}</td>`;
        

      cuerpoTabla.appendChild(fila);

     
      totalMiembros.textContent = `Total: ${contador} Miembros`;

    
     
    });