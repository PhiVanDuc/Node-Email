const input_file = document.querySelector('#input-file');
const button_upload_file = document.querySelector('.button-upload-file');
const list_file = document.querySelector('.list-file');
const number_file = document.querySelector('.number-file');

function convertFileSize(fileSizeInBytes) {
    if (fileSizeInBytes < 1024) {
        return fileSizeInBytes + " bytes";
    } else if (fileSizeInBytes < 1024 * 1024) {
        const fileSizeInKB = fileSizeInBytes / 1024;
        return fileSizeInKB.toFixed(2) + " KB";
    } else if (fileSizeInBytes < 1024 * 1024 * 1024) {
        const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
        return fileSizeInMB.toFixed(2) + " MB";
    } else {
        const fileSizeInGB = fileSizeInBytes / (1024 * 1024 * 1024);
        return fileSizeInGB.toFixed(2) + " GB";
    }
}

input_file.addEventListener('change', (event) => {
    const target = event.target;
    
    list_file.innerHTML = ``;
    number_file.textContent = `${ target.files.length } Files Selected`;

    for(file of target.files) {
        const reader = new FileReader();

        const list_item = document.createElement('li');
        const file_name = file.name;
        let size = ``;

        list_item.innerHTML = `
            <p>${ file_name }</p>
            <p>${ convertFileSize(file.size) }</p>
        `;

        list_file.appendChild(list_item);
    }
})