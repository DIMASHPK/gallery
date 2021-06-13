export const header = `<h3 class="previewModal_title">Preview Modal</h3>`

export const content = `<div class="previewModal_body_container">
    <div class="previewModal_body_downloadSection">
        <label>
            <span>Drag and drop image to attach or</span>
            <span>select from Device</span>
            <input
              type="file"
              multiple
              hidden
              accept="image/png, image/gif, image/jpeg, image/jpg"
            />
        </label>
    </div>
    <div class="previewModal_body_previewsSection">
        <div class="previewModal_body_preview">
            <button class="previewModal_body_preview_removeButton">&#x2715</button>
            <img
              src="https://ok-radio.ru/wp-content/uploads/2016/03/image-3.jpg"
              alt=""
              class="previewModal_body_preview_image"
            >
            <div class="previewModal_body_preview_info">
                <span>my name efrfrrf r</span>
                <span>15kb</span>
           </div>
        </div>
        <div class="previewModal_body_preview">
            <button class="previewModal_body_preview_removeButton">&#x2715</button>
            <img
              src="http://ok-radio.ru/wp-content/uploads/2016/03/image-5.jpg"
              alt=""
              class="previewModal_body_preview_image"
            >
            <div class="previewModal_body_preview_info">
                <span>my name</span>
                <span>15kb</span>
           </div>
        </div>
        <div class="previewModal_body_preview">
            <button class="previewModal_body_preview_removeButton">&#x2715</button>
            <img
              src="https://nev73.ru/wp-content/uploads/2019/10/lorem2.jpg"
              alt=""
              class="previewModal_body_preview_image"
             >
            <div class="previewModal_body_preview_info">
                <span>my name</span>
                <span>15kb</span>
           </div>
        </div>
</div>
</div>`

export const bottom = `<div class="previewModal_bottom_container">
    <button class="previewModal_bottom_cancelButton button_secondary">cancel</button>
    <button class="previewModal_bottom_cancelButton button_primary">save</button>
</div>`