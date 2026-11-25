// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `كل سنة وأنت طيب يا أحلى وأجمل ولد في الدنيا، يا أجمل ولد عندي! شكراً على كل الفرحة والراحة والضحك اللي دخلتهم حياتي. وجودك جنبي بجد من أحلى الحاجات اللي حصلتلي في حياتي، وأنا ممتنة لوجودك كل يوم. طول السنين دي وأنت كل حاجة بالنسبة لي، وأقرب صاحب ليا، والشخص الوحيد اللي أقدر أحكيله كل أسراري. مفيش حد اتحب مني بالطريقة اللي أنت بتتحب بيها، ومفيش حد هيوصل لده أبداً. بحبك أوي يا حبيبي، ومش متخيلة حياتي من غيرك. أنت حبيب قلبي وروحي!`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;