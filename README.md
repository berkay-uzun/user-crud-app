# Kullanıcı CRUD Uygulaması

Bu proje, Next.js App Router, TypeScript, Prisma ORM ve PostgreSQL kullanılarak geliştirilmiş bir CRUD (Create, Read, Update, Delete) uygulamasıdır.

## Özellikler

- ✅ Kullanıcı listeleme (`/users`)
- ✅ Yeni kullanıcı ekleme (`/users/new`)
- ✅ Kullanıcı güncelleme (`/users/edit/[id]`)
- ✅ Kullanıcı silme
- ✅ Veritabanı: PostgreSQL
- ✅ ORM: Prisma (src export yapısı ile)

## Kurulum

```bash
npm install
npx prisma generate
npm run dev
