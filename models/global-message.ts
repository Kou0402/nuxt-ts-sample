export interface GlobalMessage {
  message?: string
  level?: MessageLevel
}

type MessageLevel = 'Info' | 'Warn' | 'Error'
