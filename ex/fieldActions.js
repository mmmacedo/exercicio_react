export function changeValue(event) {
    return {
        type: 'VALUE_CHANGED', //campo obrigatorio
        payload: event.target.value //dado conjunto da acao
    }
}