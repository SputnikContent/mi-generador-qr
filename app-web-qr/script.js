document.addEventListener('DOMContentLoaded', () => {
    const linkInput = document.getElementById('linkInput');
    const generateBtn = document.getElementById('generateBtn');
    const qrcodeDiv = document.getElementById('qrcode');
    const errorMsg = document.getElementById('errorMsg');

    generateBtn.addEventListener('click', () => {
        const url = linkInput.value.trim(); // .trim() para eliminar espacios en blanco
        errorMsg.textContent = ''; // Limpiar mensaje de error previo
        qrcodeDiv.innerHTML = ''; // Limpiar QR previo

        if (url) {
            // Validar que sea una URL básica
            try {
                new URL(url); // Intenta crear un objeto URL para validación
                // Generar el código QR
                new QRCode(qrcodeDiv, {
                    text: url,
                    width: 250,
                    height: 250,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H // Nivel de corrección de errores (L, M, Q, H)
                });
            } catch (e) {
                errorMsg.textContent = 'Por favor, introduce un enlace válido (ej: https://www.ejemplo.com).';
            }
        } else {
            errorMsg.textContent = 'Por favor, introduce un enlace para generar el QR.';
        }
    });
});