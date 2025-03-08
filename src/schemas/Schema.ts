import { z } from "zod";

export const insertContactSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون على الأقل حرفين"),
  email: z.string().email("يجب إدخال بريد إلكتروني صحيح"),
  message: z.string().min(10, "الرسالة يجب أن تحتوي على 10 أحرف على الأقل"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
