export interface InitTemplateInterface {
  mainClassName?: Array<string> | string;
  id?: string | number;
}

export const getInitTemplate = <T extends InitTemplateInterface>(initData: T): HTMLDivElement => {
  const classNames = Array.isArray(initData?.mainClassName) ? initData?.mainClassName?.join(' ') : initData?.mainClassName;

  const mainWrapper = document.createElement('div');
  mainWrapper.className = `modal modal_main_wrap ${classNames || ''}`;
  if (initData?.id) mainWrapper.id = initData.id.toString();

  mainWrapper.innerHTML = `<div class="modal_overlay">
  <div class="modal_container">
  </div>`;

  return mainWrapper;
};
