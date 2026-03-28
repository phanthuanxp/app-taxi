# Web App MVP Dieu Hanh Xe Du Lich 7 Cho

MVP quan ly dieu hanh xe du lich cho cong ty, su dung `Next.js + TypeScript + Tailwind + Prisma + PostgreSQL + NextAuth`.

## 1) Tinh nang da co trong MVP

- Dang nhap email/password + phan quyen `ADMIN`, `DISPATCHER`, `DRIVER`
- Dashboard tong quan ngay:
  - tong chuyen, doanh thu, chi phi, loi nhuan
  - xe dang chay/xe san sang
  - lai dang lam/lai dang nghi
  - top lai xe, top xe
- Quan ly lai xe:
  - them / tim kiem / xem danh sach
  - tong doanh thu tao ra
  - tong % duoc huong
  - so ngay lam / ngay nghi
- Quan ly xe:
  - them / tim kiem / xem danh sach
  - doanh thu theo xe / chi phi theo xe
  - canh bao sap het han dang kiem/bao hiem (<=30 ngay)
- Dieu hanh chuyen:
  - tao chuyen
  - gan xe + gan lai
  - loc theo trang thai + tim kiem theo khach/ma chuyen/bien so/lai
  - huy chuyen
  - them chi phi nhanh theo chuyen
  - tu dong tinh tong chi phi, loi nhuan gop, tien % lai huong
- Quan ly chi phi:
  - danh sach chi phi theo khoang ngay
  - tong chi phi
- Bang cong:
  - nhap cong theo ngay
  - trang thai lam viec/nghi phep/nghi khong luong/nghi om
  - tong hop ngay cong theo thang
- Bao cao:
  - ngay / tuan / thang
  - doanh thu, chi phi, loi nhuan
  - tong % phai tra lai
  - top lai xe theo doanh thu
  - top xe theo doanh thu
- Cai dat he thong key/value

Toan bo text giao dien la tieng Viet.

## 2) Cong nghe

- Frontend + Backend: Next.js App Router
- UI: Tailwind CSS
- Database: PostgreSQL
- ORM: Prisma
- Auth: NextAuth (Credentials + JWT)
- Toast: Sonner
- Validation: Zod

## 3) Yeu cau moi truong

- Node.js 20+
- npm 10+
- Docker (neu dung PostgreSQL qua container)

## 4) Chay local tung buoc

### Buoc 1: Cai dependencies

```bash
npm install
```

### Buoc 2: Tao file env

```bash
cp .env.example .env
```

Neu dung PowerShell:

```powershell
Copy-Item .env.example .env
```

Cap nhat `NEXTAUTH_SECRET` trong `.env`.

### Buoc 3: Chay PostgreSQL

Cach A - Docker:

```bash
docker compose up -d
```

Cach B - PostgreSQL local: tu tao DB `taxi_ops` va cap nhat `DATABASE_URL`.

### Buoc 4: Prisma generate + migrate + seed

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

### Buoc 5: Chay app

```bash
npm run dev
```

Truy cap: `http://localhost:3000`

## 5) Tai khoan demo

Mat khau chung: `12345678`

- `admin@example.com` (Admin)
- `dispatcher@example.com` (Dieu hanh)
- `driver@example.com` (Lai xe)

## 6) Du lieu seed

Seed tao du lieu mau:

- 10 lai xe
- 10 xe
- 50 chuyen
- chi phi theo chuyen
- bang cong thang
- bang tong hop luong thang
- settings mau

## 7) Docker

Da co:

- `docker-compose.yml`: PostgreSQL
- `Dockerfile`: build va run app

## 8) Cau truc thu muc

```text
prisma/
  migrations/
  schema.prisma
  seed.ts
src/
  app/
    (dashboard)/
      attendance/
      costs/
      dashboard/
      drivers/
      reports/
      settings/
      trips/
      vehicles/
    api/
      attendance/
      auth/[...nextauth]/
      drivers/
      expenses/
      reports/summary/
      settings/
      trips/
      vehicles/
    login/
  components/
  lib/
  middleware.ts
```

## 9) Giai doan 2 de xuat nang cap

- Calendar drag-drop cho lich chuyen
- Phieu dieu xe in PDF
- CRUD day du voi modal edit/delete cho moi module
- Phan trang server-side + export Excel
- Audit log thao tac
- Dashboard realtime
- Tinh luong nang cao (thuong/phat theo rule engine)
- Upload giay to xe/lai + canh bao tu dong qua email/Zalo
- Da chi nhanh / da doi xe

## 10) Luu y

Trong moi truong hien tai cua thread nay, chua co Node/NPM nen khong the chay build/lint tu dong ngay trong session. Sau khi cai Node.js tren may, chay:

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run lint
npm run build
```

Neu co loi khi chay thuc te, tiep tuc gui log de fix tiep.
