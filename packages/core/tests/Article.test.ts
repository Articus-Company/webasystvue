import { describe, it } from 'vitest'
import { Article, ArticleBody, ArticleFooter, ArticleHeader } from '../src'
import { mountCheck } from './utils'

describe('article компоненты', () => {
    it('article монтируется', () => mountCheck(Article))
    it('articleBody монтируется', () => mountCheck(ArticleBody))
    it('articleFooter монтируется', () => mountCheck(ArticleFooter))
    it('articleHeader монтируется', () => mountCheck(ArticleHeader))
})
