export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          attachments: string[] | null
          content: string
          id: number
          user_id: number
        }
        Insert: {
          attachments?: string[] | null
          content: string
          id?: never
          user_id: number
        }
        Update: {
          attachments?: string[] | null
          content?: string
          id?: never
          user_id?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar: string
          avatar_blurhash: string
          posts: number[]
          user_id: string
          username: string
        }
        Insert: {
          avatar: string
          avatar_blurhash: string
          posts: number[]
          user_id: string
          username: string
        }
        Update: {
          avatar?: string
          avatar_blurhash?: string
          posts?: number[]
          user_id?: string
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
