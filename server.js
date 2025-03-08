// استيراد المكتبات المطلوبة
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // تحميل متغيرات البيئة

const app = express();
const PORT = process.env.PORT || 3000;

// تمكين CORS
app.use(cors());

// تحديد المجلد الثابت للملفات العامة
app.use(express.static(path.join(__dirname, "public")));

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على: http://localhost:${PORT}`);
});
