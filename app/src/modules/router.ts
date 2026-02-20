import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '@/pages'
import {
    AlertPage,
    ArticlePage,
    BadgePage,
    BannerPage,
    BottombarPage,
    BoxPage,
    BreadcrumbsPage,
    BricksPage,
    ButtonPage,
    CardPage,
    ChipsPage,
    ContentPage,
    FlexboxPage,
    GettingStartedPage,
    HeadingPage,
    IconPage,
    InlineboxPage,
    ListPage,
    MenuPage,
    PagingPage,
    SidebarPage,
    SpinnerPage,
    TableboxPage,
    TablePage,
    TabsPage,
    ThumbsPage,
    UserpicPage,
} from '@/pages/docs'

const router = createRouter({
    history: createWebHistory(import.meta.env.APP_URL),
    routes: [
        {
            path: '/',
            component: HomePage,
            name: 'home',
        },
        {
            path: '/docs',
            children: [
                {
                    path: '',
                    redirect: 'docs/getting-started',
                },
                {
                    path: 'getting-started',
                    component: GettingStartedPage,
                    name: 'docs-getting-started',
                },
                {
                    path: 'alert',
                    component: AlertPage,
                    name: 'docs-alert',
                },
                {
                    path: 'article',
                    component: ArticlePage,
                    name: 'docs-article',
                },
                {
                    path: 'badge',
                    component: BadgePage,
                    name: 'docs-badge',
                },
                {
                    path: 'banner',
                    component: BannerPage,
                    name: 'docs-banner',
                },
                {
                    path: 'bottombar',
                    component: BottombarPage,
                    name: 'docs-bottombar',
                },
                {
                    path: 'box',
                    component: BoxPage,
                    name: 'docs-box',
                },
                {
                    path: 'breadcrumbs',
                    component: BreadcrumbsPage,
                    name: 'docs-breadcrumbs',
                },
                {
                    path: 'bricks',
                    component: BricksPage,
                    name: 'docs-bricks',
                },
                {
                    path: 'button',
                    component: ButtonPage,
                    name: 'docs-button',
                },
                {
                    path: 'card',
                    component: CardPage,
                    name: 'docs-card',
                },
                {
                    path: 'chips',
                    component: ChipsPage,
                    name: 'docs-chips',
                },
                {
                    path: 'content',
                    component: ContentPage,
                    name: 'docs-content',
                },
                {
                    path: 'flexbox',
                    component: FlexboxPage,
                    name: 'docs-flexbox',
                },
                {
                    path: 'heading',
                    component: HeadingPage,
                    name: 'docs-heading',
                },
                {
                    path: 'icon',
                    component: IconPage,
                    name: 'docs-icon',
                },
                {
                    path: 'inlinebox',
                    component: InlineboxPage,
                    name: 'docs-inlinebox',
                },
                {
                    path: 'list',
                    component: ListPage,
                    name: 'docs-list',
                },
                {
                    path: 'menu',
                    component: MenuPage,
                    name: 'docs-menu',
                },
                {
                    path: 'paging',
                    component: PagingPage,
                    name: 'docs-paging',
                },
                {
                    path: 'sidebar',
                    component: SidebarPage,
                    name: 'docs-sidebar',
                },
                {
                    path: 'spinner',
                    component: SpinnerPage,
                    name: 'docs-spinner',
                },
                {
                    path: 'tablebox',
                    component: TableboxPage,
                    name: 'docs-tablebox',
                },
                {
                    path: 'table',
                    component: TablePage,
                    name: 'docs-table',
                },
                {
                    path: 'tabs',
                    component: TabsPage,
                    name: 'docs-tabs',
                },
                {
                    path: 'thumbs',
                    component: ThumbsPage,
                    name: 'docs-thumbs',
                },
                {
                    path: 'userpic',
                    component: UserpicPage,
                    name: 'docs-userpic',
                },
            ],
        },
    ],
})

export default router
