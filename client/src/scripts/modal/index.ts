import { InitTemplateInterface, getInitTemplate } from './templates';

interface ModalContentType {
  header?: string;
  content?: string;
  bottom?: string;
}

export class Modal<T extends InitTemplateInterface> {
  mainNode: HTMLDivElement;
  mainNodeContainer: HTMLDivElement | null;
  mainNodeOverlay: HTMLDivElement | null;

  constructor(initData: T) {
    this.mainNode = getInitTemplate(initData);
    this.mainNodeContainer = this.mainNode.querySelector('.modal_container');
    this.mainNodeOverlay = this.mainNode.querySelector('.modal_overlay');

    console.log(this.mainNode.closest('.modal_overlay'));

    this.createModal();
  }

  createModal = (): void => {
    document.body.insertAdjacentElement('beforeend', this.mainNode);
  };

  addContent = (content: ModalContentType) => {
    const modalContainer = this.mainNodeContainer;

    if (content?.header) {
      modalContainer?.insertAdjacentHTML('beforeend', `<div class="modal_container_header">${content.header}</div>`);
    }
    if (content?.content) {
      modalContainer?.insertAdjacentHTML('beforeend', `<div class="modal_container_header">${content.content}</div>`);
    }
    if (content?.bottom) {
      modalContainer?.insertAdjacentHTML('beforeend', `<div class="modal_container_header">${content.bottom}</div>`);
    }
  };

  showModal = () => {
    this.mainNode.classList.add('show');

    setTimeout(() => this.mainNodeOverlay?.classList.add('showOverlay'), 0);
  };

  closeModal = () => {
    this.mainNodeOverlay?.classList.remove('showOverlay');
    setTimeout(() => this.mainNode.classList.remove('show'), 300);
  };
}

declare global {
  interface Window {
    newPropers: any;
  }
}

const modal = new Modal({ mainClassName: '', id: 'mainModal' });
modal.addContent({ bottom: 'lorem wefwefw fw wrfrw frwf rwf wrfrw', content: 'aslfalfqlefg1r13r13 1e 1e 13r 13' });
window.newPropers = modal;
