window.addEventListener("DOMContentLoaded", () =>{

    const trigerBtn = document.querySelector("#modalBtn");
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector("#closeModal");

    trigerBtn.addEventListener("click", (e) =>{
        showModal();
    });

    closeBtn.addEventListener("click", () =>{
        hideModal();
    });

    setTimeout(showModal, 10000);

    function showModal (){
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow ="hidden";
    }
    function hideModal(){
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow ="hidden";
    };
});