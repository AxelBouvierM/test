let button = document.querySelector('#buttonSend')
let cui = document.querySelector('#inputCUI')

cui.addEventListener("change", (event) => {

    if (+cui.value > 0) {
        document.querySelector('#integraciones').removeAttribute('hidden');
    } else {
        document.querySelector('#integraciones').setAttribute('hidden', '');
    }
})

button.addEventListener('click', crearCoti)
/* Al seelccionar uno de los tipos de bots que cambie la view para completar los datos del respectivo bot.
Seleccionar tipo de partner. */
function crearCoti() {
    let cub = +document.querySelector('#inputCUB').value
    let cui = +document.querySelector('#inputCUI').value
    let knowledgeSi = document.querySelector('#inputAssistantYes').checked
    let sesionesHeyIA = document.querySelector('#inputSesionesHeyIA').value.split('-')
    let integraciones = document.querySelector('#inputIntegraciones')
    let soporte = document.querySelector('#inputSoporte').value.split('-')

    // Verificar si VPN está seleccionado
    let vpnSi = document.querySelector('#inputVPNYes').checked
    let vpnNo = document.querySelector('#inputVPNNo').checked

    // Verifica si ImageBot y Voice2Text están seleccionados
    let imagebot = document.querySelector('#inputImageBot').checked
    let voice2text = document.querySelector('#inputVoice2Text').checked
    let catalogo = document.querySelector('#inputCatalogo').checked

    let error =  document.querySelector('#error')
    error.innerHTML = ''
    
    let desc = ''
    let totalSetUp = 1000
    let horasSetUp = 20

    if (cub > 0) {
        desc += `- ${cub} casos de uso sin integraciones<br>`
        totalSetUp += (cub * 500)
        horasSetUp += (cub * 10)
    }
    if (cui > 0) {
        if (+integraciones.value > 0) {
            integraciones.style.border = "";
            desc += `- ${cui} casos de uso con ${integraciones.value} integraciones<br>`
            totalSetUp += (cui * 900)
            horasSetUp += (cui * 15) + (+integraciones.value * 5)
        } else {
            integraciones.style.border = "1px solid red";
            error.innerHTML = 'Es necesario indicar la cantidad de integraciones'
            return;
        }
    }

    if (knowledgeSi) {
        desc += `- Asistente conversacional<br>`
        totalSetUp += 1000
        horasSetUp += 15
    }

    let coti = [
        { 
            item: 'Bot de 4ta generación', 
            descr: desc, 
            precio: totalSetUp, 
            tipoPago: 'Pago inicial por unica vez', 
            horas: horasSetUp 
        }
    ]

    let itemSesiones = '' 
    let totalSesiones = 0
    if (+sesionesHeyIA[0] > 0) {
        itemSesiones = `${+sesionesHeyIA[0]} Sesiones Hey con IA`
        totalSesiones = +sesionesHeyIA[1]
        coti.push({ 
            item: itemSesiones,
            descr: '-', 
            precio: totalSesiones, 
            tipoPago: 'Pago Mensual', 
            horas: 0 
        })
    }
    // Solo agregar VPN si está marcado
    if (vpnSi) {
        coti.push({
            item: 'VPN',
            descr: 'Conexión VPN para los servicios',
            precio: 360,
            tipoPago: 'Pago inicial por unica vez',
            horas: 8
        })
        coti.push({
            item: 'VPN',
            descr: 'Conexión VPN para los servicios',
            precio: 190,
            tipoPago: 'Pago Mensual',
            horas: 8
        })
    }

    // Solo agregar Imagebot si está marcado
    if (imagebot) {
        coti.push({
            item: 'Imagebot',
            descr: '- Documentos con formato fijo / variable',
            precio: 2800,
            tipoPago: 'Pago inicial por unica vez',
            horas: 80
        })
    }

    // Solo agregar Voice2Text si está marcado
    if (voice2text) {
        coti.push({
            item: 'Voice2Text',
            descr: '-',
            precio: 800,
            tipoPago: 'Pago inicial por unica vez',
            horas: 20
        })
    }

    if (catalogo) {
        coti.push({
            item: 'Catálogo',
            descr: '- Catálogo de WhatsApp',
            precio: 900,
            tipoPago: 'Pago inicial por unica vez',
            horas: 20
        })
    }

    if (soporte[0] > 0) {
        coti.push({
            item: `Soporte ${soporte[2]}`,
            descr: `- Soporte extendido (${soporte[0]} horas de dedicación)`,
            precio: +soporte[1],
            tipoPago: 'Pago mensual',
            horas: 0
        })
    } else {
        coti.push({
            item: `Soporte básico`,
            descr: `- Soporte básico (${sesionesHeyIA[0] == '2500' ? '4 horas' : '8 horas'} de dedicación)`,
            precio: +soporte[1],
            tipoPago: 'Pago mensual',
            horas: 0
        })
    }

    console.log(coti)
    window.localStorage.setItem('coti', JSON.stringify(coti))
    window.location.href = 'cotizacionRealizada.html'
}