'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS } from 'input-otp';

const FormSchema = z.object({
  pin: z.string().min(3),
});

const HomeInput = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response = await fetch(`/api/users/getUser?student_id=${data.pin}`);
      const responseData = await response.json();

      if (responseData?.data?.code) {
        router.push(`/clue?Id=${data.pin}`);
      } else {
        router.push(`/rock?Id=${data.pin}`);
      }
    } catch (error) {
      router.push(`/rock?Id=${data.pin}`);
    }
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
                <FormLabel className='text-rock'>
                  Please enter your last 3 student id digits
                </FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={3}
                    pattern={REGEXP_ONLY_DIGITS}
                    {...field}
                  >
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
          <Button
            variant="default"
            size="wood"
            type="submit"
            style={{
              textShadow:
                'rgb(102, 16, 29) 3px 0px 0px, rgb(102, 16, 29) 2.83487px 0.981584px 0px, rgb(102, 16, 29) 2.35766px 1.85511px 0px, rgb(102, 16, 29) 1.62091px 2.52441px 0px, rgb(102, 16, 29) 0.705713px 2.91581px 0px, rgb(102, 16, 29) -0.287171px 2.98622px 0px, rgb(102, 16, 29) -1.24844px 2.72789px 0px, rgb(102, 16, 29) -2.07227px 2.16926px 0px, rgb(102, 16, 29) -2.66798px 1.37182px 0px, rgb(102, 16, 29) -2.96998px 0.42336px 0px, rgb(102, 16, 29) -2.94502px -0.571704px 0px, rgb(102, 16, 29) -2.59586px -1.50383px 0px, rgb(102, 16, 29) -1.96093px -2.27041px 0px, rgb(102, 16, 29) -1.11013px -2.78704px 0px, rgb(102, 16, 29) -0.137119px -2.99686px 0px, rgb(102, 16, 29) 0.850987px -2.87677px 0px, rgb(102, 16, 29) 1.74541px -2.43999px 0px, rgb(102, 16, 29) 2.44769px -1.73459px 0px, rgb(102, 16, 29) 2.88051px -0.838247px 0px',
            }}
          >
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default HomeInput;