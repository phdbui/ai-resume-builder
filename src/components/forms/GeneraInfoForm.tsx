import { EditorFormData } from "@/lib/types"
import { generalInfoSchema, GeneralInfoValues } from "@/lib/validations"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const GeneraInfoForm = ({ resumeData, setResumeData }: EditorFormData) => {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: resumeData?.title || "",
      description: resumeData?.description || "",
    },
  })

  const onSubmit = async (data: GeneralInfoValues) => {
    setResumeData({
      ...resumeData,
      ...data,
    })
  }

  // useEffect(() => {
  //   const { unsubscribe } = form.watch(async values => {
  //     const isValid = await form.trigger()
  //     if (!isValid) return
  //     const isDirty = form.formState.isDirty
  //     if (!isDirty) return
  //     setResumeData({
  //       ...resumeData,
  //       ...values,
  //     })
  //   })

  //   return () => unsubscribe()
  // }, [form, resumeData, setResumeData])

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">General info</h2>
        <p className="text-muted-foreground text-sm">
          This will not appear on your resume.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="My cool resume" autoFocus />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="A resume for my next job" />
                </FormControl>
                <FormDescription>
                  Describe what this resume is for.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={!form.formState.isDirty || !form.formState.isValid}
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default GeneraInfoForm
