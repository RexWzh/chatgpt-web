import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://cdn.jsdelivr.net/gh/zhihongecnu/PicBed3/picgo/20230310000823.png',
      name: 'RexWang',
      description: 'ChatGPT 聊天机器人<br><a href="https://github.com/RexWzh" class="text-blue-500" target="_blank" >个人主页</a> | <a href="https://www.wzhecnu.cn/2023/03/06/gpt/chatgpt/" class="text-blue-500" target="_blank">网站教程</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
