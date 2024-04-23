import Utilities from "../helpers/Utilities";
import OwnPhoto from "../media/OwnPhoto";

class OwnPhotoElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="info-panel inner-panel">
                        <label for="txtAuthor"><u>Author:</u></label>
                        <input
                            type="text"
                            name="author"
                            id="txtAuthor"
                            class="input-device input-box-1"
                            placeholder="Name And/Or Surname" />
                        <label for="txtDescription"><u>Description:</u></label>
                        <input
                            type="text"
                            name="description"
                            id="txtDescription"
                            class="input-device input-box-1"
                            placeholder="Description" />
                        <label for="txtYear"><u>Year:</u></label>
                        <input
                            type="number"
                            name="year"
                            id="txtYear"
                            class="input-device input-box-1"
                            placeholder="Year" />
                        <label for="btnFormat"><u>Format:</u></label>
                        <button id="btnFormat" class="input-device button-1">Format</button>
                    </div>`;

        const btnFormat = document.getElementById("btnFormat");

        const txtAuthor = document.getElementById("txtAuthor");
        const txtDescription = document.getElementById("txtDescription");
        const txtYear = document.getElementById("txtYear");

        const txtParaQuote = document.getElementById("txtParaQuote");
        const txtReferenceList = document.getElementById("txtReferenceList");

        txtYear.value = new Date().getFullYear();

        btnFormat.addEventListener("click", () => {
            if (Utilities.areNullOrEmpty(txtAuthor.value, txtDescription.value)) {
                return;
            }

            const ownPhoto = new OwnPhoto(txtAuthor.value, txtYear.value, txtDescription.value);

            txtParaQuote.innerHTML = `<u><strong>In-Text Paraphrase:</strong></u><br><br>${ownPhoto.getParaphrased()}<br><br><u><strong>In-Text Quote:</strong></u><br><br>${ownPhoto.getQuote()}`;
            txtReferenceList.innerHTML = ownPhoto.toString();
        });
    }
}

window.customElements.define("own-photo-element", OwnPhotoElement);
