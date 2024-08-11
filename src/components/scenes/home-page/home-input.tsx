'use client'

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const FormSchema = z.object({
  pin: z.string().min(3),
});

const HomeInput = () => {
  const router = useRouter();
  const [studentID, setStudentID] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    fetch(`/api/datas?Id=${data.pin}`)
      .then((response) => response.json())
      .then((data) => {
        const lastThreeDigits = data?.data?.[0]?.[0]?.slice(-3); 
        setStudentID(lastThreeDigits);
        form.setValue("pin", lastThreeDigits);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    router.push(`/rock?Id=${data.pin}`);
  };

  return (
    <section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4 flex flex-col items-center justify-center gap-2"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center gap-2">
                <FormLabel>Please enter last 3 student id digits</FormLabel>
                <FormControl>
                  <InputOTP maxLength={3} pattern={REGEXP_ONLY_DIGITS} {...field}>
                    <InputOTPGroup className="flex items-center justify-center gap-2">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
              </FormItem>
            )}
          />
          <Button variant="default" size="xl" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default HomeInput;
