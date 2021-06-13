// @ts-ignore
import {mainModal} from '/src/scripts/init';
import previewButton from './modalButton'
import {header, bottom, content} from './previewModalTemplate'
import './styles.css'

class PreviewSection {
    openModalButton: typeof previewButton

    constructor() {
        this.openModalButton = previewButton

        mainModal.handleShow()
        mainModal.handleAddContent({header, content, bottom})
        mainModal.getItem('.previewModal_bottom_cancelButton')?.addEventListener('click', mainModal.handleClose)
    }
}

export default PreviewSection