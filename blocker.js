// 🔒 قائمة المواقع الإباحية المحظورة مدمجة مباشرة داخل الكود
const blockedSites = [
  "pornhub.com",
  "xvideos.com",
  "xnxx.com",
  "redtube.com",
  "youporn.com",
  "brazzers.com",
  "spankwire.com",
  "tube8.com",
  "tnaflix.com",
  "porn.com",
  "eporner.com",
  "porn555.com",
  "jizzbunker.com",
  "xhamster.com",
  "naughtyamerica.com",
  "camwhores.com",
  "beeg.com",
  "fux.com",
  "sex.com",
  "hclips.com"
];

// 🧠 فحص عنوان الصفحة الحالية (للوقاية من النوافذ أو إدخالات مشبوهة)
const currentURL = window.location.href.toLowerCase();

for (let site of blockedSites) {
  if (currentURL.includes(site)) {
    alert("🚫 هذا الموقع محظور ضمن نظام نقاء حفاظًا على صحتك.");
    // إعادة توجيه المستخدم إلى صفحة آمنة أو الصفحة الرئيسية
    window.location.href = "https://niqaa.org/safe"; // ← غيّر هذا الرابط لاحقًا إذا أردت
    break;
  }
}

