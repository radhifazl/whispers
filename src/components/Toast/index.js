import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showCloseButton: true,
    showConfirmButton: false,
    color: '#1E1E1E',
    timerProgressBar: true,
    timer: 3000,
})

export { Toast }