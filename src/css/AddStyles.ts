import Style from './Style';

export const AddStyles = (): void => {
    const style = document.createElement("style");
    style.innerHTML = Style;

    document.head.append(style);
}