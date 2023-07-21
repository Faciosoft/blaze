export const LoadFontawesome = (): void => {
    let has: boolean = false;

    document.querySelectorAll('link').forEach((style: any) => {
        if(style.getAttribute("href").indexOf('fontawesome') !== -1) has = true;
    });

    document.querySelectorAll('script').forEach((script: any) => {
        if(!script.getAttribute("src")) return;

        if(script.getAttribute("src").indexOf('fontawesome') !== -1) has = true;
    });

    if(!has) document.head.innerHTML += `<script src="https://kit.fontawesome.com/f6412110a3.js" crossorigin="anonymous"></script>`;
}