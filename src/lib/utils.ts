export function getWikipediaMobile(url: string) {
    return (url !== undefined) ? url.replace('wikipedia','m.wikipedia'): '';
}

export function checkYear(year:string) {
    const currentYear = new Date().getFullYear();
    if (isNaN(+year) || +year< 1950 || +year > currentYear) {
        year = String(currentYear);
    }
    return year;
}

export function roundCheck(round: number) {
    if (round >= 100) {
        return 1;
    }
    return round;
}

export function checkCurrentYear(year:string) {
    const currentYear = new Date().getFullYear();
    if (isNaN(+year) || +year< 1950 || +year > currentYear) {
        year = String(currentYear);
    } else if (currentYear === +year) {
        return 'current';
    }
    return year;
}