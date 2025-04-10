import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class SupabaseService {
    protected async createAuthenticatedClient(token: string): Promise<SupabaseClient> {
        return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY, {
            global: {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        });
    }
}