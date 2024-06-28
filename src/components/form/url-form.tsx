import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { SendHorizontal } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "sonner";
import ky from "ky";
import useLocalStorage from "../../hooks/use-local-storage";
import { API_URL } from "../../lib/constant";

const urlFormSchema = z.object({
  url: z.string().url(),
});

interface Response {
  message: string;
  original_url: string;
  short_url: string;
}
type UrlFormValues = z.infer<typeof urlFormSchema>;

const defaultValues: Partial<UrlFormValues> = {
  url: "",
};

export function UrlForm() {
  const [_, setStorage] = useLocalStorage("urls");
  const form = useForm<UrlFormValues>({
    resolver: zodResolver(urlFormSchema),
    defaultValues,
  });

  async function onSubmit(data: UrlFormValues) {
    try {
      const { original_url, short_url } = await ky
        .post(API_URL, { json: data })
        .json<Response>();
      setStorage({ originalUrl: original_url, shortUrl: short_url });
      navigator.clipboard.writeText(short_url);
      toast.success("Link shortened successfully and copied to clipboard");
    } catch (e) {
      toast.error("Something went wrong. Try again later");
      console.log(e);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex gap-4 w-full"
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="w-full text-left">
              <FormLabel className="font-bold text-md">
                Shorten a long URL
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a very long here like the pinga of Ever"
                  {...field}
                />
              </FormControl>

              <FormMessage className="font-bold" />
            </FormItem>
          )}
        />

        <Button type="submit" variant="outline">
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
}
