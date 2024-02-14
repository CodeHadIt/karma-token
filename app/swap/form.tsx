'use client'
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from '@/components/ui/checkbox';

import { WalletContext } from "@/contexts/WalletContext";
import { WalletContextInterface } from "@/types/walletTypes";

const formSchema = z
  .object({
    balance: z.string().optional(),
    swapAmount: z.coerce.number().min(1, {
      message: "Amount must not be empty",
    }),
    terms: z.boolean().default(false),
  })
  .refine((data) => Number(data.swapAmount) <= Number(data.balance), {
    message: "Swap Amount must not exceed balance",
    path: ["swapAmount"]
  });
 

const SwapForm = () => {

  const { connectedAddress, getConnectedAddress, walletDetails } = useContext(
    WalletContext
  ) as WalletContextInterface;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        balance: walletDetails?.tracBalance,
        swapAmount: 0,
        terms: false,
    },
  });

  useEffect(() => {
    console.log(walletDetails?.tracBalance)
    if (walletDetails?.tracBalance) {
        form.setValue("balance", walletDetails?.tracBalance);
    } else {
        form.setValue("balance", "");
    }
  }, [form, walletDetails]);

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
  };

  
  return (
    <>
      <div className="py-5">
        <div className="container mx-auto max-w-[700px]">
          <div className="space-y-[15px] mb-[20px] max-w-[450px] mx-auto text-center">
            <h2 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] leading-none">
              Phase 1: Interest
            </h2>
            <p>
              Submit the maximum allocation of TRAC you are willing to swap for
              Karma.
            </p>
          </div>

          <div className="bg-transparent border-white border-[2px] rounded-[20px] p-[30px] sm:p-[55px]">
            <div className="mt-5 sm:flex items-center">
              <h3 className="text-white font-bold text-[18px] mr-[15px] rtl:mr-0 rtl:ml-[15px]">
                Connect Wallet
              </h3>

              <div className="space-x-[15px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="inline-block border-white border-[1px] bg-black text-orange hover:text-white px-[22px] py-[7px] rounded-[20px] hover:bg-orange"
                  onClick={() => getConnectedAddress("xverse")}
                >
                  Xverse
                </Link>

                <Link
                  href="#"
                  className="inline-block border-white border-[1px] bg-[#ebb94c] text-white hover:text-[#ebb94c] px-[22px] py-[7px] rounded-[20px] hover:bg-black"
                  onClick={() => getConnectedAddress("unisat")}
                >
                  Unisat
                </Link>

                <Link
                  href="#"
                  className="inline-block border-white border-[1px] bg-black text-white px-[22px] py-[7px] rounded-[20px] hover:bg-[#f6f1ee] hover:text-black"
                  onClick={() => getConnectedAddress("leather")}
                >
                  Leather
                </Link>
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-8 mt-10"
              >
                <FormField
                  control={form.control}
                  name="balance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your TRAC Balance: </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Connect to view balance"
                        readOnly
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="swapAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter Amount To Swap: </FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          placeholder="Amount of TRAC to swap"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-row justify-between items-center">
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Accept terms</FormLabel>
                      </FormItem>
                    )}
                  />

                  <Link href="#" className="hover:text-orange">
                    Refresh Balance
                  </Link>
                </div>

                <Button type="submit" variant="outline" className="w-full">
                  Submit Allocation Request
                </Button>
              </form>
            </Form>

            <p className="mt-[25px]">
              Need some help?{" "}
              <Link
                href="https://x.com/realkarmacoin"
                className="font-medium hover:text-orange"
                target="_blank"
              >
                Contact us on X
              </Link>
            </p>

            <div className="progress-bar-container">
              <p className="mt-20 text-center">Swap Allocation Progress:</p>
              <div className="progress-bar stripes animated reverse slower">
                <span className="progress-bar-inner"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwapForm