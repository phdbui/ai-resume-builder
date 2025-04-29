import { Prisma } from "@/generated/client"
import { ResumeValues } from "./validations"

export interface EditorFormData {
  resumeData: ResumeValues
  setResumeData: (data: ResumeValues) => void
}

export const resumeDataInclude = {
  workExperiences: true,
  educations: true,
} satisfies Prisma.ResumeInclude

export type ResumeServerData = Prisma.ResumeGetPayload<{
  include: typeof resumeDataInclude
}>
