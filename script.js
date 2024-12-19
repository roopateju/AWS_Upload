
document.addEventListener('DOMContentLoaded', function () {
    
    const proofItems = document.querySelectorAll('.valid-proof');

    proofItems.forEach(function (proof) {
        proof.addEventListener('click', function () {
    
            proof.classList.toggle('open');

            const triangle = proof.querySelector('.triangle');
            if (proof.classList.contains('open')) {
                
                triangle.style.transform = 'rotate(90deg)';
            } else {
            
                triangle.style.transform = 'rotate(0deg)';
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const uploadForm = document.getElementById("upload-form");
    const uploadButton = document.getElementById("upload-button");
    const uploadStatus = document.getElementById("upload-status");

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".png, .jpg, .jpeg, .pdf";
    fileInput.multiple = true;

    
    document.querySelector(".file-label").addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        const files = fileInput.files;
        if (files.length > 5) {
            uploadStatus.textContent = "You can only upload up to 5 files.";
            uploadStatus.style.color = "red";
        } else {
            uploadStatus.textContent = `You have selected ${files.length} file(s).`;
            uploadStatus.style.color = "black";
        }
    });

    
    uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const files = fileInput.files;
        if (files.length === 0) {
            uploadStatus.textContent = "Please select files to upload.";
            uploadStatus.style.color = "red";
            return;
        }

        let isValid = true;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            const fileType = file.type;
            if (!["image/png", "image/jpg", "image/jpeg", "application/pdf"].includes(fileType)) {
                isValid = false;
                uploadStatus.textContent = "Only PNG, JPG, and PDF files are accepted.";
                uploadStatus.style.color = "red";
                break;
            }

            const fileSize = file.size / 1024 / 1024; 
            if (fileSize > 4) {
                isValid = false;
                uploadStatus.textContent = "Each file must be less than 4 MB.";
                uploadStatus.style.color = "red";
                break;
            }
        }

        if (isValid) {
            uploadStatus.textContent = "Uploading files...";
            uploadStatus.style.color = "green";
            
            setTimeout(function () {
                uploadStatus.textContent = "Upload successful!";
                uploadStatus.style.color = "green";
            }, 3000);
        }
    });
});