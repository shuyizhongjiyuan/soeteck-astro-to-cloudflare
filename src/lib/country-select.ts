/**
 * 自定义国家选择器（下拉 + 搜索 + 国旗 + 键盘导航）。
 *
 * 从 contact/ContactPage.astro 内联脚本提取为共享模块，
 * 供 Contact 页与产品询盘表单共同复用。DOM 驱动，instance 自初始表根节点。
 *
 * 用法：
 *   <div class="soeteck-country-select" data-country-select>…</div>
 *   document.querySelectorAll<HTMLElement>('[data-country-select]')
 *     .forEach((el) => new CountrySelect(el));
 *
 * 选中后写入隐藏原生 <select name="country" data-country-native> 供 formData 提交。
 */

export class CountrySelect {
  private root: HTMLElement;
  private trigger: HTMLButtonElement;
  private dropdown: HTMLElement;
  private placeholder: HTMLElement;
  private nativeSelect: HTMLSelectElement;
  private searchInput: HTMLInputElement;
  private list: HTMLElement;
  private options: HTMLElement[];
  private visibleOptions: HTMLElement[];
  private selectedCode: string = '';
  private isOpen: boolean = false;
  private activeIndex: number = -1;

  constructor(root: HTMLElement) {
    this.root = root;
    this.trigger = root.querySelector<HTMLButtonElement>('[data-country-trigger]')!;
    this.dropdown = root.querySelector<HTMLElement>('[data-country-dropdown]')!;
    this.placeholder = root.querySelector<HTMLElement>('[data-country-placeholder]')!;
    this.nativeSelect = root.querySelector<HTMLSelectElement>('[data-country-native]')!;
    this.searchInput = root.querySelector<HTMLInputElement>('[data-country-search]')!;
    this.list = root.querySelector<HTMLElement>('[data-country-list]')!;
    this.options = Array.from(root.querySelectorAll<HTMLElement>('[data-country-value]'));
    this.visibleOptions = [...this.options];

    this.bindEvents();
    this.close();
  }

  private bindEvents(): void {
    this.trigger.addEventListener('click', () => this.toggle());

    document.addEventListener('click', (e) => {
      if (!this.root.contains(e.target as Node)) this.close();
    });

    this.trigger.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); this.open(); this.focusOption(0); }
      if (e.key === 'ArrowUp') { e.preventDefault(); this.open(); this.focusOption(this.visibleOptions.length - 1); }
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.toggle(); }
      if (e.key === 'Escape') this.close();
    });

    this.options.forEach((opt) => {
      opt.addEventListener('click', () => this.select(opt));
      opt.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.select(opt); }
        if (e.key === 'ArrowDown') { e.preventDefault(); this.focusNext(1); }
        if (e.key === 'ArrowUp') { e.preventDefault(); this.focusNext(-1); }
        if (e.key === 'Escape') { e.preventDefault(); this.close(); this.trigger.focus(); }
        if (e.key === 'Tab') this.close();
      });
    });

    // 搜索过滤
    let searchTimer: number;
    this.searchInput.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = window.setTimeout(() => this.filter(), 80);
    });
    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); this.focusOption(0); }
      if (e.key === 'Escape') { e.preventDefault(); this.close(); this.trigger.focus(); }
    });
  }

  private toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  private open(): void {
    this.isOpen = true;
    this.dropdown.classList.add('is-open');
    this.trigger.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => this.searchInput.focus());
  }

  private close(): void {
    this.isOpen = false;
    this.dropdown.classList.remove('is-open');
    this.trigger.setAttribute('aria-expanded', 'false');
    this.searchInput.value = '';
    this.filter();
  }

  private select(opt: HTMLElement): void {
    const code = opt.getAttribute('data-country-value') || '';
    const name = opt.getAttribute('data-country-name') || '';
    const flagImg = opt.querySelector('.soeteck-country-select__flag img');
    const flagHtml = flagImg ? flagImg.outerHTML : '';
    this.selectedCode = code;
    this.placeholder.innerHTML = `${flagHtml} ${name}`;
    this.placeholder.classList.add('soeteck-country-select__placeholder--selected');
    this.nativeSelect.value = name;

    this.options.forEach(o => o.classList.remove('is-selected'));
    opt.classList.add('is-selected');

    this.close();
    this.trigger.focus();
  }

  private filter(): void {
    const q = this.searchInput.value.toLowerCase().trim();
    this.options.forEach(opt => {
      const name = (opt.getAttribute('data-country-name') || '').toLowerCase();
      const code = (opt.getAttribute('data-country-value') || '').toLowerCase();
      const matches = !q || name.includes(q) || code.includes(q);
      opt.classList.toggle('is-hidden', !matches);
    });
    this.visibleOptions = this.options.filter(o => !o.classList.contains('is-hidden'));
    this.activeIndex = -1;
  }

  private focusOption(index: number): void {
    if (this.visibleOptions.length === 0) return;
    const idx = Math.max(0, Math.min(index, this.visibleOptions.length - 1));
    this.visibleOptions.forEach(o => o.classList.remove('is-focused'));
    this.visibleOptions[idx].classList.add('is-focused');
    this.visibleOptions[idx].scrollIntoView({ block: 'nearest' });
    this.activeIndex = idx;
  }

  private focusNext(dir: number): void {
    if (this.activeIndex < 0) this.focusOption(0);
    else this.focusOption(this.activeIndex + dir);
  }
}