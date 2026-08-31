export const bpLabels = Array.from({ length: 90 }, (_, i) => String(i + 1));

export const Labels120 = (readings) =>
    readings.slice(-120).map((_, i) => String(i + 1));

export const A1CLabels = [
    '',
];