import {InitTemplateInterface, getInitTemplate} from './templates';
import './modal.css'

export interface ModalContentType {
    header?: string;
    content?: string;
    bottom?: string;
}

class Modal<T extends InitTemplateInterface> {
    mainNode: HTMLDivElement;
    mainNodeContainer: HTMLDivElement | null;
    mainNodeOverlay: HTMLDivElement | null;
    closeButton: HTMLDivElement | null;

    constructor(initData: T) {
        this.mainNode = getInitTemplate(initData);
        this.mainNodeContainer = this.mainNode.querySelector('.modal_container');
        this.mainNodeOverlay = this.mainNode.querySelector('.modal_overlay');
        this.closeButton = this.mainNode.querySelector('.modal_container_closeButton');

        this.handleCreateModal();
    }

    handleCreateModal = (): void => {
        document.body.insertAdjacentElement('beforeend', this.mainNode);
        this.mainNodeOverlay?.addEventListener('click', this.handleOverlay)
        this.closeButton?.addEventListener('click', this.handleClose)

    };

    handleAddContent = (content: ModalContentType): void => {
        const modalContainer = this.mainNodeContainer;

        for (const [key, value] of Object.entries(content)) {
            modalContainer?.insertAdjacentHTML('beforeend', `<div class="modal_container_${key}">${value}</div>`);
        }
    };

    handleShow = (): void => {
        this.mainNode.classList.add('show');

        setTimeout(() => this.mainNodeOverlay?.classList.add('showOverlay'), 0);
    };

    handleClose = (): void => {
        this.mainNodeOverlay?.classList.remove('showOverlay');
        setTimeout(() => this.mainNode.classList.remove('show'), 300);
    };

    handleOverlay = (e: Event): void => {
        const target = e.target as Element

        if (target?.classList.contains('modal_overlay')) {
            this.handleClose()
        }
    }

    getItem = (selector: string): HTMLElement | null => {
        return this.mainNode.querySelector(selector)
    }
}

export default Modal
