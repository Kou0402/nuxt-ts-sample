import { shallowMount } from '@vue/test-utils'

import MainThreadComment from '~/components/thread/MainThreadComment.vue'
import { Post } from '~/models/post'

const sampleDate = '2020-01-01 00:00:00'
const samplePost: Post = {
  createdUserName: '投稿者名',
  createdAt: new Date(sampleDate),
  comment: 'コメント',
}

const factory = () => {
  return shallowMount(MainThreadComment, {
    propsData: { post: samplePost },
  })
}

describe('MainThreadComment', () => {
  it('投稿データを表示する', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="createdUserName"]').text()).toEqual(
      samplePost.createdUserName
    )
    expect(wrapper.find('[data-testid="createdAt"]').text()).toEqual(sampleDate)
    expect(wrapper.find('[data-testid="comment"]').text()).toEqual(
      samplePost.comment
    )
  })
})
