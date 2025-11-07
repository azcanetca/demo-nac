import he from 'he';

export function toSlug(str) {
    // Azərbaycan hərflərini ingilis hərfləri ilə əvəz et
    const azToEnMap = {
        'ə': 'e',
        'Ə': 'e',
        'ç': 'c',
        'Ç': 'c',
        'ş': 's',
        'Ş': 's',
        'ğ': 'g',
        'Ğ': 'g',
        'ı': 'i',
        'I': 'i',
        'ö': 'o',
        'Ö': 'o',
        'ü': 'u',
        'Ü': 'u',
        'à': 'a',
        'á': 'a',
        'ä': 'a',
        'â': 'a',
        'ã': 'a',
        'å': 'a',
        'è': 'e',
        'é': 'e',
        'ë': 'e',
        'ê': 'e',
        'ì': 'i',
        'í': 'i',
        'ï': 'i',
        'î': 'i',
        'ò': 'o',
        'ó': 'o',
        'ö': 'o',
        'ô': 'o',
        'ù': 'u',
        'ú': 'u',
        'ü': 'u',
        'û': 'u',
        'ñ': 'n',
        'Ñ': 'n',
    };

    str = str.replace(/[^\u0000-\u007E]/g, ch => azToEnMap[ch] || ''); // Əvəz et

    return str
        .toLowerCase()
        .replace(/[()]/g, '') // mötərizələri sil
        .replace(/[^a-z0-9]+/g, '-') // hər şeyi "-" ilə əvəz et
        .replace(/^-+|-+$/g, ''); // baş və son "-" işarələrini sil
}



export const stripHTML = (html) => {
    if (!html) return ""
    const text1 = html
        .replace(/<[^>]*>/g, "") // 1. HTML taglarını sil (örn: <b>, <p>)
        .replace(/&nbsp;/g, " ") // 2. &nbsp; karakterlerini boşlukla değiştir
        .replace(/&quot;/g, "") // 3. &quot; karakterlerini tamamen sil (istenen bu)
        .replace(/&amp;/g, "&") // 4. &amp; karakterlerini & ile değiştir
        .replace(/&#39;/g, "'") // 5. &#39; karakterlerini ' ile değiştir
        .replace(/\s+/g, " ") // 6. Birden fazla boşluğu tek boşluğa indirge
        .trim();

    const text2 = he.decode(text1);

    return text2
};

export const generateKeywordsFromWords = (text) => {
    if (!text) return "";

    // 1. Mətni ilkin təmizləmədən keçiririk (HTML taglar və s.)
    let cleanText = stripHTML(text)

    let decodedText = he.decode(cleanText);

    decodedText = decodedText.replace(/".*?"/g, '');

    // 3. Qalan mətni boşluq və ya vergülə görə sözlərə bölürük.
    // filter(Boolean) boş elementləri silir.
    const words = decodedText.split(/[ ,]+/).filter(Boolean);

    // 4. Nəticəni aralarına vergül qoyaraq birləşdiririk.
    return words.join(',');
};

export const slugify = (text) => {
    if (!text) {
        return '';
    }

    return text
        .toString()
        .toLowerCase()
        .replace(/ə/g, 'e') // ə karakterini e ile değiştir
        .replace(/ç/g, 'c') // ç karakterini c ile değiştir
        .replace(/ş/g, 's') // ş karakterini s ile değiştir
        .replace(/ğ/g, 'g') // ğ karakterini g ile değiştir
        .replace(/ı/g, 'i') // ı karakterini i ile değiştir
        .replace(/ö/g, 'o') // ö karakterini o ile değiştir
        .replace(/ü/g, 'u') // ü karakterini u ile değiştir
        .replace(/\s+/g, '-') // Boşlukları - ile değiştir
        .replace(/[^\w\-]+/g, '') // Harf, sayı, alt çizgi ve tire dışındaki her şeyi kaldır
        .replace(/\-\-+/g, '-') // Birden fazla tireyi tek tire ile değiştir
        .replace(/^-+/, '') // Başlangıçtaki tireleri kaldır
        .replace(/-+$/, ''); // Sondaki tireleri kaldır
};