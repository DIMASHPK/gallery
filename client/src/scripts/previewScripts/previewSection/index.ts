// @ts-ignore
import {mainModal} from 'src/scripts/init';

class PreviewSection {
    dragSection: HTMLElement | null
    previewSection: HTMLElement | null
    previewsArray: []


    constructor() {
        this.dragSection = mainModal.getItem('.previewModal_body_downloadSection');
        this.previewSection = mainModal.getItem('.previewModal_body_previewsSection');
        this.previewsArray = [];

        this.dragSection?.querySelector('input[type=file]')?.addEventListener('change', this.handleInput)

    }

    handleInput = (e: Event): void => {
        const {files} = e.target as HTMLInputElement

        this.previewsArray = []

        console.log(files && Array.from(files))


    }
}