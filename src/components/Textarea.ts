import { Button } from "./Button";

/**
 *  <div class="blaze-toolbar">
        ${ Button({ icon: 'fas fa-bold', class: 'blaze-bold' }) }
        ${ Button({ icon: 'fas fa-italic', class: 'blaze-italic' }) }
        ${ Button({ icon: 'fas fa-underline', class: 'blaze-underline' }) }
    </div>
 */

export default (props: any) => (`<div class="blaze-editor">
    <div class="blaze-toolbar">
        <header class="blaze-header">BlazeEditor</header>

        <select class="blaze-select" blaze-language>
            ${props.config.languages.map((language: any): string => `<option value="${language.name}">${language.name}</option>`)}
        </select>
    </div>

    <div class=":root blaze-relative">
        <textarea class="blaze-textarea" spellcheck="false"></textarea>
        <div class="blaze-preview"> <i style="color:#aaa">${props.config.placeholder ? props.config.placeholder : "Type here..."}</i> </div>
    </div>
</div>`);