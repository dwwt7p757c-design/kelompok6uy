# KELOMPOK 6

Website e-commerce React + Vite + TypeScript untuk brand KELOMPOK 6.

## Menjalankan lokal

```bash
npm install
npm run dev
npm run build
```

## Konfigurasi Supabase

1. Buat project gratis di https://supabase.com
2. Salin Project URL dan anon key ke `.env`.
3. Jalankan isi `supabase/schema.sql` di SQL Editor.
4. Buat pengguna di Authentication > Users.
5. Jalankan:
   ```sql
   insert into public.admin_users (user_id) values ('UUID-PENGGUNA-ADMIN');
   ```

## Environment

Salin `.env.example` menjadi `.env` dan isi:

```env
VITE_SUPABASE_URL=https://project.supabase.co
VITE_SUPABASE_ANON_KEY=anon-key-publik
```

Jangan pernah menaruh `service_role key` di frontend.

## Deploy ke Vercel

1. Push repository ke GitHub.
2. Impor repository di https://vercel.com/new.
3. Framework: Vite.
4. Tambahkan dua environment variable pada Project Settings.
5. Deploy.

WhatsApp checkout menggunakan nomor resmi `6281957110305`. Pesanan tidak diklaim terkirim otomatis sampai pelanggan menekan tombol kirim di WhatsApp.
