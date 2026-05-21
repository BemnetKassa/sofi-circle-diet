"use client"

import { Landmark, Upload } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BANK_INFO } from "../constants/formOptions"
import { useMemo } from "react"

interface Step4PaymentProps {
    planType: string
    receiptFile: File | null
    setReceiptFile: (file: File | null) => void
}

export function Step4Payment({ planType, receiptFile, setReceiptFile }: Step4PaymentProps) {
    const planPrice = useMemo(() => {
        return planType === "premium" ? 4999 : 4000
    }, [planType])

    return (
        <div className="space-y-6">
            <div className="p-5 rounded-xl border bg-muted/30">
                <div className="flex items-center gap-2 mb-4">
                    <Landmark className="w-5 h-5" />
                    <h3 className="font-bold text-lg">
                        Bank Transfer Information
                    </h3>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Bank</span>
                        <span className="font-semibold">{BANK_INFO.name}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Account Name</span>
                        <span className="font-semibold">{BANK_INFO.accountName}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Account Number</span>
                        <span className="font-semibold">{BANK_INFO.accountNumber}</span>
                    </div>

                    <div className="flex justify-between border-t pt-3 mt-2">
                        <span className="font-bold">Amount to Pay</span>
                        <span className="font-black text-primary text-lg">
                            {planPrice} ETB
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-muted/30 p-5 rounded-xl border">
                <h4 className="font-semibold mb-4">Upload Payment Receipt</h4>
                <Label className="mb-2 block">Receipt Image / PDF</Label>
                <Input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                            setReceiptFile(file)
                        }
                    }}
                />
                {receiptFile && (
                    <div className="flex items-center gap-2 mt-3 text-sm text-green-600">
                        <Upload className="w-4 h-4" />
                        <span>{receiptFile.name}</span>
                    </div>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                    Please upload clear screenshot or photo of your bank transfer
                </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                    After submitting, your information and body photo will be sent 
                    for AI analysis and manual verification. You'll receive your personalized plan within 24-48 hours.
                </p>
            </div>
        </div>
    )
}