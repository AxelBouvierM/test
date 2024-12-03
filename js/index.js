let button = document.querySelector('#buttonSend')

button.addEventListener('click', redirect)
/* Al seelccionar uno de los tipos de bots que cambie la view para completar los datos del respectivo bot.
Seleccionar tipo de partner. */
/* function crearCoti() {
    let botType = document.querySelector('#inputBotType').value
    let cub = +document.querySelector('#inputCUB').value
    let cui = +document.querySelector('#inputCUI').value
    let knowledgeSi = document.querySelector('#inputAssistantYes').checked
    let knowledgeNo = document.querySelector('#inputAssistantNo').checked
    let sesionesHey = document.querySelector('#inputSesionesHey').value.split('-')
    let sesionesHeyIA = document.querySelector('#inputSesionesHeyIA').value.split('-')

    // Verificar si VPN está seleccionado
    let vpnSi = document.querySelector('#inputVPNYes').checked
    let vpnNo = document.querySelector('#inputVPNNo').checked

    // Verifica si ImageBot y Voice2Text están seleccionados
    let imagebot = document.querySelector('#inputImageBot').checked
    let voice2text = document.querySelector('#inputVoice2Text').checked
    
    let desc = ''
    let totalSetUp = 0
    let horasSetUp = 0

    if (cub > 0) {
        desc += `- ${cub} casos de uso sin integraciones<br>`
        totalSetUp += (cub * 500)
        horasSetUp += (cub * 10)
    }
    if (cui > 0) {
        desc += `- ${cui} casos de uso con integraciones<br>`
        totalSetUp += (cui * 900)
        horasSetUp += (cui * 15)
    }

    if (knowledgeSi) {
        desc += `- Asistente conversacional<br>`
        totalSetUp += 1000
        horasSetUp += 15
    }

    if (botType == 1) {
        totalSetUp += 400
        horasSetUp += 10
    } else {
        totalSetUp += 1000
        horasSetUp += 20
    }

    let coti = [
        { 
            item: botType == '1' ? 'Bot de 1era generación' : 'Bot de 4ta generación', 
            descr: desc, 
            precio: totalSetUp, 
            tipoPago: 'Pago inicial por unica vez', 
            horas: horasSetUp 
        }
    ]

    let itemSesiones = '' 
    let totalSesiones = 0
    if (+sesionesHey[0] > 0) {
        itemSesiones = `${+sesionesHey[0]} Sesiones Hey`
        totalSesiones = +sesionesHey[1]
        coti.push({ 
            item: itemSesiones,
            descr: '-', 
            precio: totalSesiones, 
            tipoPago: 'Pago Mensual', 
            horas: 0 
        })
    }

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
            tipoPago: 'Pago Mensual', 
            horas: 8
        })
    }

    // Solo agregar Imagebot si está marcado
    if (imagebot) {
        coti.push({ 
            item: 'Imagebot',
            descr: '-', 
            precio: 2000, 
            tipoPago: 'Pago inicial por unica vez', 
            horas: 70
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

    
    window.localStorage.setItem('coti', JSON.stringify(coti))
    window.location.href = 'cotizacionRealizada.html'
}
 */

function redirect() {
    let botType = document.querySelector('#inputBotType').value
    window.localStorage.setItem('botType', botType)
    if (botType == '1') window.location.href = 'cotizador_1era_gen.html'
    if (botType == '2') window.location.href = 'cotizador_mailbot.html'
    if (botType == '3') window.location.href = 'cotizador_voicebot.html'
    if (botType == '4') window.location.href = 'cotizador_4ta_gen.html'
}