import z from "zod";

export const PreInterviewBody = z.object({
    linkedin: z.string(),
    gihtub: z.string()
})