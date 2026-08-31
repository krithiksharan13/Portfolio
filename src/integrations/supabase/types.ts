export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      visitors: {
        Row: {
          visitor_id: string;
          first_seen: string;
          last_seen: string;
          visit_count: number;
        };
        Insert: {
          visitor_id: string;
          first_seen?: string;
          last_seen?: string;
          visit_count?: number;
        };
        Update: {
          visitor_id?: string;
          first_seen?: string;
          last_seen?: string;
          visit_count?: number;
        };
        Relationships: [];
      };
      contact_messages: {
        Row: {
          id: string;
          created_at: string;
          name: string | null;
          email: string;
          message: string;
          user_agent: string | null;
          handled: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name?: string | null;
          email: string;
          message: string;
          user_agent?: string | null;
          handled?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string | null;
          email?: string;
          message?: string;
          user_agent?: string | null;
          handled?: boolean;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      track_visit: {
        Args: { p_visitor_id: string };
        Returns: undefined;
      };
      get_visitor_count: {
        Args: Record<string, never>;
        Returns: number;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
