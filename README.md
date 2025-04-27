# 🧑‍💻 User CRUD App (Next.js 14 + Prisma + Supabase + App Router)

Bu proje, kullanıcı yönetimi (Create, Read, Update, Delete) işlevlerini barındıran bir mini CRUD uygulamasıdır.  
Full Stack Web Developer öğrenim sürecim boyunca Next.js ve modern araçları öğrenmek için geliştirilmiştir.

---

## 🚀 Kullanılan Teknolojiler

- **Next.js 14** (App Router)
- **TypeScript**
- **Prisma ORM**
- **Supabase** (PostgreSQL veritabanı)
- **Tailwind CSS**
- **Vercel** (Hosting & Deploy)

---

## 🧩 Özellikler

- 📄 Kullanıcı listeleme (GET)
- ➕ Yeni kullanıcı ekleme (POST)
- 📝 Kullanıcı güncelleme (PUT)
- 🗑️ Kullanıcı silme (DELETE)
- 🔌 Supabase veritabanı bağlantısı
- 📦 Vercel üzerinde yayınlandı

---

## 🔧 Geliştirme Kurulumu

```bash
# Gerekli paketleri yükle
npm install

# Prisma client üret
npx prisma generate

# Veritabanı migrasyonu (ilk kullanımda)
npx prisma migrate dev --name init

# Geliştirme sunucusunu başlat
npm run dev
