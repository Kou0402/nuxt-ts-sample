import { mocked } from 'ts-jest/utils'

import { mock, sampleDate } from '~/store/test/mock'
import { createStore } from '~/.nuxt/store'
import { initialiseStores } from '~/store/store-accessor'
import { postsStore } from '~/store'
import { PostRepository } from '~/repositories/post-repository'
import { Post } from '~/models/post'
import { FetchedPostResponse } from '~/models/payload/post-payload'

jest.mock('~/repositories/post-repository')

describe('PostsStore', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })

  describe('fetchAll', () => {
    beforeEach(() => {
      mocked(PostRepository).mockClear()
      mocked(PostRepository).mockImplementation((): any => {
        return {
          fetchAll: (): Promise<FetchedPostResponse[]> => {
            return Promise.resolve(mock.fetchedPostResponses)
          },
        }
      })
    })

    it('リポジトリから取得した値をstateに格納する', async () => {
      const expectedState: Post[] = [
        {
          createdUserName: '投稿者1',
          createdAt: sampleDate,
          comment: 'コメント1',
        },
        {
          createdUserName: '投稿者2',
          createdAt: sampleDate,
          comment: 'コメント2',
        },
      ]
      await postsStore.fetchAll()
      expect(postsStore.posts).toEqual(expectedState)
    })
  })
})
