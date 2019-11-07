import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LanguageModel} from '../../models/language-model';
import {WindowService} from '../../services/window.service';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() windowItem: any;
  hasTitleBar = true;
  title = 'Test Window';
  hasTab = true;
  resizable = true;
  icon = 'locationPin';
  iconArray = [
    'alarm', 'bin', 'catalogue_over', 'catalogue', 'catalogues_over',
    'catalogues', 'clipboard', 'clock', 'cloud', 'cog_over', 'cog',
    'company_over', 'company', 'computer', 'contacts_over', 'contacts',
    'content_area', 'creditcard', 'dashboard_over', 'dashboard', 'diary_over',
    'diary', 'downArrow', 'download', 'duplicate_page', 'email',
    'exclamation_mark_circle', 'external_link', 'eye', 'fat_close', 'fat_tick',
    'folder', 'forms', 'formsResponses', 'framework', 'funnel_over', 'funnel',
    'ghost_over', 'ghost', 'globe', 'home_over', 'home', 'leftArrow',
    'leftArrowStart', 'link', 'locationPin', 'lock_closed', 'lock_open',
    'media', 'menu_over', 'menu', 'messages_over', 'messages', 'minus',
    'move', 'orders_over', 'orders', 'page_add', 'page_settings', 'page_tags',
    'pages', 'pencil', 'phone_over', 'phone', 'piechart_over', 'piechart',
    'playbutton', 'plus', 'print_over', 'print', 'question_mark_circle',
    'question_mark', 'quotations_over', 'quotations', 'reminder_over',
    'reminder', 'reorder', 'rightArrow', 'rightArrowEnd', 'save', 'search_over',
    'search', 'styles', 'tasks_over', 'tasks', 'templates', 'tree_corner',
    'tree_line_horizontal', 'tree_line', 'tree_t', 'upArrow', 'users_over',
    'users', 'world', 'oceanworks', 'minimise', 'restore', 'maximise', 'close'];
  bodyComponent = 'contact-manager';

  primary = '#337799';
  primaryLight = '#b8d6e7';
  primaryMid = '#438eb5';
  primaryDark = '#2e5671';
  text = '#c1c1c1';
  backgroundColor = '#1d1d1d';
  backgroundGrey = '#282828';
  backgroundMidGrey = '#6c6c6c';
  backgroundDarkerGrey = '#353535';
  backgroundDarkestGrey = '#484848';
  boxShadow = 'none';
  theme = 'CS Theme';
  language$: Subscription;
  locale: LanguageModel;

  constructor(
    private windowService: WindowService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.language$ = this.languageService.object.subscribe(locale => {
      this.locale = locale;
    });
  }
  getLanguage(lang) {
    this.languageService.getLanguage(lang);
  }

  toggleCompusoft() {
    if (document.body.classList.contains('compusoft')) {
      this.theme = 'CS Theme';
      document.body.classList.remove('compusoft');
    } else {
      this.theme = 'Standard';
      document.body.classList.add('compusoft');
    }
  }

  addWindow() {
    this.windowService.new(
      this.icon,
      JSON.parse(String(this.hasTitleBar)),
      this.title,
      JSON.parse(String(this.hasTab)),
      JSON.parse(String(this.resizable)),
      this.bodyComponent
    );
  }

  closeAllWindows() {
    this.windowService.closeAll();
  }

  setTheme() {
    document.documentElement.style.setProperty('--primary', this.primary);
    document.documentElement.style.setProperty('--primary-light', this.primaryLight);
    document.documentElement.style.setProperty('--primary-mid', this.primaryMid);
    document.documentElement.style.setProperty('--primary-dark', this.primaryDark);
    document.documentElement.style.setProperty('--text', this.text);
    document.documentElement.style.setProperty('--background-color', this.backgroundColor);
    document.documentElement.style.setProperty('--background-grey', this.backgroundGrey);
    document.documentElement.style.setProperty('--background-mid-grey', this.backgroundMidGrey);
    document.documentElement.style.setProperty('--background-darker-grey', this.backgroundDarkerGrey);
    document.documentElement.style.setProperty('--background-darkest-grey', this.backgroundDarkestGrey);
    document.documentElement.style.setProperty('--box-shadow', this.boxShadow);
  }

  revertTheme() {
    document.documentElement.style.removeProperty('--primary');
    document.documentElement.style.removeProperty('--primary-light');
    document.documentElement.style.removeProperty('--primary-mid');
    document.documentElement.style.removeProperty('--primary-dark');
    document.documentElement.style.removeProperty('--text');
    document.documentElement.style.removeProperty('--background-color');
    document.documentElement.style.removeProperty('--background-grey');
    document.documentElement.style.removeProperty('--background-mid-grey');
    document.documentElement.style.removeProperty('--background-darker-grey');
    document.documentElement.style.removeProperty('--background-darkest-grey');
    document.documentElement.style.removeProperty('--box-shadow');
  }
}
