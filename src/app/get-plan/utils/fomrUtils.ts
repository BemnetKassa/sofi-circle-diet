// Helper functions for form processing
export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-ET', {
        style: 'currency',
        currency: 'ETB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount)
}

export const validateFileSize = (file: File, maxSizeMB: number = 5): boolean => {
    const maxSizeBytes = maxSizeMB * 1024 * 1024
    return file.size <= maxSizeBytes
}

export const getFileExtension = (filename: string): string => {
    return filename.split('.').pop()?.toLowerCase() || ''
}

export const isImageFile = (filename: string): boolean => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp']
    return imageExtensions.includes(getFileExtension(filename))
}

export const truncateText = (text: string, maxLength: number = 50): string => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
}

// Calculate BMI from height and weight
export const calculateBMI = (heightCm: number, weightKg: number): number => {
    const heightM = heightCm / 100
    return Number((weightKg / (heightM * heightM)).toFixed(1))
}

// Get BMI category
export const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight'
    if (bmi < 25) return 'Normal weight'
    if (bmi < 30) return 'Overweight'
    return 'Obese'
}