// @ts-ignore
import {mainModal} from '/src/scripts/init';

class PreviewButton {
    button: HTMLButtonElement | null

    constructor() {
        this.button = document.querySelector('.infoSection_titleContainer_action.button_primary')
        this.button?.addEventListener('click', this.handleClick)

    }

    handleClick = () => {
        mainModal.handleShow()
    }
}

const previewButton = new PreviewButton()

export default previewButton;