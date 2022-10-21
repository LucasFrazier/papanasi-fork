// import { CodeJar } from 'codejar';
import { HLJSApi } from 'highlight.js';
import { classesToString, CodeJar, wait } from '~/helpers';
import { CodeTheme, codeThemes } from './code.model';

export class CodeService {
  public styles = [];
  public jar: CodeJar;
  public hljs: HLJSApi;
  public currentThemeIndex = 0;

  public getClasses(language: string, className: string) {
    const base = classesToString(['pa-code', className || '']);
    const editor = classesToString(['pa-code__editor', [language, `language-${language}`]]);

    return { base, editor };
  }

  public initialize(codeRef, language: string, theme: CodeTheme) {
    this.hljs = require('highlight.js/lib/core').default;
    this.jar = CodeJar(codeRef, (editor: HTMLElement) => this.highlightCode(editor));

    this.hljs.configure({
      ignoreUnescapedHTML: true
    });

    this.registerLanguage(language);
    this.registerThemes();
    this.updateCurrentTheme(theme);
  }

  public destroy() {
    this.jar.destroy();
  }

  public update(code: string) {
    this.jar.updateCode(code);
  }

  public onUpdate(callback: (code: string) => void) {
    this.jar.onUpdate(callback);
  }

  public async setEditable(codeRef, editable: boolean) {
    await wait();
    codeRef.setAttribute('contenteditable', editable ? 'plaintext-only' : 'false');
  }

  private registerLanguage(language: string) {
    // Highlight does not support those types
    if (language === 'jsx') {
      this.hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
      this.hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

      return;
    }

    if (language === 'tsx') {
      this.hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
      this.hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));

      return;
    }

    this.hljs.registerLanguage(language, require('highlight.js/lib/languages/' + language));
  }

  private registerThemes() {
    if (this.styles?.length > 0) {
      return;
    }

    this.styles = codeThemes.map((name) => {
      const link = document.createElement('link');
      link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/${name}.min.css`;
      link.rel = 'stylesheet';
      link.disabled = true;
      document.head.appendChild(link);
      return link;
    });
  }

  private updateCurrentTheme(theme: CodeTheme) {
    this.styles[this.currentThemeIndex].setAttribute('disabled', 'true');

    this.currentThemeIndex = this.styles.findIndex((style) => style.href.includes(theme));
    this.styles[this.currentThemeIndex].removeAttribute('disabled');
  }

  private highlightCode(editor: HTMLElement) {
    this.hljs.highlightElement(editor);

    // Show colors in css
    if (!editor.classList.contains('language-css')) {
      return;
    }

    editor.querySelectorAll('.hljs-number').forEach((element) => {
      element.setAttribute('style', `--number-color: ${element.textContent}`);
    });
  }
}
