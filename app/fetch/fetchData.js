export const fetchData = async (endpoint) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/${endpoint}`, {
                cache: "no-store"
            }
        );
        if (!res.ok) throw new Error(`Fetch failed for endpoint: ${endpoint}`);
        return await res.json();
    } catch (error) {
        return null;
    }
}


// export const fetchTranslations = async (code) => {
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_API}/lang/${code}`, {
//                 cache: "no-store"
//             }
//         );
//         if (!res.ok) throw new Error("Translations fetch failed");
//         return await res.json();
//     } catch (error) {

//         return null;
//     }
// };