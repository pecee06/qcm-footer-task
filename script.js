document.querySelectorAll(".top .box").forEach((elem)=>{
    let underline = elem.querySelector(".underline");
    $(elem).on("mouseover",()=>{
        gsap.to(underline,{
            width: "95%",
            ease: Power2
        });
    });
    $(elem).on("mouseleave",()=>{
        gsap.to(underline,{
            width: 0,
            ease: Power2
        });
    });
});