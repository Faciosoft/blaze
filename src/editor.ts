import Textarea from "./components/Textarea";
import { AddStyles } from "./css/AddStyles";
import { SecureString } from "./securestring";
import { Spaces } from "./spaces";
import { LoadFontawesome } from './fontawesome';

export class BlazeEditor {
    private $root: HTMLElement;
    private $textarea: HTMLTextAreaElement;
    private $preview: HTMLDivElement;

    private config: any;
    private currentLanguage: string;

    constructor(el: HTMLElement|string, config: any) {
        // Handling root element
        if(el instanceof HTMLElement) 
            this.$root = el;
        else 
            this.$root = document.querySelector(el);

        this.config = config;
        if(!this.CheckConfig()) return;

        this.currentLanguage = this.config.languages[0].name;

        // Setup
        this.setup();
    }

    private setup(): void {
        LoadFontawesome();
        AddStyles();

        this.$root.innerHTML = Textarea({ config: this.config });
        this.$textarea = this.$root.querySelector('.blaze-textarea');
        this.$preview = this.$root.querySelector('.blaze-preview');

        this.ListenForTextareaChanges();
        this.ListenForLangaugeChanges();
    }

    private CheckConfig(): boolean {
        if(!this.config.languages) return false;

        return true;
    }

    private GetCursor(): number {
        return this.$textarea.selectionStart;
    }

    private GetEndCursor(): number {
        return this.$textarea.selectionEnd;
    }

    private SetCursor(cursor: number): void {
        this.$textarea.setSelectionRange(cursor, cursor)
    }

    private ListenForTextareaChanges(): void {
        this.$textarea.addEventListener('input', ($event: InputEvent) => this.HandleTextareaInput($event));
        this.$textarea.addEventListener('keydown', ($event: KeyboardEvent) => this.HandleTextareaKeyboardEvent($event));
        this.$textarea.addEventListener('scroll', ($event: WheelEvent) => this.HandleTextareaWheelEvent($event));
    }

    private ListenForLangaugeChanges(): void {
        this.$root.querySelector('[blaze-language]').addEventListener('change', ($event: any) => this.HandleChangeLanguage($event));
    }

    private HandleTextareaWheelEvent($event: WheelEvent): void {
        const scrollTop: number = this.$textarea.scrollTop;
        const scrollLeft: number = this.$textarea.scrollLeft;

        this.$preview.scrollTo(scrollLeft, scrollTop);
    }

    private HandleTextareaInput($event: InputEvent): void {
        this.ChangePreview();
    }

    private HandleTextareaKeyboardEvent($event: KeyboardEvent): void {
        if($event.key === "Tab") {
            const cursor: number = this.GetCursor();

            const newText: string = this.$textarea.value.slice(0, cursor) + this.MultiplyPattern(' ', this.config.tabSize ? this.config.tabSize : 4) + this.$textarea.value.slice(cursor)
            this.$textarea.value = newText;

            this.ChangePreview();
            this.SetCursor(cursor + 4);
            $event.preventDefault();
        }
    }

    private ChangePreview(): void {
        const html: string = this.Quotes(Spaces(this.ApplyPatterns(SecureString(this.$textarea.value))));

        this.$preview.innerHTML = html;
    }

    private Quotes(text: string): string {
        return text.replace(/\[\[BLAZE:QUOTE\]\]/g, '"');
    }

    private MultiplyPattern(what: string, many: number): string {
        let str: string = '';
        
        for(let i = 0; i < many; i++) 
            str += what;

        return str;
    }

    private HandleChangeLanguage($event): void {
        this.currentLanguage = $event.target.value;
    }

    private GetLanguage(): any {
        return this.config.languages.find((lang: any) => lang.name === this.currentLanguage);
    }

    private ApplyPatterns(text: string): string {
        const language: any = this.GetLanguage();
        if(!language) return text;

        // Patterns
        language.patterns.forEach((pattern: any): void => {
            pattern.patterns.forEach((smallPattern: any) => {
                text = text.replace(smallPattern, (part: string) => `<span style=[[BLAZE:QUOTE]]color: ${pattern.color}${pattern.important ? '!important' : ''};[[BLAZE:QUOTE]]>${part}</span>`); 
            });
        });

        return text;
    }
}