# مشروع وِجهة — مقرر تصميم الويب

موقع عربي متكامل من خمس صفحات، يطبّق HTML الدلالي وCSS Grid/Flexbox وBootstrap وJavaScript وjQuery وToastify وAjax Modals.

## التشغيل محليًا

افتح `index.html` مباشرة، أو شغّل خادمًا محليًا لتعمل طلبات Ajax بصورة صحيحة:

```bash
python3 -m http.server 8000
```

ثم افتح `http://localhost:8000`.

## الصفحات

- `index.html` الرئيسية وشريط الصور.
- `services.html` الخدمات وجدول الباقات.
- `about.html` من نحن والرسالة والقيم.
- `auth.html` إنشاء الحساب وتسجيل الدخول.
- `contact.html` تواصل معنا والنموذج.

## الرفع إلى GitHub

```bash
git init
git add .
git commit -m "إنشاء مشروع مقرر تصميم الويب"
git branch -M main
git remote add origin https://github.com/USERNAME/web-design-project.git
git push -u origin main
```

بعد الرفع يمكن تفعيل GitHub Pages من Settings ثم Pages ثم اختيار فرع `main` ومجلد `/root`.

> ملاحظة: الصور داخل مجلد `images` والفيديو داخل `videos` مجهزان للإضافة؛ يمكن وضع ملفاتك فيهما مع تحديث المسارات في HTML.

## بيانات صاحب المشروع

- الاسم: إياد نبيل سعد الزبيري
- الهاتف: +967779790767


## الإصلاحات في هذه النسخة

- تم إصلاح زر «التفاصيل» في `services.html` و`js/app.js` ليعمل مع البطاقة `.card-custom`.
- تمت إضافة `type="button"` و`aria-expanded` إلى زر التفاصيل.
- تم تصحيح رابط فيديو YouTube إلى صيغة `youtube.com/embed`.

## إضافة WowSlider الرسمي

السلايدر الموجود في `index.html` هو Bootstrap Carousel. إذا كان المطلوب في المقرر هو WowSlider بالاسم، يجب تصدير السلايدر من برنامج WowSlider ثم نسخ المجلدين اللذين يولدهما البرنامج، غالبًا `engine1` و`data1`، إلى نفس مستوى `index.html`. بعد ذلك انسخ من ملف HTML الذي ولده WowSlider:

1. رابط CSS الخاص بـ WowSlider داخل `<head>`.
2. كتلة HTML التي تبدأ عادةً بـ `wowslider-container` مكان Bootstrap Carousel.
3. ملفات JavaScript الخاصة بـ WowSlider قبل `js/app.js`.

لا تنشئ ملفات WowSlider فارغة؛ يجب أن تكون الملفات مولدة من البرنامج حتى يعمل السلايدر فعليًا.

## التشغيل

```bash
python3 -m http.server 8000
```

ثم افتح `http://localhost:8000`.
