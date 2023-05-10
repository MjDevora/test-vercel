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
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      Category: {
        Row: {
          description: string
          id: number
          thumbnail_url: string
        }
        Insert: {
          description: string
          id?: number
          thumbnail_url: string
        }
        Update: {
          description?: string
          id?: number
          thumbnail_url?: string
        }
      }
      comments: {
        Row: {
          comment_date: string
          feedback: string
          id: number
          product_id: number
          rating: number
          thumbnail_url: string
          user_id: number
        }
        Insert: {
          comment_date?: string
          feedback: string
          id?: number
          product_id: number
          rating: number
          thumbnail_url: string
          user_id: number
        }
        Update: {
          comment_date?: string
          feedback?: string
          id?: number
          product_id?: number
          rating?: number
          thumbnail_url?: string
          user_id?: number
        }
      }
      Order: {
        Row: {
          id: number
          order_date: string
          quantity: number
          ship_address: string
          shipping_cost: number
          status: Database["public"]["Enums"]["status"]
          store_id: number
          total_price: number
          user_id: number
        }
        Insert: {
          id?: number
          order_date?: string
          quantity: number
          ship_address: string
          shipping_cost: number
          status: Database["public"]["Enums"]["status"]
          store_id: number
          total_price: number
          user_id: number
        }
        Update: {
          id?: number
          order_date?: string
          quantity?: number
          ship_address?: string
          shipping_cost?: number
          status?: Database["public"]["Enums"]["status"]
          store_id?: number
          total_price?: number
          user_id?: number
        }
      }
      Product: {
        Row: {
          category_id: number
          color: string
          description: string
          id: number
          name: string
          price: number
          stock: number
          store_id: number
          thumbnail_url: string
        }
        Insert: {
          category_id: number
          color: string
          description: string
          id?: number
          name: string
          price: number
          stock: number
          store_id: number
          thumbnail_url: string
        }
        Update: {
          category_id?: number
          color?: string
          description?: string
          id?: number
          name?: string
          price?: number
          stock?: number
          store_id?: number
          thumbnail_url?: string
        }
      }
      rel_order_products: {
        Row: {
          id: number
          order_id: number
          product_id: number
        }
        Insert: {
          id?: number
          order_id: number
          product_id: number
        }
        Update: {
          id?: number
          order_id?: number
          product_id?: number
        }
      }
      Store: {
        Row: {
          account_number: string
          address: string
          avatar_url: string
          business_name: string
          description: string
          id: number
          name_store_manager: string
          owner_user_id: number
          social_media: string
          store_email: string
          store_number: string
          stripe_account_id: string
        }
        Insert: {
          account_number: string
          address: string
          avatar_url: string
          business_name: string
          description: string
          id?: number
          name_store_manager: string
          owner_user_id: number
          social_media: string
          store_email: string
          store_number: string
          stripe_account_id: string
        }
        Update: {
          account_number?: string
          address?: string
          avatar_url?: string
          business_name?: string
          description?: string
          id?: number
          name_store_manager?: string
          owner_user_id?: number
          social_media?: string
          store_email?: string
          store_number?: string
          stripe_account_id?: string
        }
      }
      User: {
        Row: {
          access_token: string
          access_token_expiration: string
          avatar_url: string
          created_at: string
          date_of_birth: string
          email: string
          gender: Database["public"]["Enums"]["gender"]
          id: number
          name: string
          phone: string
          refresh_token: string
          role: Database["public"]["Enums"]["role"]
        }
        Insert: {
          access_token: string
          access_token_expiration: string
          avatar_url: string
          created_at?: string
          date_of_birth: string
          email: string
          gender: Database["public"]["Enums"]["gender"]
          id?: number
          name: string
          phone: string
          refresh_token: string
          role: Database["public"]["Enums"]["role"]
        }
        Update: {
          access_token?: string
          access_token_expiration?: string
          avatar_url?: string
          created_at?: string
          date_of_birth?: string
          email?: string
          gender?: Database["public"]["Enums"]["gender"]
          id?: number
          name?: string
          phone?: string
          refresh_token?: string
          role?: Database["public"]["Enums"]["role"]
        }
      }
      UserAddress: {
        Row: {
          apartment_number: number
          delegation: string
          id: number
          neighborhood: string
          postal_code: number
          recipients_name: string
          references: string
          state: string
          street: string
          street_number: number
          user_id: number
        }
        Insert: {
          apartment_number: number
          delegation: string
          id?: number
          neighborhood: string
          postal_code: number
          recipients_name: string
          references: string
          state: string
          street: string
          street_number: number
          user_id: number
        }
        Update: {
          apartment_number?: number
          delegation?: string
          id?: number
          neighborhood?: string
          postal_code?: number
          recipients_name?: string
          references?: string
          state?: string
          street?: string
          street_number?: number
          user_id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender: "FEMALE" | "MALE" | "OTHER"
      role: "SELLER" | "CONSUMER"
      status: "CART" | "PAID" | "SHIPPING" | "FULFILLED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
