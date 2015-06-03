'use strict';

angular.module('doc2', ['eehNavigation', 'hc.marked', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap']);
angular.module('doc2').config(function ($stateProvider, $translateProvider, $urlRouterProvider, eehNavigationProvider, markedProvider) {
    markedProvider.setOptions({
        gfm: true,
        sanitize: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController'
        })
        .state('docs', {
            url: '/docs',
            templateUrl: 'app/docs/docs.html',
            controller: 'DocsController'
        })
        .state('docs.gettingStarted', {
            url: '/getting-started',
            template: '<marked ng-include="\'content-started.md\'"></marked>'
        })
        .state('docs.changeLog', {
            url: '/change-log',
            template: '<marked ng-include="\'content/change-log.md\'"></marked>'
        })
        .state('docs.accessingMenuItems', {
            url: '/change-log',
            template: '<marked ng-include="\'content/accessing-menu-items.md\'"></marked>'
        })
        .state('docs.icons', {
            url: '/icons',
            template: '<marked ng-include="\'content/icons.md\'"></marked>'
        })
        .state('docs.languageTranslation', {
            url: '/language-translation',
            template: '<marked ng-include="\'content/language-translation.md\'"></marked>'
        })
        .state('docs.menuItemBasics', {
            url: '/menu-item-basics',
            template: '<marked ng-include="\'content/menu-item-basics.md\'"></marked>'
        })
        .state('docs.nestedSidebarMenuItems', {
            url: '/nested-sidebar-menu-items',
            template: '<marked ng-include="\'content/nested-sidebar-menu-items.md\'"></marked>'
        })
        .state('docs.sidebarSearchMenuItem', {
            url: '/sidebar-search-menu-item',
            template: '<marked ng-include="\'content/sidebar-search-menu-item.md\'"></marked>'
        })
        .state('docs.sidebarTextCollapseMenuItem', {
            url: '/sidebar-text-collapse-menu-item',
            template: '<marked ng-include="\'content/sidebar-text-collapse-menu-item.md\'"></marked>'
        });

    eehNavigationProvider
        .iconBaseClass('fa')
        .menuItem('nav.gettingStarted', {
            text: 'Getting Started',
            state: 'docs.gettingStarted',
            iconClass: 'fa-power-off'
        })
        .menuItem('nav.changeLog', {
            text: 'Change Log',
            state: 'docs.changeLog',
            iconClass: 'fa-refresh'
        })
        .menuItem('nav.configuration', {
            text: 'Configuration',
            iconClass: 'fa-book'
        })
        .menuItem('nav.configuration.menuItemBasics', {
            text: 'Menu Item Basics',
            state: 'docs.menuItemBasics'
        })
        .menuItem('nav.configuration.accessingMenuItems', {
            text: 'Accessing Menu Items',
            state: 'docs.accessingMenuItems'
        })
        .menuItem('nav.configuration.nestedSidebarMenuItems', {
            text: 'Nested Sidebar Menu Items',
            state: 'docs.nestedSidebarMenuItems'
        })
        .menuItem('nav.configuration.sidebarTextCollapseMenuItem', {
            text: 'Sidebar Text Collapse Menu Item',
            state: 'docs.sidebarTextCollapseMenuItem'
        })
        .menuItem('nav.configuration.sidebarSearchMenuItem', {
            text: 'Sidebar Search Menu Item',
            state: 'docs.sidebarSearchMenuItem'
        })
        .menuItem('nav.configuration.languageTranslation', {
            text: 'Language Translation',
            state: 'docs.languageTranslation'
        })
        .menuItem('nav.configuration.icons', {
            text: 'Icons',
            state: 'docs.icons'
        })
        ;
});