document.addEventListener('DOMContentLoaded', () => {
    let items = JSON.parse(window.localStorage.getItem('coti'))
    let quoteItems = document.querySelector('#quoteItems')
    quoteItems.innerHTML = ''

    let horas = 0
    items.forEach(item => {
        horas += item.horas
        const row = `
    <tr>
        <td>${item.item}</td>
        <td>${item.descr}</td>
        <td>USD ${item.precio}</td>
        <td>${item.tipoPago}</td>
    </tr>`;
        quoteItems.innerHTML += row;
    });

    let horasDesarrollo = document.querySelector('#grandTotal')
    horasDesarrollo.innerHTML = horas
    const fechaActual = new Date(); // Obtén la fecha actual
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' }; // Configuración para formatear la fecha
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones); // Formato: 28 de noviembre de 2024

    document.getElementById('fechaActual').textContent = fechaFormateada; // Inserta la fecha en el span

})

/* document.getElementById('buttonSend').addEventListener('click', () => {
    // Generar PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.html(document.querySelector('.invoice-container'), {
        callback: function (doc) {
            doc.save('cotizacion_heynow.pdf');
        },
        x: 10,
        y: 10
    });
}); */

document.getElementById('buttonSend').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const invoice = document.querySelector('.invoice-container');

    html2canvas(invoice, {
        scale: 2, // Incrementa la calidad del canvas
        useCORS: true // Permite cargar imágenes externas si es necesario
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 190; // Ancho de la imagen en mm
        const pageHeight = 297; // Alto de la página A4 en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Ajusta la proporción

        let heightLeft = imgHeight;
        let position = 10; // Margen inicial

        doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight); // Agrega la primera página
        heightLeft -= pageHeight;

        // Si hay contenido que no cabe en una sola página
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        doc.save('cotizacion_heynow.pdf'); // Descarga el PDF
    }).catch(error => {
        console.error('Error al generar el PDF:', error);
    });
});
