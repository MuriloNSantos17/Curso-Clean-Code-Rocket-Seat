export function Button() {
    const isFormSubmiting = true;

    return (
        <button disabled={isFormSubmiting}>
            <span></span>
            Enviar
        </button>
    )
}