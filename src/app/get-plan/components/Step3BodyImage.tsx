"use client"

import { useState, useRef } from "react"
import { Camera, Upload, X, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"

interface Step3BodyImageProps {
    bodyImage: File | null
    setBodyImage: (file: File | null) => void
    onSkip?: () => void
}

export function Step3BodyImage({ bodyImage, setBodyImage, onSkip }: Step3BodyImageProps) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const cameraInputRef = useRef<HTMLInputElement>(null)

    const handleImageSelect = (file: File) => {
        if (file && file.type.startsWith('image/')) {
            setBodyImage(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
        } else {
            alert("Please select a valid image file")
        }
    }

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) handleImageSelect(file)
    }

    const handleCameraCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) handleImageSelect(file)
    }

    const removeImage = () => {
        setBodyImage(null)
        setPreviewUrl(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
        if (cameraInputRef.current) cameraInputRef.current.value = ''
    }

    const handleSkip = () => {
        setBodyImage(null)
        setPreviewUrl(null)
        if (onSkip) onSkip()
    }

    return (
        <div className="space-y-6">
            <div className="bg-muted/30 p-5 rounded-xl border">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold flex items-center gap-2">
                        <Camera className="w-5 h-5" />
                        Upload Your Body Photo <span className="text-sm font-normal text-muted-foreground">(Optional)</span>
                    </h4>
                    {!previewUrl && onSkip && (
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={handleSkip}
                            className="gap-2"
                        >
                            <SkipForward className="w-4 h-4" />
                            Skip
                        </Button>
                    )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                    Please upload a clear photo in good lighting. For best results, wear fitted clothing and stand straight.
                </p>

                {!previewUrl ? (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Upload from Gallery */}
                            <div>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                    id="gallery-upload"
                                />
                                <Label
                                    htmlFor="gallery-upload"
                                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors"
                                >
                                    <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                    <span className="text-sm font-medium">Upload from Gallery</span>
                                    <span className="text-xs text-muted-foreground mt-1">
                                        JPG, PNG, or WEBP
                                    </span>
                                </Label>
                            </div>

                            {/* Take Photo with Camera */}
                            <div>
                                <input
                                    ref={cameraInputRef}
                                    type="file"
                                    accept="image/*"
                                    capture="environment"
                                    onChange={handleCameraCapture}
                                    className="hidden"
                                    id="camera-capture"
                                />
                                <Label
                                    htmlFor="camera-capture"
                                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors"
                                >
                                    <Camera className="w-8 h-8 mb-2 text-muted-foreground" />
                                    <span className="text-sm font-medium">Take a Photo</span>
                                    <span className="text-xs text-muted-foreground mt-1">
                                        Use your camera
                                    </span>
                                </Label>
                            </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3">
                            <p className="text-xs text-blue-600 dark:text-blue-400">
                                <strong>Tips:</strong> Stand against a plain background, ensure good lighting, 
                                and wear fitted clothing for accurate AI analysis.
                            </p>
                        </div>
                        
                        <div className="bg-muted/20 rounded-lg p-3 text-center">
                            <p className="text-xs text-muted-foreground">
                                You can also click the <strong>Skip</strong> button to proceed without a photo
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="relative rounded-lg overflow-hidden border bg-black/5 flex items-center justify-center min-h-[200px]">
                            <div className="relative w-full h-[300px]">
                                <Image
                                    src={previewUrl}
                                    alt="Body preview"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                />
                            </div>
                            <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                onClick={removeImage}
                                className="absolute top-2 right-2"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={removeImage}
                                className="flex-1"
                            >
                                Remove & Upload New
                            </Button>
                            {onSkip && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleSkip}
                                    className="flex-1 gap-2"
                                >
                                    <SkipForward className="w-4 h-4" />
                                    Skip Anyway
                                </Button>
                            )}
                        </div>
                        <p className="text-sm text-green-600 text-center">
                            ✓ Photo uploaded successfully
                        </p>
                    </div>
                )}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <h5 className="font-semibold text-sm mb-2">Why do we need this?</h5>
                <p className="text-sm text-muted-foreground">
                    Our AI can analyze your current body composition to provide more accurate 
                    personalized recommendations. Your photo is encrypted and only used for analysis.
                    <span className="block text-xs mt-1 text-muted-foreground/70">
                        This step is optional - you can skip it if you don't have a photo ready
                    </span>
                </p>
            </div>
        </div>
    )
}