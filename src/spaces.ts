export const Spaces = (text: string): string => {
    while(text.indexOf('  ') !== -1) {
        text = text.replace(/  /g, '&nbsp;&nbsp;');
    }

    return text.replace(/\n/g, '<br>');
}